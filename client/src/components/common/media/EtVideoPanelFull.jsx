
const EtVideoPanelFull = ({ isMute, panelId, videoId, srcUrl  }) => {
  return (
    <div id="Display" className="bg-gray-100 absolute inset-0 h-screen z-10">
    <div id={panelId} className="relative overflow-hidden h-full">
            <video id={videoId}
                autoPlay
                loop
                muted={isMute}
                className="w-full h-full object-cover"
                src={srcUrl}
            />
         </div>
    </div>
  )
}

export default EtVideoPanelFull