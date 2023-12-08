import { EtUpcomingVid } from "../../assets/img/imgAssets"
import { useState, useCallback } from "react"
import EtNavbarTopMain from "../common/navbars/EtNavbarTopMain"
import EtVideoPanelFull from "../common/media/EtVideoPanelFull"

const EtUpcoming = () => {

    const [isMute, setIsMute] = useState(true)

  const toggleMute = useCallback(() => {
    setIsMute(prev => !prev)
  }, [])

  return (
    <div  className="relative">

      <EtNavbarTopMain isMute={isMute} onToggleMute={toggleMute}/>
      <EtVideoPanelFull isMute={isMute} panelId={'Upcoming Landing Div'} videoId={'DMOVideo'} srcUrl={EtUpcomingVid} />

    </div>
  )
}

export default EtUpcoming