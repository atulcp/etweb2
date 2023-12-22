import { sidebarItems } from "../../../data/sideMenuItems"

const EtSidebarMain = () => {
  return (

    <div className="mx-2 my-2 w-32 h-full rounded scrollbar overflow-y-auto bg-slate-600">
      { sidebarItems.map((item, index) => (
        <div 
        key={index}
        className="m-1 p-1 rounded bg-slate-800 focus:border-l-2 focus:border-orange-600 "
        tabIndex={'0'}
        >
          <p className="m-1 p-1 text-sm text-orange-600">{item.item}-{index+1}</p>
        </div>
      )) }

    </div>
  )
}

export default EtSidebarMain