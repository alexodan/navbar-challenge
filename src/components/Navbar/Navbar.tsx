import React, { useCallback, useEffect, useState } from "react";
import { ThemeProvider } from "../../theme";
import { isNavbarItem } from "./Navbar.utils";
import useDotAnimation from "./Navbar.hooks";
import styles from "./navbar.module.scss";
import { isDev } from "../../utils";

export const NavbarContext = React.createContext<{
  items?: React.RefObject<HTMLLIElement>[];
  activeId?: number;
  setActiveId?: (id?: number) => void;
  registerItem?: (item: React.RefObject<HTMLLIElement>) => void;
  unRegisterItem?: (item: React.RefObject<HTMLLIElement>) => void;
}>({});

export type NavbarProps = {
  label: string;
  children: React.ReactNode;
  defaultActive?: number;
  style?: React.CSSProperties;
};

export default function Navbar({
  label,
  children,
  defaultActive,
  style: userStyles,
}: NavbarProps) {
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
        <nav aria-label={label} className={styles.navbar} style={userStyles}>
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

Navbar.defaultProps = {
  label: "Navbar",
};
