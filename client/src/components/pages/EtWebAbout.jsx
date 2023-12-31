import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import EtNavbarTopMain from '../common/navbars/EtNavbarTopMain';
import { whoAreWeImg, journeyImg1, ceoImg2, ceoImg3, expImg1,etValues1, bgImg9 } from '../../assets/img/imgAssets';
import { testimonials } from '../../data/testimonialsData';
import { aboutJourneyData } from '../../data/aboutData'
import { Roll } from 'react-swift-reveal';

const fromBottomVariant = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 1 } }
};

const fromTopVariant = {
  hidden: { y: -50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 1 } }
};

const fromRightVariant = {
  hidden: { x: 100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 1, type: "spring" } }
};

const fromLeftVariant = {
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 1, type: "spring" } }
};

const zoomInVariant = {
  hidden: { scale: 0.5, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 1 } }
};

const carouselVariant = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } }
};

const testimonialVariant = {
  hover: { scale: 1.05, transition: { duration: 0.3 } },
  initial: { opacity: 0.8 },
  animate: { opacity: 1, transition: { duration: 1 } }
};

const EtWebAbout = () => {
  const [visibleTestimonials, setVisibleTestimonials] = useState([]);

  const circlePath = {
    x: [0, 50, 100, 50, 0, -50, -100, -50, 0],
    y: [0, -50, 0, 50, 100, 50, 0, -50, 0],
  };
  
  // Function to get three random testimonials
  const getRandomTestimonials = () => {
    let randomTestimonials = [];
    let usedIndexes = new Set();

    while (randomTestimonials.length < 3) {
      let randomIndex = Math.floor(Math.random() * testimonials.length);
      if (!usedIndexes.has(randomIndex)) {
        randomTestimonials.push(testimonials[randomIndex]);
        usedIndexes.add(randomIndex);
      }
    }

    return randomTestimonials;
  };

  useEffect(() => {
    setVisibleTestimonials(getRandomTestimonials());
  
    const interval = setInterval(() => {
      setVisibleTestimonials(getRandomTestimonials());
    }, 3000); // Rotate testimonials every 3 seconds
  
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="flex flex-col">
      <EtNavbarTopMain />
      
      <motion.div
        className="relative h-screen flex items-center justify-center bg-scroll bg-cover bg-blend-screen"
        style={{ backgroundImage: `url(${whoAreWeImg})` }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="flex flex-row items-center justify-between w-full px-20">
          <motion.h1 className="text-6xl text-orange-600 font-bold" variants={fromBottomVariant}>
            Who are we?
          </motion.h1>

          <motion.p className="max-w-sm h-full leading-relaxed text-white text-4xl text-center" variants={fromTopVariant}>
            A team of <span className="font-bold text-black text-6xl">mavericks</span> who can help <span className="font-bold text-black text-6xl">you</span> <span className="text-orange-600 font-extrabold">reimagine</span> and <span className="text-orange-600 font-extrabold">realize</span> limitless growth possibilities!
          </motion.p>
        </div>
      </motion.div>

      <div className="bg-white p-10 min-h-screen w-full" style={{ backgroundImage: `url(${ceoImg2})`, backgroundSize: "cover", backgroundAttachment: "fixed" }}>
        <motion.div className="py-10" variants={fromRightVariant} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.95 }}>
          <h1 className="text-5xl text-orange-600 font-bold text-right">Who are we serving?</h1>

          <div className="relative">
            <div className="absolute translate-y-2 right-24">
              <p className="text-white text-8xl font-bold max-w-md leading-relaxed">You!</p>
            </div>
            <div className="absolute translate-y-40 right-0">
              <p className="text-white text-3xl max-w-sm leading-relaxed text-center">A Technology services <span className="text-orange-600 font-extrabold">CEO</span> and your teams who are hungry to make a difference and are <span className="text-orange-600 font-extrabold">aspiring</span> to create greater growth.</p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="bg-white p-10 h-screen" style={{ backgroundImage: `url(${ceoImg3})`, backgroundSize: "cover", backgroundAttachment: "fixed" }}>
        <motion.div variants={fromLeftVariant} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.95 }}>
          <h2 className="text-6xl font-bold mb-4 text-orange-600">What is our mission?</h2>
          <div className="w-20 h-1 bg-gray-600" />
          <p className="text-white text-4xl max-w-md leading-relaxed py-5">To empower you to become a <span className="text-orange-600 font-extrabold">super CEO</span> and create consistently outstanding growth for yourself and your organization by unlocking the <span className="text-orange-600 font-extrabold">99%</span> of your <span className="text-orange-600 font-extrabold">untapped</span> potential.</p>
        </motion.div>
      </div>

      <div className="bg-white p-10 h-screen" style={{ backgroundImage: `url(${journeyImg1})`, backgroundSize: "cover", backgroundAttachment: "fixed" }}>
        <motion.div variants={zoomInVariant} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2 className="text-6xl font-bold mb-4 text-orange-600">Our Journey</h2>
        </motion.div>
        <motion.div variants={zoomInVariant} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <p className="text-white text-4xl max-w-md py-5 leading-relaxed">Helping tech services leaders and professionals to create and embark on a new journey of greater <span className="text-orange-600 font-extrabold">growth</span>, greater <span className="text-orange-600 font-extrabold">impacts</span> and greater <span className="text-orange-600 font-extrabold">experiences</span>.</p>
        </motion.div>

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

      <div className="bg-white p-10 min-h-screen relative" style={{ backgroundImage: `url(${expImg1})`, backgroundSize: "cover", backgroundAttachment: "fixed" }}>
        <motion.div className='absolute top-0 left-0 right-0 flex justify-center' variants={carouselVariant} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <div className="text-center">
            <h2 className="text-6xl font-bold text-orange-600 inline-block relative">
              Ex<span className="rest-of-title">periences we work for...</span>
              <div className="absolute w-20 h-1 bg-gray-600" style={{ bottom: '-10px', left: '0' }} />
            </h2>
          </div>
        </motion.div>
        <div className='py-20 mx-auto h-full'>
          <div className='grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4'>
            <motion.div
            className="p-4 bg-gradient-to-r from-gray-700 to-gray-900 rounded-lg shadow-2xl flex items-center justify-center h-48"
            animate={circlePath}
            transition={{ duration: 4, loop: Infinity, ease: "linear" }}
            >
              <p className='text-white text-lg text-center'>{visibleTestimonials[0]?.comment}</p>
            </motion.div>
            
            <motion.div 
            className='col-span-1 row-span-1 md:col-start-3 p-4 bg-gradient-to-r from-gray-700 to-gray-900 rounded-lg shadow-2xl transform hover:scale-105 transition duration-500 flex items-center justify-center h-48'
            animate={circlePath}
            transition={{ duration: 4, loop: Infinity, ease: "linear" }}
            >
              <p className='text-white text-lg text-center'>{visibleTestimonials[2]?.comment}</p>
            </motion.div>

            <motion.div 
            className='mt-10 col-span-1 md:col-start-2 md:col-span-1 md:row-start-2 p-4 bg-gradient-to-r from-gray-700 to-gray-900 rounded-lg shadow-2xl transform hover:scale-105 transition duration-500 flex items-center justify-center h-48' 
            animate={circlePath}
            transition={{ duration: 4, loop: Infinity, ease: "linear" }}
            >
              <p className='text-white text-lg text-center'>{visibleTestimonials[1]?.comment}</p>
            </motion.div>
          </div>
        </div>
      </div>

     {/* Section - Our Guiding Principles */}
      <div
        className="bg-[#00030E] p-10 h-screen"
        style={{
          backgroundImage: `url(${bgImg9})`,
          backgroundSize: "100%",
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: "fixed",
          backgroundPosition: 'center',
        }}
      >
        <Roll right duration={3000} delay={100} forever={false}>
          <h2 className="text-6xl text-center font-bold my-4 text-orange-600">Our Guiding Values</h2>
          <div className="w-20 h-1 bg-gray-600 mx-auto" />
        </Roll>
        <Roll left duration={3000} delay={100} big={true}>
            <img src={etValues1} alt="" className='mx-auto my-5 rounded-2xl shadow-slate-600 shadow-2xl z-40 h-3/4 w-1/2'/>
        </Roll>
        
        



      </div>
    </div>
  );
};

export default EtWebAbout;
