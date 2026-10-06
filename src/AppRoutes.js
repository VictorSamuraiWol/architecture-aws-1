// import styles from './App.module.css'
import PageBase from './Pages/PageBase'
import PageDemo from './Pages/PageDemo'
import PageMain from './Pages/PageMain'
import PageMulti from './Pages/PageMulti'
import PageThreeMulti from './Pages/PageThreeMulti'
import PageNewQuestionsOptions from './Pages/PageNewQuestionsOptions'
import PageNotFound from './Pages/PageNotFound'
import PageQuizBuilder from './Pages/PageQuizBuilder'
import PageInfo from './Pages/PageInfo'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// npx json-server db.json --port 3001

function AppRoutes() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageBase />}>
          <Route index element={<PageDemo />} />
          <Route path='/page-main' element={<PageMain />} />
          <Route path='/page-multi' element={<PageMulti />} />
          <Route path='/page-three-multi' element={<PageThreeMulti />} />
          <Route path='/page-create' element={<PageNewQuestionsOptions />} />
          <Route path='/page-info' element={<PageInfo />} />
          <Route path='/page-quiz-builder' element={<PageQuizBuilder />} />
          
        </Route>
        
        <Route path='*' element={<PageNotFound />} />    
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;
