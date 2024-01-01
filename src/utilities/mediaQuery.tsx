import { useCallback, useEffect, useState } from "react";

export const useMediaQuery = (width: number) => {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((e: any) => {
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`);
    media.addEventListener("change", updateTarget);
    if (media.matches) {
      setTargetReached(true);
    }
    return () => media.removeEventListener("chage", updateTarget);
  }, []);

  return targetReached;
};
