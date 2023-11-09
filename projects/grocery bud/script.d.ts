declare let groceryList: List[];
declare const groceryDiv: HTMLElement;
declare const inputAlert: HTMLElement;
declare const groceryForm: HTMLElement;
declare const formInput: HTMLInputElement;
declare const addBtn: HTMLInputElement;
declare const groceryContainer: HTMLInputElement;
declare let editValue: boolean;
declare let idCount: number;
interface List {
    value: string;
    idCount: number;
}
declare const addItem: () => void;
declare let savedItems: List[];
declare const showList: () => void;
declare const clearBtn: Element | null;
declare const alertMessage: (text: string, status: string) => void;
