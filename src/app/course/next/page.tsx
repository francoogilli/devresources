import React from "react";
import SectionPage from "src/components/section-page";
import { next } from "src/data/course/next";
const NextCoursePage = ()=>{
    return (
        <>
            <SectionPage title={next.title} category={next.category} subtitle={next.subtitle} color1={next.color1} color2={next.color2} />
        </>
    )
}
export default NextCoursePage