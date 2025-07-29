const express = require("express");
const app = express();

const products = [
  {
    id: 1,
    name: "Wireless Bluetooth Headphones",
    description:
      "High-quality wireless headphones with noise cancellation and 30-hour battery life",
    price: 149.99,
    category: "Electronics",
    brand: "AudioTech",
    inStock: true,
    quantity: 25,
    imageUrl: "https://example.com/images/headphones.jpg",
    rating: 4.5,
    reviews: 342,
    features: [
      "Noise Cancellation",
      "30hr Battery",
      "Bluetooth 5.0",
      "Fast Charging",
    ],
    weight: "250g",
    color: "Black",
  },
  {
    id: 2,
    name: "Organic Cotton T-Shirt",
    description:
      "Comfortable 100% organic cotton t-shirt available in multiple colors",
    price: 29.99,
    category: "Clothing",
    brand: "EcoWear",
    inStock: true,
    quantity: 150,
    imageUrl: "https://example.com/images/tshirt.jpg",
    rating: 4.2,
    reviews: 89,
    features: [
      "100% Organic Cotton",
      "Machine Washable",
      "Pre-shrunk",
      "Eco-friendly",
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    color: "Navy Blue",
  },
  {
    id: 3,
    name: "Stainless Steel Water Bottle",
    description:
      "Insulated stainless steel water bottle that keeps drinks cold for 24 hours or hot for 12 hours",
    price: 34.95,
    category: "Sports & Outdoors",
    brand: "HydroMax",
    inStock: false,
    quantity: 0,
    imageUrl: "https://example.com/images/waterbottle.jpg",
    rating: 4.8,
    reviews: 567,
    features: [
      "Double-wall Insulation",
      "Leak-proof",
      "BPA-free",
      "24oz Capacity",
    ],
    capacity: "24oz",
    color: "Silver",
  },
  {
    id: 4,
    name: "LED Desk Lamp",
    description:
      "Adjustable LED desk lamp with touch controls and USB charging port",
    price: 79.99,
    category: "Home & Office",
    brand: "BrightLight",
    inStock: true,
    quantity: 42,
    imageUrl: "https://example.com/images/desklamp.jpg",
    rating: 4.3,
    reviews: 128,
    features: [
      "Touch Control",
      "USB Charging Port",
      "Adjustable Brightness",
      "Energy Efficient",
    ],
    powerConsumption: "12W",
    color: "White",
  },
  {
    id: 5,
    name: "Ceramic Coffee Mug Set",
    description:
      "Set of 4 handcrafted ceramic coffee mugs with unique glazed finish",
    price: 45.0,
    category: "Kitchen & Dining",
    brand: "ArtisanCraft",
    inStock: true,
    quantity: 18,
    imageUrl: "https://example.com/images/mugset.jpg",
    rating: 4.6,
    reviews: 203,
    features: ["Handcrafted", "Microwave Safe", "Dishwasher Safe", "Set of 4"],
    capacity: "12oz each",
    color: "Multicolor",
  },
  {
    id: 6,
    name: "Fitness Resistance Bands Set",
    description:
      "Complete resistance bands set with 5 different resistance levels and accessories",
    price: 24.99,
    category: "Sports & Fitness",
    brand: "FitPro",
    inStock: true,
    quantity: 75,
    imageUrl: "https://example.com/images/resistancebands.jpg",
    rating: 4.4,
    reviews: 451,
    features: [
      "5 Resistance Levels",
      "Door Anchor",
      "Handles & Ankle Straps",
      "Carry Bag",
    ],
    maxResistance: "150lbs",
    color: "Multi",
  },
];

// routing
app.get("/", (req, res) => {
  res.send("Home_Page");
});

app.get("/products", (req, res) => {
  res.json(products);
});

/**
 * !Single Product Selection From Products list
 *
 */

app.get("/products/:productId", (req, res) => {
  console.log("req.params", req.params);
  const productId = parseInt(req.params.productId);
  const getSingleProduct = products.find((product) => {
    return product.id === productId;
  });

if(getSingleProduct){
  res.json(getSingleProduct);
}
else{
  res.status(404).send("Product Id not found");
}

  
});

const port = 3000;
app.listen(port, () => {
  console.log(`listening at port ${port}`);
});
