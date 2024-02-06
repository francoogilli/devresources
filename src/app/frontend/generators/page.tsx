import React from "react";
import SectionPage from "src/components/section-page";
import { generators } from "src/data/frontend/generators";
const GeneratorsPage = ()=>{
    return (
        <>
            <SectionPage title={generators.title} category={generators.category} subtitle={generators.subtitle} color1={generators.color1} color2={generators.color2} resources={generators.resources}/>
        </>
    )
}
export default GeneratorsPage