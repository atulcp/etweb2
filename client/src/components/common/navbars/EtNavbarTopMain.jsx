import { 
    EtLogo2,
    MuteIcon, 
    UnMuteIcon, 
    bgNavImg2,
} from "../../../assets/img/imgAssets"

import { useEffect, useState } from "react"
import { navMenuItems } from "../../../data/navMenuMainItems"
import { useNavigate, useLocation } from "react-router"

const EtNavbarTopMain = ( { isMute, onToggleMute }) => {

  const navigate = useNavigate()
  const location = useLocation()
  const [activeItem, setActiveItem] = useState(null)
  const [isTopOfPage, setIsTopOfPage] = useState(true)

  // Update active item based on the current URL path
  useEffect(() => {
    const currentNavItem = navMenuItems.find(item => item.navUrl === location.pathname);
    if (currentNavItem) {
      setActiveItem(currentNavItem.item);
    }
  }, [location.pathname])

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
  }, [onToggleMute])

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY === 0 ) {
        setIsTopOfPage(true);
        }
      if (window.scrollY !== 0 ) {
        setIsTopOfPage(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleItemClick = (item) => {
    setActiveItem(item.item)
    navigate(item.navUrl)
    window.scrollTo(0,0)
  }

  const isHomePage = location.pathname === '/'
  const isUpcomingPage = location.pathname === '/upcoming'

  return (
    <div id='Nav' className={`absolute top-0 left-0 right-0 z-50 flex justify-between items-center p-5 ${isTopOfPage ? 'bg-transparent' : 'bg-fit' } text-white`}
    style={isTopOfPage ? {} : { backgroundImage: `url(${bgNavImg2})` }}>
      <div className="flex items-center">
        <div className="group relative flex flex-col items-center" onClick={() => navigate("/")}>
          <img src={EtLogo2} alt="logo" className="h-9 w-18 m-2 p-2 cursor-pointer" />
          <span className="opacity-0 group-hover:opacity-100 text-xs text-white transition-opacity duration-300 absolute -bottom-4">Home</span>
        </div>
        <div className="flex items-center">
          {navMenuItems.map((item, index) => (
            <p key={index} className={`m-2 p-2 cursor-pointer ${activeItem === item.item ? 'border-b-4 border-orange-600' : ''}`} onClick={() => handleItemClick(item)}>{item.item}</p>
          ))}
        </div>
      </div>


      <div className="flex items-center pr-5">
        <button id='Get Started Btn' className="bg-transparent text-orange-600 font-semibold mx-4 py-1 hover:bg-orange-600 hover:text-white hover:border-none hover:font-normal px-4 border border-gray-400 rounded-full" onClick={() => navigate("/getstarted")}>
          Get Started
        </button>
        <button id='Get Started Btn' className="bg-transparent text-white mx-4 py-1 ">
          Sign In
        </button>
        {(isHomePage || isUpcomingPage) && (
          <img src={isMute ? MuteIcon : UnMuteIcon} alt="sound button" className="h-12 w-12 cursor-pointer m-2 p-2" onClick={onToggleMute} />
        )}
      </div>
    </div>
  )
}

export default EtNavbarTopMain