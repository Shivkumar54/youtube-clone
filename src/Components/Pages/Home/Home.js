import React from "react"
import ContentList from "../ContentList/ContentList"
import MenuList from "../MenuList/MenuList"
import "./home.css"
const Home = () => {
  return (
    <div className="homeItems">
      <div className="menuList">
        <MenuList />
      </div>
      <div className="contentList ">
        <ContentList />
      </div>
    </div>
  )
}

export default Home
