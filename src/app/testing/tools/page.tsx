import React from "react";
import SectionPage from "src/components/section-page";
import { tools } from "src/data/testing/tools";
const ToolsPage = ()=>{
    return (
        <>
            <SectionPage title={tools.title} category={tools.category} subtitle={tools.subtitle}/>
        </>
    )
}
export default ToolsPage