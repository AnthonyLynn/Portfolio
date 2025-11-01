import React, { Children, ReactNode, useState, useEffect } from "react";

interface ExpandGridProps {
  children: ReactNode;
  rowAmount: number;
  initialRowsShown: number;
  viewMoreAmount?: number;
}

export const ExpandGrid: React.FC<ExpandGridProps> = ({
  children,
  rowAmount,
  initialRowsShown,
  viewMoreAmount,
}) => {
  const childrenArray = Children.toArray(children);

  const [amountOfElementsShown, setAmountOfElementsShown] = useState(
    rowAmount * initialRowsShown
  );

  const [canShowMore, setCanShowMore] = useState(
    amountOfElementsShown < childrenArray.length
  );

  function updateShowMoreButton() {
    setCanShowMore(amountOfElementsShown < childrenArray.length);
  }

  function onShowMore() {
    setAmountOfElementsShown(
      amountOfElementsShown + rowAmount * (viewMoreAmount || 1)
    );
    updateShowMoreButton();
  }

  useEffect(() => {
    updateShowMoreButton();
  }, [amountOfElementsShown]);

  useEffect(() => {
    if (amountOfElementsShown % rowAmount !== 0) {
      setAmountOfElementsShown(
        amountOfElementsShown +
          (rowAmount - (amountOfElementsShown % rowAmount))
      );
    }
  }, [rowAmount]);

  const gridCols: { [key: number]: string } = {
    1: "grid-cols-1",
    3: "grid-cols-3",
  };

  return (
    <>
      <div className={`grid ${gridCols[rowAmount]} gap-1.5 auto-rows-fr`}>
        {childrenArray.slice(0, amountOfElementsShown).map((child) => child)}
      </div>
      {canShowMore && (
        <div className="w-full flex justify-center">
          <button
            className="text-sm text-text-secondary hover:text-text-primary hover:cursor-pointer"
            onClick={onShowMore}
          >
            view more
          </button>
        </div>
      )}
    </>
  );
};
