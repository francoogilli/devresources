import React from "react";
import SectionPage from "src/components/section-page";
import { colors } from "src/data/frontend/colors";
const ColorsPage = ()=>{
    return (
        <>
            <SectionPage title={colors.title} category={colors.category} subtitle={colors.subtitle}/>
        </>
    )
}
export default ColorsPage