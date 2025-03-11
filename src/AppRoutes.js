import styles from './App.module.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageBase from './Pages/PageBase';
import NewPageMain from './Pages/NewPageMain';
import PageMulti from './Pages/PageMulti';
import PageNotFound from './Pages/PageNotFound';
import CreateNewQuestionsOptions from './Pages/NewQuestionsOptionsPage';
// npx json-server db.json --port 3001

function AppRoutes() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageBase />}>
          <Route index element={<NewPageMain />} />
          <Route path='/page-multi' element={<PageMulti />} />
          <Route path='/page-forms-new-questions-options' element={<CreateNewQuestionsOptions />} />
          
        </Route>
        
        <Route path='*' element={<PageNotFound />} />    
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;
