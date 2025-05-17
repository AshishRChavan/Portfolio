import Home from "../Home/Home.jsx";
import Navbar from "../Navbar/Navbar.jsx";
import About from "../About/About.jsx"
import Projects from '../Projects/Projects.jsx'
import Contact from '../Contact/Contact.jsx'
import Footer from '../Footer/Footer.jsx'
import Menu from "../Menu/Menu.jsx"
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