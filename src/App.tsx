import Navbar, { NavbarItem } from "./components/Navbar";
import {
  faClock,
  faCompass,
  faFutbol,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import "./app.scss";
import { useState } from "react";

const initialItems = [
  {
    icon: faClock,
    title: "Time",
  },
  {
    icon: faFutbol,
    title: "Comments",
  },
  {
    icon: faCompass,
    title: "Compass",
  },
  {
    icon: faUser,
    title: "User",
  },
];

function App() {
  const [items, setItems] = useState(initialItems);

  const handleItemClicked = ({ title, id }: { title: string; id?: number }) => {
    console.log(`Item clicked title ${title} id ${id}`);
  };

  return (
    <>
      <button
        onClick={() =>
          setItems((prev) => [
            ...prev,
            {
              icon: faUser,
              title: "User",
            },
          ])
        }
      >
        Add item from nav
      </button>
      <button
        onClick={() => setItems((prev) => prev.slice(0, prev.length - 1))}
      >
        Remove item from nav
      </button>
      <Navbar label="Nav Menu">
        {items.map((item, i) => (
          <NavbarItem
            defaultSelected={i === 20}
            key={`${item.title}-${i}`}
            icon={item.icon}
            title={item.title}
            onSelect={handleItemClicked}
          />
        ))}
      </Navbar>
    </>
  );
}

export default App;
// Things I changed since last time:
// - Moved things to /components/Navbar 😵‍💫
// - Fixed animation (deregisterItem on NavbarItem)
// - Added a `defaultSelected` prop to NavbarItem
// - isNavbarItem check function had a bug, fixed it
// - Added flag isDev environment!
// - extracted logic of animation to `useDotAnimation`
// TODO:
// - question: Tell me, why do we need this tabIndex? What's the downside?
//   Hint: It would be better using li > button, or, li > a as these are accessible by default.
