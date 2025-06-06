import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="font-[Quicksand] flex justify-around items-center">
      <NavLink to="/"><div className="flex items-end">
        <img
          src="/assets/Designer-removebg-preview.png"
          alt="logo"
          className="w-16"
        />
        <p className="not-sm:hidden bg-gradient-to-r from-[#6CA3D0] to-[#1A2F94] bg-clip-text text-transparent">
          CozyLoops
        </p>
      </div></NavLink>

      <ul className="flex items-center gap-[3vw] font-semibold">
        <li className="hover:text-gray-600">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="hover:text-gray-600">
          <NavLink to="/products">Products</NavLink>
        </li>
        <li className="hover:text-gray-600">
          <NavLink to="#">Cart</NavLink>
        </li>
      </ul>

      <div>

        <NavLink to="/login"><button className="hover:bg-[#552B2B] hover:text-white border rounded-[10px] px-3 py-1 font-semibold">SignUp</button></NavLink>

      </div>
    </div >
  );
};

export default Navbar;
