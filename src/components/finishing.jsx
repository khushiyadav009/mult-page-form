import { useState } from 'react'
import Heading from './heading'
import Btn from './button'
const Finishing = ({click_btn,Year,total_money,setcount,c1,c2,c3,settotal_money,setMonth,setYear})=>{
    let duration 
    let duration1 = ('per year')
    let heading = 'Finishing Up';

    let desc = 'Double check everything looks Ok before confirm'
  const btn_type = 'confirm';
  let money = 0;
  let mul = 1;
  let prev_money ;

const index_arr = [];

if(c1==0){
  index_arr.push(c1);
}if(c2==1){
  index_arr.push(c2);
}
if(c3==2){
  index_arr.push(c3)
}
console.log("checked index")
for( var i=0;i<index_arr.length;i++){
  console.log(index_arr[i]);
}

    const btn_color = 'blue-800'
    if(Year){
      console.log("you selected year")
      money = '/yr'
      mul = 10;
      prev_money = total_money-3*10;
      duration = 'yearly'
    }else{
      console.log("you selected month");
      money = '/m'
    prev_money = total_money-3;
    duration = 'monthly'
    duration1 = 'per month'
    }
    const arr = [
      {
heading:'online services',
money:`$${1*mul}${money}`,
visible:'block'
    },
      {
heading:'large Storage',
money:`$${2*mul}${money}`,
visible:'block'
    },
      {
heading:'Customizable Profile',
money:`$${3*mul}${money}`,
visible:'block'
    },

  ]

  const go_back = ()=>{
    console.log("button is clicked");
    if(c1==0){
     settotal_money((prev)=>prev-(1 * mul ))
    }if(c2==1){
settotal_money((prev)=>prev-(2 * mul ))
    }else{
      settotal_money((prev)=>prev-(3 * mul ))
    }
    
    setcount((prev)=>prev-1);
  }
  const move_to_plan=()=>{
    setMonth(true);
    setYear(false);
settotal_money((prev)=>prev-prev);
setcount(2);
  }
    return (
        <>
    <Heading heading={heading} desc={desc} />
    <div className=' bg-[#f0f6ff] mt-8  p-2'>
<Card1 heading={'Arcade '}  money={`$${prev_money}${money}`} duration={duration} move_to_plan={move_to_plan}/>
<div className='  py-2 mt-1 '>
    <div className='border-b-2 border-[#9699ab] w-[90%] mx-auto'></div>
</div>
{
   index_arr.map((index)=>{
    const val = arr[index];
      return <Card2 heading={val.heading} money={val.money}visible={val.visible} hidden={val.hidden}/>
    })



}



</div>

<div className='flex justify-between px-1 mt-4'>
 <div>
 <p className='text-[#9699ab]'>Total{`(${duration1})`}</p>
 </div>
 <div className=''><p className='font-[500] text-[16px] text-[#473dff] '>${total_money}{money}</p></div>

</div>


<div className='mt-20 sm:block hidden'>
<Btn btn_type={btn_type} btn_color={'blue-800'} click_btn={click_btn} go_back={go_back} btn_visibilty={'block'} />
</div>

<div className=" sm:hidden absolute mt-56 w-[92%] ml-[-40px]">
<Btn btn_type={btn_type} btn_color={'blue-800'} click_btn={click_btn} go_back={go_back} btn_visibilty={'block'} />

    </div>

        </>
    )
}

export default Finishing;


const Card1 = ({heading,money,visible,duration,move_to_plan})=>{

          return (
            <>
              <div className={`flex justify-between items-center px-1 `}>
            <div >
            <p className='font-[500] text-[#02295a]'>{heading}{`(${duration})`}</p>
             <p className={`text-[14px] text-[#8D8D97] underline cursor-pointer ${visible}`} onClick={move_to_plan} >change</p>
            </div>
            <div>
             < p className='text-[12px] font-[700]  text-[#02295a]'>{money}</p>
            </div>
         </div>
         </>
          )
}
const Card2 = ({heading,money,visible,duration})=>{

          return (
            <>
              <div className={`flex justify-between mt-2 px-1 ${visible} `}>
            <div className=''>
            <p className='text-[#9699ab] font-[500] '>{heading}</p>
            
            </div>
            <div className=''>
             <p className='text-[12px] font-[400]'>{money}</p>
            </div>
         </div>
         </>
          )
}