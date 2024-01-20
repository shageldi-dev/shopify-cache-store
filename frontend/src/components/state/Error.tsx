import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { Button, Result } from "antd";
import React from "react";

export interface ErrorProps {
  message: FetchBaseQueryError | SerializedError | undefined;
  title: string;
  onClick: () => void;
}

const Error: React.FC<ErrorProps> = (props) => {
  return (
    <Result
      status="error"
      title={props.title}
      subTitle={JSON.stringify(props.message)}
      extra={[
        <Button type="primary" key="console" onClick={props.onClick}>
          Retry
        </Button>,
      ]}
    ></Result>
  );
};

export default Error;
