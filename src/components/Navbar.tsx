import React, { useContext, useState } from "react";
import { IconDefinition } from "@fortawesome/free-regular-svg-icons";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "../variables.module.scss";
import "./navbar.scss";

/**
 * - Animations
 *   - Toggle between 2 icons.
 * - Accessibility
 *   - Show me what you know!
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
  onClick: (title: string) => void;
};

export function NavbarItem({ icon, title, onClick }: NavbarItemProps) {
  const { selectedId, setSelected } = useContext(NavbarContext);

  const handleClick = () => {
    setSelected?.(title);
    onClick(title);
  };

  const isSelected = title === selectedId;

  return (
    <div className="navbar-item" onClick={handleClick}>
      <FontAwesomeIcon
        className="navbar-item-icon"
        icon={icon}
        size="2x"
        color={isSelected ? style.darkPrimary : style.darkPrimary}
      />
      <div className={`navbar-item-title ${isSelected ? "selected" : ""}`}>
        <FontAwesomeIcon
          icon={faCircle}
          className="navbar-item-selected-icon"
          color="#4EB3DB"
        />
        <span className="navbar-item-title-text">{title}</span>
      </div>
    </div>
  );
}

type NavbarProps = {
  children?: React.ReactNode;
};

export function Navbar(props: NavbarProps) {
  const [selectedId, setSelectedId] = useState<string>();

  return (
    <NavbarContext.Provider
      value={{
        selectedId,
        setSelected: setSelectedId,
      }}
    >
      <div role="navigation" className="navbar">
        {props.children}
      </div>
    </NavbarContext.Provider>
  );
}

export default Navbar;
