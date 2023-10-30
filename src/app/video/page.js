import React from 'react'

function page() {
  return (
    <div>
       <div  className="video">
        <iframe
       
          style={{ width: "100%", height: "500px" }}
          src={'https://www.youtube-nocookie.com/embed/iu-LBY7NXD4?autoplay=1'}
          title="YouTube video player"
          frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
        ></iframe>

      </div>
    </div>
  )
}

export default page