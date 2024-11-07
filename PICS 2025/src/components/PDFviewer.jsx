import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

function PDFViewer() {
  const pdfFile =  "../assets/1.pdf";

  return (
    <div style={{ height: '90vh', width: '100%' }}>
      <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
        <Viewer fileUrl={pdfFile} />
      </Worker>
    </div>
  );
}

export default PDFViewer;


// react-navbar-main/src/assets/1.pdf