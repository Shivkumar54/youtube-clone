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
import { HiStatusOnline } from "react-icons/hi"
import { SiYoutubegaming } from "react-icons/si"
import { MdOutlineLocalMovies } from "react-icons/md"
import { MdOutlineFeedback } from "react-icons/md"
import { TbHanger2 } from "react-icons/tb"
import { BsLightbulb } from "react-icons/bs"
import { BsTrophy } from "react-icons/bs"
import { FiSettings } from "react-icons/fi"
import { FiHelpCircle } from "react-icons/fi"
import { AiOutlineFlag } from "react-icons/ai"

const MenuList = () => {
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
        <MdOutlineLocalMovies size={20} /> Movies
      </div>
      <div className="icon">
        <SiYoutubegaming size={20} /> Gaming
      </div>
      <div className="icon">
        <HiStatusOnline size={20} /> Live
      </div>
      <div className="icon">
        <TbHanger2 size={20} /> Fashion & Beauty
      </div>
      <div className="icon">
        <BsLightbulb size={20} /> Learning
      </div>
      <div className="icon">
        <BsTrophy size={20} /> Sports
      </div>
      <hr />

      <div className="icon">
        <FiSettings size={20} /> Settings
      </div>
      <div className="icon">
        <AiOutlineFlag size={20} /> Report history
      </div>
      <div className="icon">
        <FiHelpCircle size={20} /> Help
      </div>
      <div className="icon">
        <MdOutlineFeedback size={20} /> Feedback
      </div>
      <hr />

      <div>
        <p className="about">
          AboutPressCopyrightContact us Creators Advertise Developers
          <br /> <br />
          Terms Privacy Policy & Safety How YouTube worksTest new features
        </p>
      </div>
    </div>
  )
}

export default MenuList
