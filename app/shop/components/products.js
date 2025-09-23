// export const productes = [
//   {
//     id: 1,
//     title: "100% Butter French Croissants",
//     stock: "IN STOCK",
//     Rating: 5,
//     review: 5,
//     category: "Beverages",
//     discount: "22%",
//     price: 1.44,
//     img: "/assetes/images/product-image.jpg.png",
//   },
//   {
//     id: 2,
//     title: " Butter French Croissants",
//     stock: "OUT OF STOCK",
//     Rating: 5,
//     review: 10,
//     category: "Biscuits & Snacks",
//     discount: "",
//     price: 7.56,
//     img: "/assetes/images/Link.png",
//   },
//   {
//     id: 3,
//     title: "100% Butter French Croissants",
//     stock: "IN STOCK",
//     Rating: 5,
//     review: 5,
//     category: "Breads & Bakery",
//     discount: "22%",
//     price: 1.44,
//     img: "/assetes/images/product-image.jpg.png",
//   },
//   {
//     id: 4,
//     title: " Butter French Croissants",
//     stock: "OUT OF STOCK",
//     Rating: 5,
//     review: 10,
//     category: "Breakfast & Dairy",
//     discount: "",
//     price: 7.56,
//     img: "/assetes/images/Link.png",
//   },
//   {
//     id: 5,
//     title: "100% Butter French Croissants",
//     stock: "IN STOCK",
//     Rating: 5,
//     review: 5,
//     category: "Frozen Foods",
//     discount: "22%",
//     price: 1.44,
//     img: "/assetes/images/product-image.jpg.png",
//   },
//   {
//     id: 6,
//     title: " Butter French Croissants",
//     stock: "OUT OF STOCK",
//     Rating: 5,
//     review: 10,
//     category: "Fruits & Vegetables",
//     discount: "",
//     price: 7.56,
//     img: "/assetes/images/Link.png",
//   },
//   {
//     id: 7,
//     title: "100% Butter French Croissants",
//     stock: "IN STOCK",
//     Rating: 5,
//     review: 5,
//     category: "Grocery & Staples",
//     discount: "22%",
//     price: 1.44,
//     img: "/assetes/images/product-image.jpg.png",
//   },
//   {
//     id: 8,
//     title: " Butter French Croissants",
//     stock: "OUT OF STOCK",
//     Rating: 5,
//     review: 10,
//     category: "Household Needs",
//     discount: "",
//     price: 7.56,
//     img: "/assetes/images/Link.png",
//   },
//   {
//     id: 9,
//     title: "100% Butter French Croissants",
//     stock: "IN STOCK",
//     Rating: 5,
//     review: 5,
//     category: "Meats & Seafood",
//     discount: "22%",
//     price: 1.44,
//     img: "/assetes/images/product-image.jpg.png",
//   },
//   {
//     id: 10,
//     title: " Butter French Croissants",
//     stock: "OUT OF STOCK",
//     Rating: 5,
//     review: 10,
//     category: "Beverages",
//     discount: "",
//     price: 7.56,
//     img: "/assetes/images/Link.png",
//   },
//   {
//     id: 11,
//     title: "100% Butter French Croissants",
//     stock: "IN STOCK",
//     rating: 2.5,
//     review: 5,
//     category: "Biscuits & Snacks",
//     discount: "22%",
//     price: 1.44,
//     img: "/assetes/images/product-image.jpg.png",
//   },
//   {
//     id: 12,
//     title: " Butter French Croissants",
//     stock: "OUT OF STOCK",
//     rating: 5,
//     review: 10,
//     category: "Breads & Bakery",
//     discount: "",
//     price: 7.56,
//     img: "/assetes/images/Link.png",
//   },
// ];

// fetch("https://dummyjson.com/products?limit=10&skip=10&select=title,price")
//   .then((res) => res.json())
//   .then(console.log);

//  import axios from "axios";

// useEffect(() => {
//   axios
//     .get("https://dummyjson.com/products")
//     .then((res) => {
//       console.log(res.data); // المنتجات
//     })
//     .catch((err) => console.error(err));
// }, []);