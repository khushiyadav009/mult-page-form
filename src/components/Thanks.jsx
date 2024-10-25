import svg from '../assets/icon/thnx.svg'
import Heading from './heading'
const Thanks = ()=>{
    return (
        <>
<div className="border-4 flex justify-center flex-col items-center ">
    <div >
<img src={svg} alt="" className='w-10' />
    </div>
 
    <div className='border-2 ' >
     <Heading heading={'Thank you !'}  />
    </div>
    <div className='border-2 mt-2 '>
        <p className='text-center text-[12px] font-[400]'>   Thanks for confirming your subscription! We hope you have fun using our platform . if you ever need support. pleasse fell free to email us at support@loremgaming.com</p>
    </div>

</div>
        </>
    )
}

export default Thanks ;