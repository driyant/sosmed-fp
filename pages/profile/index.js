import React from "react";
import LayoutDashboard from "../components/LayoutDashboard";

const metaData = {
  title: "Profile User",
  description: "CherrisHub - Profile",
};

const ProfileUser = () => {
  return (
    <LayoutDashboard metaData={metaData}>
      <div>Profile User</div>
    </LayoutDashboard>
  );
};

export default ProfileUser;
