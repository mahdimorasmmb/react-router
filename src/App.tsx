import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Users from "./pages/Users";
import Products from "./pages/Products";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "users",
    element: <Users />,
  },
  {
    path: "products",
    element: <Products />,
  },
]);

function App() {
  return (
    <main className="flex h-screen">
      {/* <RouterProvider router={router} /> */}
      test
    </main>
  );
}

export default App;
