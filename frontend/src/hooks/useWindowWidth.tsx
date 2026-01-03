// Referenced from: https://medium.com/@sifatullahsu/how-to-track-window-width-in-react-with-a-custom-hook-7bcee7cbcd4b

import { useEffect, useState } from "react";

const useWindowWidth = (): number => {
  const [width, setWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const onScreenResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", onScreenResize);
    return () => window.removeEventListener("resize", onScreenResize);
  }, []);

  return width;
};

export default useWindowWidth;
