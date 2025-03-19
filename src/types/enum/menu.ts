import { RouterName } from "./router_name";

export enum Menu {
    Mobile = "Mobile native iOS",
    Web = "Web",
    Flutter = "Flutter",
    Backend = "Backend",
    Integration = "Integration",
}

export const menuRouteName: Record<Menu, RouterName> = {
    [Menu.Mobile]: RouterName.Mobile,
    [Menu.Web]: RouterName.Web,
    [Menu.Flutter]: RouterName.Flutter,
    [Menu.Backend]: RouterName.Backend,
    [Menu.Integration]: RouterName.Integration
}

// Important: use for check permission access page
export const menuCategories: Record<Menu, RouterName[]> = {
    [Menu.Mobile]: [RouterName.Mobile],
    [Menu.Web]: [RouterName.Web],
    [Menu.Flutter]: [RouterName.Flutter],
    [Menu.Backend]: [RouterName.Backend],
    [Menu.Integration]: [RouterName.Integration]
}

export const menuIcon: Record<Menu, string> = {
    [Menu.Mobile]: "mdi-cellphone",
    [Menu.Web]: "mdi-web",
    [Menu.Flutter]: "mdi-flutter",
    [Menu.Backend]: "mdi-server",
    [Menu.Integration]: "mdi-account-switch"
}