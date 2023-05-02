import React, { useContext, useState } from "react";
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
  // TODO: (HACK) I made the id to be the title the user passes to the component
  // Basically because I couldn't find a way for each NavbarItem to 'know' their id
  // I guess I could make the user pass an 'id' prop as well that will need to be unique
  id?: string;
  selectedId?: string;
  setSelected?: (id: string) => void;
}>({});

type NavbarItemProps = {
  icon: IconDefinition;
  title: string;
  onSelect: (title: string) => void;
};

export function NavbarItem({ icon, title, onSelect }: NavbarItemProps) {
  const theme = useContext(ThemeContext);
  const { selectedId, setSelected } = useContext(NavbarContext);

  const handleClick = () => {
    // If is already selected, then deselect
    if (title === selectedId) {
      setSelected?.("");
    } else {
      setSelected?.(title);
      onSelect(title);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    switch (event.key) {
      case "Enter":
      case " ":
        // If is already selected, then deselect
        if (title === selectedId) {
          setSelected?.("");
        } else {
          setSelected?.(title);
          onSelect(title);
        }
        break;
      default:
        break;
    }
  };

  const isSelected = title === selectedId;

  return (
    <li
      tabIndex={0}
      className="navbar-item"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
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
        <FontAwesomeIcon
          icon={faCircle}
          className="navbar-item-selected-icon"
          color="#4EB3DB"
        />
        <span className="navbar-item-title-text">{title}</span>
      </div>
    </li>
  );
}

type NavbarProps = {
  label: string;
  children?: React.ReactNode;
};

export function Navbar(props: NavbarProps) {
  const [selectedId, setSelectedId] = useState<string>();

  return (
    <ThemeProvider>
      <NavbarContext.Provider
        value={{
          selectedId,
          setSelected: setSelectedId,
        }}
      >
        <nav aria-label={props.label}>
          <ul role="menubar" className="navbar">
            {props.children}
          </ul>
        </nav>
      </NavbarContext.Provider>
    </ThemeProvider>
  );
}

export default Navbar;
