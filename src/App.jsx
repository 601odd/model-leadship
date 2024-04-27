import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BaseLayout } from "./components";
import { Dashboard, PageNotFound,EventTotal,Login,Volunteer } from "./screens";
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
        element: <Login />,

      },
      {
        path: "/model-leadship/event-total",
        element: <EventTotal />,
      },
      {
        path: "/model-leadship/volunteer",
        element: <Volunteer />,
      },
      {
        path: "/model-leadship/dashboard",
        element: <Dashboard />,
      },

    ],
  },
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
