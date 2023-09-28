import type { Meta, StoryObj } from "@storybook/react";
import Navbar from ".";
import NavbarItem from "./NavbarItem";
import {
  faClock,
  faCompass,
  faFutbol,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const items = [
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

const meta: Meta<typeof Navbar> = {
  title: "Navbar",
  component: Navbar,
  args: {
    children: items.map((item, i) => (
      <NavbarItem
        key={`${item.title}-${i}`}
        icon={item.icon}
        title={item.title}
        onSelect={({ title, id }: { title: string; id?: number }) => {
          console.log(`Item clicked title ${title} id ${id}`);
        }}
      />
    )),
  },
  argTypes: {
    defaultActive: {
      defaultValue: 3,
      options: [...Array(items.length).keys()],
      control: {
        type: "select",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Navbar>;

export const Primary: Story = {
  render: ({ label, defaultActive, children, ...args }) => (
    <Navbar label={label} defaultActive={defaultActive} {...args}>
      {children}
    </Navbar>
  ),
};
