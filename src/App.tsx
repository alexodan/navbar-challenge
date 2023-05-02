import Navbar, { NavbarItem } from "./components/Navbar";
import {
  faClock,
  faCompass,
  faFutbol,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import "./app.scss";

function App() {
  const handleItemClicked = (title: string) => {
    console.log("Item clicked", title);
  };

  return (
    <>
      <Navbar label="Nav Menu">
        <NavbarItem icon={faClock} title="Time" onSelect={handleItemClicked} />
        <NavbarItem
          icon={faFutbol}
          title="Comments"
          onSelect={handleItemClicked}
        />
        <NavbarItem
          icon={faCompass}
          title="Compass"
          onSelect={handleItemClicked}
        />
        <NavbarItem icon={faUser} title="User" onSelect={handleItemClicked} />
      </Navbar>
    </>
  );
}

export default App;
