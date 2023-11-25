import { EtHero, MuteIcon, UnMuteIcon, EtLogo } from "./img/imgAssets"
import { useState } from "react"

function App() {

  const [isMute, setIsMute] = useState(true)

  const handleClick = () => {
    setIsMute(!isMute)
  }

  return (
    <div  className=" relative ">

      <div id='Nav' className="absolute top-0 left-0 right-0 z-50 flex justify-between items-center p-5 bg-transparent text-white">
        <div className="flex justify-start items-center">
          {/* <p className="m-2 p-2 cursor-pointer">Home</p> */}
          <img src={EtLogo} alt="logo" className="h-9 w-18 cursor-pointer m-2 p-2" onClick={""} />
          <p className="m-2 p-2 cursor-pointer">About</p>
          <p className="m-2 p-2 cursor-pointer">Trails</p>
          <p className="m-2 p-2 cursor-pointer">Blogs</p>
          {/* <p className="m-2 p-2 cursor-pointer">Contact Us</p> */}
        </div>

        <div className=" flex justify-start items-center pr-5">
          <button id='Get Started Btn' className="bg-transparent text-orange-600 font-semibold mx-4 py-1 hover:bg-orange-600 hover:text-white hover:border-none hover:font-normal px-4 border border-gray-400 rounded-full">
            Get Started
          </button>
          <img src={isMute ? MuteIcon : UnMuteIcon} alt="sound button" className="h-12 w-12 cursor-pointer m-2 p-2" onClick={handleClick} />
        </div>
      </div>
      
      
      <div id="Display" className="bg-gray-100 absolute inset-0 h-screen z-10">
        
      <div id='LandingPage4 Big Div' className="relative overflow-hidden h-full">
        <video id='ETSVideo'
          autoPlay
          loop
          muted={isMute}
          className="w-full h-full object-cover"
          src={EtHero}
        />
      
      </div>
          
      </div>

    </div>
  )
}

export default App
