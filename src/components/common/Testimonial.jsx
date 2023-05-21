import React, { useState } from "react";
import {Box, Text,Image} from '@chakra-ui/react';
const testimonials = [
  {
    id: 1,
    name: "John Doe",
    jobTitle: "Web Developer",
    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 2,
    name: "Jane Smith",
    jobTitle: "Graphic Designer",
    comment: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 3,
    name: "Bob Johnson",
    jobTitle: "Marketing Specialist",
    comment: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  },
];






function TestimonialSlider() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const handlePrev = () => {
    setCurrentTestimonial((currentTestimonial - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentTestimonial((currentTestimonial + 1) % testimonials.length);
  };

  return (
    
    <div className="overflow-hidden rounded-lg shadow-2xl ">
      <div className="relative max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        
        <div className="w-3/4 max-w-2xl mb-6 lg:w-1/2 sm:mb-10 md:mb-16">
          <h2 className="text-2xl font-light font-semibold text-left text-black sm:text-3xl lg:text-4xl font-Bangers">
            See What Our Customers Are Saying About Us
          </h2>
        </div>

    

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          
          <div className="flex h-auto">
            <div className="flex flex-col bg-white rounded-xl ">
              <div className="flex-auto p-4 md:p-6">
                <p className="text-base italic text-black md:text-lg">
                  " With Preline, we're able to easily track our performance in full detail. It's become an essential tool for us to grow and engage with our audience. "
                </p>
              </div>
    
              <div style={{backgroundColor: '#E04C4C'}} className="p-4 rounded-b-xl md:px-7 ">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <img className="h-8 w-8 rounded-full sm:h-[2.875rem] sm:w-[2.875rem]" src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Image Description"/>
                  </div>
    
                  <div className="ml-3 grow">
                    <p className="text-sm font-semibold text-white sm:text-base ">
                      Josh Tyson
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-200">
                      Product Manager | Capsule
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
    
          
          <div className="flex h-auto">
            <div className="flex flex-col bg-white rounded-xl ">
              <div className="flex-auto p-4 md:p-6">
                <p className="text-base italic text-black md:text-lg ">
                  " In September, I will be using this theme for 2 years. I went through multiple updates and changes and I'm very glad to see the consistency and effort made by the team. "
                </p>
              </div>
    
              <div style={{backgroundColor: '#E04C4C'}} className="p-4 rounded-b-xl md:px-7 ">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <img className="h-8 w-8 rounded-full sm:h-[2.875rem] sm:w-[2.875rem]" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Image Description"/>
                  </div>
    
                  <div className="ml-3 grow">
                    <p className="text-sm font-semibold text-gray-800 sm:text-base dark:text-gray-200">
                      Luisa
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-200">
                      Senior Director of Operations | Fitbit
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
    
          
          <div className="flex h-auto">
            <div className="flex flex-col bg-white rounded-xl ">
              <div className="flex-auto p-4 md:p-6">
                <p className="text-base italic text-black md:text-lg ">
                  " Refreshing and Thought provoking design and it changes my view about how I design the websites. Great typography, modern clean white design, nice tones of the color. "
                </p>
              </div>
    
              <div style={{backgroundColor: '#E04C4C'}} className="p-4 rounded-b-xl md:px-7 ">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <img className="h-8 w-8 rounded-full sm:h-[2.875rem] sm:w-[2.875rem]" src="https://images.unsplash.com/photo-1579017331263-ef82f0bbc748?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80" alt="Image Description"/>
                  </div>
    
                  <div className="ml-3 grow">
                    <p className="text-sm font-semibold text-gray-800 sm:text-base dark:text-gray-200">
                      Alisa Williams
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-200">
                      Entrepreneur | Happy customer
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
        
    
        
        <div className="grid grid-cols-2 gap-6 mt-20 sm:gap-12 lg:grid-cols-3 lg:gap-8">
          
          <div>
            <h4 className="text-lg font-semibold text-gray-400 sm:text-xl">Accuracy rate</h4>
            <p className="mt-2 text-4xl font-bold text-red-400 sm:mt-3 sm:text-6xl">99.95%</p>
            <p className="mt-1 text-gray-400">In Fulfilling Orders On Time</p>
          </div>
          
    
          
          <div>
            <h4 className="text-lg font-semibold text-gray-400 sm:text-xl">Startup Businesses</h4>
            <p className="mt-2 text-4xl font-bold text-red-400 sm:mt-3 sm:text-6xl">2,000+</p>
            <p className="mt-1 text-gray-400">Partner With Site Smiths</p>
          </div>
          
    
          
          <div>
            <h4 className="text-lg font-semibold text-gray-400 sm:text-xl">Happy customer</h4>
            <p className="mt-2 text-4xl font-bold text-red-400 sm:mt-3 sm:text-6xl">85%</p>
            <p className="mt-1 text-gray-400">this year alone</p>
          </div>
          
        </div>
        
    
        
        <div className="absolute bottom-0 right-0 transform lg:translate-x-32" aria-hidden="true">
          <svg className="w-40 h-auto sm:w-72" width="1115" height="636" viewBox="0 0 1115 636" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.990203 279.321C-1.11035 287.334 3.68307 295.534 11.6966 297.634L142.285 331.865C150.298 333.965 158.497 329.172 160.598 321.158C162.699 313.145 157.905 304.946 149.892 302.845L33.8132 272.418L64.2403 156.339C66.3409 148.326 61.5475 140.127 53.5339 138.026C45.5204 135.926 37.3213 140.719 35.2207 148.733L0.990203 279.321ZM424.31 252.289C431.581 256.26 440.694 253.585 444.664 246.314C448.635 239.044 445.961 229.931 438.69 225.96L424.31 252.289ZM23.0706 296.074C72.7581 267.025 123.056 230.059 187.043 212.864C249.583 196.057 325.63 198.393 424.31 252.289L438.69 225.96C333.77 168.656 249.817 164.929 179.257 183.892C110.144 202.465 54.2419 243.099 7.92943 270.175L23.0706 296.074Z" fill="currentColor" className="fill-red-400"/>
            
            <path d="M447.448 0.194357C439.203 -0.605554 431.87 5.43034 431.07 13.6759L418.035 148.045C417.235 156.291 423.271 163.623 431.516 164.423C439.762 165.223 447.095 159.187 447.895 150.942L459.482 31.5025L578.921 43.0895C587.166 43.8894 594.499 37.8535 595.299 29.6079C596.099 21.3624 590.063 14.0296 581.818 13.2297L447.448 0.194357ZM1086.03 431.727C1089.68 439.166 1098.66 442.239 1106.1 438.593C1113.54 434.946 1116.62 425.96 1112.97 418.521L1086.03 431.727ZM434.419 24.6572C449.463 42.934 474.586 81.0463 521.375 116.908C568.556 153.07 637.546 187.063 742.018 200.993L745.982 171.256C646.454 157.985 582.444 125.917 539.625 93.0974C496.414 59.978 474.537 26.1903 457.581 5.59138L434.419 24.6572ZM742.018 200.993C939.862 227.372 1054.15 366.703 1086.03 431.727L1112.97 418.521C1077.85 346.879 956.138 199.277 745.982 171.256L742.018 200.993Z" fill="currentColor" className="fill-red-400"/>
          </svg>
        </div>
        
      </div>
    </div>
    
  );
}


const styles = {
  container: {

  }
}


export default TestimonialSlider;