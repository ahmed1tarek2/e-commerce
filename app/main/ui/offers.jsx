import Image from "next/image";

const Offers = () => {
  const pro = [
    {
      name: "Zevia Kidz Strawberry Lemonade Zero Calorie",
      price_old: 7.95,
      price_new: 5.95,
      discount: "25%",
      stock: "IN STOCK",
      reviews: 1,
      rating: 4,
      available_products: 86,
    },
    {
      name: "Tropicana Pineapple Mango Drink",
      price_old: 3.29,
      price_new: 2.29,
      discount: "30%",
      stock: "IN STOCK",
      reviews: 1,
      rating: 4,
      available_products: 86,
    },
    {
      name: "SToK Un-Sweet Black Cold Brew Iced Coffee",
      price_old: null,
      price_new: 65.0,
      discount: null,
      stock: "IN STOCK",
      reviews: 1,
      rating: 5,
      available_products: 95,
    },
    {
      name: "Sol-ti Coconut Charcoal SuperAde",
      price_old: 4.97,
      price_new: 3.97,
      discount: "20%",
      stock: "IN STOCK",
      reviews: 1,
      rating: 5,
      available_products: 95,
    },
    {
      name: "Simply Lemonade with Raspberry Juice",
      price_old: 4.88,
      price_new: 3.88,
      discount: "20%",
      stock: "IN STOCK",
      reviews: 1,
      rating: 5,
      available_products: 95,
    },
  ];

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
