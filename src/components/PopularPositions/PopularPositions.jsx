import Card from './Card/Card'
import Card2 from './Card2/Card2'
import bg_1 from './popular_positions_img/bg_1.png'
import bg_2 from './popular_positions_img/bg_2.png'
import bg_3 from './popular_positions_img/bg_3.png'
import bg_4 from './popular_positions_img/bg_4.png'

export default function PopularPosition() {
    return(<section className="bg-[#1C1C1C] py-[150px]">
     <section className="grid grid-cols-2 grid-rows-2 gap-[50px] px-[150px]">
        <Card bg_img={bg_1} title={'Dairy Queen'} desc={'Dairy Queen is one of the biggest fast-food.'} price1={'$4'} price2={'$6'} />
        <Card2 bg_img={bg_2} title={'Pizza Hut'} desc={'Although the Pizza Hut Menu Prices .'} price1={'$3'} price2={'$7'} />
        <Card bg_img={bg_3} title={'Burger King'} desc={'Together with McDonald’s, Burger King.'} price1={'$5'} price2={'$6'} />
        <Card2 bg_img={bg_4} title={'Papa John’s'} desc={'Papa John’s is one of the most popular fast-food.'} price1={'$6'} price2={'$8'} />
     </section>
    </section>)
}