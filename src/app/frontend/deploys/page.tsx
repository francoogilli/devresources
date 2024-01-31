import React from "react";
import SectionPage from "src/components/section-page";
import { deploys } from "src/data/frontend/deploys";
const DeploysFrontendPage = ()=>{
    return (
        <>
            <SectionPage title={deploys.title} category={deploys.category} subtitle={deploys.subtitle} color1={deploys.color1} color2={deploys.color2}/>
        </>
    )
}
export default DeploysFrontendPage