import React from 'react'
import { etBlessOn1, etON1 } from '../../assets/img/imgAssets'
import { useNavigate } from "react-router"

const EtBlessON = () => {

    const navigate = useNavigate()

    const handleButtonClick = () => {
        navigate("/")
    }
    return (
        <div className='relative h-screen'>
            <div className='absolute top-0 left-0 right-0 bottom-0 bg-cover bg-blend-screen'
                style={{backgroundImage: `url(${etBlessOn1})` }}>
            </div>

            {/* Absolutely positioned flex container for "Bless", circle, and "N" */}
            <div className='absolute inset-0 flex justify-center items-center'>
                {/* Text "Bless" */}
                <span className='text-white text-8xl font-oswald font-extralight'>Bless</span>

                {/* Circle with slightly transparent black background and double border */}
                <div className='w-32 h-32 rounded-full mx-1' style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', border: '4px double #242424', padding: '1px', boxShadow: '0 0 0 2px black' }}>

                    <img src={etON1} alt="" onClick={handleButtonClick} className='cursor-pointer'/>
                </div>

                {/* Letter "N" */}
                <span className='text-orange-600 text-8xl font-oswald font-bold'>N</span>
            </div>
        </div>
    )
}

export default EtBlessON
