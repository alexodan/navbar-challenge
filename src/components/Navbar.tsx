import React, { ReactNode, useContext, useState } from "react";
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
  selectedId?: string;
  setSelected?: (id: string) => void;
}>({});

type NavbarItemProps = {
  icon: IconDefinition;
  title: string;
  onSelect: ({ title, id }: { title: string; id?: number }) => void;
  id?: number; // TODO: find out how not to expose this prop
};

export function NavbarItem({ icon, title, onSelect, id }: NavbarItemProps) {
  const theme = useContext(ThemeContext);
  const { selectedId, setSelected } = useContext(NavbarContext);

  const handleClick = () => {
    // If is already selected, then deselect
    if (title === selectedId) {
      setSelected?.("");
    } else {
      setSelected?.(title);
      onSelect({ title, id });
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
          onSelect({ title, id });
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
            <FontAwesomeIcon
              icon={faCircle}
              className="navbar-item-selected-icon"
              color="#4EB3DB"
            />
          </ul>
        </nav>
      </NavbarContext.Provider>
    </ThemeProvider>
  );
}

export default Navbar;
