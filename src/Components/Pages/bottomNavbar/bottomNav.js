import React from 'react'
import "./bottomNav.css"
import {MdHome} from "react-icons/md"
import {MdOutlineVideoLibrary} from "react-icons/md"
import {BsCollectionPlay} from "react-icons/bs"
import {MdOutlineSlowMotionVideo} from "react-icons/md"
import {IoMdAddCircle} from "react-icons/io"
const BottomNav = () => {
  return (
      <div className='bottom '>
          <div className="iconerr container">
              <MdHome size={ 30} />
              <MdOutlineSlowMotionVideo size={ 30}  />
              <IoMdAddCircle size={ 30} />
              <BsCollectionPlay size={ 30} />
              <MdOutlineVideoLibrary size={ 30} />
          </div>
    </div>
  )
}

export default BottomNav