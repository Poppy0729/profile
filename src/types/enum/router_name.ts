export enum RouterName {
    Dashboard = "dashboard",
    NotFound = "not-found",
  }
  
export const getRedirectUrl: Record<RouterName, string> = {
    [RouterName.Dashboard]: '/',
    [RouterName.NotFound]: "/:pathMatch(.*)*"
}