import React from "react";
import styled from "styled-components";
import SubMenu from "./SubMenu";

const SidebarNav = styled.nav`
  background: #42607b;
  width: 520px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 0;
  right: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 20;
`;

const Sidebar = ({ sidebar, allProviders = [], onClose }) => {
  return (
    <>
      <SidebarNav sidebar={sidebar}>
        <div className="sidebar-container">
          <div className="sidebar-header">Select provider</div>
          <div className="sidebar-content">
            {allProviders?.map((item, index) => {
              return <SubMenu item={item} key={index} onClose={onClose} />;
            })}
          </div>
        </div>
      </SidebarNav>
    </>
  );
};

export default Sidebar;
