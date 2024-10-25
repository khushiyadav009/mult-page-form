




const Btn = ({ btn_type, btn_color,click_btn,btn_visibilty,go_back}) => {
 
    return (
        <>
            <div className=" flex justify-between  sm:mt-16   sm:w-full">

                <button type="submit" className={`p-2 text-[rgb(2,41,90)]  font-[500] border rounded-lg ${btn_visibilty}`} onClick={go_back} >Go back</button>

                <button type="submit" className={`p-2 text-white rounded-lg bg-[${btn_color}] bg-[rgb(2,41,90)] `} onClick={click_btn} >{btn_type} </button>

            </div>
        </>

    )
}

export default Btn;