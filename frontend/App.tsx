import router from 'Frontend/routes.js';
import { RouterProvider } from 'react-router-dom';
import { Toaster } from "react-hot-toast";
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
      <>
        <Toaster />
        <RouterProvider router={router} />
      </>
  );
}
