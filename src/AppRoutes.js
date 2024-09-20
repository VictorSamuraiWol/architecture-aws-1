import styles from './App.module.css';
import PageMain from './Pages/PageMain';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageNotFound from './Pages/PageNotFound';
import PageBase from './Pages/PageBase';
import PageNext from './Pages/PageNext';

function AppRoutes() {
  
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageBase />}>
          <Route index element={<PageMain />} />
          <Route path='/next' element={<PageNext />} />
        </Route>
      <Route path='*' element={<PageNotFound />} />    
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;
