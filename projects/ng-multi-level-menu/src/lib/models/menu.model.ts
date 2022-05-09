export interface MenuItems {
    name: string,
    subItems?: MenuItems[],
    link?:string,
    expanded?: boolean,
    icon?:string
}