import { Box, Badge, Heading, Text, Link, Icon } from "@chakra-ui/react";
import { FiDownload } from "react-icons/fi";
import Headline from "./Headline";
function Stepper() {
  return (
    <Box pt={['150px', '150px','150px', '100px']} >
<Headline/>


<section className="max-w-5xl py-20 mx-auto">
   <div>
      <div className="flex flex-row">
         <div className="flex-col items-center hidden md:flex">
            <div className="flex flex-col items-center justify-center w-32 py-5 mr-4 uppercase bg-red-500 border border-gray-300 rounded-xl ">
               <div className="text-3xl font-black text-white font-Mont">01</div>
               <div className="text-lg font-bold text-white font-mont">Brief</div>
            </div>
            
            <div className="h-full border-l-4 border-transparent">
               <div className="h-full mr-4 border-l-4 border-gray-300 border-dashed"></div>
            </div>
         </div>
         <div className="flex-auto border border-gray-300 rounded-xl">
            <div className="flex flex-col items-center md:flex-row">
               <div className="flex-auto ">
                  <div className="pt-3 pl-3 text-sm font-normal text-gray-500 uppercase md:hidden"><span className="font-black">Step 1</span> - Brief</div>
                  
                  <Text as='p' paddingTop='10px' fontWeight='bold' fontSize='24px' color='#504F50' fontFamily='Merriweather' ml='7px'>Discuss Your Best Ideas</Text>
                  <div className="px-3 pb-6 font-medium font-Mont" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam facilis, voluptates error alias dolorem praesentium sit soluta iure incidunt labore explicabo eaque, quia architecto veritatis dolores, enim consequatur nihil ipsum.</div>
               </div>

               {/* IMAGE CONTAINER */}
               {/* <div className="w-full p-5 md:w-96"><img src="https://image.flaticon.com/icons/svg/1330/1330216.svg" alt="step 1" className="object-scale-down"/>
               </div> */}



            </div>
         </div>
      </div>





      <div className="flex flex-row items-start">
         <div className="border-t-4 border-r-4 border-transparent">
            <div className="w-16 h-16 ml-16 border-b-4 border-l-4 border-red-500 border-dashed rounded-bl-full"></div>
         </div>
         <div className="flex-auto border-t-4 border-transparent ">
            <div className="h-16 border-b-4 border-gray-300 border-dashed"></div>
         </div>
         <div className="w-16 h-16 mt-16 mr-16 border-t-4 border-r-4 border-red-500 border-dashed rounded-tr-full"></div>
      </div>
      <div className="flex flex-row-reverse">
         <div className="flex-col items-center hidden md:flex">
            <div className="flex flex-col items-center justify-center w-32 py-5 ml-4 uppercase bg-red-500 border border-gray-300 rounded-lg">
               <div className="text-3xl font-black text-white font-Mont">02</div>
               <div className="text-lg font-bold text-white font-Mont">Design <br/> Phase</div>
            </div>
            <div className="h-full border-r-4 border-transparent">
               <div className="h-full ml-4 border-l-4 border-gray-300 border-dashed"></div>
            </div>
         </div>
         <div className="flex-auto border border-gray-300 rounded-xl">
            <div className="flex flex-col items-center md:flex-row">
               <div className="flex-auto">
                  {/* <div className="pt-3 pl-3 text-sm font-normal text-gray-500 uppercase md:hidden"><span className="font-black">Step 2</span> - Collaboration</div> */}
                  <Text as='p' paddingTop='10px' fontWeight='bold' fontSize='24px' color='#504F50' fontFamily='Merriweather' ml='7px'>Find Your Team And Collaborate</Text>
                  <div className="px-3 pb-6 text-sm font-medium font-Mont">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam facilis, voluptates error alias dolorem praesentium sit soluta iure incidunt labore explicabo eaque, quia architecto veritatis dolores, enim consequatur nihil ipsum.</div>
               </div>


               {/* IMAGE CONTAINER */}
               {/* <div className="w-full p-5 md:w-96"><img src="https://image.flaticon.com/icons/svg/1330/1330216.svg" alt="step 2" className="object-scale-down"/></div> */}
            </div>
         </div>
      </div>
      <div className="flex items-start f lex-row-reverse">
         <div className="border-t-4 border-l-4 border-transparent">
            <div className="w-16 h-16 mr-16 border-b-4 border-r-4 border-red-500 border-dashed rounded-br-full"></div>
         </div>
         <div className="flex-auto border-t-4 border-transparent">
            <div className="h-16 border-b-4 border-red-500 border-dashed"></div>
         </div>
         <div className="w-16 h-16 mt-16 ml-16 border-t-4 border-l-4 border-gray-300 border-dashed rounded-tl-full"></div>
      </div>
      <div className="flex flex-row">
         <div className="flex-col items-center hidden md:flex">
            <div className="flex flex-col items-center justify-center w-32 py-5 mr-4 uppercase bg-red-500 border border-gray-300 rounded-lg">
               <div className="text-3xl font-black text-white font-Mont">03</div>
               <div className="text-sm font-bold text-white font-mont">Planification</div>
            </div>
            <div className="h-full border-l-4 border-transparent">
               <div className="h-full mr-4 border-l-4 border-red-500 border-dashed"></div>
            </div>
         </div>
         <div className="flex-auto border border-gray-300 rounded">
            <div className="flex flex-col items-center md:flex-row">
               <div className="flex-auto">
                  <div className="pt-3 pl-3 text-sm font-normal text-gray-500 uppercase md:hidden"><span className="font-black">Step 3</span> - Planification</div>
                  <Text as='p' paddingTop='10px' fontWeight='bold' fontSize='24px' color='#504F50' fontFamily='Merriweather' ml='7px'>Make A Good Plan & Prepare Tasks</Text>
                  <div className="px-3 pb-6 text-sm font-medium font-Mont">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam facilis, voluptates error alias dolorem praesentium sit soluta iure incidunt labore explicabo eaque, quia architecto veritatis dolores, enim consequatur nihil ipsum.</div>
               </div>
               
            </div>
         </div>
      </div>
      <div className="flex flex-row items-start">
         <div className="border-t-4 border-r-4 border-transparent">
            <div className="w-16 h-16 ml-16 border-b-4 border-l-4 border-red-500 border-dashed rounded-bl-full"></div>
         </div>
         <div className="flex-auto border-t-4 border-transparent">
            <div className="h-16 border-b-4 border-gray-300 border-dashed"></div>
         </div>
         <div className="w-16 h-16 mt-16 mr-16 border-t-4 border-r-4 border-red-500 border-dashed rounded-tr-full"></div>
      </div>
      <div className="flex flex-row-reverse">
         <div className="flex-col items-center hidden md:flex">
            <div className="flex flex-col items-center justify-center w-32 py-5 ml-4 uppercase bg-red-500 border border-gray-300 rounded-lg">
               <div className="text-3xl font-black text-white font-Mont">4</div>
               <div className="font-bold text-white text-md font-mont">Implement</div>
            </div>
         </div>
         <div className="flex-auto border border-gray-300 rounded">
            <div className="flex flex-col items-center md:flex-row">
               <div className="flex-auto">
                  <div className="pt-3 pl-3 text-sm font-normal text-gray-500 uppercase md:hidden"><span className="font-black">Step 4</span> - Implementation</div>
                  <Text as='p' paddingTop='10px' fontWeight='bold' fontSize='24px' color='#504F50' fontFamily='Merriweather' ml='7px'>Execute, Implement Your Solution</Text>
                  <div className="px-3 pb-6 text-sm font-sm font-Mont " >Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam facilis, voluptates error alias dolorem praesentium sit soluta iure incidunt labore explicabo eaque, quia architecto veritatis dolores, enim consequatur nihil ipsum.</div>
               </div>
               
            </div>
         </div>
      </div>
   </div>
</section>
</Box>
  );
}



export default Stepper;