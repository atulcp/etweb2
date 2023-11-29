import { 
    EtLogo,
    MuteIcon, 
    UnMuteIcon, 
} from "../../../assets/img/imgAssets"

import { useEffect } from "react";

const EtNavbarTopMain = ( { isMute, onToggleMute }) => {

   useEffect(() => {
    // Function to handle keydown event
    const handleKeyDown = (event) => {
      if (event.key === 'm' || event.key === 'M') {
        onToggleMute()
      }
    }

    // Attach the event listener
    window.addEventListener('keydown', handleKeyDown)

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [onToggleMute]); 

  return (
    <div id='Nav' className="absolute top-0 left-0 right-0 z-50 flex justify-between items-center p-5 bg-transparent text-white">
        <div className="flex justify-start items-center">
          {/* <p className="m-2 p-2 cursor-pointer">Home</p> */}
          <img src={EtLogo} alt="logo" className="h-9 w-18 cursor-pointer m-2 p-2" onClick={""} />
          <p className="m-2 p-2 cursor-pointer">About</p>
          <p className="m-2 p-2 cursor-pointer">Et Trails</p>
          <p className="m-2 p-2 cursor-pointer">Et Logs</p>
          {/* <p className="m-2 p-2 cursor-pointer">Contact Us</p> */}
        </div>

        <div className=" flex justify-start items-center pr-5">
          <button id='Get Started Btn' className="bg-transparent text-orange-600 font-semibold mx-4 py-1 hover:bg-orange-600 hover:text-white hover:border-none hover:font-normal px-4 border border-gray-400 rounded-full">
            Get Started
          </button>
          <button id='Get Started Btn' className="bg-transparent text-white mx-4 py-1 ">
            Sign In
          </button>
          <img src={isMute ? MuteIcon : UnMuteIcon} alt="sound button" className="h-12 w-12 cursor-pointer m-2 p-2" onClick={onToggleMute} />
        </div>
      </div>
  )
}

export default EtNavbarTopMain