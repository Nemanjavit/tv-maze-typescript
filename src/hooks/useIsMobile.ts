import { useEffect, useState } from "react";

type UseIsMobileT = {
  isMobile: boolean;
  isTablet: boolean;
};
const useIsMobile = (): UseIsMobileT => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  const onWindowSizeChange = (size: number) => {
    if (size <= 767) {
      setIsMobile(true);
      setIsTablet(false);
    } else if (768 < size && size < 992) {
      setIsMobile(false);
      setIsTablet(true);
    } else {
      setIsMobile(false);
      setIsTablet(false);
    }
  };
  useEffect(() => {
    onWindowSizeChange(window.innerWidth);
  }, []);

  return { isMobile, isTablet };
};

export default useIsMobile;
