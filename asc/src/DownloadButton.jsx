// DownloadButton.js
import React from 'react';
import jsPDF from 'jspdf';

const DownloadButton = ({ fileName, pdfUrl }) => {
  const handleDownload = async () => {
    try {
      const response = await fetch(pdfUrl);
      const pdfBlob = await response.blob();

      const pdf = new jsPDF();
      pdf.addImage(URL.createObjectURL(pdfBlob), 'JPEG', 0, 0, 210, 297); // Adiciona a imagem do PDF ao PDF a ser baixado

      // Salva o arquivo como PDF
      pdf.save(`${fileName}.pdf`);
    } catch (error) {
      console.error('Erro ao baixar o PDF:', error);
    }
  };

  return (
    <button onClick={handleDownload}>
      Download PDF
    </button>
  );
};

export default DownloadButton;

