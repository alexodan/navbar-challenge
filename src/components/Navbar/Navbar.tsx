import React, {
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { IconDefinition } from "@fortawesome/free-regular-svg-icons";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "../../variables.module.scss";
import "./navbar.scss";
import { ThemeContext, ThemeProvider } from "../../theme";
import { isNavbarItem } from "./Navbar.utils";
import { isDev } from "../../utils";

const NavbarContext = React.createContext<{
  items?: React.RefObject<HTMLLIElement>[];
  selectedId?: number;
  setSelectedId?: (id?: number) => void;
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
  const { selectedId, setSelectedId, registerItem, unRegisterItem } =
    useContext(NavbarContext);
  const itemRef = useRef<HTMLLIElement>(null);

  const handleClick = () => {
    // If is already selected, then deselect
    if (id === selectedId) {
      setSelectedId?.(undefined);
    } else {
      setSelectedId?.(id);
      onSelect({ title, id });
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    switch (event.key) {
      case "Enter":
      case " ":
        // If is already selected, then deselect
        if (id === selectedId) {
          setSelectedId?.(undefined);
        } else {
          setSelectedId?.(id);
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
  }, [registerItem, unRegisterItem]);

  const isSelected = id === selectedId;

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
          isSelected
            ? style.primary
            : theme?.colorMode === "dark"
            ? style.lightBackground
            : style.darkBackground
        }
      />
      <div className={`navbar-item-title ${isSelected ? "selected" : ""}`}>
        <span className="navbar-item-title-text">{title}</span>
      </div>
    </li>
  );
}

type NavbarProps = {
  label: string;
  children: React.ReactNode;
};

export function Navbar(props: NavbarProps) {
  const [selectedId, setSelectedId] = useState<number>();
  const [items, setItems] = useState<React.RefObject<HTMLLIElement>[]>([]);
  const selectedIndicatorRef = useRef<HTMLDivElement>(null);

  // TODO: refactor this monstrosity (maybe ask Sandrina to give some tips)
  const animateWithCss = useCallback(
    (domMenuItem: HTMLLIElement, domSelectedIndicator: HTMLDivElement) => {
      // First time an item is selected, the icon appears
      if (!domSelectedIndicator.style.visibility) {
        domSelectedIndicator.style.top = `${domMenuItem.offsetHeight - 12}px`;
        domSelectedIndicator.style.left = `${
          // center positioning the icon
          domMenuItem.offsetLeft +
          domMenuItem.clientWidth / 2 -
          domSelectedIndicator.clientWidth / 2
        }px`;
        domSelectedIndicator.style.visibility = "visible";
      } else {
        // If an item is already selected, move the icon to next position
        const currentPosition = domSelectedIndicator.offsetLeft;
        const nextLeft = domMenuItem.offsetLeft;
        const movement = nextLeft - currentPosition;
        domSelectedIndicator.style.setProperty(
          "--translate-x-value",
          `${
            movement +
            domMenuItem.clientWidth / 2 -
            domSelectedIndicator.clientWidth / 2
          }px`
        );
        domSelectedIndicator.classList.add("animate");
      }
    },
    []
  );

  useLayoutEffect(() => {
    const domMenuItem = items[selectedId!]?.current;
    const domSelectedIndicator = selectedIndicatorRef.current;
    if (domMenuItem && domSelectedIndicator) {
      animateWithCss(domMenuItem, domSelectedIndicator);
    }
  }, [items, selectedId, animateWithCss]);

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
      if (prevItems.includes(item)) {
        return prevItems.filter((i) => i !== item);
      }
      return prevItems;
    });
  }, []);

  return (
    <ThemeProvider>
      <NavbarContext.Provider
        value={{
          items,
          selectedId,
          setSelectedId,
          registerItem,
          unRegisterItem,
        }}
      >
        <nav aria-label={props.label} className="navbar">
          <ul role="menubar" className="navbar-list">
            {React.Children.map(props.children, (child, index) => {
              if (isDev() && !isNavbarItem(child)) {
                throw Error("Only NavbarItem allowed as child of Navbar");
              }
              return React.cloneElement(child as React.ReactElement, {
                id: index,
              });
            })}
          </ul>
          {selectedId !== undefined && (
            <div
              ref={selectedIndicatorRef}
              className="navbar-item-selected-icon hidden"
            >
              <FontAwesomeIcon size="xs" icon={faCircle} color="#4EB3DB" />
            </div>
          )}
        </nav>
      </NavbarContext.Provider>
    </ThemeProvider>
  );
}

export default Navbar;
