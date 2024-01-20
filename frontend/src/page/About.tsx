import { Typography } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import React from "react";

const About: React.FC = () => {
  return (
    <div>
      <div style={{ padding: "24px" }}>
        <Typography.Title>Shopify cache store</Typography.Title>
        <Typography>
          <Paragraph>
            Welcome to our About Us page. Here, you can find information about
            our company and our mission.
          </Paragraph>
        </Typography>
      </div>
    </div>
  );
};

export default About;
