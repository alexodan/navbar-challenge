import { useRef } from "react";

type UseDotHookProps = {
  items: number;
  activeId?: number;
};

export default function useDotAnimation({ items, activeId }: UseDotHookProps) {
  const spaceRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  listRef.current?.style.setProperty("--navbar-items", "" + items);
  spaceRef.current?.style.setProperty("--navbar-items", "" + items);
  activeId !== undefined &&
    spaceRef.current?.style.setProperty("--navbar-item-active", "" + activeId);

  return { spaceRef, listRef };
}
