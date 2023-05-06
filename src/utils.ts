import React from "react";

export function isNavbarItem(child: React.ReactNode): boolean {
  return (
    !child ||
    !React.isValidElement(child) ||
    typeof child === "string" ||
    typeof child.type === "string" ||
    child.type.name !== "NavbarItem"
  );
}
