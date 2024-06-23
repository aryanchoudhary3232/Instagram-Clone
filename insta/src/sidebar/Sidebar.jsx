import React from "react";
import styles from "./Sidebar.module.css";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ExploreIcon from "@mui/icons-material/Explore";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import ChatIcon from "@mui/icons-material/Chat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../store/userSlice";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
const Sidebar = () => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
    signOut(auth);
  };

  return (
    <div className={styles["sidebar"]}>
      <img
        className={styles.sidebar_logo}
        src="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png"
        alt="Instagram Logo"
      />
      <div className={styles["sidebar_buttons"]}>
        <button className={styles["sidebar_button"]}>
          <HomeIcon />
          <span>Home</span>
        </button>
        <button className={styles["sidebar_button"]}>
          <SearchIcon />
          <span>Search</span>
        </button>
        <button className={styles["sidebar_button"]}>
          <ExploreIcon />
          <span>Explore</span>
        </button>
        <button className={styles["sidebar_button"]}>
          <SlideshowIcon />
          <span>Reels</span>
        </button>
        <button className={styles["sidebar_button"]}>
          <ChatIcon />
          <span>Messages</span>
        </button>
        <button className={styles["sidebar_button"]}>
          <FavoriteBorderIcon />
          <span>Notifications</span>
        </button>
        <button className={styles["sidebar_button"]}>
          <AddCircleOutlineIcon />
          <span>Create</span>
        </button>
        <button className={styles["sidebar_button"]}>
          <Avatar>
            {user.username ? user.username.charAt(0).toUpperCase() : "A"}
          </Avatar>
          <span>
            {user.username}
            <button onClick={handleLogout} className={styles.logout__button}>
              Logout
            </button>
          </span>
        </button>
      </div>

      <div className={styles.sidebar_more}>
        <button className={styles.sidebar_button}>
          <MenuIcon />
          <span>More</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
