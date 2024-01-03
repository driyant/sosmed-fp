import { useRouter } from "next/router";
import React, { useEffect } from "react";

const Dashboard = () => {
  const router = useRouter();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      router.push("/");
    }
  }, []);
  return <div>Dashboard - Loggedin</div>;
};

export default Dashboard;
