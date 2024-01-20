import React from "react";
import Error, { ErrorProps } from "./Error";
import Loading from "./Loading";
import EmptyState from "./Empty";

interface IProps<T> {
  error: ErrorProps | undefined;
  loading: boolean;
  data: T;
  onSuccess: (result: T) => React.ReactNode;
}

function CommonScreen<T>(props: IProps<T>) {
  if (props.loading) {
    return <Loading />;
  }
  if (props.error?.message) {
    return (
      <Error
        message={props.error.message}
        onClick={props.error.onClick}
        title={props.error.title}
      />
    );
  }
  if (typeof props.data !== "undefined" && props.data && props.data !== null) {
    return props.onSuccess(props.data);
  }

  return <EmptyState />;
}

export default CommonScreen;
