import Heading from './heading'
import Btn from './button'
import { useState } from 'react'
const Pick = ({ setcount, Year, settotal_money,setindex0,setindex1,setindex2,setMonth,setYear }) => {
  let heading = 'Pick add-ons'
  let desc = 'Add ons help enhance your gaming exprience'
  let btn_type = 'Next step'
  const [ischecked, setischecked] = useState(false);



  let mul = 1;
  let time = 'mo';

  if (Year) {
    mul = 10;
    time = 'yr';
  }

  const arr = [
    {
      heading1: 'online Service',
      money: `$${1 * mul}/${time}`,

      des: 'Acess to multiplayer games',
  index:0

    },
    {
      heading1: 'Large storage',
      money: `$${2 * mul}/${time}`,
      des: 'Acess to multiplayer games',
index:1

    },
    {
      heading1: 'Customizabel Services',

      money: `$${3 * mul}/${time}`,
      des: 'Acess to multiplayer games',
index:2

    },
  ]
  const sendData = () => {
    if (ischecked) {
      setcount((prev) => prev + 1);

    } else {
      console.log('CANT GO FORWARD')
    }

  }


  const go_back = () => {
    setMonth(true);
    setYear(false);
    settotal_money((prev) => prev - prev);
    setcount((prev) => prev - 1);

  }
  return (
    <>
      <Heading heading={heading} desc={desc} />
      {
        arr.map((val, index) => {
          return <Card heading1={val.heading1} money={val.money} des={val.des} settotal_money={settotal_money} setischecked={setischecked} index={val.index} setindex0={setindex0} setindex1={setindex1} setindex2={setindex2} />
        })
      }


<div className='sm:block hidden'>
<Btn btn_type={btn_type} btn_color={'#02295a'} click_btn={sendData} btn_visibilty={'block'}  go_back={go_back} ></Btn>

</div>
      
      <div className=" sm:hidden absolute mt-56 w-[92%] ml-[-40px]">
    <Btn btn_type={btn_type} btn_color={'#02295a'} click_btn={sendData} btn_visibilty={'block'} go_back={go_back}></Btn>

    </div>

    </>
  )
}
const Card = ({ heading1, money, des, settotal_money, setischecked,index,setindex0,setindex1,setindex2}) => {
  const [checked, setchecked] = useState(false);
  const [b_color, setcolor] = useState('');
  const [bg_color, setbg] = useState('');
  let mon = parseInt(money.replace('$', ''));

  const checking = () => {
    console.log("hello world checked here")
    if (checked) {
      setchecked(false);
      setischecked(false);
      setcolor('none')
      setbg('none')

    } else {
if(index == 0){
setindex0(0)
}
if(index == 1){
 setindex1(1);
}else{
setindex2(2);
}
      setchecked(true);
      setischecked(true);
      settotal_money((prev) => prev + mon)
      setcolor('border-[#473dff] bg-[#f5fbff]')

    }

  }
  return (
    <>
      <div className={`border  flex justify-start mt-5 rounded-lg p-2 ${b_color} cursor-pointer`} >
        <div className=' flex gap-2  items-center w-[85%] '>
          <div className='ml-2'>
          <input type="checkbox" checked={checked}  onChange={checking}  className='accent-blue-600 h-[14px] w-[14px] cursor-pointer'/>

          </div>
          <div className=' ml-2'>
            <p className='text-[14px] font-[500] text-[#0E2549]'>{heading1}</p>
            <p className='text-[12px] font-[400] text-[#A1A1AB]'>{des}</p>

          </div>
        </div>
        <div>
            
        </div>
        <div className='flex justify-center items-center'>
          <p className='text-[12px] font-[500] text-[#473dff]'>{money}</p>
        </div>
        <div>

        </div>
      </div>
    </>
  )

}
export default Pick;