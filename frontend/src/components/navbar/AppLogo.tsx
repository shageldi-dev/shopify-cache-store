import { Space, Typography } from "antd";
import useDevice from "../../hooks/useDevice";
import "./logo.css";

const MobileLogo = () => {
  return <img src="/logo.svg" className="logo-mobile" />;
};

const DesktopLogo = () => {
  return (
    <Space>
      <img src="/logo.svg" className="logo-desktop" />
      <Typography className="logo-title">Shopify cache store</Typography>
    </Space>
  );
};

const AppLogo = () => {
  const device = useDevice();
  return <>{device === "mobile" ? <MobileLogo /> : <DesktopLogo />}</>;
};

export default AppLogo;
