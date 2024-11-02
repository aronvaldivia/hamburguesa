import React from 'react';
import { Star, Flame, Leaf, Award } from 'lucide-react';

const burgers = [
  {
    name: "Classic Craft",
    price: "$12.99",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=3270&auto=format&fit=crop",
    description: "Angus beef, aged cheddar, crispy bacon, fresh lettuce",
    badge: "Bestseller"
  },
  {
    name: "Spicy Inferno",
    price: "$14.99",
    image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?q=80&w=3270&auto=format&fit=crop",
    description: "Jalapeños, pepper jack, chipotle mayo, caramelized onions",
    badge: "Hot"
  },
  {
    name: "Mushroom Swiss",
    price: "$13.99",
    image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=3271&auto=format&fit=crop",
    description: "Sautéed mushrooms, Swiss cheese, truffle aioli",
    badge: "Popular"
  },
  {
    name: "BBQ Bacon Supreme",
    price: "$15.99",
    image: "https://images.unsplash.com/photo-1550317138-10000687a72b?q=80&w=2920&auto=format&fit=crop",
    description: "Double patty, BBQ sauce, crispy onion rings, smoked bacon",
    badge: "New"
  },
  {
    name: "Veggie Delight",
    price: "$13.99",
    image: "https://images.unsplash.com/photo-1520072959219-c595dc870360?q=80&w=2920&auto=format&fit=crop",
    description: "Plant-based patty, avocado, roasted peppers, vegan cheese",
    badge: "Vegetarian"
  },
  {
    name: "Double Trouble",
    price: "$16.99",
    image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=2920&auto=format&fit=crop",
    description: "Double beef patty, double cheese, special sauce, pickles",
    badge: "Featured"
  },
  {
    name: "Mediterranean",
    price: "$14.99",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=2920&auto=format&fit=crop",
    description: "Lamb patty, feta cheese, tzatziki sauce, fresh mint",
    badge: "Special"
  },
  {
    name: "Hawaiian Luau",
    price: "$15.99",
    image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?q=80&w=2920&auto=format&fit=crop",
    description: "Grilled pineapple, teriyaki glaze, ham, Swiss cheese",
    badge: "Tropical"
  },
  {
    name: "Blue Cheese Bliss",
    price: "$15.99",
    image: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?q=80&w=2920&auto=format&fit=crop",
    description: "Blue cheese crumbles, caramelized onions, arugula",
    badge: "Gourmet"
  }
];

const getBadgeIcon = (badge: string) => {
  switch (badge.toLowerCase()) {
    case 'hot':
      return <Flame className="w-4 h-4" />;
    case 'vegetarian':
      return <Leaf className="w-4 h-4" />;
    case 'bestseller':
    case 'popular':
      return <Award className="w-4 h-4" />;
    default:
      return null;
  }
};

export default function FeaturedBurgers() {
  return (
    <section className="bg-black py-20" id="menu">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-4">Featured <span className="text-orange-500">Burgers</span></h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Discover our chef's specially crafted selection of premium burgers, made with the finest ingredients
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {burgers.map((burger) => (
            <div key={burger.name} className="bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300 shadow-xl">
              <div className="relative">
                <img src={burger.image} alt={burger.name} className="w-full h-48 object-cover" />
                {burger.badge && (
                  <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                    {getBadgeIcon(burger.badge)}
                    {burger.badge}
                  </div>
                )}
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-bold text-white">{burger.name}</h3>
                  <span className="text-orange-500 font-bold">{burger.price}</span>
                </div>
                <p className="text-gray-400 text-sm mb-4">{burger.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex text-orange-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <button className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-orange-600 transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}