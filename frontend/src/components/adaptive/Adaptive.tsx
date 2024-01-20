import { useMediaQuery } from "react-responsive";

interface ResponsiveProps {
  children: React.ReactNode;
}

const Desktop: React.FC<ResponsiveProps> = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  return isDesktop ? <>{children}</> : null;
};

const Tablet: React.FC<ResponsiveProps> = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  return isTablet ? <>{children}</> : null;
};

const Mobile: React.FC<ResponsiveProps> = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile ? <>{children}</> : null;
};

const Default: React.FC<ResponsiveProps> = ({ children }) => {
  const isNotMobile = useMediaQuery({ minWidth: 768 });
  return isNotMobile ? <>{children}</> : null;
};

export { Desktop, Tablet, Mobile, Default };
