import { Link } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar({ sideBarDetail }) {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        {sideBarDetail && <img src={`${sideBarDetail.author_image}`} alt="" />}
        <p>{sideBarDetail && sideBarDetail.author_detail}</p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {sideBarDetail?.categories.map((data, index) => (
            <li className="sidebarListItem" key={index}>
              <Link className="link" to="#">
                {data}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
        </div>
      </div> */}
    </div>
  );
}
