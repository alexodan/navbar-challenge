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
      <Navbar>
        <NavbarItem icon={faClock} title="Time" onClick={handleItemClicked} />
        <NavbarItem
          icon={faFutbol}
          title="Comments"
          onClick={handleItemClicked}
        />
        <NavbarItem
          icon={faCompass}
          title="Compass"
          onClick={handleItemClicked}
        />
        <NavbarItem icon={faUser} title="User" onClick={handleItemClicked} />
      </Navbar>
    </>
  );
}

export default App;
