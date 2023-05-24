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
      <Navbar label="Nav Menu" defaultActive={0}>
        {items.map((item, i) => (
          <NavbarItem
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
// TODO:
// - Bonus
//   Consistency - how would you “enforce” the correct usage of icons and colors? (eg Theme)
