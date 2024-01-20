import React, { useEffect, useState } from "react";

interface IProps {
  component: React.ReactNode;
}

const AuthRouter: React.FC<IProps> = (props) => {
  const [hasAccess, setAccess] = useState(false);
  useEffect(() => {
    console.log("Check has permission or bearer token here");
    setAccess(true);
  }, []);
  if (!hasAccess) {
    // redirect auth page
  }
  return props.component;
};

export default AuthRouter;
