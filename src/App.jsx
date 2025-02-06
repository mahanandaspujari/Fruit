import About from "./About"
import Blog from "./Blog"
import ContactUs from "./ContactUs"
import Footer from "./Footer"
import Home from "./home"
import Nav from "./Nav"
import Ourfruits from "./Ourfruits"


function App() {
const var2 =[{
  home: "Home",
  aboutus:"About",
  fruits:"Fruits",
  blogs:"Blogs",
  contactus:"Contact Us"
}]
  return (
    <>
      <Nav var1={var2}/>
      <div style={{"marginTop":"70px"}}>
        <Home/>  
      </div>
      <div>
        <About/>  
      </div>
      <div>
        <Ourfruits/>
      </div>
      <div>
        <Blog/>
      </div>
      <div>
        <ContactUs/>
      </div>
      <div>
        <Footer/>
      </div>
    </>
  )
}

export default App
