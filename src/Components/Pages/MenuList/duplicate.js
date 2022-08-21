import React from "react"
import "./menu.css"
import { MdHome } from "react-icons/md"
import { MdOutlineVideoLibrary } from "react-icons/md"
import { MdOutlineExplore } from "react-icons/md"
import { BsCollectionPlay } from "react-icons/bs"
import { MdOutlineSlowMotionVideo } from "react-icons/md"
import { RiVideoLine } from "react-icons/ri"
import { GrHistory } from "react-icons/gr"
import { BsClockHistory } from "react-icons/bs"
import { BiLike } from "react-icons/bi"
import { RiArrowDownSLine } from "react-icons/ri"


const MenuList = () => {

  const lists = [
    {
      id: 1,
      name: "Home",
      image: MdHome
    },
    {
      id: 1,
      name: "Home",
      image: MdHome
    },
    {
      id: 1,
      name: "Home",
      image: MdHome
    },
  ]

  return (
    <div className="icons">
      <div className="icon">
        <MdHome size={20} /> Home
      </div>
       <div className="icon">
        <MdOutlineExplore size={20} /> Explore
      </div>
      <div className="icon">
        <MdOutlineSlowMotionVideo size={20} /> Shorts
      </div>
      <div className="icon">
        <BsCollectionPlay size={20} /> Subscription
      </div>
      
      <hr />
      <div className="icon">
        <MdOutlineVideoLibrary size={20} /> Library
      </div>
      <div className="icon">
        <GrHistory size={20} /> History
      </div>
      <div className="icon">
        <RiVideoLine size={20} /> Your Video
      </div>
      <div className="icon">
        <BsClockHistory size={20} /> Watch later
      </div>
      <div className="icon">
        <BiLike size={20} /> Liked video 
      </div>
      <div className="icon">
        <RiArrowDownSLine size={20} /> Show More 
      </div>

      <hr />
      <h6>EXPLORE</h6>
      <div className="icon">
        <MdOutlineVideoLibrary size={20} /> Movies
      </div>
      <div className="icon">
        <GrHistory size={20} /> Gaming
      </div>
      <div className="icon">
        <RiVideoLine size={20} /> Live
      </div>
      <div className="icon">
        <BsClockHistory size={20} /> Fashion & Beauty
      </div>
      <div className="icon">
        <BiLike size={20} /> Learning 
      </div>
      <div className="icon">
        <BiLike size={20} /> Sports 
      </div>

    </div>
  )
}

export default MenuList
