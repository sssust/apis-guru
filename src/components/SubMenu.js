import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SidebarLink = styled(Link)`
  color: #fff;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-decoration: none;
`;

const SubMenu = ({ item, onClose }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => {
    setSubnav(!subnav);
  };

  return (
    <div className={subnav ? "sub-nav active" : "sub-nav"} onClick={showSubnav}>
      <div className="sub-nav-header">
        <div className="sub-nav-header-text">{item}</div>{" "}
        <div className="sub-nav-header-icon">
          {subnav ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32" fill="none">
              <path d="M22.12 19.42L16 14.83L9.88 19.42L8 18L16 12L24 18L22.12 19.42Z" fill="#F5F5F5" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32" fill="none">
              <path d="M9.88 12.58L16 17.17L22.12 12.58L24 14L16 20L8 14L9.88 12.58Z" fill="#F5F5F5" />
            </svg>
          )}
        </div>
      </div>
      {subnav && (
        <SidebarLink to={`./details/${item}`}>
          <div className="sub-nav-footer" onClick={onClose}>
            <div className="nav-footer-icon">
              <img width="24px" height="24px" src="./images/unknown.jpg" alt="" />
            </div>
            <div className="nav-footer-url">{item}</div>
          </div>
        </SidebarLink>
      )}
    </div>
  );
};

export default SubMenu;
