import Image from "next/image";
import { pro } from "../data/data";

const Offers = () => {


  return (
    <div className="grid grid-cols-5 overflow-hidden gap-4 w-[73.125rem] h-[26.811rem] border-2 border-[#ED174A] rounded ">
      {pro.map((item, index) => (
        <div key={index}
        className="flex flex-col items-center justify-center border-r border-[#EDEEF5]
         w-[14.588rem] h-[26.561rem] ">
          <Image src="/drink.png" alt={item.name} width={150} height={150} />
          <h2>{item.name}</h2>
          <p>Old Price: ${item.price_old}</p>
          <p>New Price: ${item.price_new}</p>
          <p>Discount: {item.discount}</p>
          <p>Stock: {item.stock}</p>
          <p>Reviews: {item.reviews}</p>
          <p>Rating: {item.rating}</p>
          <p>Available Products: {item.available_products}</p>
        </div>
      ))}
    </div>
  );
};

export default Offers;
