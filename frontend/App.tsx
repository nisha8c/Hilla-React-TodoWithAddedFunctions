import router from 'Frontend/routes.js';
import { RouterProvider } from 'react-router-dom';
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return <RouterProvider router={router} />;
}
