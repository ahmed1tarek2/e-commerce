export const pro = [
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
      price_old: 22,
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



  const ProductImages = () => {
    const [index,setIndex] = useState(0)

  return (
    <div className="">
        <div className="h-[500px] relative">
            <Image src={images[index].url} alt="" fill sizes="50vw" className="object-cover rounded-md"/>
        </div>
        
        <div className="flex justify-between gap-4 mt-8">
            {images.map((img , i) =>(
              <div className="w-1/4 h-32 relative gap-4 mt-8 cursor-pointer" key={img.id} onClick={() =>setIndex(i)}>
               <Image src={img.url} alt="" fill sizes="30vw" className="object-cover rounded-md"/>
             </div>
            ))}
        
        </div>
    </div>
  )
}