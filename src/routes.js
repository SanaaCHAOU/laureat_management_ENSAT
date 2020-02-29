
import Stats from "views/Stats.jsx";
import Maps from "views/Maps.jsx";
import Home from "views/Home.jsx";
import Manager from "views/Manager.jsx";


const dashboardRoutes = [
  {
    path: "/Home",
    name: "Home",
    icon: "pe-7s-home",
    component: Home,
    layout: "/admin"
  },
  {
    path: "/Stats",
    name: "Stats",
    icon: "pe-7s-graph3",
    component: Stats,
    layout: "/admin"
  },
  {
    path: "/manager",
    name: "manager",
    icon: "pe-7s-user",
    component: Manager,
    layout: "/admin"
  },
 
  {
    path: "/maps",
    name: "Maps",
    icon: "pe-7s-map-marker",
    component: Maps,
    layout: "/admin"
  },
];

export default dashboardRoutes;
