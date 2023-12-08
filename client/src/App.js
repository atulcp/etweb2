import { BrowserRouter, Routes, Route } from 'react-router-dom'
import EtWebLanding from "./components/pages/EtWebLanding"
import EtWebAbout from './components/pages/EtWebAbout'
import EtWebTrails from './components/pages/EtWebTrails'
import EtWebGetStarted from './components/pages/EtWebGetStarted'
import EtWebBlogsMain from "./components/pages/EtWebBlogsMain"
import EtWebEtWay from './components/pages/EtWebEtWay'
import EtUpcoming from './components/pages/EtUpcoming'


function App() {

return (
  <BrowserRouter>
      <Routes>
        <Route path="/" >
          <Route index element={<EtWebLanding />} />
          <Route path="about" element={ <EtWebAbout /> } />
          <Route path="etway" element={ <EtWebEtWay /> } />
          <Route path="trails" element={ <EtWebTrails /> } />
          <Route path="blogs" element={ <EtWebBlogsMain /> } />
          <Route path="upcoming" element={ <EtUpcoming /> } />
          <Route path="getstarted" element={ <EtWebGetStarted /> } />

        </Route>
      </Routes>
    </BrowserRouter>
  
  )
}

export default App
