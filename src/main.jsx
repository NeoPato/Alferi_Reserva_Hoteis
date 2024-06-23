import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App';
import Viagens from './pages/Viagens'
import Login from './pages/Login'
import Cadastrar from './pages/Cadastrar'
import Pagemento from './pages/Pagamento';
import './styles/index.css'
import {
  createBrowserRouter,
  RouterProvider,
} 
from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: < App/>,
  },
  {
    path: "/viagens",
    element: < Viagens/>,
  },
  {
    path: "/login",
    element: < Login/>,
  },
  {
    path: "/cadastrar",
    element: < Cadastrar/>,
  },
  {
    path: "/pagamento",
    element: < Pagemento/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
