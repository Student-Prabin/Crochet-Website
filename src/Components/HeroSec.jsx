const HeroSec = () => {
  return (
    <>
      <div className="grid not-sm:grid-row-end not-sm:grid-cols-1 grid-cols-2 w-[80vw] m-auto"
      >
        <div className="flex flex-col gap-10 not-sm:order-2">
          <p className="text-[#195D2B] text-opacity-10 font-bold text-4xl">Where Every Loop
            <br />Holds a Little Love !</p>
          <p className="text-[1rem] font-[Quicksand] font-medium">Every loop is more than just yarn—it's a little piece of love<br />
            woven into something truly special.Each<br />
            handmade item carries the care, patience, and warmth of the hands<br />
            that created it. The beauty of handmade lies not just in the craft,<br />
            but in the emotion behind every stitch<br />
            . Whether you're gifting or keeping it for yourself, you're <br />wrapping someone in love—one loop at a time.</p>
          <div className="flex gap-1">
            <button className=" hover:bg-black bg-[#552B2B] text-white  border rounded-[10px] px-3 py-1 font-semibold">Items</button>
            <button className="hover:bg-black hover:text-white   border rounded-[10px] px-3 py-1 font-medium">Offers</button>
          </div>
        </div>
        <div>
          <img className="h-[80%] rotate-35 mx-auto" src="\src\assets\54115445252_221d7c34fa_b-removebg-preview.png" alt="flower" />
        </div>
      </div>
    </>
  )
}
export default HeroSec