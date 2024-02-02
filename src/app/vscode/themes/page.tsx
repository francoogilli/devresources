import React from "react";
import SectionPage from "src/components/section-page";
import { extensions } from "src/data/vscode/themes";
const ExtensionsPage = () => {
  return (
    <>
      <SectionPage
        title={extensions.title}
        category={extensions.category}
        subtitle={extensions.subtitle}
        color1={extensions.color1}
        color2={extensions.color2}
        resources={extensions.resources}
      />
    </>
  );
};
export default ExtensionsPage;
