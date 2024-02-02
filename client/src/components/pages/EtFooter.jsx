import React from 'react'

const EtFooter = () => {
      return (
        <footer className="bg-black text-white py-8">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div>
                <h5 className="font-bold mb-4 text-orange-600">Eternity Solutions Corp</h5>
                <ul>
                  <li className='text-sm'>connect@eternity-solutions.com</li>
                  <li className='text-sm'>+1 (650) 554-1520</li>
                  
                </ul>
              </div>
              <div>
                <h5 className="font-bold mb-4 text-orange-600">Services</h5>
                <ul>
                  <li className='text-sm'>Personal Effectiveness</li>
                  <li className='text-sm'>Team Effectiveness</li>
                  <li className='text-sm'>Leadership Effectiveness</li>
                  
                </ul>
              </div>
              <div>
                <h5 className="font-bold mb-4 text-orange-600">Our Story</h5>
                <ul>
                  <li className='text-sm'>The Genesis</li>
                  <li className='text-sm'>Starting Days</li>
                  <li className='text-sm'>Last 6 years</li>
                  <li className='text-sm'>Now and Ahead</li>
                </ul>
              </div>
              <div>
                <h5 className="font-bold mb-4 text-orange-600">Et for you</h5>
                <ul>
                  <li>Clients</li>
                  <li>Partners</li>
                  <li>Community</li>
            
                </ul>
              </div>
            </div>
            <div className="text-center text-sm">
              © All rights reserved. Eternity Solutions Corp. 2017 - 2023.
            </div>
          </div>
        </footer>
  )
}

export default EtFooter