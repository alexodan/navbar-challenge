import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { IconDefinition } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ThemeContext, ThemeProvider } from "../../theme";
import { isNavbarItem } from "./Navbar.utils";
import { isDev } from "../../utils";
import useDotAnimation from "./Navbar.hooks";
import style from "../../variables.module.scss";
import styles from "./navbar.module.scss";

const NavbarContext = React.createContext<{
  items?: React.RefObject<HTMLLIElement>[];
  activeId?: number;
  setActiveId?: (id?: number) => void;
  registerItem?: (item: React.RefObject<HTMLLIElement>) => void;
  unRegisterItem?: (item: React.RefObject<HTMLLIElement>) => void;
}>({});

type NavbarItemProps = {
  icon: IconDefinition;
  title: string;
  onSelect: ({ title, id }: { title: string; id?: number }) => void;
  id?: number; // TODO: find out how not to expose this prop
  iconStyles?: React.CSSProperties;
};

export function NavbarItem({
  icon,
  title,
  onSelect,
  id,
  iconStyles,
}: NavbarItemProps) {
  const theme = useContext(ThemeContext);
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
  }, [setActiveId, id, registerItem, unRegisterItem]);

  const isActive = id === activeId;

  return (
    <li className={styles["navbar-item"]} ref={itemRef}>
      <button onClick={handleClick} className={styles["navbar-item-btn"]}>
        <span className={styles["navbar-item-icon-container"]}>
          <FontAwesomeIcon
            data-testid={`${icon.iconName}-icon`}
            className={`${styles["navbar-item-icon"]} ${
              isActive ? styles["active"] : ""
            }`}
            style={iconStyles}
            icon={icon}
            color={
              isActive
                ? iconStyles?.color ?? style.primary
                : theme?.colorMode === "dark"
                ? style.lightBackground
                : style.darkBackground
            }
          />
          <div
            className={`${styles["navbar-item-icon-overlay"]} ${
              isActive ? styles["active"] : ""
            }`}
          />
        </span>
        <div
          className={`${styles["navbar-item-title"]} ${
            isActive ? styles["active"] : ""
          }`}
        >
          <span className={styles["navbar-item-title-text"]}>{title}</span>
        </div>
      </button>
    </li>
  );
}

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
        <nav aria-label={label} className={styles["navbar"]}>
          <ul role="menubar" className={styles["navbar-list"]} style={style}>
            {React.Children.map(children, (child, index) => {
              if (isDev() && !isNavbarItem(child)) {
                throw Error("Only NavbarItem allowed as child of Navbar");
              }
              return React.cloneElement(child as React.ReactElement, {
                id: index,
              });
            })}
          </ul>
          <div className={styles["navbar-space"]} style={style}>
            <div className={styles["navbar-space-spot"]}>
              {activeId !== undefined && (
                <div
                  data-testid="navbar-space-dot"
                  className={styles["navbar-space-dot"]}
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
