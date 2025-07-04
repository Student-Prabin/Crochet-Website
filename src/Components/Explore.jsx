
import { Link, NavLink } from "react-router-dom";
const Explore = () => {
  return (
    <div className="grid grid-row-end grid-cols-1 w-[80vw] m-auto gap-5"
    >
      <p className="text-[#195D2B] text-opacity-10 font-bold text-4xl">Our Best<br /> Selling Products</p>
      <div className="grid grid-cols-3">
        <Link to="/details"><div className="max-w-[300px] w-[24vw] max-h-[400px] h-[35vw] bg-linear-to-r from-[#F38FFD] to-[#E8C6E7] rounded-2xl drop-shadow-2xl/40 hover:drop-shadow-2xl border-[#E8C6E7] p-2 flex flex-wrap justify-between">
          <div className="h-70% mx-auto content-center">

            <img src="\assets\il_1080xN.5893725167_5afj-removebg-preview.png" alt="purple_boque" />
          </div>
          <div className="h-30% w-100%">

            <p className="text-[#22185E] text-center font-bold not-sm:text-xs">Flower bouquet</p>
            <p className=" text-xs not-md:hidden">Beautiful hand made flower bouquet made with five different flower types
            </p>
            <p className="text-[#F90A0A] mt-3 not-sm:text-[8px] not-sm:mt-0">Rs.1000 </p>
          </div>
        </div></Link>

        <Link to="/details"><div className="max-w-[300px] w-[24vw] max-h-[400px] h-[35vw] bg-linear-to-r from-[#F38FFD] to-[#E8C6E7] rounded-2xl drop-shadow-2xl/40 border-[#E8C6E7] p-2 flex flex-wrap justify-between hover:drop-shadow-2xl">
          <div className="h-70% mx-auto content-center">
            <img src="\assets\71Zt6VgmqrL._UF894_1000_QL80_-removebg-preview.png" alt="purple_boque" />
          </div>
          <div className="h-30% w-100%">

            <p className="text-[#22185E] text-center font-bold not-sm:text-xs">Hand Bag</p>
            <p className=" text-xs not-md:hidden">Small and affordable handbag for ladies .
            </p>
            <p className="text-[#F90A0A] mt-3 not-sm:text-[8px] not-sm:mt-0">Rs.400 </p>
          </div>
        </div></Link>

        <Link to="/details"><div className="max-w-[300px] w-[24vw] max-h-[400px] h-[35vw] bg-linear-to-r from-[#F38FFD] to-[#E8C6E7] rounded-2xl drop-shadow-2xl/40 border-[#E8C6E7] p-2 flex flex-wrap justify-between hover:drop-shadow-2xl">
          <div className="h-[70%] mx-auto content-center">
            <img src="\assets\images-removebg-preview.png" alt="purple_boque" />
          </div>

          <div className="h-30% w-100%">
            <p className="text-[#22185E] text-center font-bold not-sm:text-xs">2 dolls set</p>
            <p className="text-xs not-md:hidden">poo and the pig combo .Perfect gift to give to ur loved ones
            </p>
            <p className="text-[#F90A0A] mt-3 not-sm:text-[8px] not-sm:mt-0">Rs.700 </p>
          </div>
        </div></Link>
      </div>
      <NavLink to="/products">
        <button className=" w-30 hover:bg-black bg-[#552B2B] text-white  border rounded-[10px] px-3 py-1 font-semibold">Explore All</button>
      </NavLink>
    </div>
  )
}
export default Explore