import React from "react";
import SectionPage from "src/components/section-page";
import { extensions } from "src/data/vscode/extensions";
const ExtensionsPage = ()=>{
    return (
        <>
            <SectionPage title={extensions.title} category={extensions.category} subtitle={extensions.subtitle} color1={extensions.color1} color2={extensions.color2} />
        </>
    )
}
export default ExtensionsPage