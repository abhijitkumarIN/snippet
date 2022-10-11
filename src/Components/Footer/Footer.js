export default function Footer({ footer }) {
  return (
    <div>
      {
        footer ?
          (
            <div className="bg-[#030b20ce]  lg:px-x px-2 py-3 grid ">
              <div className="m-auto">
                <div className="grid grid-cols-4">
                  {
                    footer.map((data, index) => (
                      <span key={index} className="rounded-full m-1 bg-white shadow-lg p-[2.5px]" style={{ width: "40px", heigth: "40px" }}> <a href={data.link} className="inline w-[38px] h-[38px]" key={index} ><img src={data.icon} alt="laoding  " className='w-[38px] h-[38px] rounded-full bg-white p-1 hover:bg-[white]' /></a></span>
                    ))
                  }
                </div>
              </div>
              <div >
                <div className="text-white font-sm  text-center">
                  <span className="">Developed</span> by <span className="font-medium">Abhijeet</span>
                </div>
              </div>
            </div>
          )
          : ''
      }
    </div>
  )
}
