export interface TextItem {str?:string;hasEOL?:boolean;transform?:number[]}
export interface PDFPage {getTextContent():Promise<{items:TextItem[]}>;getViewport(options:{scale:number}):{width:number;height:number};render(options:unknown):{promise:Promise<void>};cleanup():void}
export interface PDFDocument {numPages:number;getPage(n:number):Promise<PDFPage>;getMetadata():Promise<{info:{Title?:string}}>}
export const GlobalWorkerOptions:{workerSrc:string};
export function getDocument(options:unknown):{promise:Promise<PDFDocument>;destroy():Promise<void>};

