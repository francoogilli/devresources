import React from "react";
import SectionPage from "src/components/section-page";
import { themes } from "src/data/vscode/themes";
const ThemesPage = () => {
  return (
    <>
      <SectionPage
        title={themes.title}
        category={themes.category}
        subtitle={themes.subtitle}
        color1={themes.color1}
        color2={themes.color2}
        resources={themes.resources}
      />
    </>
  );
};
export default ThemesPage;
