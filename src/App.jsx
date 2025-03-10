import { BrowserRouter, Routes, Route } from 'react-router';
import Layout from './layout';
import Home from './pages/home';
import './App.css';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
