import type { Appbar } from "@/types/common";
import { Menu } from "@/types/enum/menu";
import { RouterName } from "@/types/enum/router_name";

export const menuList: Appbar[] = [
    {
        menu: Menu.Mobile,
        categories: [RouterName.Mobile],
    },
    {
        menu: Menu.Web,
        categories: [RouterName.Web],
    },
    {
        menu: Menu.Flutter,
        categories: [RouterName.Flutter],
    },
    {
        menu: Menu.Backend,
        categories: [RouterName.Backend],
    },
    {
        menu: Menu.Integration,
        categories: [RouterName.Integration],
    },
]