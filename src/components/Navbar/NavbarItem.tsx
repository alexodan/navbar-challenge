import { useContext, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-regular-svg-icons";
import classNames from "classnames/bind";
import styles from "./navbar.module.scss";
import { NavbarContext } from "./Navbar";

const cx = classNames.bind(styles);

type NavbarItemCommonProps<T extends string> = {
  icon: IconDefinition;
  title: T;
  onSelect: ({ title, id }: { title: T; id: number }) => void;
  id?: number;
  iconStyles?: React.CSSProperties;
};

export type NavbarItemProps<T extends string> =
  | ({
      as: "a";
      href: string;
    } & NavbarItemCommonProps<T>)
  | ({
      as: "button";
      href?: never;
    } & NavbarItemCommonProps<T>);

export default function NavbarItem<T extends string>({
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
    if (id !== undefined && id !== activeId) {
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
            className={cx("navbarItemIcon", { isActive })}
            style={iconStyles}
            icon={icon}
          />
          <div className={cx("navbarItemIconOverlay", { isActive })} />
        </span>
        <div className={cx("navbarItemTitle", { isActive })}>
          <span className={styles.navbarItemTitleText}>{title}</span>
        </div>
      </Comp>
    </li>
  );
}

// Note: check eslint rule "react/require-default-props"
NavbarItem.defaultProps = {
  as: "button",
  iconStyles: {
    fontSize: "30px",
  },
};
