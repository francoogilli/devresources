import React from "react";
import SectionPage from "src/components/section-page";
import { icons } from "src/data/frontend/icons";
const IconsPage = ()=>{
    return (
        <>
            <SectionPage title={icons.title} category={icons.category} subtitle={icons.subtitle}/>
        </>
    )
}
export default IconsPage