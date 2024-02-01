import React from "react";
import SectionPage from "src/components/section-page";
import { deploys } from "src/data/backend/deploys";
const DeploysBackendPage = ()=>{
    return (
        <>
            <SectionPage title={deploys.title} category={deploys.category} subtitle={deploys.subtitle} color1={deploys.color1} color2={deploys.color2} resources={deploys.resources} />
        </>
    )
}
export default DeploysBackendPage