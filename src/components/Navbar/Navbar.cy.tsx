import Navbar, { NavbarItem } from "./Navbar";
import {
  faClock,
  faCompass,
  faFutbol,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

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

describe("<Navbar />", () => {
  it("renders navbar with 4 items, all non active", () => {
    cy.mount(
      <Navbar label="Navbar">
        {initialItems.map((item, i) => (
          <NavbarItem
            key={`${item.title}-${i}`}
            icon={item.icon}
            iconStyles={{ fontSize: "30px" }}
            title={item.title}
            onSelect={() => {}}
          />
        ))}
      </Navbar>
    );
    cy.get("[data-test-id*=icon]").each(($item, _, $list) => {
      expect($list.length).to.equal(4);
      expect($item.hasClass("active")).to.equal(false);
    });
  });

  it("should set first item as default active", () => {
    cy.mount(
      <Navbar label="Navbar" defaultActive={0}>
        {initialItems.map((item, i) => (
          <NavbarItem
            key={`${item.title}-${i}`}
            icon={item.icon}
            iconStyles={{ fontSize: "30px" }}
            title={item.title}
            onSelect={() => {}}
          />
        ))}
      </Navbar>
    );
    cy.get('[data-test-id="navbar-space-dot"]').should("exist");
    cy.get("[data-test-id='clock-icon']")
      .invoke("attr", "class")
      .should("contain", "active");
  });

  it("should fire an event and change active items on consecutive clicks", () => {
    const onClickSpy = cy.spy().as("onClickSpy");

    cy.mount(
      <Navbar label="Navbar">
        {initialItems.map((item, i) => (
          <NavbarItem
            key={`${item.title}-${i}`}
            icon={item.icon}
            iconStyles={{ fontSize: "30px" }}
            title={item.title}
            onSelect={onClickSpy}
          />
        ))}
      </Navbar>
    );

    cy.get(".spot .dot").should("not.exist");
    cy.get('[data-test-id="clock-icon"]').should("not.have.class", "active");

    cy.get("button").first().click();

    cy.get("@onClickSpy").should("have.been.called");
    cy.get("[data-test-id='navbar-space-dot']").should("exist");
    cy.get("[data-test-id='clock-icon']")
      .invoke("attr", "class")
      .should("contain", "active");

    cy.percySnapshot("first item active");

    cy.get("button").last().click();

    cy.get("[data-test-id='user-icon']")
      .invoke("attr", "class")
      .should("contain", "active");

    cy.percySnapshot("last item active");
  });
});
