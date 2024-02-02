import React from "react";
import SectionPage from "src/components/section-page";
import { databases } from "src/data/backend/databases";
const DatabasesPage = ()=>{
    return (
        <>
            <SectionPage title={databases.title} category={databases.category} subtitle={databases.subtitle} color1={databases.color1} color2={databases.color2} resources={databases.resources} />
        </>
    )
}
export default DatabasesPage