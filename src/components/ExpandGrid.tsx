import React, { Children, ReactNode, useState, useEffect } from "react";

interface ExpandGridProps {
  children: ReactNode;
  rowAmount: number;
  initialRowsShown: number;
}

export const ExpandGrid: React.FC<ExpandGridProps> = ({
  children,
  rowAmount,
  initialRowsShown,
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
    setAmountOfElementsShown(amountOfElementsShown + rowAmount);
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

  return (
    <>
      <div className={`grid grid-cols-${rowAmount} gap-1.5`}>
        {childrenArray.slice(0, amountOfElementsShown).map((child) => child)}
      </div>
      <div className="w-full flex justify-center">
        {canShowMore && (
          <button
            className="text-sm text-text-secondary hover:text-text-primary hover:cursor-pointer"
            onClick={onShowMore}
          >
            view more
          </button>
        )}
      </div>
    </>
  );
};
