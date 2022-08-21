import React from "react"
import Youtube from "../../Assets/Logo/youtube1.svg"
import { FiMenu } from "react-icons/fi"
import { BsSearch } from "react-icons/bs"
import { MdKeyboardVoice } from "react-icons/md"
import { IoNotificationsOutline } from "react-icons/io5"
import { RiVideoAddLine } from "react-icons/ri"
import { FaUserCircle } from "react-icons/fa"

import "./navbar.css"
const Navbar = () => {
  return (
    <div className="naver">
      <div className="logo">
        <FiMenu size={25} className="menubar" />
        <img src={Youtube} alt="" />
      </div>
      <div className="search">
        <input type="search" className="searchbar" placeholder="Search" />
        <button className="searchbtn" type="submit">
          <BsSearch size={20} />
        </button>
        <MdKeyboardVoice size={30} />
      </div>
      <div className="navcontent">
        <RiVideoAddLine size={25} className="iconer" />
        <IoNotificationsOutline size={25} className="iconer" />
        <BsSearch size={20} className="bisearcher" />
        <FaUserCircle size={25} className="iconer" />
      </div>
    </div>
  )
}

export default Navbar
