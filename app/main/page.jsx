import Banner2 from "./ui/banner2";
import Banner1 from "./ui/banner1";
import OfferTimer from "./ui/offerTimer";
import Offers from "./ui/offers";
import Banner3 from "./ui/banner3";
import Banner4 from "./ui/banner4";
import Save10 from "./ui/save10";
import Grocery from "./ui/uiComp/grocery";
import CategorySwiper from "./ui/uiComp/swiper2";
import BestSeller from "./ui/bestSeller";
import Category from "./ui/uiComp/Category";
import FeaturedPro from "./ui/featured";

const MainPage = () => {
  return (
    <div className="w-full h-full flex flex-col items-center  my-10">
      <Banner1 />
      <Banner2 />
      <OfferTimer />
      <Offers />
      <div className="w-[75rem] px-3 grid grid-cols-2 gap-9 py-6">
        <Banner3
          photo="/banner31.png"
          head="The freshest milk products"
          desc="A family place for grocery"
        />
        <Banner3
          photo="/banner32.png"
          head="Yogurt with Delicious Fruit"
          desc="A different kind of grocery store"
        />
      </div>
      <CategorySwiper card={<Category />} />
      <BestSeller />
      <div className="w-[75rem] px-3 grid grid-cols-3 gap-9 py-6">
        <Banner4
          photo="/banner41.png"
          offer="Weekend Discount 40%"
          head="Natural Eggs"
          desc="Eat one every day"
        />
        <Banner4
          photo="/banner42.png"
          offer="Weekend Discount 40%"
          head="Taste the Best"
          desc="Shine the morning"
        />
        <Banner4
          photo="/banner43.png"
          offer="Weekend Discount 40%"
          head="Ditch the Junk"
          desc="Breakfast made better"
        />
      </div>
      <FeaturedPro />
      <Save10 />
      <div className="w-[74rem] grid grid-cols-3 gap-5 py-5">
        <Grocery
          photo="/gro1.png"
          gro="Grocery"
          head="But I must explain to you how all this mistaken idea"
          date="Jan 13 2025"
        />
        <Grocery
          photo="/gro2.png"
          gro="Grocery"
          head="The Probleme With Typefacees on the Web"
          date="Jan 13 2025"
        />
        <Grocery
          photo="/gro3.png"
          gro="Grocery"
          head="English Breakfast Tea With Tasty Donut Desserts"
          date="Jan 13 2025"
        />
      </div>
    </div>
  );
};

export default MainPage;
