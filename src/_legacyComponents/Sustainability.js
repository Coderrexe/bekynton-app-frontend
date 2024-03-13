import React from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "./Sustainability.css";
import PMark from "../Uploads/PLANET-MARK.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Sustainability = () => {
  return (
    <div className="sustainability-scroll-container">
      <div className="sustainability-container">
        <h1>Eton's Sustainability</h1>

        <div className="pdf-viewer">
          <Document file={PMark}>
            <Page pageNumber={1} />
          </Document>
        </div>
        {/* might get rid of this , not sure yet */}
        <div className="extra-features">
          <h2>Additional Features</h2>
          <ul>
            <li>Information about our eco-friendly initiatives.</li>
            <li>Tips on reducing your environmental footprint.</li>
            <li>Details on our sustainable sourcing practices.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sustainability;
