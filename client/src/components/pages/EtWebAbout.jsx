import React from 'react'
import EtNavbarTopMain from '../common/navbars/EtNavbarTopMain'
import { 
  whoAreWeImg, 
  journeyImg1, 
  ceoImg2, 
  ceoImg3,
  bgImg8,
  expImg1,
   } from '../../assets/img/imgAssets'

import { aboutJourneyData } from '../../data/aboutData'
import { testimonials } from '../../data/testimonialsData'

const EtWebAbout = () => {
  return (
    <div className="flex flex-col">
      <EtNavbarTopMain />
      <div
        className="relative h-screen flex items-center justify-center bg-scroll bg-cover bg-blend-screen"
        style={{ backgroundImage: `url(${whoAreWeImg})` }}
      >
        <div className="flex flex-row items-center justify-between w-full px-20">
          {/* Heading to the Left */}
          <h1 className="text-6xl text-orange-600 font-bold">Who are we?</h1>

          {/* Paragraph Text on the Right */}
          <p className="max-w-sm h-full leading-relaxed text-white text-4xl">
            A team of{" "}
            <span className="font-extrabold text-black text-4xl">mavericks</span> who
            can help{" "}
            <span className="font-bold text-white text-6xl">you</span>{" "}
            <span className="text-black font-extrabold">reimagine</span>{" "}
            and <span className="text-orange-600 font-extrabold">realize</span>{" "}
            limitless growth possibilities!
          </p>
        </div>
      </div>

      {/* Section - Who are we serving */}
      <div
        className="bg-white p-10 min-h-screen w-full"
        style={{
          backgroundImage: `url(${ceoImg2})`,
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="py-10">
          <h1 className="text-5xl text-orange-600 font-bold text-right">
            Who are we serving?
          </h1>

          <div className="relative">
            <div className="absolute translate-y-2 right-24">
              <p className="text-white text-8xl font-bold max-w-md leading-relaxed">
                You!
              </p>
            </div>
            <div className="absolute translate-y-40 right-0">
              <p className="text-white text-3xl max-w-sm leading-relaxed text-center">
                A Technology services{" "}
                <span className="text-orange-600 font-extrabold">CEO</span> and
                your teams who are hungry to make a difference and are{" "}
                <span className="text-orange-600 font-extrabold">aspiring</span>{" "}
                to create greater growth.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section - Our Mission */}
      <div
        className="bg-white p-10 h-screen"
        style={{
          backgroundImage: `url(${ceoImg3})`,
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <h2 className="text-6xl font-bold mb-4 text-orange-600">
          What is our mission?
        </h2>
        <div className="w-20 h-1 bg-gray-600" />
        <p className="text-white text-4xl max-w-md leading-relaxed py-5">
          To empower you to become a{" "}
          <span className="text-orange-600 font-extrabold">super CEO</span> and
          create consistently outstanding growth for yourself and your
          organization by unlocking the{" "}
          <span className="text-orange-600 font-extrabold">99%</span> of your{" "}
          <span className="text-orange-600 font-extrabold">untapped</span> and
          wasted potential.
        </p>
      </div>

      {/* Section - Our Journey */}
      <div
        className="bg-white p-10 h-screen"
        style={{
          backgroundImage: `url(${journeyImg1})`,
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <h2 className="text-6xl font-bold mb-4 text-orange-600">Our Journey</h2>
        <div className="w-20 h-1 bg-gray-600" />
        <p className="text-white text-4xl max-w-md py-5 leading-relaxed">
          Helping tech services leaders and professionals to create and embark
          on a new journey of greater
          <span className="text-orange-600 font-extrabold"> growth</span>,
          greater{" "}
          <span className="text-orange-600 font-extrabold">impacts</span> and
          greater{" "}
          <span className="text-orange-600 font-extrabold">experiences</span>.
        </p>
        <div className="relative">
          <div className="absolute -bottom-16 right-0 flex justify-between items-center">
            {aboutJourneyData.map((item, index) => (
              <div
                id={index}
                className="w-40 mr-[1px] p-2 rounded bg-transparent border border-gray-300"
              >
                <div className="flex flex-col justify-between items-center">
                  <img src={item.icon} className="w-12 h-12" alt="icon" />
                  <div className="h-[1px] w-10 bg-gray-400" />
                  <div className="flex flex-col items-center justify-center py-1">
                    <p className="font-bold text-white text-4xl">{item.head}</p>
                    <p className="text-xl text-orange-600 px-2">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section - Our Impact - Testimonials */}
      <div
        className="bg-white p-10 min-h-screen"
        style={{
          backgroundImage: `url(${expImg1})`,
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <div className=''>
          <h2 className="text-6xl font-bold my-4 text-orange-600">
          Experiences we work for...</h2>
        <div className=" w-20 h-1 bg-gray-600" />
        </div>

          <div className='py-10 my-10 mx-auto h-full'>
            <div className='grid gap-0 grid-cols-2 my-2 py-2'>
                {testimonials.map((item, index) => (
                  <div id={index} className='my-1 p-4 w-5/6 mx-auto rounded border bg-black opacity-80'>
                    <p className='text-white text-xl p-2'><span className='text-2xl font-extrabold'>"</span>{item.comment}<span className='text-2xl font-extrabold'>"</span> </p>
                  </div>
                ))} 
            </div>
            
          </div>
        </div>

      {/* Section - Our Guiding Principles */}
      <div
        className="bg-white p-10 h-screen"
        style={{
          backgroundImage: `url(${bgImg8})`,
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <h2 className="text-6xl font-bold mb-4 text-orange-600">Our Approach</h2>
        <div className="w-20 h-1 bg-gray-600" />
        <p className="text-white text-4xl max-w-md py-5 leading-relaxed">
          Magnetization!
        </p>

      </div>
    </div>
  )
}

export default EtWebAbout