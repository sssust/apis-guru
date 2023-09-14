import React from "react";
import SubMenu from "./SubMenu";

const Sidebar = ({ sidebar = false, allProviders = [], onClose }) => {
  return (
    <>
      <div className="sidebar-container">
        <div className="sidebar-header">Select provider</div>
        <div className="sidebar-content">
          {allProviders?.map((item, index) => {
            return <SubMenu item={item} key={index} onClose={onClose} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
