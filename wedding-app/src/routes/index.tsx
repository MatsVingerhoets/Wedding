import { RouteObject } from "./router"
import Home from "./Home"
import Layout from "app/components/Layout"
import Photos from "./Photos"
import Events from "./Events"
import MusicRequests from "./MusicRequests"

const routes: RouteObject[] = [
  {
    component: Home,
    layout: Layout,
    hasAuthentication: true,
    path: "/"
  },
  {
    component: Photos,
    layout: Layout,
    hasAuthentication: true,
    path: "/photos"
  },
  {
    component: Events,
    layout: Layout,
    hasAuthentication: true,
    path: "/events"
  },
  {
    component: MusicRequests,
    layout: Layout,
    hasAuthentication: true,
    path: "/music-requests"
  }
]

export default routes
