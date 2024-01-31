import React from "react";
import SectionPage from "src/components/section-page";
import { deploys } from "src/data/backend/deploys";
const DeploysBackendPage = ()=>{
    return (
        <>
            <SectionPage title={deploys.title} category={deploys.category} subtitle={deploys.subtitle} />
        </>
    )
}
export default DeploysBackendPage