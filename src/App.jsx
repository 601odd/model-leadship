import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BaseLayout } from "./components";
import { Dashboard, PageNotFound,EventTotal } from "./screens";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme/theme";
import { GlobalStyles } from "./styles/global/GlobalStyles";

const routes = [
  {
    path: "/model-leadship",
    element: <BaseLayout />,
    children: [
      {
        path: "/model-leadship",
        element: <Dashboard />,

      },
      {
        path: "/model-leadship/event-total",
        element: <EventTotal />,

      },
    ],
  },
  // {
  //   path: "/event-total",
  //   element: <BaseLayout />,
  //   children: [
  //     {
  //       path: "/event-total",
  //       element: <EventTotal />,
  //     },
  //   ],
  // },
  {
    path: "*",
    element: <PageNotFound />,
  },
];

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <GlobalStyles />
          <Routes>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element}>
                {route.children &&
                  route.children.map((childRoute, childIndex) => (
                    <Route
                      key={childIndex}
                      path={childRoute.path}
                      element={childRoute.element}
                    />
                  ))}
              </Route>
            ))}
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
