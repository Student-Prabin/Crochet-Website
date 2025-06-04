import ChooseUs from "../Components/ChooseUs"
import Explore from "../Components/Explore"
import HeroSec from "../Components/HeroSec"

const Home = () => {
  return (
    <div className=" flex flex-col gap-[9vh]">
      <HeroSec />
      <ChooseUs />
      <Explore />
    </div>
  )
}
export default Home