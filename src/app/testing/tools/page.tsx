import React from "react";
import SectionPage from "src/components/section-page";
import { tools } from "src/data/testing/tools";
const ToolsPage = ()=>{
    return (
        <>
            <SectionPage title={tools.title} category={tools.category} subtitle={tools.subtitle} color1={tools.color1} color2={tools.color2} resources={tools.resources}/>
        </>
    )
}
export default ToolsPage