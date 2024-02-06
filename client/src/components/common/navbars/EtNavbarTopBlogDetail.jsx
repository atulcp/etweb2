import { EtLogo2} from '../../../assets/img/imgAssets'
import { useNavigate } from "react-router"
import { blogDetailNavItems } from '../../../data/navMenuMainItems'

const EtNavbarTopBlogDetail = () => {
    const navigate = useNavigate()

  return (
    <div className={`absolute top-0 left-0 right-0 z-50 flex justify-between items-center p-5`}>
    <div className="flex items-center">
        <div className="group relative flex flex-col items-center" onClick={() => navigate("/")}>
          <img src={EtLogo2} alt="logo" className="h-9 w-18 m-2 p-2 cursor-pointer" />
          <span className="opacity-0 group-hover:opacity-100 text-xs text-white transition-opacity duration-300 absolute -bottom-4">Home</span>
        </div>
        <div className="flex items-center">
          {blogDetailNavItems.map((item, index) => (
            <p key={index} className={`m-2 p-2 cursor-pointer border text-sm border-gray-400 hover:text-white hover:bg-orange-600 hover:border-orange-600 rounded-full text-orange-600`} onClick={() => navigate('/blogs')}>{item.item}</p>
          ))}
        </div>
      </div>
     </div> 
  )
}

export default EtNavbarTopBlogDetail