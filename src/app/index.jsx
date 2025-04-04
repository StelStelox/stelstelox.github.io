import { BrowserRouter, Routes, Route } from 'react-router';
import Layout from '../shared/layout';
import Home from '../pages/home';
import './index.css';

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
};

export default App;
