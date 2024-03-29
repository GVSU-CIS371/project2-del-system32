type Product = {
    name: string;

    description: string;

    price: number;

    rating: number;

    stock: number;

    image: string;

    category: string;
};

const products: Product[] = [
    {
        name: "Gamer's Delight Laptop",
        description:
            "A powerful gaming laptop with top-tier graphics and performance for immersive gaming experiences.",
        price: 1200,
        rating: 4,
        stock: 5,
        //a fake image
        image:
            "https://m.media-amazon.com/images/I/31TcnQiBTpL._AC_UF894,1000_QL80_.jpg",
        category: "Electronics",
    },
    {
        name: "SmartTech Pro Phone",
        description:
            "Experience cutting-edge technology with our latest SmartTech Pro, featuring an ultra-responsive display and superior camera quality.",
        price: 800,
        rating: 5,
        stock: 10,
        image: "https://m.media-amazon.com/images/I/61L1ItFgFHL.jpg",
        category: "Electronics",
    },
    {
        name: "Samsung TV - 75'",
        description:
            "See how Crystal UHD with Smart TV elevates what you watch—at a value you’ll love. Go beyond HDTV to enjoy your content in 4K resolution, and in PurColor. And with Smart TV powered by Tizenbuilt in, it’s easy to find and stream the latest shows and movies in just a few clicks. ",
        price: 550,
        rating: 4.8,
        stock: 5,
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6514/6514052_sd.jpg",
        category: "Electronics",
    },
    {
        name: "iPad Pro 12.9in",
        description:
            "Astonishing performance. Incredibly advanced displays. Superfast wireless connectivity. Next-level Apple Pencil capabilities. Powerful new features in iPadOS. The ultimate iPad experience.",
        price: 1100,
        rating: 3.4,
        stock: 3,
        image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-model-select-gallery-2-202212?wid=5120&hei=2880&fmt=p-jpg&qlt=95&.v=1667594167534",
        category: "Electronics",
    },
    {
        name: "Rapid Dual USB-C Charger",
        description:
            "Efficiently power up your devices with our compact, high-speed USB-C charging brick designed for the modern tech-savvy user.",
        price: 12,
        rating: 4,
        stock: 20,
        image:
            "https://d1b5h9psu9yexj.cloudfront.net/45024/Spigen-PowerArc-ArcStation-Pro_20210512-160334_full.jpeg",
        category: "Electronics",
    },

    // Clothing
    {
        name: "Classic Comfort Tee",
        description:
            "Crafted for comfort, our soft and breathable t-shirt is perfect for personal customization or stylish everyday wear.",
        price: 20,
        rating: 4,
        stock: 25,
        image:
            "https://imgs.michaels.com/MAM/assets/1/5E3C12034D34434F8A9BAAFDDF0F8E1B/img/091B833490D74F4C87D5CE3767E806C7/MP236558_11.jpg",
        category: "Clothing",
    },
    {
        name: "SleekFit Denim Jeans",
        description:
            "Stay trendy with our Slim Fit Jeans, offering both comfort and style with durable, high-quality denim.",
        price: 45,
        rating: 3,
        stock: 15,
        image:
            "https://benzakdenimdevelopers.com/cdn/shop/products/BDD-006-loomstate-denim-15-oz-RHT-0_720x.jpg?v=1664551915",
        category: "Clothing",
    },
    {
        name: "PatternPop Fancy Socks",
        description:
            "Add a splash of fun to your outfit with our vibrant, patterned socks, combining style with everyday comfort.",
        price: 15,
        rating: 4.8,
        stock: 7,
        image:
            "https://goldiesocks.com/cdn/shop/products/mens-sock-argyle-blue-goldie-socks_540x.jpg?v=1541354007",
        category: "Clothing",
    },
    {
        name: "GVSU Hoodie",
        description:
            "Put your Lakers spirit on display in this Grand Valley State Lakers Long Sleeve Hoodie! You'll be cozy on game day in this GVSU Lakers Mens Grey Arch Twill Hooded Sweatshirt. This Lakers Long Sleeve Hoodie features a team name arched with twill patch on front chest. Wear your Grand Valley State Lakers spirit with pride in this great Mens Hooded Sweatshirt!",
        price: 65,
        rating: 4.7,
        stock: 5,
        image:
            "https://media.rallyhouse.com/homepage/14756455-1.jpg?tx=f_auto,c_fit,w_730,h_730",
        category: "Clothing",
    },
    {
        name: "Dolce & Gabbana Leopard-Print Swim Trunks",
        description:
            "Men's Dolce & Gabbana Leopard-print Swim Trunks - Natural Care instructions: hand wash. Elasticated drawstring waist. Made in italy.",
        price: 437,
        rating: 5,
        stock: 1,
        image:
            "https://th.bing.com/th?id=OPHS.0w3k5FaGQ%2bNHIg474C474&w=592&h=550&o=5&dpr=1.5&pid=21.1",
        category: "Clothing",
    },

    // Groceries
    {
        name: "Crispy Red Apples",
        description:
            "Enjoy the natural sweetness of our freshly-picked, juicy red apples, perfect for a healthy snack.",
        price: 0.5,
        rating: 4,
        stock: 100,
        image: "https://5.imimg.com/data5/MG/WX/MY-1600400/fresh-apple-500x500.jpg",
        category: "Groceries",
    },
    {
        name: "Hearty Whole Grain Bread",
        description:
            "Indulge in the wholesome goodness of our whole grain bread, baked fresh for a nutritious and delicious choice.",
        price: 2,
        rating: 4,
        stock: 20,
        image: "https://vimafoods.com/wp-content/uploads/panecillo-vima-foods.jpg",
        category: "Groceries",
    },
    {
        name: "Crunchy Delight Cashews",
        description:
            "Savor the rich, nutty flavor of our premium cashews, ideal for a healthy, energizing snack.",
        price: 4,
        rating: 3,
        stock: 56,
        image:
            "https://www.farmfreshnuts.com/wp-content/uploads/2018/02/Cashews-DRS.jpg",
        category: "Groceries",
    },
    {
        name: "Kraft Mac n' cheese",
        description:
            "Help yourself to a bowl of comfort. Kraft Thick 'n Creamy Mac & Cheese Dinner is a convenient boxed dinner. Kids and adults love the delicious taste of macaroni with cheesy goodness.",
        price: 5.80,
        rating: 5,
        stock: 234,
        image:
            "https://i5.walmartimages.com/seo/Kraft-Thick-n-Creamy-Mac-N-Cheese-Macaroni-and-Cheese-Dinner-7-25-oz-Box_c179a0ef-5742-410e-b0d1-838c849c64d6.49b53c724215d616892cc507affbde87.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF",
        category: "Groceries",
    },
    {
        name: "Sushi Spring Rolls",
        description:
            "Sushi Spring Roll - 20 ct is a delicious candy that will make you feel like you're eating sushi. It's perfect for anyone who loves the taste of sushi but doesn't want to go through the hassle of making it themselves.",
        price: 5.09,
        rating: 4.2,
        stock: 40,
        image:
            "https://th.bing.com/th?id=OPHS.jXbPumpCbJRYGQ474C474&w=592&h=550&o=5&dpr=1.5&pid=21.1",
        category: "Groceries",
    },
];

export type { Product };
export { products };