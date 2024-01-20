import { useLocation, useNavigate } from "react-router-dom";
import { useToken } from "../../hooks/useToken";
import "./bottombar.css";
import {
  GithubOutlined,
  HomeOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";

const BottomBarItem = (props: {
  icon: React.ReactNode;
  onClick: () => void;
}) => {
  return <div onClick={props.onClick}>{props.icon}</div>;
};

const BottomBar = () => {
  const { token } = useToken();
  const navigate = useNavigate();
  const location = useLocation();
  const iconStyle = (path: string) => ({
    color: path === location.pathname ? "white" : "silver",
    fontSize: "22px",
  });
  return (
    <div
      className={`bottom-bar`}
      style={{ backgroundColor: token.colorTextBase }}
    >
      <BottomBarItem
        icon={<HomeOutlined style={iconStyle("/")} />}
        onClick={() => navigate("/")}
      />
      <BottomBarItem
        icon={<InfoCircleOutlined style={iconStyle("/about")} />}
        onClick={() => navigate("/about")}
      />
      <BottomBarItem
        icon={<GithubOutlined style={iconStyle("/github")} />}
        onClick={() => window.open("https://github.com/shageldi-dev")}
      />
    </div>
  );
};

export default BottomBar;
