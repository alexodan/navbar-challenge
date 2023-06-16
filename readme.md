# Navbar challenge

## Site

Hosted using github pages [here](https://pages.github.com/)

## About

This repo holds a `Navbar` component, visually similar to the one in this dribbble:

https://dribbble.com/shots/5487895-Tab-bar-active-animation/attachments/10896293?mode=media

![Navbar gif](https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExYjZ5MHpudjVoeHVnNTdpaDFheWRvZml3bG43M2FxdG9zNHcweWpyZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/qmHC2pILnevhCXbwq5/giphy.gif)

## Setup

- Steps on how to install, run, and test. (don't forget to document the Percy key!)

## Features

- 🌑 / ☀️ Dark and Light theme
- 🧱 Reusable
- 📷 Automated visual tests with Cypress & Percy
- ♿️ Motion a11y approach
- 📑 Storybook docs

## Tooling

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
![cypress](https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e)
![percy](https://img.shields.io/badge/Percy-9E66BF.svg?style=for-the-badge&logo=Percy&logoColor=white)
![Storybook](https://img.shields.io/badge/Storybook-FF4785.svg?style=for-the-badge&logo=Storybook&logoColor=white)

## Usage:

A small code snippet of its used.

```jsx
import Navbar, { NavbarItem } from "./components/Navbar";
import { faClock, ... } from "@fortawesome/free-solid-svg-icons";
import "./app.scss";
import { useState } from "react";

const initialItems = [{
    icon: faClock,
    title: "Time",
  },
  ...
] as const;

type Tab = (typeof initialItems)[number]["title"];

function App() {
  const [activeTab, setActiveTab] = useState<Tab>(initialItems[0].title);

  const handleItemClicked = ({ title, id }: { title: Tab; id?: number }) => {
    console.log(`Item clicked title ${title} id ${id}`);
    setActiveTab(title);
  };

  return (
    <>
      <Navbar defaultActive={0}>
        {initialItems.map((item, i) => (
          <NavbarItem
            key={`${item.title}-${i}`}
            icon={item.icon}
            iconStyles={{ fontSize: "30px" }}
            title={item.title}
            onSelect={handleItemClicked}
          />
        ))}
      </Navbar>
      <div style={{ padding: "10px" }}>Active tab: {activeTab}</div>
    </>
  );
}

export default App;
```

## Things to improve

- Make it headless
