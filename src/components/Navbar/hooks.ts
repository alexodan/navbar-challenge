type UseDotHookProps = {
  items: React.RefObject<HTMLLIElement>[];
  selectedId?: number;
  listRef: React.RefObject<HTMLUListElement>;
  selectedIndicatorRef: React.RefObject<HTMLDivElement>;
};

const pixelStringToNumber = (str: string): number =>
  Number(str.replace("px", ""));

export default function useDotAnimation({
  items,
  selectedId,
  listRef,
  selectedIndicatorRef,
}: UseDotHookProps): React.CSSProperties {
  if (!listRef.current || selectedId === undefined) {
    return {};
  }
  const itemWidth = listRef.current.clientWidth / items.length;
  const dotStyles = {
    visibility: selectedId !== undefined ? "visible" : "hidden",
    top: `65px`,
  } as React.CSSProperties;

  // position of first item + offset - width of the icon itself
  const translation = itemWidth / 2 + itemWidth * selectedId - 6 * selectedId;
  if (!selectedIndicatorRef.current) {
    return {
      ...dotStyles,
      left: selectedId !== undefined ? `${translation}px` : "0px",
    };
  } else {
    const prevLeft = pixelStringToNumber(
      selectedIndicatorRef.current.style.left
    );
    return {
      ...dotStyles,
      left: `${prevLeft}px`,
      transform: `translateX(${translation - prevLeft}px)`,
    };
  }
}
