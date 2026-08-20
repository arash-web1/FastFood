export default function Card({bg_img, title, desc, price1, price2}) {
    return(<>
    <div className="bg-cover bg-center py-[60px] px-[70px] flex justify-end items-center"
     style={{backgroundImage: `url(${bg_img})`}}>
        <div className="max-w-[50%]"></div>
        <div className="max-w-[50%]">
            <h5 className="text-white text-[30px]">{title}</h5>
            <p className="text-[16px] text-mauve-400 py-[10px]">{desc}</p>
            <div className="flex gap-[15px] pb-[10px]">
            <h6 className="text-[#F6762C] text-[16px] hover:text-white">{price1}</h6> 
            <h6 className="text-[#F6762C]/50 text-[16px] line-through hover:text-white/50">{price2}</h6>
            </div>
            <button className="py-[15px] px-[37px] bg-[#F6762C] rounded-[5px] text-white text-[13px] font-semibold hover:bg-[#F6762C]/50">ORDER NOW</button>
        </div>
    </div>
    </>)
}