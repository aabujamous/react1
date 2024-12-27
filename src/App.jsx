import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import Header from './Header'
import Mainpage from './Mainpage'
import Features from './Features'
import Support from './Support'
import Enterprise from './Enterprise'
function App() {

    return (
        <Router>
            <Header />

            <Routes>
                <Route index element={<Mainpage />}/>
                <Route path="features" element={<Features/>}/>
                <Route path="Support" element={<Support/>}/>
                <Route path="Enterprise" element={<Enterprise/>}/>

            </Routes>


        </Router>
    )

}

export default App
