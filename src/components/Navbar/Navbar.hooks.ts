type UseDotHookProps = {
  items: number;
  activeId?: number;
};

export default function useDotAnimation({ items, activeId }: UseDotHookProps) {
  return {
    "--navbar-items": String(items),
    "--navbar-item-active": String(activeId ?? ""),
  } as React.CSSProperties;
}
