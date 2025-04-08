export enum RouterName {
    Dashboard = "dashboard",
    Mobile = "mobile",
    Flutter = "flutter",
    Web = "web",
    Backend = "backend",
    Integration = "integration",
    Experience = "experience",
    About = "about",
    AppDetail = "app-detail",
    NotFound = "not-found",
  }
  
export const getRedirectUrl: Record<RouterName, string> = {
    [RouterName.Dashboard]: '/',
    [RouterName.Mobile]: '/mobile',
    [RouterName.Flutter]: '/flutter',
    [RouterName.Web]: '/web',
    [RouterName.Backend]: '/backend',
    [RouterName.Integration]: '/integration',
    [RouterName.Experience]: '/experience',
    [RouterName.About]: '/about',
    [RouterName.AppDetail]: '/app-detail',
    [RouterName.NotFound]: "/:pathMatch(.*)*"
}