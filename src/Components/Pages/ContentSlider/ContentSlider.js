import React, { useState } from "react"
import "./slider.css"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { useEffect } from "react"
import axios from "axios"

const ContentSlider = () => {
  const [title, setTitle] = useState([])

  useEffect(() => {
    const requestTitle = async () => {
      const requestTitleNow = await axios.get("/tv/top_rated")
      setTitle(requestTitleNow.data.results)
      console.log(requestTitleNow.data.results)
    }
    requestTitle()
  }, [])

  var settings = {
    dots: false,
    arrow:true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
  }

  return (
    <div>
      <Slider {...settings}>      
          {title.map((eachTitle) => {
            return (
              <div className="div" key={eachTitle.id}>
                <p className="sliderr" > {eachTitle.name} </p>
              </div>
            )
          })}
      </Slider>
    </div>
  )
}

export default ContentSlider
