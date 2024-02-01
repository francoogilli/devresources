import React from "react";
import SectionPage from "src/components/section-page";
import { colors } from "src/data/frontend/colors";
const ColorsPage = ()=>{
    return (
        <>
            <SectionPage title={colors.title} category={colors.category} subtitle={colors.subtitle} color1={colors.color1} color2={colors.color2} resources={colors.resources}/>
        </>
    )
}
export default ColorsPage