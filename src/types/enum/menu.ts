import { RouterName } from "./router_name";

export enum Menu {
    Mobile = "Mobile native iOS",
    Web = "Web",
    Flutter = "Flutter",
    Backend = "Backend",
    Integration = "Integration",
    Experience = "Experience"
}

export const menuRouteName: Record<Menu, RouterName> = {
    [Menu.Mobile]: RouterName.Mobile,
    [Menu.Web]: RouterName.Web,
    [Menu.Flutter]: RouterName.Flutter,
    [Menu.Backend]: RouterName.Backend,
    [Menu.Integration]: RouterName.Integration,
    [Menu.Experience]: RouterName.Experience
}

// Important: use for check permission access page
export const menuCategories: Record<Menu, RouterName[]> = {
    [Menu.Mobile]: [RouterName.Mobile],
    [Menu.Web]: [RouterName.Web],
    [Menu.Flutter]: [RouterName.Flutter],
    [Menu.Backend]: [RouterName.Backend],
    [Menu.Integration]: [RouterName.Integration],
    [Menu.Experience]: [RouterName.Experience]
}

export const menuIcon: Record<Menu, string> = {
    [Menu.Mobile]: "mdi-cellphone",
    [Menu.Web]: "mdi-web-check",
    [Menu.Flutter]: "mdi-monitor-cellphone",
    [Menu.Backend]: "mdi-server-security",
    [Menu.Integration]: "mdi-ab-testing",
    [Menu.Experience]: "mdi-account-switch"
}