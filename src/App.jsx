import ChooseUs from "./Components/ChooseUs.jsx"
import Explore from "./Components/Explore.jsx"
import Footer from "./Components/Footer.jsx"
import HeroSec from "./Components/HeroSec.jsx"
import Navbar from "./Components/Navbar.jsx"

const App = () => {
  return (
    <div className="px-3 mx-auto flex flex-col gap-[9vh]">
      <Navbar />
      <HeroSec />
      <ChooseUs />
      <Explore />
      <Footer />
    </div>
  )
}
export default App