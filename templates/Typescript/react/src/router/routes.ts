import Home from "../pages/Home";
import Features from "../pages/Features";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Layout from "../components/Layout";

export interface AppRoute {
  path?: string;
  index?: boolean;
  Component: React.ComponentType;
  children?: AppRoute[];
}

const routes = [
  {
    Component: Layout,
    children: [
      { path: '/', Component: Home },
      { path: '/features', Component: Features },
      { path: '/about', Component: About },
      { path: '/contact', Component: Contact },
    ]
  },
];

export default routes;