const ChooseUs = () => {
  return (
    <>
      <div className="grid not-sm:grid-row-end not-sm:grid-cols-1 grid-cols-[30%_70%] w-[80vw] m-auto"
      >
        <div className="flex flex-col gap-3 not-sm:order-2">
          <p className="text-[#195D2B] text-opacity-10 font-bold text-4xl">Why <br />Choose<br />Us?</p>
          <p className="text-[1rem] font-[Quicksand] font-medium">1.Handmade with care and attention.<br />2.Each piece is uniquely yours.<br />3.Crafted to bring warmth and comfort.<br />4.Made with love, always.</p>
        </div>
        <div className="flex gap-3 justify-center">
          <div className="max-w-[250px] w-[30vw] max-h-[300px] h-[35vw] bg-linear-to-r from-[#e6c1e4] to-[#E779F2] rounded-2xl drop-shadow-xl/50  flex items-center">
            <img src="\src\assets\images-removebg-preview (3).png" alt="keyrings" />
          </div>

          <div className="max-w-[250px] w-[30vw] max-h-[300px] h-[35vw] bg-linear-to-r from-[#e6c1e4] to-[#E779F2] rounded-2xl drop-shadow-xl/50 mt-20 flex items-center">
            <img src="\src\assets\images-removebg-preview (1).png" alt="scarf" />
          </div>
          <div className="max-w-[250px] w-[30vw] max-h-[300px] h-[35vw] bg-linear-to-r from-[#e6c1e4] to-[#E779F2] rounded-2xl drop-shadow-xl/50  flex items-end">
            <img src="\src\assets\71oTcDuSjAL._AC_UF1000_1000_QL80_-removebg-preview.png" alt="flowers" />
          </div>
        </div>

      </div>
    </>
  )
}
export default ChooseUs