import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;


export default function PDFViewer({size} : {size: number}) {
    return (
        <a href='./Resume.pdf' className='umami--click--view-resume'>
            <Document file="./Resume.pdf" className='border-gray-800 dark:border-0 border-4'>
                <Page className="w-full" pageNumber={1} width={size / 2.5 || 500} />
            </Document>
        </a>
    );
}