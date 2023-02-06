import React from "react";
import blogData from "../data/blog";



function About() {
    return (
    <div id='about'>
        <aside>
            <img src={blogData.image} alt='blog logo' />
            <p>{blogData.about}</p>
        </aside>
</div> 
    )
}

export default About;