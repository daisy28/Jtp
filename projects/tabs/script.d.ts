declare const tabInfos: {
    id: number;
    img: string;
    heading: string;
    description: string;
}[];
interface tab {
    id: number;
    img: string;
    heading: string;
    description: string;
}
declare const btnDiv: HTMLElement;
declare const tabImg: HTMLElement;
declare const tabInfo: HTMLElement;
declare const updateUI: (item: tab) => void;
