import './App.css'
import Layout from './Layout/Layout'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error-page";
import About from './Pages/About/About';
import Todo from './Pages/Todo/Todo';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/todo/:id",
          element: <Todo />,
        }
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
