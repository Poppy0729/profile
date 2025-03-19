import type { Menu } from "./enum/menu"

export interface Appbar {
    menu: Menu
    children?: Appbar[]
    categories: string[]
}