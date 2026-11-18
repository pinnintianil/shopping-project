export const products = [
  { id: 1, name: "Classic Blue Shirt", price: 599, image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400" },
  { id: 2, name: "Premium Black T-Shirt", price: 399, image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400" },
  { id: 3, name: "Dark Denim Jeans", price: 1099, image: "https://images.unsplash.com/photo-1582552938357-32b906df40cb?w=400" },
  { id: 4, name: "Smart Watch Pro", price: 2999, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400" },
  { id: 5, name: "Sporty Red Shoes", price: 799, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400" },
  { id: 6, name: "Travel Backpack Bag", price: 1299, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400" },
  { id: 7, name: "HP Laptop 15", price: 45999, image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400" },
  { id: 8, name: "iPhone 15 Mobile", price: 79999, image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400" },
  { id: 9, name: "Leather Black Winter Jacket", price: 1999, image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400" },
  { id: 10, name: "boAt Earbuds", price: 1299, image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400" },
  { id: 11, name: "Classic White Sneakers", price: 1499, image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400" },
  { id: 12, name: "Cozy Grey Hoodie", price: 999, image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400" },
  { id: 13, name: "boAt Headphones", price: 1999, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400" },
];


export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
}

