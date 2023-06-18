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

function App() {
  const [activeTab, setActiveTab] = useState<Tab>(initialItems[0].title);

  const handleItemClicked = ({ title, id }: { title: Tab; id: number }) => {
    console.log(`Item clicked title ${title} id ${id}`);
    setActiveTab(title);
  };

  return (
    <div>
      <Navbar>
        {initialItems.map((item, i) => (
          <NavbarItem
            key={`${item.title}-${i}`}
            icon={item.icon}
            title={item.title}
            onSelect={handleItemClicked}
          />
        ))}
      </Navbar>
      <div style={{ padding: "10px" }}>{tabContentLookup[activeTab]}</div>
    </div>
  );
}

export default App;
