

const Heading = ({heading,desc})=>{
    return (
        <>
        <div className="">
        <p className="font-[700] text-[30px] text-[#002655]">{heading}</p>
        <p className="text-[12px] text-[hsl(225,2%,61%)] shrink-0 text-nowrap">{desc}</p>
      </div>
        </>
    )
}

export default Heading ;