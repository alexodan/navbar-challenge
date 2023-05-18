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
import useDotAnimation from "./hooks";
import style from "../../variables.module.scss";
import "./navbar.scss";

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
};

export function NavbarItem({ icon, title, onSelect, id }: NavbarItemProps) {
  const theme = useContext(ThemeContext);
  const { activeId, setActiveId, registerItem, unRegisterItem } =
    useContext(NavbarContext);
  const itemRef = useRef<HTMLLIElement>(null);

  const handleClick = () => {
    // If is already active, then deselect
    if (id === activeId) {
      setActiveId?.(undefined);
    } else {
      setActiveId?.(id);
      onSelect({ title, id });
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    switch (event.key) {
      case "Enter":
      case " ":
        // If is already active, then deselect
        if (id === activeId) {
          setActiveId?.(undefined);
        } else {
          setActiveId?.(id);
          onSelect({ title, id });
        }
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    registerItem?.(itemRef);
    return () => unRegisterItem?.(itemRef);
  }, [setActiveId, id, registerItem, unRegisterItem]);

  const isActive = id === activeId;

  return (
    <li
      tabIndex={0}
      className="navbar-item"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      ref={itemRef}
    >
      <FontAwesomeIcon
        className="navbar-item-icon"
        icon={icon}
        size="2x" // this should be a param
        color={
          isActive
            ? style.primary
            : theme?.colorMode === "dark"
            ? style.lightBackground
            : style.darkBackground
        }
      />
      <div className={`navbar-item-title ${isActive ? "active" : ""}`}>
        <span className="navbar-item-title-text">{title}</span>
      </div>
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

  const { listRef, spaceRef } = useDotAnimation({
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
      // Note: i was between putting this logic here or handle it in useDotAnimation
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
        <nav aria-label={label} className="navbar">
          <ul ref={listRef} role="menubar" className="navbar-list">
            {React.Children.map(children, (child, index) => {
              if (isDev() && !isNavbarItem(child)) {
                throw Error("Only NavbarItem allowed as child of Navbar");
              }
              return React.cloneElement(child as React.ReactElement, {
                id: index,
              });
            })}
          </ul>
          <div className="space" ref={spaceRef}>
            <div className="spot">
              <div className="dot"></div>
            </div>
          </div>
        </nav>
      </NavbarContext.Provider>
    </ThemeProvider>
  );
}

export default Navbar;
