import { useRoutes } from "react-router";
import Layout from "./Layout";
import Home from "./Home";
import Catalouge from "./Catalogue";
import NotFound from "./NotFound";
import Contacts from "./Contacts";
// import Contacts from "./Contacts"

export default function Router() {
  let element = useRoutes([
    {
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/catalogue", element: <Catalouge /> },
        // { path: "/catalogue/new", element: <Contacts/>},
        // { path: "blog", element: <Home/>,
        // { path: "/blog", element: <Home/>,
        { path: "/contacts", element: <Contacts /> },
        // { path: "/delivery", element: <Home/>,
        // { path: "/returnconditions", element: <Home/>,
        // { path: "/bonussystem", element: <Home/>,
        // { path: "/favorites", element: <Home/>,
        // { path: "/publicoffer", element: <Home/>,
        // { path: "/privacypolicy", element: <Home/>,
        // { path: "*", element: <NotFound/> }
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);

  return element;
}
