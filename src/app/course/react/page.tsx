import React from "react";
import SectionPage from "src/components/section-page";
import { react } from "src/data/course/react";
const ReactCoursePage = ()=>{
    return (
        <>
            <SectionPage title={react.title} category={react.category} subtitle={react.subtitle} color1={react.color1} color2={react.color2} />
        </>
    )
}
export default ReactCoursePage