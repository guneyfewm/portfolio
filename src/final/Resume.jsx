import React from "react";
import ResumePDF from './resume.pdf'
const Resume = () => {
  return (
    <object
      data={ResumePDF}
      type="application/pdf"

      style={{width:"100vw",height:"99.4vh"}}
    >
      <p>
        Alternative text - include a link{" "}
        <a href={ResumePDF}>to the PDF!</a>
      </p>
    </object>
  );
};

export default Resume;
