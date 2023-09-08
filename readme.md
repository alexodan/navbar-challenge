# Navbar challenge

## Site

Checkout the [demo page](https://alexodan.github.io/navbar-challenge/).

## About

This repo holds a `Navbar` component, visually similar to the one in this dribbble:

https://dribbble.com/shots/5487895-Tab-bar-active-animation/attachments/10896293?mode=media

![Navbar gif](https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExYjZ5MHpudjVoeHVnNTdpaDFheWRvZml3bG43M2FxdG9zNHcweWpyZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/qmHC2pILnevhCXbwq5/giphy.gif)

## Setup

In order to run it local, follow these steps:

- `npm install`
- `npm run dev`
- To test using cypress `npm run cypress:open` for interactive mode or `npm run cypress:run:component` for headless

To setup Percy this guide https://docs.percy.io/docs/cypress#setup

### Variables for style override

You can override the default styles providing variables with your own values:

```css
:root {
  --navbar-width: 480px;
  --navbar-dot-size: 12px;

  --light-background: #fff;
  --light-text: #000;

  --dark-background: #000;
  --dark-text: #fff;

  --primary: #4c21ea;
}
```

## Features

- 🌑 / ☀️ Dark and Light theme
- 🧱 Reusable
- 📷 Automated visual tests with Cypress & Percy
- ♿️ Reduced motion for A11Y [(see more)](https://www.tatianamac.com/posts/prefers-reduced-motion)
- 📑 Storybook docs

## Tooling

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
![cypress](https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e)
![percy](https://img.shields.io/badge/Percy-9E66BF.svg?style=for-the-badge&logo=Percy&logoColor=white)
![Storybook](https://img.shields.io/badge/Storybook-FF4785.svg?style=for-the-badge&logo=Storybook&logoColor=white)

## Usage:

A small code snippet of its usage:

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

  const handleItemClicked = ({ title, id }: { title: Tab; id: number }) => {
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

## Learnings

- Probably the major one is the usage of Context to communicate between parent-child components that depend on each other, and you don't want to expose some functionality to the user. I tried to peek into the code of Reach UI to get an idea, but it is very complex. I got just the basics and implemented it for Navbar and NavbarItem.

- There are CSS props that are not animatable, like display. I was, at first, trying to use it to animate the fading of the NavbarItem text and the selected icon, then switched it to use opacity.

- Testing with Cypress and CSS modules can get a bit tricky, the classes are dynamic so you can't do things like cy.get('[data-testid="clock-icon"]').should("have.class", "active");, because you get _active_a123as or something like that instead. You have to choose between dataset or custom attributes and get creative, How to deal with dynamic class names à la CSS Modules or Styled Components? cypress-io/cypress#1212. It is possible also to strip the data-test-id attributes with a babel plugin https://github.com/coderas/babel-plugin-jsx-remove-data-test-id.

- A bunch of learning of accessibility, what a huge topic. Animations can be disabled from the OS, since people can feel dizzy by looking at them, among other things, so there is a media query that can be used to set the animations only if the user allow them @media (prefers-reduced-motion: reduce), more info https://www.tatianamac.com/posts/prefers-reduced-motion.

- Naming conventions on CSS: https://github.com/suitcss/suit/blob/master/doc/naming-conventions.md#is-stateOfComponent.

- Adding Percy as part of visual testing, which relies on snapshots captured and uploaded to the cloud.
