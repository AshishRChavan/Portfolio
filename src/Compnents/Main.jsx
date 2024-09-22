import Home from "./Home";
import Navbar from "./Navbar";
import About from "./About"
import Projects from './Projects'
import Contact from './Contact'
import Footer from './Footer'
import Menu from "./Menu"
export default function Main(){
  return(
    <>
      <Navbar></Navbar>
      <Menu></Menu>
      <Home></Home>
      <About></About>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </>
  )
}