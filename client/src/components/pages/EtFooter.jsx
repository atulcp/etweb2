import React from 'react'
import { footerData } from '../../data/footerData'

const EtFooter = () => {
      return (
        <footer className="bg-black text-white py-10 pl-10">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
                {  
                    footerData.map((item, index) => (
                        <div key={index}>
                            <h5 className="font-bold mb-4 text-orange-600">{item.section}</h5>
                            <ul>
                                {item.sectionData.map((sectionItem, index) => (
                                    <li key={index} className='text-sm p-1 hover:text-orange-600 cursor-pointer'>
                                            {sectionItem.dataItem}
                                    </li>
                                ))}
                            </ul>
                        </div>  
                    ))}
            </div>
            <div className="text-center text-[10px]">
              © All rights reserved. Eternity Solutions Corp. 2017 - 2023.
            </div>
          </div>
        </footer>
        
  )
}

export default EtFooter