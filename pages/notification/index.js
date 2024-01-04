import React from "react";
import LayoutDashboard from "../components/LayoutDashboard";

const metaData = {
  title: "Notification",
  description: "CherrisHub",
};

const Notification = () => {
  return (
    <LayoutDashboard metaData={metaData}>
      <div>Notification</div>
    </LayoutDashboard>
  );
};

export default Notification;
