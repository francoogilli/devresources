import React from "react";
import SectionPage from "src/components/section-page";
import { icons } from "src/data/frontend/icons";
const IconsPage = ()=>{
    return (
        <>
            <SectionPage title={icons.title} category={icons.category} subtitle={icons.subtitle} color1={icons.color1} color2={icons.color2} resources={icons.resources}/>
        </>
    )
}
export default IconsPage