import { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Loading from './views/Loading/Loading.view'
import NotFound from './views/NotFound/NotFound.view'

const InitView = lazy(() => import('./views/Init/Init.view'))

function App() {

  return (
    <Router>
      <Suspense fallback={ <Loading /> }>
        <Routes>
          <Route path='/' element={ <InitView /> }/>
          <Route path='*' element={ <NotFound /> }/>
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App
