//import logo from './logo.svg';
import {
  createBrowserRouter, 
  createRoutesFromElements,
  Route, 
  RouterProvider
} from 'react-router-dom'

import './App.css';

//Pages
import Home from './pages/Home';
import Detail from './pages/Detail';
import Nothing from './pages/Nothing';
//import Note from './pages/Note';

// Navbar pages
import Navbar from './components/Navbar';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar />}>
      <Route index element={<Home />} />
      <Route path="Detail" element={<Detail />} />
      <Route path="*" element={<Nothing />} />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
