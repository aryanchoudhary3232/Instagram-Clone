import React from "react";
import Sidebar from "./sidebar/Sidebar";
import Timeline from "./timeline/Timeline";
import "./Homepage.css";

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="homepage__sidebar">
        <Sidebar />
      </div>
      <div className="homepage__timeline">
        <Timeline />
      </div>
    </div>
  );
};

export default Homepage;
