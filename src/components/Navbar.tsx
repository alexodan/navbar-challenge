import React, {
  ReactNode,
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
import style from "../variables.module.scss";
import "./navbar.scss";
import { ThemeContext, ThemeProvider } from "../theme";

/**
 * - Bonus:
 *   - Documentation -  How would you document this component? (eg Storybook)
 *   - Tests - You can create Unit Tests or Visual testing (eg using [Percy in Storybook](https://docs.percy.io/docs/storybook))
 *   - Consistency - how would you “enforce” the correct usage of icons and colors? (eg Theme)
 *   - Customization: If a Dark/Light theme existed in the app, how would you integrate it with the component?
 */
const NavbarContext = React.createContext<{
  selectedId?: number;
  setSelectedId?: (id?: number) => void;
  registerItem?: (item: React.MutableRefObject<any>) => void;
}>({});

type NavbarItemProps = {
  icon: IconDefinition;
  title: string;
  onSelect: ({ title, id }: { title: string; id?: number }) => void;
  id?: number; // TODO: find out how not to expose this prop
};

export function NavbarItem({ icon, title, onSelect, id }: NavbarItemProps) {
  const theme = useContext(ThemeContext);
  const { selectedId, setSelectedId, registerItem } = useContext(NavbarContext);
  const itemRef = useRef(null);

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

  console.log("Just checking i'm not infinite looping over here...");

  useEffect(() => {
    registerItem?.(itemRef);
  }, [registerItem]);

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
        // TODO: this should be a param
        size="2x"
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
  const [items, setItems] = useState<React.MutableRefObject<HTMLLIElement>[]>(
    []
  );
  const selectedIndicatorRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const domMenuItem = items[selectedId!]?.current;
    const domDotIcon = selectedIndicatorRef.current;
    if (domMenuItem && domDotIcon) {
      domDotIcon.style.left = `${domMenuItem.offsetLeft}px`;
      domDotIcon.style.top = `${domMenuItem.offsetHeight}px`;
    }
  }, [items, selectedId]);

  const registerItem = useCallback((item: React.MutableRefObject<any>) => {
    console.log("Registering...");
    setItems((prevItems) => [...prevItems, item]);
  }, []);

  return (
    <ThemeProvider>
      <NavbarContext.Provider
        value={{
          selectedId,
          setSelectedId,
          registerItem,
        }}
      >
        <nav aria-label={props.label}>
          <ul role="menubar" className="navbar">
            {React.Children.map(props.children, (child: ReactNode, index) => {
              if (
                !child ||
                !React.isValidElement(child) ||
                typeof child === "string" ||
                typeof child.type === "string" ||
                child.type.name !== "NavbarItem"
              ) {
                throw Error(
                  "Only NavbarItem is allowed as child component of Navbar"
                );
              }
              return React.cloneElement(child as React.ReactElement, {
                id: index,
              });
            })}
            <div
              ref={selectedIndicatorRef}
              className="navbar-item-selected-icon"
            >
              <FontAwesomeIcon icon={faCircle} color="#4EB3DB" />
            </div>
          </ul>
        </nav>
      </NavbarContext.Provider>
    </ThemeProvider>
  );
}

export default Navbar;
