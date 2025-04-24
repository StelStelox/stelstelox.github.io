import { BrowserRouter, Routes, Route } from 'react-router';
import Layout from './Layout';
import Home from '../pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route index element={<Home/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
