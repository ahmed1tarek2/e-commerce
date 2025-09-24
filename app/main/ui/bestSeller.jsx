import BestSellerComp from "./uiComp/bestSeller/bestSellerComp";
import Header from "./uiComp/header";

const BestSeller = () => {
  return (
    <div className="w-[73.125rem]">
      <Header
        head="Best Sellers"
        par=" Do not miss the current offers until the end of month."
      />
      <BestSellerComp />
    </div>
  );
};

export default BestSeller;
