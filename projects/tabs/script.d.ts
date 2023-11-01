declare const tabInfos: {
    id: string;
    img: string;
    heading: string;
    description: string;
}[];
interface tab {
    id: string;
    img: string;
    heading: string;
    description: string;
}
declare const btnDiv: HTMLElement;
declare const tabImg: HTMLElement;
declare const tabInfo: HTMLElement;
declare const updateUI: (item: tab) => void;
