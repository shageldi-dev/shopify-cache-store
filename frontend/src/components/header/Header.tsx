import { Space, Typography } from "antd";
import "./header.css";
import useDevice from "../../hooks/useDevice";
import SearchBox from "./SearchBox";

export interface SearchProps {
  onSearchChange: (value: string) => void;
}

const Header = (props: SearchProps) => {
  const device = useDevice();
  return (
    <Space direction="vertical" size={"large"}>
      <Typography className={`header-title ${device}`}>
        Your shopify products never lose
      </Typography>
      <SearchBox onSearchChange={props.onSearchChange} />
    </Space>
  );
};

export default Header;
