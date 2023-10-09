declare const menus: Menu[];
interface Menu {
    id: string;
    category: string;
    img: string;
    title: string;
    price: string;
    description: string;
}
declare const menuCategoriesContainer: Element;
declare const menuContainer: Element;
declare const menuUI: (menu: Menu[]) => void;
declare const displayCategory: () => void;
