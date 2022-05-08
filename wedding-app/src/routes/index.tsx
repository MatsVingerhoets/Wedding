import { RouteObject } from "./router"
// import Layout from "app/components/Layout";
import Home from "./Home"

const routes: RouteObject[] = [
  {
    component: Home,
    // layout: Layout,
    hasAuthentication: true,
    path: "/"
  }
]

export default routes
