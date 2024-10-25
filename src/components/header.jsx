import Your_info from "./your_info";
import Plan from './plan'
import Pick from './pick'
import Finishing from "./finishing";
import Thanks from './Thanks'
import Button from './button'

import { useState } from "react";

const Header = () => {
   const [count, setcount] = useState(1)
   const [visibilty, setvisibility] = useState('hidden');
   const [visibilty2, setvisibility2] = useState('hidden');
   const [visibilty3, setvisibility3] = useState('hidden');
   const [total_money,settotal_money] = useState(0);
   
const [Month,setMonth] = useState(true);
const [Year,setYear] = useState(false);
   console.log("value of count at header=",count)
   console.log(total_money,'total_money')

   const [c1,setindex0] =useState(-1);
   const [c2,setindex1] = useState(-1);
   const [c3,setindex2] = useState(-1);
let at_page1_clr = 'bg-none';
let at_page2_clr = 'bg-none';
let at_page3_clr = 'bg-none';
let at_page4_clr = 'bg-none';
if(count==1){
   at_page1_clr = 'bg-white text-black';
}
if(count==2){
   at_page2_clr = 'bg-white text-black';
}
if(count==3){
   at_page3_clr = 'bg-white text-black';
}
if(count==4){
   at_page4_clr = 'bg-white text-black';
}
    
   const data = (data) => {

      if (click_btn(data)) {

         setcount(count + 1)
      }
     

   }

   const click_btn = (data) => {

      let indx = 0;
      if (data.name === '') {
         setvisibility((p) => {
            indx++
            return "block"
         })
      }
      if (data.email === '') {
         setvisibility2((p) => {
            indx++
            return "block"
         })
      }
      if (data.number === '') {
         setvisibility3((p) => {
            indx++
            return "block"
         })
      }
      if (indx == 0) {

         return true;
      } else {

         return false;
      }


   }




   return (
      <>
         <section className="sm:min-h-screen  flex justify-center sm:items-center  sm:bg-[#f0f6ff] font-ubuntu pb-10 min-h-[680px]">
            <div className=" flex  sm:bg-white  sm:min-w-[50%] sm:gap-6 sm:p-2   sm:rounded-xl shadow-custom-shadow  sm:flex-row xss:flex-col xss:relative sm:static xss:min-w-full relative bg-[#bfe2fd]" >
               <div className=" sm:bg-[url('./assets/desktop_sidebar.svg')] bg-cover bg-center sm:rounded-xl sm:w-[30%]   flex justify-start sm:p-4 xss:bg-[url('./assets/mobile.svg')]    absolute sm:static xss:w-full top-0 min-h-[200px]">

                  < div className="text-white sm:p-2  xss:flex sm:flex-col xss:gap-4 sm:gap-0 xss:mx-auto mb-24">
                     <div className="flex  justify-center items-center mt-3 gap-2 ">
                        {/* 1 */}
                        <div className={`border-2 border-white w-8 h-8 rounded-full flex justify-center items-center ${at_page1_clr} `}> <p >1</p>
                        </div>
                        <div className=" text-[12px] leading-tight text-[#9896FE] font-[400] sm:block xss:hidden" ><p> STEP 1</p>
                           <p className=" leading-tight text-[16px] font-[500] xss:hidden  sm:block">YOUR INFO</p></div>
                     </div>
                     {/* 2 */}
                     <div className="flex  justify-center items-center mt-3 gap-2">
                        <div className={`border-2 border-white w-8 h-8 rounded-full flex justify-center items-center ${at_page2_clr} `}> <p  >2</p>
                        </div>
                        <div className=" text-[12px] leading-tight text-[#9896FE] font-[400]  sm:block xss:hidden" ><p> STEP 1</p>
                           <p className="text-white leading-tight text-[16px] font-[500] ">YOUR INFO</p></div>
                     </div>
{/* 3 */}
                     <div className="flex   justify-center items-center mt-3 gap-2">
                        <div className={`border-2 border-white w-8 h-8  rounded-full flex justify-center items-center ${at_page3_clr}`}> <p >3</p>
                        </div>
                        <div className=" leading-tight xss:hidden sm:block"><p className="text-[12px]  text-[#9896FE]">STEP 3</p>
                           <p className=" text-white">ADD ONES</p></div>
                     </div>
                     <div className="flex  justify-center items-center mt-3 gap-2">
                        {/* 4 */}
                        <div className={`border-2 border-white w-8 h-8  rounded-full flex justify-center items-center ${at_page4_clr}`}> <p >4</p>
                        </div>
                        <div className="  leading-tight xss:hidden sm:block"><p className="text-[12px]  text-[#9896FE] sm:block">STEP 4</p>
                           <p className="text-white  sm:block">SUMMARY</p></div>
                     </div>

                  </div>

               </div>
               
            <div className=" sm:w-[65%] px-10 pt-8 pb-10 ml-2  sm:static mt-[115px] z-50 bg-white xss:w-[92%] xss:mx-auto sm:mx-0 sm:mt-0 rounded-xl ">

                  {
                     count == 1 ? <Your_info data={data} visibilty={visibilty} click_btn={click_btn} visibilty2={visibilty2} visibilty3={visibilty3} /> : count == 2 ? <Plan click_btn={click_btn}  setcount={setcount} settotal_money={settotal_money} setMonth={setMonth} setYear={setYear}/> :
                        count == 3 ? <Pick click_btn={click_btn} setMonth={setMonth} Year={Year} setYear={setYear} setcount={setcount} count={count} settotal_money={settotal_money} setindex0={setindex0} setindex1={setindex1} setindex2={setindex2} /> : count == 4 ? <Finishing click_btn={click_btn} Year={Year} total_money={total_money}  setcount={setcount} c1={c1} c2={c2}  c3={c3} setYear={setYear} setMonth={setMonth} settotal_money={settotal_money}/> : null
                  }
                  
               </div>
            </div>

            
         </section>
        
      </>
   )
}

export default Header;