import React from "react";
import SectionPage from "src/components/section-page";
import { databases } from "src/data/backend/databases";
const DatabasesPage = ()=>{
    return (
        <>
            <SectionPage title={databases.title} category={databases.category} subtitle={databases.subtitle} />
        </>
    )
}
export default DatabasesPage