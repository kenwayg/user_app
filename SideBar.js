import React from "react";

function SideBar() {
  return (
    <div className="sideNav">
      <div className="userN">
        <div className="profile_pic"></div>
        <span>Name</span>
        <span>Email</span>
      </div>
      <ul className="side_links">
        <li className="bIn">Business Info</li>

        <li>Notification</li>
        <li>Products</li>
        <li>Service</li>
        <li>Activity</li>
        <li>Analytics</li>
      </ul>
    </div>
  );
}
export default SideBar;
