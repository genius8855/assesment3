import React from 'react';
import Vector from '../assets/Vector.png';
import Frame from '../assets/Frame.png';
import Rectangle from '../assets/Rectangle.png';
import left from '../assets/left.png';
import right from '../assets/right.png';
import { useState, useRef } from 'react';

function Component() {

  const [imageSrcs, setImageSrcs] = useState([]);
  const fileInputRef = useRef(null);
  const scrollContainerRef = useRef(null);

  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    const newImageSrcs = [];

    files.forEach((file) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        newImageSrcs.push(reader.result);
        if (newImageSrcs.length === files.length) {
          setImageSrcs((prevImages) => [...prevImages, ...newImageSrcs]);
        }
      };
      reader.readAsDataURL(file);
    });
    event.target.value = null;
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  // Scroll left
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -150,
        behavior: 'smooth',
      });
    }
  };

  // Scroll right
  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 150,
        behavior: 'smooth',
      });
    }
  };

  const [activeSection, setActiveSection] = useState('');
  const [sliderPosition, setSliderPosition] = useState(0);

  const handleClick = (section, index) => {
    setActiveSection(section);
    setSliderPosition(index);
  };



  return (
    <div className="flex min-h-screen">

      {/* Hidden Part */}
      <div className="hidden md:flex md:flex-1 bg-bg2 flex items-center justify-center">
      </div>

      <div className="flex-1 bg-bg2 flex flex-col items-center justify-center">

        <div className='w-full flex max-w-[620px] min-h-[290px] my-[20px] mx-auto px-4 rounded-[15px] bg-bg1 shadow-gray sm:m-2 '>

          {/* Left image */}
          <div className='w-[100px] h-[160px] left-0 ml-2 flex flex-col justify-between '>
            <img src={Vector} alt='vector.png' className=' py-3' />
            <img src={Frame} alt='vector.png' className='' />
          </div>

          {/* Middle */}
          <div className='items-center w-auto h-auto mx-6 '>
            <div className="relative h-[49px] w-auto bg-black flex my-4 rounded-2xl justify-center text-center items-center">

              {/* Background Slider */}
              <div
                className="absolute top-0 h-full bg-gray-600 rounded-xl transition-all duration-500 ease-in-out"
                style={{ left: `${sliderPosition * 33.33}%`, width: '33.33%' }} // Slider moves across the sections
              />

              {/* About Me Section */}
              <div
                onClick={() => handleClick('About Me', 0)} // First section position
                className={`relative z-10 m-auto p-auto text-clr4 cursor-pointer h-[25px] w-1/4 transition-all duration-500 ease-in-out`}
              >
                About Me
              </div>

              {/* Experiences Section */}
              <div
                onClick={() => handleClick('Experiences', 1)} // Second section position
                className={`relative z-10 m-auto p-auto text-clr4 cursor-pointer h-[25px] w-1/4 transition-all duration-500 ease-in-out`}
              >
                Experiences
              </div>

              {/* Recommended Section */}
              <div
                onClick={() => handleClick('Recommended', 2)} // Third section position
                className={`relative z-10 m-auto p-auto text-clr4 cursor-pointer h-[25px] w-1/4 transition-all duration-500 ease-in-out`}
              >
                Recommended
              </div>
            </div>


            <div className='w-auto h-auto text-clr3 m-auto p-auto my-4 font-jakarta whitespace-pre-line '>
              Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.
              I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calendar is usually blocked between 9-10 AM.
            </div>
          </div>

          {/* Right */}
          <div className='w-[100px] h-auto ml-auto  items-center my-auto '>
            <img src={Rectangle} alt='rectangle.png' className='justify-between' />
          </div>
        </div>

        <div className='w-full max-w-[520px] h-[4px] bg-bg1 mx-4 my-4 '></div>

        {/* Second box */}
        <div className='flex w-full max-w-[620px] min-h-[290px] my-[20px] mx-auto rounded-[15px] bg-bg1 shadow-gray sm:m-2'>

          <div className='w-[65px] h-[160px] left-0 ml-2 flex flex-col justify-between pl-4 pt-4'>
            <img src={Vector} alt='vector.png' className='w-5 h-5' />
            <img src={Frame} alt='vector.png' className='w-5 h-6' />
          </div>

          <div className='w-full mr-12'>
            <div className='h-[49px] w-auto flex my-4 rounded-2xl justify-between'>
              <div className='w-1/2 h-full text-white text-center text-left '>
                <div className='w-[130px] h-full text-white bg-black py-3 text-[1rem] rounded-2xl'>Gallery</div>
              </div>

              <div className='flex items-center justify-between w-1/2'>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleImageUpload}
                  style={{ display: 'none' }}
                />
                <button className='w-[130px] h-full bg-gray-600 text-white rounded-3xl text-[0.8rem] font-bold hover:animate-bounce' onClick={triggerFileInput}>+ ADD IMAGE</button>

                <button className='w-[38px] h-[38px] bg-gray-800 rounded-full hover:animate-pulse hover:animate-bounce' onClick={scrollLeft}>
                  <img src={left} alt='left.png' className='mx-auto my-auto' />
                </button>
                <button className='w-[38px] h-[38px] bg-gray-800 rounded-full hover:animate-pulse hover:animate-bounce' onClick={scrollRight}>
                  <img src={right} alt='right.png' className='mx-auto my-auto' />
                </button>
              </div>
            </div>

            {/* Image container with hidden scrollbar */}
            <div
              id='here'
              ref={scrollContainerRef}
              className=' w-full h-[200px] flex overflow-hidden '
              style={{ scrollBehavior: 'smooth' }}
            >
              {/* Render images here */}
              {imageSrcs.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Uploaded ${index}`}
                  className='w-[150px] h-[150px] m-2 grayscale hover:grayscale-0 transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110 duration-300'
                  style={{ objectFit: 'cover' }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Component;
