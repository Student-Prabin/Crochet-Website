import { MdOutlineLocalPhone, MdOutlineEmail } from "react-icons/md";
const Footer = () => {
  return (
    <>
      <div className="grid not-sm:grid-row not-sm:grid-cols-1 grid-cols-2 justify-even w-[80vw] m-auto gap-3">

        <div className="flex flex-col gap-3">
          <div>
            <p className="text-[#195D2B] text-opacity-10 font-bold text-4xl">Contact Us</p>
            <p className="font-medium ">send us a feedback</p>
          </div>

          <input className="border bg-white rounded-xl px-2 w-60 " type="text" placeholder="Full Name" />
          <input className="border bg-white rounded-xl px-2 w-60 " type="text" placeholder="Email" />
          <textarea className="border bg-white rounded-xl px-2  w-70 h-30 " type="text" placeholder="Decription" />
        </div>
        <div className="flex flex-col sm:justify-end sm:items-end gap-3">
          <div className="flex items-end">
            <img className="w-16" src="\public\assets\Designer-removebg-preview.png" alt="logo" />
            <span className=" not-sm:hidden bg-gradient-to-r from-[#6CA3D0] to-[#1A2F94] bg-clip-text text-transparent">CozyLoops</span>

          </div>
          <p className="flex items-center"><MdOutlineLocalPhone /> - 984912351</p>
          <p className="flex items-center"><MdOutlineEmail />- CozyLoops@gmail.com</p>
        </div>
      </div>
      <span className="m-auto">© CozyLoops Crochet 2025. All rights reserved.</span>
    </>
  )
}
export default Footer