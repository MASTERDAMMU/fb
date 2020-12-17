import React from 'react'
import "./Widgets.css"
function Widgets() {
    return (
        <div className="widgets">
            <iframe
            src="https://www.pixelstech.net/article/1532747442-How-to-check-whether-a-web-page-can-be-loaded-in-iframe&tabs=timeline&width=340&height=1500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
            width="340"
            height="100%"
            style={{border:"none", overflow:'hidden'}}
            scrolling="no"
            frameBorder="0"
            
            allowTransparency="true"
            allow="encrypted media"
            title="first_iframe"></iframe>
        </div>
    )
}

export default Widgets

