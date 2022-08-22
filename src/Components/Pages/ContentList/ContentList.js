import React, { useState, useEffect } from "react"
import axios from "axios"
import "./content.css"
// import ContentSlider from "../ContentSlider/ContentSlider"

const ContentList = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const requestHeaderImage = async () => {
      const requestRootImage = await axios.get("/movie/now_playing")
      setData(requestRootImage.data.results)
    }
    requestHeaderImage()
  }, [])

  return (
    <div>
      <div className="container content">
        {/* <ContentSlider /> */}
        <div className="row rower mx-auto ">
          <div className="col-12 mx-auto coller">
            <div className="row">
              {data.map((eachData) => {
                return (
                  <div
                    key={eachData.id}
                    className="col-12 col-md-6 col-lg-3 my-3"
                  >
                    <img
                      src={`https://image.tmdb.org/t/p/original${eachData.backdrop_path}`}
                      alt="Thumbnail"
                      className="headerImage"
                    />

                    <div className="contenter">
                      <div className="contentFlxer">
                        <img
                          src={`https://image.tmdb.org/t/p/original${eachData.poster_path}`}
                          alt=""
                          className="logoer"
                        />
                        <h4 className="contentHeading">{eachData.title}</h4>
                      </div>
                      <p className="contentpara">{eachData.overview}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContentList
