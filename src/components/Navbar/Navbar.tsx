import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { IconDefinition } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ThemeProvider } from "../../theme";
import { isNavbarItem } from "./Navbar.utils";
import { isDev } from "../../utils";
import useDotAnimation from "./Navbar.hooks";
import styles from "./navbar.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const NavbarContext = React.createContext<{
  items?: React.RefObject<HTMLLIElement>[];
  activeId?: number;
  setActiveId?: (id?: number) => void;
  registerItem?: (item: React.RefObject<HTMLLIElement>) => void;
  unRegisterItem?: (item: React.RefObject<HTMLLIElement>) => void;
}>({});

type NavbarItemProps<T extends string> =
  | {
      as: "a";
      href: string;
      icon: IconDefinition;
      title: T;
      onSelect: ({ title, id }: { title: T; id?: number }) => void;
      id?: number;
      iconStyles?: React.CSSProperties;
    }
  | {
      as: "button";
      icon: IconDefinition;
      title: T;
      onSelect: ({ title, id }: { title: T; id?: number }) => void;
      id?: number;
      iconStyles?: React.CSSProperties;
    };

export function NavbarItem<T extends string>({
  as: Comp,
  icon,
  title,
  onSelect,
  id,
  iconStyles,
  ...props
}: NavbarItemProps<T>) {
  const { activeId, setActiveId, registerItem, unRegisterItem } =
    useContext(NavbarContext);
  const itemRef = useRef<HTMLLIElement>(null);

  const handleClick = () => {
    if (id !== activeId) {
      setActiveId?.(id);
      onSelect({ title, id });
    }
  };

  useEffect(() => {
    registerItem?.(itemRef);
    return () => unRegisterItem?.(itemRef);
  }, [registerItem, unRegisterItem]);

  const isActive = id === activeId;

  const additionalProps =
    Comp === "a" && "href" in props ? { href: props.href } : {};

  return (
    <li className={styles.navbarItem} ref={itemRef}>
      <Comp
        {...additionalProps}
        onClick={handleClick}
        className={styles.navbarItemBtn}
      >
        <span className={styles.navbarItemIconContainer}>
          <FontAwesomeIcon
            data-test-id={`${icon.iconName}-icon`}
            className={cx("navbarItemIcon", { active: isActive })}
            style={iconStyles}
            icon={icon}
          />
          <div className={cx("navbarItemIconOverlay", { active: isActive })} />
        </span>
        <div className={cx("navbarItemTitle", { active: isActive })}>
          <span className={styles.navbarItemTitleText}>{title}</span>
        </div>
      </Comp>
    </li>
  );
}

// Note: check eslint rule "react/require-default-props"
NavbarItem.defaultProps = { as: "button" };

type NavbarProps = {
  label: string;
  children: React.ReactNode;
  defaultActive?: number;
};

export function Navbar({ label, children, defaultActive }: NavbarProps) {
  const [activeId, setActiveId] = useState<number>();
  const [items, setItems] = useState<React.RefObject<HTMLLIElement>[]>([]);

  const style = useDotAnimation({
    items: items.length,
    activeId: activeId,
  });

  const registerItem = useCallback((item: React.RefObject<HTMLLIElement>) => {
    setItems((prevItems) => {
      if (!prevItems.includes(item)) {
        return [...prevItems, item];
      }
      return prevItems;
    });
  }, []);

  const unRegisterItem = useCallback((item: React.RefObject<HTMLLIElement>) => {
    setItems((prevItems) => {
      setActiveId((prevId) => (prevItems.length - 1 === prevId ? 0 : prevId));
      return prevItems.filter((i) => i !== item);
    });
  }, []);

  useEffect(() => {
    if (defaultActive !== undefined && activeId === undefined) {
      setActiveId(defaultActive);
    }
  }, [activeId, items, defaultActive]);

  return (
    <ThemeProvider>
      <NavbarContext.Provider
        value={{
          items,
          activeId,
          setActiveId,
          registerItem,
          unRegisterItem,
        }}
      >
        <nav aria-label={label} className={styles.navbar}>
          <ul role="menubar" className={styles.navbarList} style={style}>
            {React.Children.map(children, (child, index) => {
              if (isDev() && !isNavbarItem(child)) {
                throw Error("Only NavbarItem allowed as child of Navbar");
              }
              return React.cloneElement(child as React.ReactElement, {
                id: index,
              });
            })}
          </ul>
          <div className={styles.navbarSpace} style={style}>
            <div className={styles.navbarSpaceSpot}>
              {activeId !== undefined && (
                <div
                  data-test-id="navbar-space-dot"
                  className={styles.navbarSpaceDot}
                ></div>
              )}
            </div>
          </div>
        </nav>
      </NavbarContext.Provider>
    </ThemeProvider>
  );
}

export default Navbar;
