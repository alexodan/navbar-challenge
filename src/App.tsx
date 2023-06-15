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
] as const;

type Tab = (typeof initialItems)[number]["title"];

const tabContentLookup = {
  Time: "Time section content",
  Comments: "Comments section content",
  Compass: "Compass section content",
  User: "User section content",
} as Record<Tab, string>;

// bonus: make it headless

function App() {
  const [items, setItems] = useState([...initialItems]);
  const [activeTab, setActiveTab] = useState<Tab>(initialItems[0].title);

  const handleItemClicked = ({ title, id }: { title: Tab; id?: number }) => {
    console.log(`Item clicked title ${title} id ${id}`);
    setActiveTab(title);
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
            // as="a"
            // href={`#${item.title}`}
            key={`${item.title}-${i}`}
            icon={item.icon}
            iconStyles={{ fontSize: "30px" }}
            title={item.title}
            onSelect={handleItemClicked}
          />
        ))}
      </Navbar>
      <div style={{ padding: "10px" }}>{tabContentLookup[activeTab]}</div>
    </>
  );
}

export default App;
