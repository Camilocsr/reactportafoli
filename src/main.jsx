import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/style.css"
import "./css/flexbox.css"
import "./css/estilo.css"
import 'animate.css/animate.css';
import Pagina404 from './Components/PaginaError.jsx';


const router = createBrowserRouter([
  {
    path: "/reactportafoli",
    element: <App/>,
    errorElement: <Pagina404/>,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
