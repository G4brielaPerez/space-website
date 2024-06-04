import Navbar from "./components/Navbar"
import bgVideo from "./assets/earth-bg.mp4"
import Hero from "./components/Hero"
import HeroCards from "./components/HeroCards"
import Banner from "./components/Banner"
import Footer from "./components/Footer"
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"

function App() {

  useEffect(() => {
    Aos.init({
      duration: 1200,
      easing: "ease-in-out",
    })
  }, [])

  return (
    <div className="bg-black">
      <div className="h-[700px] relative">
        <video 
          src={bgVideo}
          type="video/mp4"
          autoPlay 
          loop 
          muted 
          className="fixed right-0 top-0 h-[700px] w-full object-cover z[-1]"
        />
        <Navbar />
        <Hero />
      </div>

      <div className="bg-black z-10 relative">
        <HeroCards />
        <Banner d={"r"} />
        <Banner d={"l"} />
      </div>

      <Footer />
    </div>
  )
}

export default App
