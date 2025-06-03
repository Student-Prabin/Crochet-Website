const Navbar = () => {
  return (
    <div className="font-[Quicksand] flex justify-around items-center">
      <div className="flex items-end">
        <img src="/src/assets/Designer-removebg-preview.png" alt="logo" className="w-16" />
        <p className=" not-sm:hidden bg-gradient-to-r from-[#6CA3D0] to-[#1A2F94] bg-clip-text text-transparent">CozyLoops</p>
      </div>
      <div className="">
        <ul className="flex items-center gap-[3vw]">
          <li className="font-semibold hover:text-gray-600">Home</li>
          <li className="hover:text-gray-600">Products</li>
          <li className="hover:text-gray-600">Contact</li>
        </ul>
      </div>
      <div>
        <button className=" hover:bg-[#552B2B] hover:text-white border rounded-[10px] px-3 py-1 font-semibold">SignIn</button>
      </div>
    </div>
  )
}
export default Navbar