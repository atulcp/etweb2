import { EtHero1 } from "../../assets/img/imgAssets"
import { useState, useCallback } from "react"
import EtNavbarTopMain from "../common/navbars/EtNavbarTopMain"
import EtVideoPanelFull from "../common/media/EtVideoPanelFull"

const EtWebLanding = () => {

  const [isMute, setIsMute] = useState(true)

  const toggleMute = useCallback(() => {
    setIsMute(prev => !prev)
  }, [])

  return (
    <div  className="relative">

      <EtNavbarTopMain isMute={isMute} onToggleMute={toggleMute}/>
      <EtVideoPanelFull isMute={isMute} panelId={'LandingPage4 Big Div'} videoId={'ETSVideo'} srcUrl={EtHero1} />

    </div>
  )
}

export default EtWebLanding