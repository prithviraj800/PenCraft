import {BrowserRouter as Router ,Routes , Route , Link} from "react-router-dom"
import Home from "./compnent/Home"
import Navbar from "./compnent/Navbar"
import Blog from "./compnent/blog"

export default function App(){
  
  return(
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/Blog" element={<Blog/>}></Route>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/" element={<Navbar/>}></Route>
      </Routes>
    </Router>
  )
}