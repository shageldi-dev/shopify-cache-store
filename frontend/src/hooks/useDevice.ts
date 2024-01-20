import { useMediaQuery } from "react-responsive";

type ScreenType = "mobile" | "tablet" | "desktop";

const useDevice = (): ScreenType => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  const isDesktop = useMediaQuery({ minWidth: 992 });

  if (isMobile) {
    return "mobile";
  } else if (isTablet) {
    return "tablet";
  } else if (isDesktop) {
    return "desktop";
  }

  // Default to desktop if none of the conditions match
  return "desktop";
};

export default useDevice;
