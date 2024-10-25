import { useState } from "react"
import user from '../assets/icon/user.svg'
import game from '../assets/icon/game.svg'
import pro from '../assets/icon/pro.svg'
import Btn from './button'
import Heading from './heading'
const Plan = ({  setcount,settotal_money,setYear,setMonth }) => {


  let heading = 'Select Your Plan'
  let desc = 'You have the option of monthly or yearly billing'
 

  let btn_type = 'Next step'
  const [visible, setvisible] = useState('hidden')
  const [visible1, setvisible1] = useState('block')
  const [btn, setbtn] = useState('')
  const [month, setmonth] = useState(true)
  const [year, setyear] = useState(false)
  const [money, setmoney] = useState(0);
  const [b_color1,setcolor1] = useState('border-2');
  const [b_color2,setcolor2] = useState('border-2');
  const [b_color3,setcolor3] = useState('border-2');
const [indx,setindex] = useState(-1)

  const move_btn = () => {

 console.log("move_btn clicked")
      if (!year) {
      setbtn('end');
      setmonth(false);
      setyear(true);
      setYear(true);
      setMonth(false)
      setvisible('block')
      setvisible1('hidden')

    } else {
      setbtn('start')
      setyear(false);
      setvisible('hidden')
      setvisible1('block')
      setYear(false);
      setMonth(true);
      


    }

  }
 

  const select_plan = (m,index,m_yr) => {
setindex(index);
    if (month) {
      let mon = parseInt(m.replace('$', ''));
   
    setmoney(mon);
    console.log(money)
  
      if(index==0){
        setcolor1('border-[#473dff] bg-[#f5fbff]')
        setcolor2('border-black')
        setcolor3('border-black')
      }
      if(index==1){
        setcolor2('border-[#473dff] bg-[#f5fbff]')
        setcolor1('border-black')
        setcolor3('border-black')
      }
      if(index==2){
        setcolor3('border-[#473dff] bg-[#f5fbff]')
        setcolor2('border-black')
        setcolor1('border-black')
      }

    }else{
let mon = parseInt(m_yr.replace('$',''))
setmoney(mon);
if(index==0){
  setcolor1('border-[#473dff] bg-[#f5fbff]')
  setcolor2('border-black')
  setcolor3('border-black')
}
if(index==1){
  setcolor2('border-[#473dff] bg-[#f5fbff]')
  setcolor1('border-black')
  setcolor3('border-black')
}
if(index==2){
  setcolor3('border-[#473dff] bg-[#f5fbff]')
  setcolor2('border-black')
  setcolor1('border-black')
}

    }
  }

  const arr = [{
    icon_name: 'Arcade',
    select_plan: select_plan,
    visible: visible,
    visible1: visible1,
    svg: user,
    money: '$9/mo',
   b_color:b_color1,
   money_yr:'$90/yr'
  },
  {
    icon_name: 'Advanced',
    svg: game,
    select_plan: select_plan,
    visible: visible,
    visible1: visible1,
    money: `$12/mo`,
    b_color:b_color2,
    money_yr:'$120/yr'
  }, {
    icon_name: 'Pro',
    svg: pro,
    money: '$15/mo',
    select_plan: select_plan,
    visible: visible,
    visible1: visible1,
    b_color:b_color3,
    money_yr:'$120/yr'
  }]

  const sendData = (e) => {
    e.preventDefault();
    if(indx>=0){

      setcount((prev) => prev + 1)
      settotal_money((prev)=>prev+money)
    
    }
  }


  const go_back = ()=>{
    setcount((prev)=>prev-1);
    
  }

  return (
    <>

      <Heading heading={heading} desc={desc} />
      <div className=" grid sm:grid-cols-3 gap-3 mt-6   ">
        {
          arr.map((val, index) => {
            return  <Card index={index} b_color={val.b_color} select_plan={()=>val.select_plan(val.money,index,val.money_yr)} visible={val.visible} visible1={val.visible1} svg={val.svg} icon_name={val.icon_name} money={val.money} money_yr={val.money_yr}/>
        
           
        
          })
        }


      </div>

      <div className=" flex gap-6 p-3 justify-center mt-6 rounded-xl bg-[#f5fbff] border-2 ">
        <p className="font-[500]">Monthly</p>
        <div className={` w-12 h-6 p-1 rounded-full bg-[#03295B] flex transition-all duration-300 ease-in justify-${btn}`}><span onClick={move_btn} className="text-white bg-white text-[1px] w-[13px] h-[14px] rounded-full"></span></div>
        <p className="font-[500]">Yearly</p>

      </div>


    <div className=" sm:block hidden">
    <Btn btn_type={btn_type} btn_color={'#02295a'} click_btn={sendData} btn_visibilty={'block'} go_back={go_back}></Btn>

    </div>
    <div className=" sm:hidden absolute mt-28 w-[92%] ml-[-40px]">
    <Btn btn_type={btn_type} btn_color={'#02295a'} click_btn={sendData} btn_visibilty={'block'} go_back={go_back}></Btn>

    </div>

    </>
  )
}
const Card = ({ visible, visible1, svg, icon_name, money, select_plan, b_color,money_yr }) => {

  return <div className={`border  ${b_color}  rounded-lg  sm:p-4 hover:border-[#473dff]  flex sm:flex-col p-3`} onClick={() => select_plan(money)}>
    <div className="">
      <img src={svg} alt="" />
    </div>
    <div className=" sm:mt-6 sm:ml-0 ml-4 ">
      <p className="text-[#142C49] font-[500]">{icon_name}</p>
      <p className={`text-[#9F9FAA] text-[14px] ${visible1}`} >{money}</p>
      <p className={`text-[#9F9FAA]  ${visible} text-[14px]`} >{money_yr}</p>
      <p className={`text-[12px] ${visible} text-nowrap mt-2`}>2 months free</p>
    </div>
  </div>
}


export default Plan;