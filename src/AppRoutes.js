import styles from './App.module.css';
import PageBase from './Pages/PageBase';
import PageMain from './Pages/PageMain';
import PageMulti from './Pages/PageMulti';
import PageNotFound from './Pages/PageNotFound';
import NewQuestionsOptionsPage from './Pages/NewQuestionsOptionsPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// npx json-server db.json --port 3001

function AppRoutes() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageBase />}>
          <Route index element={<PageMain />} />
          <Route path='/page-multi' element={<PageMulti />} />
          <Route path='/page-forms-new-questions-options' element={<NewQuestionsOptionsPage />} />
          
        </Route>
        
        <Route path='*' element={<PageNotFound />} />    
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;
