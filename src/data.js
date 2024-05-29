// const data = {
//     "productData": [
//       {
//         "cat_name": "Women",
//         "id": 1,
//         "image": "data:image/png;base64,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",
//         "items": [
//           {
//             "cat_name": "Jwellery",
//             "products": [
//               {
//                 "productName": "Molten Silver Hoops",
//                 "price": "20",
//                 "oldPrice": "140",
               
//                 "catImg": "https://www.andindia.com/on/demandware.static/-/Sites-AND-Library/default/dw8f364980/images/May2024/17/jwellery%20desktop.jpg",
//                 "discount": "12",
//                 "brand": "AASHIRVAAD",
//                 "productImages": [
//                   "https://www.andindia.com/on/demandware.static/-/Sites-AND-Library/default/dw8f364980/images/May2024/17/jwellery%20desktop.jpg",
                 
//                 ],
//                 "rating": 3.5,
//                 "description": "Your regular hoops can take a backseat with the addition of these classy hoops with hammered detailing. They come with a push-back closure so the glam stays put all day!",
//                 "id": 1
//               },
//               {
//                 "productName": "Everyday Satchel Bag",
//                 "price": "₹4,200",
//                 "oldPrice": "3220",
//                 // "weight": [
//                 //   50,
//                 //   100,
//                 //   150,
//                 //   200,
//                 //   250,
//                 //   500
//                 // ],
//                 "catImg": "https://www.andindia.com/on/demandware.static/-/Sites-AND-Library/default/dwe227ae04/images/May2024/17/bags%20desktopm.jpg",
//                 "discount": "16",
//                 "brand": "Private Label",
//                 "productImages": [
//                   "https://www.andindia.com/on/demandware.static/-/Sites-masterCatalog_ANDIndia/default/dw7fe049e5/images/hires/SS22/AND-S24ACCSB05OFW-(5).jpg",
//                   "https://www.andindia.com/on/demandware.static/-/Sites-masterCatalog_ANDIndia/default/dw700cdfab/images/hires/SS22/AND-S24ACCSB05OFW-(2).jpg",
//                   "https://www.andindia.com/on/demandware.static/-/Sites-masterCatalog_ANDIndia/default/dw4d7e061e/images/hires/SS22/AND-S24ACCSB05OFW-(1).jpg"
//                 ],
//                 "rating": 4,
//                 "description": "This satchel bag is ready to be your new favourite for a day out. It has a textured surface and a zip closure, with ample space to carry your essentials for a shopping day or a lunch date.  ",
//                 "id": 2
//               },
//               {
//                 "productName": "Belts",
//                 "price": "89",
//                 "oldPrice": "150",
//                 "weight": [
//                   'S',
//                   'M',
                
//                 ],
//                 "catImg": "https://www.andindia.com/on/demandware.static/-/Sites-AND-Library/default/dwf7f89dc0/images/May2024/17/scarf%20desktop.jpg",
//                 "discount": "16",
//                 "brand": "Good Life",
//                 "productImages": [
//                   "https://www.andindia.com/on/demandware.static/-/Sites-masterCatalog_ANDIndia/default/dwaeed8bba/images/hires/SS22/AND-S24ACCBL07BLK-(2).jpg",
//                   "https://www.andindia.com/on/demandware.static/-/Sites-masterCatalog_ANDIndia/default/dw5a1fbfba/images/hires/SS22/AND-S24ACCBL07BLK-(1).jpg",
                  
//                 ],
//                 "rating": 3.5,
//                 "description": "The studded circular buckle comes with an adjustable waist and a striking effect on your outfits. Throw it on your solid dresses to make a statement.",
//                 "id": 3
//               },
//               {
//                 "productName": "Black Shoe",
//                 "price": "1,400",
//                 "oldPrice": "95",
//                 "weight": [
//                   36,
//                   37,
//                   38,
//                   39,
//                   40,
                  
//                 ],
//                 "catImg": "https://www.andindia.com/on/demandware.static/-/Sites-AND-Library/default/dw83529dc8/images/May2024/17/footwear%20category%20desktop.jpg",
//                 "discount": "18",
//                 "brand": "Tata Sampann",
//                 "productImages": [
//                   "https://www.andindia.com/dw/image/v2/BGCX_PRD/on/demandware.static/-/Sites-masterCatalog_ANDIndia/default/dw2e661225/images/hires/SS22/AND-SS23ACCFW13BLAK-Black-Polyurethane-Shoe-5.jpg",
//                   "https://www.andindia.com/dw/image/v2/BGCX_PRD/on/demandware.static/-/Sites-masterCatalog_ANDIndia/default/dw636669c3/images/hires/SS22/AND-SS23ACCFW13BLAK-Black-Polyurethane-Shoe-4.jpg",
//                   "https://www.andindia.com/dw/image/v2/BGCX_PRD/on/demandware.static/-/Sites-masterCatalog_ANDIndia/default/dw636669c3/images/hires/SS22/AND-SS23ACCFW13BLAK-Black-Polyurethane-Shoe-4.jpg",
//                   "https://www.andindia.com/dw/image/v2/BGCX_PRD/on/demandware.static/-/Sites-masterCatalog_ANDIndia/default/dwc79d1a89/images/hires/SS22/AND-SS23ACCFW13BLAK-Black-Polyurethane-Shoe-1.jpg"
//                 ],
//                 "rating": 4,
//                 "description": "Eminently stylish flat mules for women from AND. Crafted rich satin material flaunting a broad diamond strap with a faux-leather soft sole for utmost support and comfort in a classic black shade. Complement these heels with any of your party-wear ensembles. They're easy to clean and your best buy for everyday casual wear."
//               },
//               {
//                 "productName": "Good Life Moong Dal 1 kg",
//                 "price": "145",
//                 "oldPrice": "189",
//                 "weight": [
//                   50,
//                   100,
//                   150,
//                   200,
//                   250,
//                   500
//                 ],
//                 "catImg": "https://www.andindia.com/on/demandware.static/-/Sites-AND-Library/default/dwa8de3603/images/May2024/17/category%202%20tops.jpg",
//                 "discount": "12",
//                 "brand": "Good Life",
//                 "productImages": [
//                   "https://www.jiomart.com/images/product/original/491187257/good-life-moong-dal-1-kg-product-images-o491187257-p491187257-0-202301171616.jpg",
//                   "https://www.jiomart.com/images/product/original/491187257/good-life-moong-dal-1-kg-product-images-o491187257-p491187257-1-202301171616.jpg",
//                   "https://www.jiomart.com/images/product/original/491187257/good-life-moong-dal-1-kg-legal-images-o491187257-p491187257-2-202301171616.jpg"
//                 ],
//                 "rating": 4.5,
//                 "description": "Good life Moong Dal is procured from reliable and high-quality sources. The beans are best consumed after being sprouted. Dosa with whole moong also turns out to be yummy, another exotic way to eat moong is to eat it as a korma which is spiced up with tangy tomatoes and a cashew paste. It is mainly used as the base for curries such as sambar, dal etc. Buy Good Life Moong Dal online now!",
//                 "id": 5
//               },
//               {
//                 "productName": "Good Life Kabuli Chana 1 kg",
//                 "price": "185",
//                 "oldPrice": "210",
//                 "weight": [
//                   50,
//                   100,
//                   150,
//                   200,
//                   250,
//                   500
//                 ],
//                 "catImg": "https://www.andindia.com/on/demandware.static/-/Sites-AND-Library/default/dwb616b761/images/May2024/17/category%203%20co-ord.jpg",
//                 "discount": "23",
//                 "brand": "Good Life",
//                 "productImages": [
//                   "https://www.jiomart.com/images/product/original/491187282/good-life-kabuli-chana-1-kg-product-images-o491187282-p491187282-0-202301171615.jpg",
//                   "https://www.jiomart.com/images/product/original/491187282/good-life-kabuli-chana-1-kg-product-images-o491187282-p491187282-1-202301171615.jpg",
//                   "https://www.jiomart.com/images/product/original/491187282/good-life-kabuli-chana-1-kg-legal-images-o491187282-p491187282-4-202301171615.jpg"
//                 ],
//                 "rating": 3.5,
//                 "description": "Kabuli Chana is rich in proteins, dietary fibre and low in cholesterol and saturated fat. The beans can be soaked in water and cooked along with vegetables in the preparation of a variety of curries that complement well with rice, roti, chapattis, puri, kulcha as well as bread. It can be sprouted after soaking in water for 24 hours and added to salads to enrich the latter with proteins. Buy Good Life Kabuli Chana online now!",
//                 "id": 6
//               },
//               {
//                 "productName": "Angur Oily Toor Dal 5Kg",
//                 "price": "999",
//                 "oldPrice": "1100",
//                 "weight": [
//                   50,
//                   100,
//                   150,
//                   200,
//                   250,
//                   500
//                 ],
//                 "catImg": "https://www.andindia.com/on/demandware.static/-/Sites-AND-Library/default/dw4694b528/images/May2024/17/category%201%20dressm.jpg",
//                 "discount": "16",
//                 "brand": "Angur",
//                 "productImages": [
//                   "https://www.jiomart.com/images/product/original/rv8axdxoiw/angur-oily-toor-dal-5kg-product-images-orv8axdxoiw-p602216568-0-202306071944.jpg",
//                   "https://www.jiomart.com/images/product/original/rv8axdxoiw/angur-oily-toor-dal-5kg-product-images-orv8axdxoiw-p602216568-1-202306071944.jpg",
//                   "https://www.jiomart.com/images/product/original/rv8axdxoiw/angur-oily-toor-dal-5kg-product-images-orv8axdxoiw-p602216568-2-202306071944.jpg",
//                   "https://www.jiomart.com/images/product/original/rv8axdxoiw/angur-oily-toor-dal-5kg-product-images-orv8axdxoiw-p602216568-3-202306071944.jpg",
//                   "https://www.jiomart.com/images/product/original/rv8axdxoiw/angur-oily-toor-dal-5kg-product-images-orv8axdxoiw-p602216568-4-202306071944.jpg",
//                   "https://www.jiomart.com/images/product/original/rv8axdxoiw/angur-oily-toor-dal-5kg-legal-images-orv8axdxoiw-p602216568-5-202306071944.png"
//                 ],
//                 "rating": 5,
//                 "description": "ANGUR TOOR DAL: Toor Dal (split yellow peas) is a mainstay of Indian cuisine. Related to lentils (pulses) and rich in natural nutrients, these delicious legumes are an excellent source of protein, minerals, and B vitamins.ADDS FLAVORFUL PROTEIN: Split yellow peas are an excellent, flavorful protein alternative for any meal. Use as a base or add Toor Dals to your favorite Indian dishes, including curries, soups, stews, salads, and more!",
//                 "id": 7
//               },
//               {
//                 "productName": "Fortune Soya Wadi / Chunks 1 kg",
//                 "price": "139",
//                 "oldPrice": "152",
//                 "weight": [
//                   50,
//                   100,
//                   150,
//                   200,
//                   250,
//                   500
//                 ],
//                 "catImg": "https://www.andindia.com/on/demandware.static/-/Sites-AND-Library/default/dw2e2cca76/images/May2024/17/category%204%20bottoms%20new.jpg",
//                 "discount": "15",
//                 "brand": "Fortune",
//                 "productImages": [
//                   "https://www.jiomart.com/images/product/original/491161236/fortune-soya-wadi-chunks-1-kg-product-images-o491161236-p491161236-0-202303181437.jpg",
//                   "https://www.jiomart.com/images/product/original/491161236/fortune-soya-wadi-chunks-1-kg-product-images-o491161236-p491161236-1-202303181437.jpg",
//                   "https://www.jiomart.com/images/product/original/491161236/fortune-soya-wadi-chunks-1-kg-legal-images-o491161236-p491161236-4-202303181437.jpg"
//                 ],
//                 "rating": 4.5,
//                 "description": "Fortune Soya Wadi / Chunks are light, soft and easy on your stomach. Does your family need champion wala dum aur yum? From biryanis to pulao and even Chinese fried rice, cooked soya chunks can be added to numerous rice dishes. Fortune Soya Chunk - ''Yum jo de champion ko dum'', so buy Fortune Soya Wadi / Chunks online now!",
//                 "id": 8
//               }
//             ]
//           },
//           {
//             "cat_name": " Shirt",
//             "products": [
//               {
//                 "productName": "Forest Shirt",
//                 "price": "2,990",
               
//                 "weight": [
//                   8,
//                   10,
//                   12,
//                   14,
//                   16,
//                   18
//                 ],
//                 "catImg": "https://www.andindia.com/dw/image/v2/BGCX_PRD/on/demandware.static/-/Sites-masterCatalog_ANDIndia/default/dw6727f37a/images/hires/SS22/AND-S24AV076TR17_WHT-GRN-(4).jpg",
               
//                 "brand": "Gowardhan",
//                 "productImages": [
//                   "https://www.andindia.com/dw/image/v2/BGCX_PRD/on/demandware.static/-/Sites-masterCatalog_ANDIndia/default/dw32cbc6fd/images/hires/SS22/AND-S24AV076TR17_WHT-GRN-(8).jpg",
//                   "https://www.andindia.com/dw/image/v2/BGCX_PRD/on/demandware.static/-/Sites-masterCatalog_ANDIndia/default/dw991223e4/images/hires/SS22/AND-S24AV076TR17_WHT-GRN-(5).jpg",
//                   "https://www.andindia.com/dw/image/v2/BGCX_PRD/on/demandware.static/-/Sites-masterCatalog_ANDIndia/default/dw0a844aff/images/hires/SS22/AND-S24AV076TR17_WHT-GRN-(1).jpg",
//                   "https://www.andindia.com/dw/image/v2/BGCX_PRD/on/demandware.static/-/Sites-masterCatalog_ANDIndia/default/dw0a844aff/images/hires/SS22/AND-S24AV076TR17_WHT-GRN-(1).jpg"
//                 ],
//                 "rating": 5,
//                 "description": "With a vibrant print and a relaxed silhouette, this button down is the ideal 'fit for an effortless weekend look. Crafted with a soft flowy fabric, it pairs well with your favourite denims.",
//                 "id": 9
//               },
//               {
//                 "productName": "Nestle EveryDay Ghee 1 L (Carton)",
//                 "price": "579",
//                 "oldPrice": "620",
//                 "weight": [
//                   50,
//                   100,
//                   150,
//                   200,
//                   250,
//                   500
//                 ],
//                 "catImg": "https://www.andindia.com/dw/image/v2/BGCX_PRD/on/demandware.static/-/Sites-masterCatalog_ANDIndia/default/dwd2c079ed/images/hires/SS22/AND-S24AJ038DRW14_BLU-PRT-(2).jpg",
//                 "discount": "16",
//                 "brand": "Nestle",
//                 "productImages": [
//                   "https://www.jiomart.com/images/product/original/490440207/nestle-everyday-ghee-1-l-carton-product-images-o490440207-p490440207-0-202203141958.jpg",
//                   "https://www.jiomart.com/images/product/original/490440207/nestle-everyday-ghee-1-l-carton-product-images-o490440207-p490440207-1-202203141958.jpg",
//                   "https://www.jiomart.com/images/product/original/490440207/nestle-everyday-ghee-1-l-carton-product-images-o490440207-p490440207-2-202203141958.jpg",
//                   "https://www.jiomart.com/images/product/original/490440207/nestle-everyday-ghee-1-l-carton-product-images-o490440207-p490440207-3-202203141958.jpg",
//                   "https://www.jiomart.com/images/product/original/490440207/nestle-everyday-ghee-1-l-carton-product-images-o490440207-p490440207-4-202203141958.jpg"
//                 ],
//                 "rating": 4.5,
//                 "description": "Ghee is a class of clarified butter that originated in ancient India. It is commonly used in Indian cooking. Nestle EveryDay Ghee can be swapped for vegetable oil or coconut oil in baked goods or can be used for deep-frying. Or simply melt it and spread it on roti, or pour it on vegetables/dal before serving. So go ahead and buy this product online today!",
//                 "id": 10
//               },
//               {
//                 "productName": "Amul Cow Ghee 1 L (Pouch)",
//                 "price": "250",
//                 "oldPrice": "300",
//                 "weight": [
//                   50,
//                   100,
//                   150,
//                   200,
//                   250,
//                   500
//                 ],
//                 "catImg": "https://www.jiomart.com/images/product/original/491135471/amul-cow-ghee-1-l-pouch-product-images-o491135471-p491135471-0-202203170918.jpg",
//                 "discount": "10",
//                 "brand": "Amul",
//                 "productImages": [
//                   "https://www.jiomart.com/images/product/original/491135471/amul-cow-ghee-1-l-pouch-product-images-o491135471-p491135471-0-202203170918.jpg",
//                   "https://www.jiomart.com/images/product/original/491135471/amul-cow-ghee-1-l-pouch-product-images-o491135471-p491135471-1-202203170918.jpg",
//                   "https://www.jiomart.com/images/product/original/491135471/amul-cow-ghee-1-l-pouch-legal-images-o491135471-p491135471-2-202203170918.jpg"
//                 ],
//                 "rating": 0,
//                 "description": "Ghee is a class of clarified butter that originated in ancient India. It is commonly used in Indian cooking. Amul Cow Ghee can be swapped for vegetable oil or coconut oil in baked goods or can be used for deep-frying. Or simply melt it and spread it on roti, or pour it on vegetables/dal before serving. So go ahead and buy this product online today!",
//                 "id": 11
//               },
//               {
//                 "productName": "Amul Cow Ghee 500 ml (Pouch)",
//                 "price": "300",
//                 "oldPrice": "380",
//                 "weight": [
//                   50,
//                   100,
//                   150,
//                   200,
//                   250,
//                   500
//                 ],
//                 "catImg": "https://www.jiomart.com/images/product/original/490011305/amul-cow-ghee-500-ml-pouch-product-images-o490011305-p490011305-0-202203150541.jpg",
//                 "discount": "8",
//                 "brand": "Amul",
//                 "productImages": [
//                   "https://www.jiomart.com/images/product/original/490011305/amul-cow-ghee-500-ml-pouch-product-images-o490011305-p490011305-0-202203150541.jpg",
//                   "https://www.jiomart.com/images/product/original/490011305/amul-cow-ghee-500-ml-pouch-product-images-o490011305-p490011305-1-202203150541.jpg"
//                 ],
//                 "rating": 0,
//                 "description": "Ghee is a class of clarified butter that originated in ancient India. It is commonly used in Indian cooking. Amul Cow Ghee can be swapped for vegetable oil or coconut oil in baked goods or can be used for deep-frying. Or simply melt it and spread it on roti, or pour it on vegetables/dal before serving. So go ahead and buy this product online today!",
//                 "id": 12
//               },
//               {
//                 "productName": "HARYANA FRESH Rich Desi Danedar Ghee 500 Grams (Carton)",
//                 "price": "249",
//                 "oldPrice": "280",
//                 "weight": [
//                   50,
//                   100,
//                   150,
//                   200,
//                   250,
//                   500
//                 ],
//                 "catImg": "https://www.jiomart.com/images/product/original/rvtancavef/haryana-fresh-rich-desi-danedar-ghee-500-grams-carton-product-images-orvtancavef-p604251677-0-202308302043.jpg",
//                 "discount": "18",
//                 "brand": "HARYANA FRESH",
//                 "productImages": [
//                   "https://www.jiomart.com/images/product/original/rvtancavef/haryana-fresh-rich-desi-danedar-ghee-500-grams-carton-product-images-orvtancavef-p604251677-0-202308302043.jpg",
//                   "https://www.jiomart.com/images/product/original/rvtancavef/haryana-fresh-rich-desi-danedar-ghee-500-grams-carton-product-images-orvtancavef-p604251677-1-202308302043.jpg",
//                   "https://www.jiomart.com/images/product/original/rvtancavef/haryana-fresh-rich-desi-danedar-ghee-500-grams-carton-legal-images-orvtancavef-p604251677-2-202308302043.jpg"
//                 ],
//                 "rating": 4,
//                 "description": "Ghee is a class of clarified butter that originated in ancient India. It is commonly used in Indian cooking. Amul Cow Ghee can be swapped for vegetable oil or coconut oil in baked goods or can be used for deep-frying. Or simply melt it and spread it on roti, or pour it on vegetables/dal before serving. So go ahead and buy this product online today",
//                 "id": 13
//               },
//               {
//                 "productName": "Kheduthaat Shudh Ghee Vedic Method Traditional Suddha Ghee 1 LTR ml",
//                 "price": "699",
//                 "oldPrice": "780",
//                 "weight": [
//                   50,
//                   100,
//                   150,
//                   200,
//                   250,
//                   500
//                 ],
//                 "catImg": "https://www.jiomart.com/images/product/original/rv6qd7bcjt/kheduthaat-shudh-ghee-vedic-method-traditional-suddha-ghee-1-ltr-ml-product-images-orv6qd7bcjt-p604175636-0-202308291243.jpg",
//                 "discount": "14",
//                 "brand": "KHEDUT HAAT",
//                 "productImages": [
//                   "https://www.jiomart.com/images/product/original/rv6qd7bcjt/kheduthaat-shudh-ghee-vedic-method-traditional-suddha-ghee-1-ltr-ml-product-images-orv6qd7bcjt-p604175636-0-202308291243.jpg",
//                   "https://www.jiomart.com/images/product/original/rv6qd7bcjt/kheduthaat-shudh-ghee-vedic-method-traditional-suddha-ghee-1-ltr-ml-product-images-orv6qd7bcjt-p604175636-1-202308291243.jpg",
//                   "https://www.jiomart.com/images/product/original/rv6qd7bcjt/kheduthaat-shudh-ghee-vedic-method-traditional-suddha-ghee-1-ltr-ml-legal-images-orv6qd7bcjt-p604175636-3-202308291243.jpg"
//                 ],
//                 "rating": 4,
//                 "description": "Khedut haat provides you with the pure cow ghee from the milk . Our ghee provides you with all the nutrients needed and only in the vessels made with Soil (Mitti) has taken an initiative for farmers to keep their strength which is a cow. All our products are directly or indirectly related to Cows & Buffalows. this milk to make milk-made dairy products. Cow dung and cow urine for fertilizing the soil. We do not use chemical fertilizers ",
//                 "id": 14
//               }
//             ]
//           },
//           {
//             "cat_name": "Atta & Flours",
//             "products": [
//               {
//                 "productName": "Aashirvaad Superior MP Whole Wheat Atta 1 kg",
//                 "price": "320",
//                 "oldPrice": "380",
//                 "weight": [
//                   50,
//                   100,
//                   150,
//                   200,
//                   250,
//                   500
//                 ],
//                 "catImg": "https://www.jiomart.com/images/product/original/490750659/aashirvaad-superior-mp-whole-wheat-atta-1-kg-product-images-o490750659-p590150646-0-202203150622.jpg",
//                 "discount": "13",
//                 "brand": "Aashirvaad",
//                 "productImages": [
//                   "https://www.jiomart.com/images/product/original/490750659/aashirvaad-superior-mp-whole-wheat-atta-1-kg-product-images-o490750659-p590150646-0-202203150622.jpg",
//                   "https://www.jiomart.com/images/product/original/490750659/aashirvaad-superior-mp-whole-wheat-atta-1-kg-product-images-o490750659-p590150646-1-202203150622.jpg",
//                   "https://www.jiomart.com/images/product/original/490750659/aashirvaad-superior-mp-whole-wheat-atta-1-kg-legal-images-o490750659-p590150646-2-202203150622.jpg",
//                   "https://www.jiomart.com/images/product/original/490750659/aashirvaad-superior-mp-whole-wheat-atta-1-kg-legal-images-o490750659-p590150646-3-202203150622.jpg",
//                   "https://www.jiomart.com/images/product/original/490750659/aashirvaad-superior-mp-whole-wheat-atta-1-kg-legal-images-o490750659-p590150646-4-202203150622.jpg"
//                 ],
//                 "rating": 5,
//                 "description": "Aashirvaad Superior MP Whole Wheat Atta provides goodness of taste in every bite. Also, it has a sweet and aromatic taste that works together to give you fuller and softer rotis, every single time. Buy Aashirvaad Superior MP Whole Wheat Atta online now!",
//                 "id": 15
//               },
//               {
//                 "productName": "Aashirvaad Select Sharbati Whole Wheat Atta 1 kg",
//                 "price": "350",
//                 "oldPrice": "380",
//                 "weight": [
//                   50,
//                   100,
//                   150,
//                   200,
//                   250,
//                   500
//                 ],
//                 "catImg": "https://www.jiomart.com/images/product/original/490007352/aashirvaad-select-sharbati-whole-wheat-atta-1-kg-product-images-o490007352-p490007352-0-202206241206.jpg",
//                 "discount": "17",
//                 "brand": "Aashirvaad",
//                 "productImages": [
//                   "https://www.jiomart.com/images/product/original/490007352/aashirvaad-select-sharbati-whole-wheat-atta-1-kg-product-images-o490007352-p490007352-0-202206241206.jpg",
//                   "https://www.jiomart.com/images/product/original/490007352/aashirvaad-select-sharbati-whole-wheat-atta-1-kg-product-images-o490007352-p490007352-1-202206241206.jpg",
//                   "https://www.jiomart.com/images/product/original/490007352/aashirvaad-select-sharbati-whole-wheat-atta-1-kg-legal-images-o490007352-p490007352-2-202206241206.jpg",
//                   "https://www.jiomart.com/images/product/original/490007352/aashirvaad-select-sharbati-whole-wheat-atta-1-kg-legal-images-o490007352-p490007352-3-202206241206.jpg"
//                 ],
//                 "rating": 0,
//                 "description": "Aashirvaad ensures that only superior quality ingredients reach your kitchen and Aashirvaad Select Sharbati stays true to that word. Made from the King of Wheat Sharbati, Aashirvaad Select is a premium quality aata which is made with love in India. This sharbati wheat flour contains MP Sharbati wheat from the select regions of Madhya Pradesh. The grains of sharabati atta are consistent in size and have a golden sheen to it. The dough made from the King of Wheat Sharbati, absorbs more water which leads to the rotis being sweet in taste and softer in texture. Buy Aashirvaad Select Sharbati Whole Wheat Atta now!",
//                 "id": 16
//               },
//               {
//                 "productName": "Aashirvaad Superior MP Whole Wheat Atta 2 kg",
//                 "price": "250",
//                 "oldPrice": "300",
//                 "weight": [
//                   50,
//                   100,
//                   150,
//                   200,
//                   250,
//                   500
//                 ],
//                 "catImg": "https://www.jiomart.com/images/product/original/490750660/aashirvaad-superior-mp-whole-wheat-atta-2-kg-product-images-o490750660-p590150647-0-202203170807.jpg",
//                 "discount": "12",
//                 "brand": "Aashirvaad",
//                 "productImages": [
//                   "https://www.jiomart.com/images/product/original/490750660/aashirvaad-superior-mp-whole-wheat-atta-2-kg-product-images-o490750660-p590150647-0-202203170807.jpg",
//                   "https://www.jiomart.com/images/product/original/490750660/aashirvaad-superior-mp-whole-wheat-atta-2-kg-product-images-o490750660-p590150647-1-202203170807.jpg",
//                   "https://www.jiomart.com/images/product/original/490750660/aashirvaad-superior-mp-whole-wheat-atta-2-kg-legal-images-o490750660-p590150647-2-202203170807.jpg",
//                   "https://www.jiomart.com/images/product/original/490750660/aashirvaad-superior-mp-whole-wheat-atta-2-kg-legal-images-o490750660-p590150647-3-202203170807.jpg"
//                 ],
//                 "rating": 4.5,
//                 "description": "Aashirvaad Superior MP Whole Wheat Atta provides goodness of taste in every bite. Also, it has a sweet and aromatic taste that works together to give you fuller and softer rotis, every single time. Buy Aashirvaad Superior MP Whole Wheat Atta online now!\n",
//                 "id": 17
//               },
//               {
//                 "productName": "Chakki Atta 10 kg",
//                 "price": "400",
//                 "oldPrice": "450",
//                 "weight": [
//                   50,
//                   100,
//                   150,
//                   200,
//                   250,
//                   500
//                 ],
//                 "catImg": "https://www.jiomart.com/images/product/original/491349660/chakki-atta-10-kg-product-images-o491349660-p491349660-0-202206231932.jpg",
//                 "discount": "12",
//                 "brand": "Private Label",
//                 "productImages": [
//                   "https://www.jiomart.com/images/product/original/491349660/chakki-atta-10-kg-product-images-o491349660-p491349660-0-202206231932.jpg",
//                   "https://www.jiomart.com/images/product/original/491349660/chakki-atta-10-kg-product-images-o491349660-p491349660-1-202206231932.jpg"
//                 ],
//                 "rating": 4,
//                 "description": "Chakki Atta is freshly made from the choicest grains. It is carefully ground using modern chakki technique. It is used to make a wide range of foods including bread, crumpets, muffins, noodles, pasta, biscuits, cakes, pastries, cereal bars, sweet and savoury snack foods, crackers, crisp-breads, sauces and confectioner. Buy Chakki Atta online now!\n",
//                 "id": 18
//               },
//               {
//                 "productName": "Good Life MP Wheat Chakki Atta 5 kg",
//                 "price": "250",
//                 "oldPrice": "280",
//                 "weight": [
//                   50,
//                   100,
//                   150,
//                   200,
//                   250,
//                   500
//                 ],
//                 "catImg": "https://www.jiomart.com/images/product/original/491458272/good-life-mp-wheat-chakki-atta-5-kg-product-images-o491458272-p491458272-0-202306131322.jpg",
//                 "discount": "12",
//                 "brand": "Good Life",
//                 "productImages": [
//                   "https://www.jiomart.com/images/product/original/491458272/good-life-mp-wheat-chakki-atta-5-kg-product-images-o491458272-p491458272-0-202306131322.jpg",
//                   "https://www.jiomart.com/images/product/original/491458272/good-life-mp-wheat-chakki-atta-5-kg-product-images-o491458272-p491458272-1-202306131322.jpg",
//                   "https://www.jiomart.com/images/product/original/491458272/good-life-mp-wheat-chakki-atta-5-kg-product-images-o491458272-p491458272-2-202306131322.jpg",
//                   "https://www.jiomart.com/images/product/original/491458272/good-life-mp-wheat-chakki-atta-5-kg-legal-images-o491458272-p491458272-3-202306131322.jpg"
//                 ],
//                 "rating": 4,
//                 "description": "Now get the best of health in every bite with Good Life MP Wheat Chakki Atta. The hygienic packaging ensures the product remains fresh over a period of time. Also, it has a sweet and aromatic taste that works together to give you fuller and softer rotis, every single time. Buy Good Life MP Wheat Chakki Atta online now!\n",
//                 "id": 19
//               },
//               {
//                 "productName": "Fortune Suji / Semolina 500 g",
//                 "price": "26",
//                 "oldPrice": "35",
//                 "weight": [
//                   50,
//                   100,
//                   150,
//                   200,
//                   250,
//                   500
//                 ],
//                 "catImg": "https://www.jiomart.com/images/product/original/491695704/fortune-suji-semolina-500-g-product-images-o491695704-p590040931-0-202305191005.jpg",
//                 "discount": "12",
//                 "brand": "Fortune",
//                 "productImages": [
//                   "https://www.jiomart.com/images/product/original/491695704/fortune-suji-semolina-500-g-product-images-o491695704-p590040931-0-202305191005.jpg",
//                   "https://www.jiomart.com/images/product/original/491695704/fortune-suji-semolina-500-g-product-images-o491695704-p590040931-1-202305191005.jpg",
//                   "https://www.jiomart.com/images/product/original/491695704/fortune-suji-semolina-500-g-legal-images-o491695704-p590040931-2-202305191005.jpg"
//                 ],
//                 "rating": 5,
//                 "description": "Fortune Suji / Semolina commonly called as wheat rawa is used as a batter ingredient as well as to make various other food items like upma and sheera. It is coarse in texture and is made of wheat. It is a versatile ingredient and easy to cook. It makes a perfect food for breakfast. Buy Fortune Suji / Semolina online now!\n",
//                 "id": 20
//               },
//               {
//                 "productName": "Wheatkart Whole Wheat Atta - 10 KG",
//                 "price": "210",
//                 "oldPrice": "250",
//                 "weight": [
//                   50,
//                   100,
//                   150,
//                   200,
//                   250,
//                   500
//                 ],
//                 "catImg": "https://www.jiomart.com/images/product/original/rvondh0dpy/wheatkart-whole-wheat-atta-10-kg-product-images-orvondh0dpy-p596562517-0-202212221536.png",
//                 "discount": "17",
//                 "brand": "Wheatkart",
//                 "productImages": [
//                   "https://www.jiomart.com/images/product/original/rvondh0dpy/wheatkart-whole-wheat-atta-10-kg-product-images-orvondh0dpy-p596562517-0-202212221536.png",
//                   "https://www.jiomart.com/images/product/original/rvondh0dpy/wheatkart-whole-wheat-atta-10-kg-legal-images-orvondh0dpy-p596562517-1-202212221536.png"
//                 ],
//                 "rating": 4.5,
//                 "description": "Without adding any maida, we have 100% wheat flour to make the dough smoother.\n\nThe atta is so perfectly blended that the chappatis made by Wheatkart Atta are tastier and softer when they are cold.\n\nAtta or chakki atta is wheat flour from the Indian subcontinent that is mostly used to create flatbreads like chapati, roti, naan, paratha and puri.",
//                 "id": 21
//               }
//             ]
//           },
//           {
//             "cat_name": "masalas spices",
//             "products": [
//               {
//                 "productName": "Good Life Jeera 100 g",
//                 "price": "300",
//                 "oldPrice": "350",
//                 "weight": [
//                   50,
//                   100,
//                   150,
//                   200,
//                   250,
//                   500
//                 ],
//                 "catImg": "https://www.jiomart.com/images/product/original/491185109/good-life-jeera-100-g-product-images-o491185109-p491185109-0-202306131531.jpg",
//                 "discount": "10",
//                 "brand": "Good Life ",
//                 "productImages": [
//                   "https://www.jiomart.com/images/product/original/491185109/good-life-jeera-100-g-product-images-o491185109-p491185109-0-202306131531.jpg",
//                   "https://www.jiomart.com/images/product/original/491185109/good-life-jeera-100-g-product-images-o491185109-p491185109-1-202306131531.jpg",
//                   "https://www.jiomart.com/images/product/original/491185109/good-life-jeera-100-g-product-images-o491185109-p491185109-2-202306131531.jpg",
//                   "https://www.jiomart.com/images/product/original/491185109/good-life-jeera-100-g-legal-images-o491185109-p491185109-3-202306131531.jpg"
//                 ],
//                 "rating": 4.5,
//                 "description": "eera is an essential spice that is used for tempering dishes with a strong taste and aroma. It offers a sturdy, exclusive and soothing piquancy and aroma to the dishes. It's not only known for its flavour enhancing quality but also for its health benefits. Add an extra pinch of taste to your dish with Good Life Jeera. So go ahead and buy this product online today.",
//                 "id": 22
//               },
//               {
//                 "productName": "Maggi Masala Ae Magic 6 g (Pack of 12)",
//                 "price": "200",
//                 "oldPrice": "250",
//                 "weight": [
//                   50,
//                   100,
//                   150,
//                   200,
//                   250,
//                   500
//                 ],
//                 "catImg": "https://www.jiomart.com/images/product/original/491410091/maggi-masala-ae-magic-6-g-pack-of-12-product-images-o491410091-p491410091-0-202305181146.jpg",
//                 "discount": "10",
//                 "brand": "Maggi",
//                 "productImages": [
//                   "https://www.jiomart.com/images/product/original/491410091/maggi-masala-ae-magic-6-g-pack-of-12-product-images-o491410091-p491410091-0-202305181146.jpg",
//                   "https://www.jiomart.com/images/product/original/491410091/maggi-masala-ae-magic-6-g-pack-of-12-product-images-o491410091-p491410091-1-202305181146.jpg",
//                   "https://www.jiomart.com/images/product/original/491410091/maggi-masala-ae-magic-6-g-pack-of-12-product-images-o491410091-p491410091-2-202305181146.jpg",
//                   "https://www.jiomart.com/images/product/original/491410091/maggi-masala-ae-magic-6-g-pack-of-12-product-images-o491410091-p491410091-3-202305181146.jpg",
//                   "https://www.jiomart.com/images/product/original/491410091/maggi-masala-ae-magic-6-g-pack-of-12-legal-images-o491410091-p491410091-4-202305181146.jpg"
//                 ],
//                 "rating": 5,
//                 "description": "Maggi Masala Ae Magic is that secret spice that instantly enhances the taste and aroma of any dish. Just add a teaspoon of this spice to flavoured rice, vegetable dishes, salads and snacks to make them flavoursome. Buy Maggi Masala Ae Magic online now!",
//                 "id": 23
//               },
//               {
//                 "productName": "Good Life Compounded Hing Powder 50 g",
//                 "price": "55",
//                 "oldPrice": "85",
//                 "weight": [
//                   50,
//                   100,
//                   150,
//                   200,
//                   250,
//                   500
//                 ],
//                 "catImg": "https://www.jiomart.com/images/product/original/491279754/good-life-compounded-hing-powder-50-g-product-images-o491279754-p491279754-0-202205180454.jpg",
//                 "discount": "10",
//                 "brand": "Good Life",
//                 "productImages": [
//                   "https://www.jiomart.com/images/product/original/491279754/good-life-compounded-hing-powder-50-g-product-images-o491279754-p491279754-0-202205180454.jpg",
//                   "https://www.jiomart.com/images/product/original/491279754/good-life-compounded-hing-powder-50-g-product-images-o491279754-p491279754-1-202205180454.jpg",
//                   "https://www.jiomart.com/images/product/original/491279754/good-life-compounded-hing-powder-50-g-product-images-o491279754-p491279754-2-202205180454.jpg",
//                   "https://www.jiomart.com/images/product/original/491279754/good-life-compounded-hing-powder-50-g-product-images-o491279754-p491279754-3-202205180454.jpg"
//                 ],
//                 "rating": 4,
//                 "description": "Hing (Asafoetida) has a slightly pungent smell but when added to pickles and curries it gives a delectable flavour. A tinge of Hing can turn your food more flavourful. The product helps in easy digestion too. Good Life Compounded Hing Powder serves as an ideal choice for all your cooking needs. Buy this product online today.",
//                 "id": 24
//               },
//               {
//                 "productName": "VEEDINT CUMIN SEEDS, JEERA WHOLE, CUMIN SEED WHOLE, 1 KG PACK",
//                 "price": "180",
//                 "oldPrice": "220",
//                 "weight": [
//                   50,
//                   100,
//                   150,
//                   200,
//                   250,
//                   500
//                 ],
//                 "catImg": "https://www.jiomart.com/images/product/original/rvahttucjx/veedint-cumin-seeds-jeera-whole-cumin-seed-whole-1-kg-pack-product-images-orvahttucjx-p601512221-0-202305151313.jpg",
//                 "discount": "10",
//                 "brand": "Veedint",
//                 "productImages": [
//                   "https://www.jiomart.com/images/product/original/rvahttucjx/veedint-cumin-seeds-jeera-whole-cumin-seed-whole-1-kg-pack-product-images-orvahttucjx-p601512221-0-202305151313.jpg",
//                   "https://www.jiomart.com/images/product/original/rvahttucjx/veedint-cumin-seeds-jeera-whole-cumin-seed-whole-1-kg-pack-product-images-orvahttucjx-p601512221-1-202305151313.jpg",
//                   "https://www.jiomart.com/images/product/original/rvahttucjx/veedint-cumin-seeds-jeera-whole-cumin-seed-whole-1-kg-pack-product-images-orvahttucjx-p601512221-2-202305151313.jpg"
//                 ],
//                 "rating": 5,
//                 "description": "Cumin Seed Whole (Jeera), Natural. Cumin seeds are commonly used in Indian and South Asian cooking, as well as Mexican cuisine. They have a warm and aromatic flavor that resembles curry powder. The seeds are used as a key ingredient in Indian food, but can also be added to soups or sauces for flavoring purposes. The aromatic seed like fruit is elongated, ovoid, 3-6 mm long, slingtly bitter and has a warm flavour The flowers are white or rose coloured in small umbels. \n",
//                 "id": 25
//               },
//               {
//                 "productName": "Organic Tattva Cumin Seeds 100 g",
//                 "price": "88",
//                 "oldPrice": "110",
//                 "weight": [
//                   50,
//                   100,
//                   150,
//                   200,
//                   250,
//                   500
//                 ],
//                 "catImg": "https://www.jiomart.com/images/product/original/491229671/organic-tattva-cumin-seeds-100-g-product-images-o491229671-p491229671-0-202206021941.jpg",
//                 "discount": "8",
//                 "brand": "Organic Tattva",
//                 "productImages": [
//                   "https://www.jiomart.com/images/product/original/491229671/organic-tattva-cumin-seeds-100-g-product-images-o491229671-p491229671-0-202206021941.jpg",
//                   "https://www.jiomart.com/images/product/original/491229671/organic-tattva-cumin-seeds-100-g-product-images-o491229671-p491229671-1-202206021941.jpg"
//                 ],
//                 "rating": 5,
//                 "description": "Cumin seeds or Jeera is an essential spice that is used for tempering dishes with a strong taste and aroma. It offers a sturdy, exclusive and soothing piquancy and aroma to the dishes. It's not only known for its flavour enhancing quality but also for its health benefits. Add an extra pinch of taste to your dish with Organic Tattva Cumin Seeds. So go ahead and buy this product online today.\n",
//                 "id": 26
//               },
//               {
//                 "productName": "Lotus Spices Green Elaichi 10 g",
//                 "price": "32",
//                 "oldPrice": "55",
//                 "weight": [
//                   50,
//                   100,
//                   150,
//                   200,
//                   250,
//                   500
//                 ],
//                 "catImg": "https://www.jiomart.com/images/product/original/493072642/lotus-spices-green-elaichi-15-g-product-images-o493072642-p593731219-0-202304291358.jpg",
//                 "discount": "10",
//                 "brand": "Lotus",
//                 "productImages": [
//                   "https://www.jiomart.com/images/product/original/493072642/lotus-spices-green-elaichi-15-g-product-images-o493072642-p593731219-0-202304291358.jpg",
//                   "https://www.jiomart.com/images/product/original/493072642/lotus-spices-green-elaichi-15-g-product-images-o493072642-p593731219-1-202304291358.jpg"
//                 ],
//                 "rating": 4.5,
//                 "description": "Green Elaichi or Green Cardamom is also known as the 'Queen of Spices'. It is the most common spice used in a variety of sweet and savoury dishes. It is also added to tea and coffee for its unique fragrance and flavour. Buy Lotus Spices Green Elaichi online today!\n",
//                 "id": 27
//               }
//             ]
//           },
//           {
//             "cat_name": "Rice & Rice Products",
//             "products": [
//               {
//                 "productName": "Tata Sampann White Poha 500 g",
//                 "price": "140",
//                 "oldPrice": "180",
//                 "weight": [
//                   50,
//                   100,
//                   150,
//                   200,
//                   250,
//                   500
//                 ],
//                 "catImg": "https://www.jiomart.com/images/product/original/491614721/tata-sampann-white-poha-500-g-product-images-o491614721-p491614721-0-202203150346.jpg",
//                 "discount": "20",
//                 "brand": "Tata Sampann",
//                 "productImages": [
//                   "https://www.jiomart.com/images/product/original/491614721/tata-sampann-white-poha-500-g-product-images-o491614721-p491614721-0-202203150346.jpg",
//                   "https://www.jiomart.com/images/product/original/491614721/tata-sampann-white-poha-500-g-product-images-o491614721-p491614721-1-202203150346.jpg"
//                 ],
//                 "rating": 5,
//                 "description": "Poha (Rice Flakes) is a popular Indian breakfast, especially for those who are on a weight watch. It is made from beaten rice. Serve a hot plate of delicious poha topped with bhujia and coriander, along with a bowl of green chutney for your breakfast or snack time. Buy Tata Sampann White Poha online now!\n",
//                 "id": 30
//               },
//               {
//                 "productName": "Daawat Rozana Super Basmati Broken Rice 1 kg",
//                 "price": "150",
//                 "oldPrice": "190",
//                 "weight": [
//                   50,
//                   100,
//                   150,
//                   200,
//                   250,
//                   500
//                 ],
//                 "catImg": "https://www.jiomart.com/images/product/original/490863714/daawat-rozana-super-basmati-rice-1-kg-product-images-o490863714-p490863714-0-202203171018.jpg",
//                 "discount": "12",
//                 "brand": "Daawat",
//                 "productImages": [
//                   "https://www.jiomart.com/images/product/original/490863714/daawat-rozana-super-basmati-rice-1-kg-product-images-o490863714-p490863714-0-202203171018.jpg",
//                   "https://www.jiomart.com/images/product/original/490863714/daawat-rozana-super-basmati-rice-1-kg-product-images-o490863714-p490863714-1-202203171018.jpg",
//                   "https://www.jiomart.com/images/product/original/490863714/daawat-rozana-super-basmati-rice-1-kg-legal-images-o490863714-p490863714-2-202203171018.jpg"
//                 ],
//                 "rating": 4,
//                 "description": "Basmati Broken Rice has been an integral part of different Broken Rice recipes in every Indian household. It is processed under the supervision of experts. It can be used in a variety of Broken Rice dishes including biryani, pulao, and other Indian dishes. One can have it with meat, curries, dals and many more food items. Buy Daawat Rozana Super Basmati Broken Rice online now!\n",
//                 "id": 31
//               },
//               {
//                 "productName": "Elina Long Grain Rice 1 kg",
//                 "price": "140",
//                 "oldPrice": "160",
//                 "weight": [
//                   50,
//                   100,
//                   150,
//                   200,
//                   250,
//                   500
//                 ],
//                 "catImg": "https://www.jiomart.com/images/product/original/491173885/elina-long-grain-rice-1-kg-product-images-o491173885-p491173885-0-202203151443.jpg",
//                 "discount": "10",
//                 "brand": "Elina",
//                 "productImages": [
//                   "https://www.jiomart.com/images/product/original/491173885/elina-long-grain-rice-1-kg-product-images-o491173885-p491173885-0-202203151443.jpg",
//                   "https://www.jiomart.com/images/product/original/491173885/elina-long-grain-rice-1-kg-product-images-o491173885-p491173885-1-202203151443.jpg",
//                   "https://www.jiomart.com/images/product/original/491173885/elina-long-grain-rice-1-kg-legal-images-o491173885-p491173885-2-202203151443.jpg"
//                 ],
//                 "rating": 4,
//                 "description": "Guests coming over for dinner? Put on your cooking aprons and cook some delicious rice recipes with Elina Long Grain Rice. The slender long grained rice is aromatic and nutritious at the same time. Its flavourful rich taste will earn you lots of appreciation from your visitors. It is a premium brand that focuses on providing good quality products at affordable rates. Buy Elina Long Grain Rice online now!\n\n",
//                 "id": 32
//               },
//               {
//                 "productName": "Daawat Rozana Gold Basmati Broken Rice 5 kg",
//                 "price": "130",
//                 "oldPrice": "170",
//                 "weight": [
//                   50,
//                   100,
//                   150,
//                   200,
//                   250,
//                   500
//                 ],
//                 "catImg": "https://www.jiomart.com/images/product/original/490005638/daawat-rozana-gold-basmati-rice-5-kg-product-images-o490005638-p490005638-0-202203171005.jpg",
//                 "discount": "8",
//                 "brand": "Daawat",
//                 "productImages": [
//                   "https://www.jiomart.com/images/product/original/490005638/daawat-rozana-gold-basmati-rice-5-kg-product-images-o490005638-p490005638-0-202203171005.jpg",
//                   "https://www.jiomart.com/images/product/original/490005638/daawat-rozana-gold-basmati-rice-5-kg-product-images-o490005638-p490005638-1-202203171005.jpg",
//                   "https://www.jiomart.com/images/product/original/490005638/daawat-rozana-gold-basmati-rice-5-kg-legal-images-o490005638-p490005638-2-202203171005.jpg"
//                 ],
//                 "rating": 5,
//                 "description": "Daawat Rozana Gold Basmati Broken Rice has been an integral part of different Broken Rice recipes in every Indian household. It is processed under the supervision of experts. It can be used in a variety of Broken Rice dishes including biryani, pulao, and other Indian dishes. One can have it with meat, curries, dals and many more food items. Buy Daawat Rozana Gold Basmati Broken Rice online now!\n",
//                 "id": 33
//               },
//               {
//                 "productName": "Daawat Rozana Super Basmati Broken Rice 5 kg",
//                 "price": "100",
//                 "oldPrice": "130",
//                 "weight": [
//                   50,
//                   100,
//                   150,
//                   200,
//                   250,
//                   500
//                 ],
//                 "catImg": "https://www.jiomart.com/images/product/original/491019524/daawat-rozana-super-basmati-rice-5-kg-product-images-o491019524-p491019524-0-202203171025.jpg",
//                 "discount": "10",
//                 "brand": "Daawat",
//                 "productImages": [
//                   "https://www.jiomart.com/images/product/original/491019524/daawat-rozana-super-basmati-rice-5-kg-product-images-o491019524-p491019524-0-202203171025.jpg",
//                   "https://www.jiomart.com/images/product/original/491019524/daawat-rozana-super-basmati-rice-5-kg-product-images-o491019524-p491019524-1-202203171025.jpg",
//                   "https://www.jiomart.com/images/product/original/491019524/daawat-rozana-super-basmati-rice-5-kg-legal-images-o491019524-p491019524-2-202203171025.jpg"
//                 ],
//                 "rating": 4.5,
//                 "description": "Basmati Broken Rice is everyday Broken Rice that makes each meal memorable. It is ideal for people who like to include Broken Rice in their daily meal consumption. Aromatic, flavourful, and defined by its distinctly long and slender grains, Daawat Rozana Super Basmati Broken Rice turns every meal into comfort food. Go and grab your pack now! Buy Daawat Rozana Super Basmati Broken Rice online now!\n",
//                 "id": 34
//               }
//             ]
//           }
//         ]
//       },
//       {
//         "cat_name": "Girls",
//         "id": 2,
//         "image": "data:image/png;base64,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",
//         "items": [
//           {
//             "cat_name": "Mobiles & Tablets",
//             "products": [
//               {
//                 "productName": "OnePlus Nord CE 2 Lite 5G,128 GB,6 GB RAM,Blue Tide,Mobile Phone",
//                 "price": "16,999.00",
//                 "oldPrice": "19,999.00",
//                 "weight": [],
//                 "RAM": [
//                   4,
//                   6,
//                   8
//                 ],
//                 "catImg": "https://www.jiomart.com/images/product/original/492850035/oneplus-nord-ce-2-lite-5g-128-gb-6-gb-ram-blue-tide-mobile-phone-digital-o492850035-p591224603-0-202208112007.png",
//                 "discount": "12",
//                 "brand": "One Plus",
//                 "productImages": [
//                   "https://www.jiomart.com/images/product/original/492850035/oneplus-nord-ce-2-lite-5g-128-gb-6-gb-ram-blue-tide-mobile-phone-digital-o492850035-p591224603-0-202208112007.png",
//                   "https://www.jiomart.com/images/product/original/492850035/oneplus-nord-ce-2-lite-5g-128-gb-6-gb-ram-blue-tide-mobile-phone-digital-o492850035-p591224603-0-202208112007.png",
//                   "https://www.jiomart.com/images/product/original/492850035/oneplus-nord-ce-2-lite-5g-128-gb-6-gb-ram-blue-tide-mobile-phone-digital-o492850035-p591224603-1-202208112007.jpeg",
//                   "https://www.jiomart.com/images/product/original/492850035/oneplus-nord-ce-2-lite-5g-128-gb-6-gb-ram-blue-tide-mobile-phone-digital-o492850035-p591224603-2-202208112007.jpeg",
//                   "https://www.jiomart.com/images/product/original/492850035/oneplus-nord-ce-2-lite-5g-128-gb-6-gb-ram-blue-tide-mobile-phone-digital-o492850035-p591224603-3-202208112007.jpeg",
//                   "https://www.jiomart.com/images/product/original/492850035/oneplus-nord-ce-2-lite-5g-128-gb-6-gb-ram-blue-tide-mobile-phone-digital-o492850035-p591224603-4-202208112007.jpeg",
//                   "https://www.jiomart.com/images/product/original/492850035/oneplus-nord-ce-2-lite-5g-128-gb-6-gb-ram-blue-tide-mobile-phone-digital-o492850035-p591224603-5-202208112007.png",
//                   "https://www.jiomart.com/images/product/original/492850035/oneplus-nord-ce-2-lite-5g-128-gb-6-gb-ram-blue-tide-mobile-phone-digital-o492850035-p591224603-6-202208112007.png"
//                 ],
//                 "rating": 4.5,
//                 "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ",
//                 "id": 35
//               },
//               {
//                 "productName": "Apple iPhone 13 128 GB, Midnight (Black)",
//                 "price": "56,900.00",
//                 "oldPrice": "59,900.00",
//                 "weight": [],
//                 "RAM": [
//                   4,
//                   6,
//                   8,
//                   12
//                 ],
//                 "catImg": "https://www.jiomart.com/images/product/original/491997699/apple-iphone-13-128-gb-midnight-black-digital-o491997699-p590798548-0-202208221207.jpeg",
//                 "discount": "20",
//                 "brand": "Apple",
//                 "productImages": [
//                   "https://www.jiomart.com/images/product/original/491997699/apple-iphone-13-128-gb-midnight-black-digital-o491997699-p590798548-0-202208221207.jpeg",
//                   "https://www.jiomart.com/images/product/original/491997699/apple-iphone-13-128-gb-midnight-black-digital-o491997699-p590798548-1-202208221207.jpeg",
//                   "https://www.jiomart.com/images/product/original/491997699/apple-iphone-13-128-gb-midnight-black-digital-o491997699-p590798548-2-202208221207.jpeg",
//                   "https://www.jiomart.com/images/product/original/491997699/apple-iphone-13-128-gb-midnight-black-digital-o491997699-p590798548-3-202208221207.jpeg",
//                   "https://www.jiomart.com/images/product/original/491997699/apple-iphone-13-128-gb-midnight-black-digital-o491997699-p590798548-4-202208221207.jpeg"
//                 ],
//                 "rating": 4.5,
//                 "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ",
//                 "id": 36
//               },
//               {
//                 "productName": "Tecno Pop 7 Pro 64 GB, 2 GB, Black, Smartphone",
//                 "price": "5,555.00",
//                 "oldPrice": "7,999.00 ",
//                 "weight": [],
//                 "RAM": [
//                   4,
//                   6,
//                   8,
//                   12
//                 ],
//                 "catImg": "https://www.jiomart.com/images/product/original/494267984/tecno-pop-7-pro-64-gb-2-gb-black-smartphone-digital-o494267984-p605156024-0-202309292014.jpeg",
//                 "discount": "16",
//                 "brand": "Tecno",
//                 "productImages": [
//                   "https://www.jiomart.com/images/product/original/494267984/tecno-pop-7-pro-64-gb-2-gb-black-smartphone-digital-o494267984-p605156024-0-202309292014.jpeg",
//                   "https://www.jiomart.com/images/product/original/494267984/tecno-pop-7-pro-64-gb-2-gb-black-smartphone-digital-o494267984-p605156024-1-202309292014.jpeg",
//                   "https://www.jiomart.com/images/product/original/494267984/tecno-pop-7-pro-64-gb-2-gb-black-smartphone-digital-o494267984-p605156024-2-202309292014.jpeg",
//                   "https://www.jiomart.com/images/product/original/494267984/tecno-pop-7-pro-64-gb-2-gb-black-smartphone-digital-o494267984-p605156024-3-202309292014.jpeg",
//                   "https://www.jiomart.com/images/product/original/494267984/tecno-pop-7-pro-64-gb-2-gb-black-smartphone-digital-o494267984-p605156024-4-202309292014.jpeg"
//                 ],
//                 "rating": 4.2,
//                 "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ",
//                 "id": 37
//               },
//               {
//                 "productName": "Realme C55 DLC 64GB, 4 GB RAM, Sunshower, Mobile Phone",
//                 "price": "10,299.00",
//                 "oldPrice": "12,999.00 ",
//                 "weight": [],
//                 "RAM": [
//                   4,
//                   6,
//                   8,
//                   12
//                 ],
//                 "catImg": "https://www.jiomart.com/images/product/original/494267979/realme-c55-dlc-64gb-4-gb-ram-sunshower-mobile-phone-digital-o494267979-p605449884-0-202310051633.jpeg",
//                 "discount": "16",
//                 "brand": "Realme",
//                 "productImages": [
//                   "https://www.jiomart.com/images/product/original/494267979/realme-c55-dlc-64gb-4-gb-ram-sunshower-mobile-phone-digital-o494267979-p605449884-0-202310051633.jpeg",
//                   "https://www.jiomart.com/images/product/original/494267979/realme-c55-dlc-64gb-4-gb-ram-sunshower-mobile-phone-digital-o494267979-p605449884-1-202310051633.jpeg",
//                   "https://www.jiomart.com/images/product/original/494267979/realme-c55-dlc-64gb-4-gb-ram-sunshower-mobile-phone-digital-o494267979-p605449884-2-202310051633.jpeg",
//                   "https://www.jiomart.com/images/product/original/494267979/realme-c55-dlc-64gb-4-gb-ram-sunshower-mobile-phone-digital-o494267979-p605449884-3-202310051633.jpeg",
//                   "https://www.jiomart.com/images/product/original/494267979/realme-c55-dlc-64gb-4-gb-ram-sunshower-mobile-phone-digital-o494267979-p605449884-4-202310051633.jpeg"
//                 ],
//                 "rating": 4.5,
//                 "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ",
//                 "id": 38
//               },
//               {
//                 "productName": "POCO M6 Pro 5G, 6GB RAM, 128GB ROM, Power Black, Smartphone",
//                 "price": "12,199.00",
//                 "oldPrice": "16,999.00",
//                 "weight": [],
//                 "RAM": [
//                   4,
//                   6,
//                   8,
//                   12
//                 ],
//                 "catImg": "https://www.jiomart.com/images/product/original/rvqxs1lbdt/poco-m6-pro-5g-6gb-ram-128gb-rom-power-black-smartphone-product-images-orvqxs1lbdt-p604649284-0-202309191411.jpg",
//                 "discount": "10",
//                 "brand": "POCO",
//                 "productImages": [
//                   "https://www.jiomart.com/images/product/original/rvqxs1lbdt/poco-m6-pro-5g-6gb-ram-128gb-rom-power-black-smartphone-product-images-orvqxs1lbdt-p604649284-0-202309191411.jpg",
//                   "https://www.jiomart.com/images/product/original/rvqxs1lbdt/poco-m6-pro-5g-6gb-ram-128gb-rom-power-black-smartphone-product-images-orvqxs1lbdt-p604649284-1-202309191411.jpg"
//                 ],
//                 "rating": 4.5,
//                 "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ",
//                 "id": 39
//               }
//             ]
//           },
//           {
//             "cat_name": "TV & Speaker",
//             "products": [
//               {
//                 "productName": "Realme 80 cm (32 inch) HD Ready LED Smart Android TV 2023 Edition with Android 11 RMV2205",
//                 "price": "9,990.00",
//                 "oldPrice": "21,999.00 ",
//                 "weight": [],
//                 "RAM": [],
//                 "SIZE": [
//                   "32 inch",
//                   "43 inch"
//                 ],
//                 "catImg": "https://www.jiomart.com/images/product/original/494249596/realme-80-cm-32-inch-hd-ready-led-smart-android-tv-2023-edition-with-android-11-rmv2205-digital-o494249596-p604838497-0-202309262030.jpeg",
//                 "discount": "16",
//                 "brand": "Realme",
//                 "productImages": [
//                   "https://www.jiomart.com/images/product/original/494249596/realme-80-cm-32-inch-hd-ready-led-smart-android-tv-2023-edition-with-android-11-rmv2205-digital-o494249596-p604838497-0-202309262030.jpeg",
//                   "https://www.jiomart.com/images/product/original/494249596/realme-80-cm-32-inch-hd-ready-led-smart-android-tv-2023-edition-with-android-11-rmv2205-digital-o494249596-p604838497-1-202309262030.jpeg",
//                   "https://www.jiomart.com/images/product/original/494249596/realme-80-cm-32-inch-hd-ready-led-smart-android-tv-2023-edition-with-android-11-rmv2205-digital-o494249596-p604838497-2-202309262030.jpeg",
//                   "https://www.jiomart.com/images/product/original/494249596/realme-80-cm-32-inch-hd-ready-led-smart-android-tv-2023-edition-with-android-11-rmv2205-digital-o494249596-p604838497-3-202309262030.jpeg)"
//                 ],
//                 "rating": 4.5,
//                 "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ",
//                 "id": 40
//               },
//               {
//                 "productName": "Realme 80 cm (32 inch) HD Ready LED Smart Android TV 2023 Edition with Android 11 RMV2205",
//                 "price": "9,990.00",
//                 "oldPrice": "21,999.00 ",
//                 "weight": [],
//                 "RAM": [],
//                 "SIZE": [
//                   "32 inch",
//                   "43 inch"
//                 ],
//                 "catImg": "https://www.jiomart.com/images/product/original/494249596/realme-80-cm-32-inch-hd-ready-led-smart-android-tv-2023-edition-with-android-11-rmv2205-digital-o494249596-p604838497-0-202309262030.jpeg",
//                 "discount": "16",
//                 "brand": "Realme",
//                 "productImages": [
//                   "https://www.jiomart.com/images/product/original/494249596/realme-80-cm-32-inch-hd-ready-led-smart-android-tv-2023-edition-with-android-11-rmv2205-digital-o494249596-p604838497-0-202309262030.jpeg",
//                   "https://www.jiomart.com/images/product/original/494249596/realme-80-cm-32-inch-hd-ready-led-smart-android-tv-2023-edition-with-android-11-rmv2205-digital-o494249596-p604838497-1-202309262030.jpeg",
//                   "https://www.jiomart.com/images/product/original/494249596/realme-80-cm-32-inch-hd-ready-led-smart-android-tv-2023-edition-with-android-11-rmv2205-digital-o494249596-p604838497-2-202309262030.jpeg",
//                   "https://www.jiomart.com/images/product/original/494249596/realme-80-cm-32-inch-hd-ready-led-smart-android-tv-2023-edition-with-android-11-rmv2205-digital-o494249596-p604838497-3-202309262030.jpeg"
//                 ],
//                 "rating": 4.5,
//                 "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ",
//                 "id": 41
//               },
//               {
//                 "productName": "OnePlus 108 cm (43 inch) Full HD Android Smart LED TV with Dolby Audio Surround Sound Technology, 43Y1S Edge",
//                 "price": "22,990.00",
//                 "oldPrice": "33,999.00",
//                 "weight": [],
//                 "RAM": [],
//                 "SIZE": [
//                   "32 inch",
//                   "43 inch"
//                 ],
//                 "catImg": "https://www.jiomart.com/images/product/original/492796557/oneplus-108-cm-43-inch-full-hd-android-smart-led-tv-with-dolby-audio-surround-sound-technology-43y1s-edge-digital-o492796557-p591054038-0-202202221339.jpeg",
//                 "discount": "32",
//                 "brand": "One Plus",
//                 "productImages": [
//                   "https://www.jiomart.com/images/product/original/492796557/oneplus-108-cm-43-inch-full-hd-android-smart-led-tv-with-dolby-audio-surround-sound-technology-43y1s-edge-digital-o492796557-p591054038-0-202202221339.jpeg",
//                   "https://www.jiomart.com/images/product/original/492796557/oneplus-108-cm-43-inch-full-hd-android-smart-led-tv-with-dolby-audio-surround-sound-technology-43y1s-edge-digital-o492796557-p591054038-1-202202221339.jpeg",
//                   "https://www.jiomart.com/images/product/original/492796557/oneplus-108-cm-43-inch-full-hd-android-smart-led-tv-with-dolby-audio-surround-sound-technology-43y1s-edge-digital-o492796557-p591054038-2-202202221339.jpeg",
//                   "https://www.jiomart.com/images/product/original/492796557/oneplus-108-cm-43-inch-full-hd-android-smart-led-tv-with-dolby-audio-surround-sound-technology-43y1s-edge-digital-o492796557-p591054038-3-202202221339.jpeg"
//                 ],
//                 "rating": 4.5,
//                 "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ",
//                 "id": 42
//               },
//               {
//                 "productName": "TCL 55 QLED Smart Google TV, 55C645",
//                 "price": "39,990.00",
//                 "oldPrice": "121,990.00",
//                 "weight": [],
//                 "RAM": [],
//                 "SIZE": [
//                   "32 inch",
//                   "43 inch"
//                 ],
//                 "catImg": "https://www.jiomart.com/images/product/original/493841840/tcl-55-qled-smart-google-tv-55c645-digital-o493841840-p601697284-0-202305221948.png",
//                 "discount": "32",
//                 "brand": "TCL",
//                 "productImages": [
//                   "https://www.jiomart.com/images/product/original/493841840/tcl-55-qled-smart-google-tv-55c645-digital-o493841840-p601697284-0-202305221948.png"
//                 ],
//                 "rating": 4,
//                 "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ",
//                 "id": 43
//               }
//             ]
//           }
//         ]
//       },
//       {
//         "cat_name": "Gifts",
//         "id": 3,
//         "image": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAq1BMVEX/////MEwREiSOjo4AAAv/KUf9Vmn+8vP/IkP+qrH9kJv9U2n9UWf+7O785+n9Cjn/GT7+SV794+b+9/cAABcAAAAICR78hpL9vsT7oqz92t79ys/9z9QAABtMTVb7k5/9XW/9ZXb/ADL9d4b9f439sLj9OlT9cID8t739nKb+ACv/ACQgIS8ZGSg8PUgAABEzNDt+f4V0dXpaWmAoKTRoaHCam51JSkq0tLYjlFE5AAADQ0lEQVR4nO2aDXOaMBiAoW0gMiFBFBUVFSvUbnMrrl3//y8b5APQKuc6CN7uffQK0fTy3JvkTcyhaQAAAAAAAAAAAAAAAMCtMFiuXHc9HXTtUcGzKEUZJNrMunaReBuqCzAe213rcMZEL6HxvGufnCDSqyB90rVRxiPWj4m2XStptoFYgKKo6EXceayCmDnFprd1ZcyiD1befGroOH6cewqlcJK1ZlvPclydZKynhBKEdERposRq4CIWKZYKtkhYGdXMMDMIKmbnSkXO8NasQcJH90xMRTouK+xodSrQRwVS2lI06bDSVpSIzO3OiupHPDsKpAZ8IGExWqZUdKDJioF74qTTqQIpbc2DQ5e8mNBK23NdjiaE45jbK+m/QDRLeqxou9zjOYtcgKQTXT/ZA5bJ0EaFlLYTPYR5x0xE5HaaI/yyhXqSKS6pukhp2kqM7ohbJbzoBjKbkk2eB55Ev/bUSAWxjAiLwkAsODJOhH26FR351VQjlQ0r2f4qz+XW0RrNhry5/JjB2mYmczaOZ/mcqxBZWp6thCeKFe6Zi7mPSLb5TMpQ5T1qW8U6g5XuAedIihBjPi82fsj1tKlb7GqI4r3WwJC5G9GkDNSsp9MigarflZrrYkXJLPKfN9kljssdAhtvLTvYDnuJS35TmXUupzrikRHY1f9oITVMDEpOKdvv8xYd/QhcrUyNxuM2KwbKOVCfb+Wc2kq4aau4rrnrpLKc1bAUqWvtSimdNCx1unX7lBQFKZACqb/n9KjlU1K4YSmrNlFdJ8W2f01ibnAN1BVSdZXwpvkledKrYct/Lpt1dTo/xQIAoEG8qXWZHU9Bdk2VaRtHsmaf/kvypP02DjpM4/IacsUyI88fQQqkQAqkQAqkQAqkQAqkQAqkQAqkQKoFxpfP0q+Qaun5BMeN0AWwlMKXahC3pceobMv4cp5+wqVso3++gmHdyJOzAAAAAAAAAAAAAAAAAAD859zfINrDDaLd3SBMyhcFfvWHi4W48/N3N1KL8Nv3/YO/GIWL4Y/Fw8+XNAxHo+FwtD+MDmEHVrmUHx5+pWl4SF9eD2mYvr38Tt9f3w+H9/T+bb9vTqqMul/8YR/7+Te+vLm7+wNZ61Xa0YSgcwAAAABJRU5ErkJggg==",
//         "items": [
//           {
//             "cat_name": "Men Western Wear",
//             "products": [
//               {
//                 "productName": "Bomber Jacket with Zipper Pockets",
//                 "price": "1,593.00",
//                 "oldPrice": "3,125.00  ",
//                 "weight": [],
//                 "RAM": [],
//                 "SIZE": [
//                   "M",
//                   "L",
//                   "XL",
//                   "XXL"
//                 ],
//                 "catImg": "https://www.jiomart.com/images/product/original/469255919_black/bomber-jacket-with-zipper-pockets-model-469255919_black-0-202301311905.jpg",
//                 "discount": "49",
//                 "brand": "Fort Collins",
//                 "productImages": [
//                   "https://www.jiomart.com/images/product/original/469255919_black/bomber-jacket-with-zipper-pockets-model-469255919_black-0-202301311905.jpg",
//                   "https://www.jiomart.com/images/product/original/469255919_black/bomber-jacket-with-zipper-pockets-model2-469255919_black-2-202301311905.jpg",
//                   "https://www.jiomart.com/images/product/original/469255919_black/bomber-jacket-with-zipper-pockets-model3-469255919_black-3-202301311905.jpg",
//                   "https://www.jiomart.com/images/product/original/469255919_black/bomber-jacket-with-zipper-pockets-model4-469255919_black-4-202301311905.jpg"
//                 ],
//                 "rating": 4.5,
//                 "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ",
//                 "id": 44
//               },
//               {
//                 "productName": "Mid-Rise Skinny Fit Jeans",
//                 "price": "269.00",
//                 "oldPrice": "899.00",
//                 "weight": [],
//                 "RAM": [],
//                 "SIZE": [
//                   28,
//                   30,
//                   32,
//                   34
//                 ],
//                 "catImg": "https://www.jiomart.com/images/product/original/420434311_blue/skinny-jeans-with-button-closure-model-420434311_blue-0-202308081627.jpg",
//                 "discount": "49",
//                 "brand": "Fort Collins",
//                 "productImages": [
//                   "https://www.jiomart.com/images/product/original/420434311_blue/skinny-jeans-with-button-closure-model-420434311_blue-0-202308081627.jpg",
//                   "https://www.jiomart.com/images/product/original/420434311_blue/skinny-jeans-with-button-closure-model2-420434311_blue-2-202308081627.jpg",
//                   "https://www.jiomart.com/images/product/original/420434311_blue/skinny-jeans-with-button-closure-model3-420434311_blue-3-202308081627.jpg",
//                   "https://www.jiomart.com/images/product/original/420434311_blue/skinny-jeans-with-button-closure-model4-420434311_blue-4-202308081627.jpg",
//                   "https://www.jiomart.com/images/product/original/420434311_blue/skinny-jeans-with-button-closure-model5-420434311_blue-5-202308081627.jpg"
//                 ],
//                 "rating": 5,
//                 "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ",
//                 "id": 45
//               },
//               {
//                 "productName": "Plutus Men Black Solid Polyester Casual Jacket M",
//                 "price": "499.00",
//                 "oldPrice": "699.00",
//                 "weight": [],
//                 "RAM": [],
//                 "SIZE": [
//                   "M",
//                   "L",
//                   "XL"
//                 ],
//                 "catImg": "https://www.jiomart.com/images/product/original/rvurcwrojo/plutus-men-black-solid-polyester-casual-jacket-m-product-images-rvurcwrojo-0-202209240106.jpg",
//                 "discount": "60",
//                 "brand": "PLUTUS",
//                 "productImages": [
//                   "https://www.jiomart.com/images/product/original/rvurcwrojo/plutus-men-black-solid-polyester-casual-jacket-m-product-images-rvurcwrojo-0-202209240106.jpg",
//                   "https://www.jiomart.com/images/product/original/rvurcwrojo/plutus-men-black-solid-polyester-casual-jacket-m-product-images-rvurcwrojo-1-202209240106.jpg",
//                   "https://www.jiomart.com/images/product/original/rvurcwrojo/plutus-men-black-solid-polyester-casual-jacket-m-product-images-rvurcwrojo-2-202209240106.jpg",
//                   "https://www.jiomart.com/images/product/original/rvurcwrojo/plutus-men-black-solid-polyester-casual-jacket-m-product-images-rvurcwrojo-3-202209240106.jpg",
//                   "https://www.jiomart.com/images/product/original/rvurcwrojo/plutus-men-black-solid-polyester-casual-jacket-m-product-images-rvurcwrojo-4-202209240106.jpg"
//                 ],
//                 "rating": 5,
//                 "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ",
//                 "id": 46
//               },
//               {
//                 "productName": "BULLMER Men Beige Cotton Blend Printed Single Sweatshirts",
//                 "price": "699.00",
//                 "oldPrice": "989.00",
//                 "weight": [],
//                 "RAM": [],
//                 "SIZE": [
//                   "M",
//                   "L",
//                   "XL"
//                 ],
//                 "catImg": "https://www.jiomart.com/images/product/original/rvqq9gohkt/bullmer-men-beige-cotton-blend-printed-single-sweatshirts-product-images-rvqq9gohkt-0-202210291839.jpg",
//                 "discount": "60",
//                 "brand": "BULLMER",
//                 "productImages": [
//                   "https://www.jiomart.com/images/product/original/rvqq9gohkt/bullmer-men-beige-cotton-blend-printed-single-sweatshirts-product-images-rvqq9gohkt-0-202210291839.jpg",
//                   "https://www.jiomart.com/images/product/original/rvqq9gohkt/bullmer-men-beige-cotton-blend-printed-single-sweatshirts-product-images-rvqq9gohkt-1-202210291839.jpg",
//                   "https://www.jiomart.com/images/product/original/rvqq9gohkt/bullmer-men-beige-cotton-blend-printed-single-sweatshirts-product-images-rvqq9gohkt-2-202210291839.jpg"
//                 ],
//                 "rating": 4.5,
//                 "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ",
//                 "id": 47
//               },
//               {
//                 "productName": "Men Checked Slim Fit Shirt",
//                 "price": "179.00",
//                 "oldPrice": "489.00",
//                 "weight": [],
//                 "RAM": [],
//                 "SIZE": [
//                   "M",
//                   "L",
//                   "XL"
//                 ],
//                 "catImg": "https://www.jiomart.com/images/product/original/420395610_red/checked-slim-fit-shirt-model-420395610_red-0-202309052055.jpg",
//                 "discount": "45",
//                 "brand": "ROXTAR",
//                 "productImages": [
//                   "https://www.jiomart.com/images/product/original/420395610_red/checked-slim-fit-shirt-model-420395610_red-0-202309052055.jpg",
//                   "https://www.jiomart.com/images/product/original/420395610_red/checked-slim-fit-shirt-model2-420395610_red-2-202309052055.jpg",
//                   "https://www.jiomart.com/images/product/original/420395610_red/checked-slim-fit-shirt-model3-420395610_red-3-202309052055.jpg",
//                   "https://www.jiomart.com/images/product/original/420395610_red/checked-slim-fit-shirt-model4-420395610_red-4-202309052055.jpg",
//                   "https://www.jiomart.com/images/product/original/420395610_red/checked-slim-fit-shirt-model5-420395610_red-5-202309052055.jpg"
//                 ],
//                 "rating": 4.5,
//                 "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ",
//                 "id": 48
//               }
//             ]
//           },
//           {
//             "cat_name": "Women Western Wear",
//             "products": [
//               {
//                 "productName": "Rudraaksha Stylish Dress For women",
//                 "price": "299.00",
//                 "oldPrice": "389.00",
//                 "weight": [],
//                 "RAM": [],
//                 "SIZE": [
//                   "M",
//                   "L",
//                   "XL"
//                 ],
//                 "catImg": "https://www.jiomart.com/images/product/original/rvxsvl3imx/rudraaksha-stylish-dress-for-women-product-images-rvxsvl3imx-0-202210042034.jpg",
//                 "discount": "65",
//                 "brand": "Rudraaksha",
//                 "productImages": [
//                   "https://www.jiomart.com/images/product/original/rvxsvl3imx/rudraaksha-stylish-dress-for-women-product-images-rvxsvl3imx-0-202210042034.jpg",
//                   "https://www.jiomart.com/images/product/original/rvxsvl3imx/rudraaksha-stylish-dress-for-women-product-images-rvxsvl3imx-1-202210042034.jpg",
//                   "https://www.jiomart.com/images/product/original/rvxsvl3imx/rudraaksha-stylish-dress-for-women-product-images-rvxsvl3imx-2-202210042034.jpg",
//                   "https://www.jiomart.com/images/product/original/rvxsvl3imx/rudraaksha-stylish-dress-for-women-product-images-rvxsvl3imx-3-202210042034.jpg"
//                 ],
//                 "rating": 4.5,
//                 "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ",
//                 "id": 49
//               },
//               {
//                 "productName": "Fabflee Party Flared Sleeves Printed Women Yellow Top | Women Tops | Crepe Top | Tops For Women",
//                 "price": "499.00",
//                 "oldPrice": "589.00",
//                 "weight": [],
//                 "RAM": [],
//                 "SIZE": [
//                   "M",
//                   "L",
//                   "XL"
//                 ],
//                 "catImg": "https://www.jiomart.com/images/product/original/rvnipawgyz/fabflee-party-flared-sleeves-printed-women-yellow-top-women-tops-crepe-top-tops-for-women-product-images-rvnipawgyz-0-202309260654.jpg",
//                 "discount": "65",
//                 "brand": "Rudraaksha",
//                 "productImages": [
//                   "https://www.jiomart.com/images/product/original/rvnipawgyz/fabflee-party-flared-sleeves-printed-women-yellow-top-women-tops-crepe-top-tops-for-women-product-images-rvnipawgyz-0-202309260654.jpg",
//                   "https://www.jiomart.com/images/product/original/rvnipawgyz/fabflee-party-flared-sleeves-printed-women-yellow-top-women-tops-crepe-top-tops-for-women-product-images-rvnipawgyz-1-202309260654.jpg",
//                   "https://www.jiomart.com/images/product/original/rvnipawgyz/fabflee-party-flared-sleeves-printed-women-yellow-top-women-tops-crepe-top-tops-for-women-product-images-rvnipawgyz-2-202309260654.jpg",
//                   "https://www.jiomart.com/images/product/original/rvnipawgyz/fabflee-party-flared-sleeves-printed-women-yellow-top-women-tops-crepe-top-tops-for-women-product-images-rvnipawgyz-3-202309260654.jpg",
//                   "https://www.jiomart.com/images/product/original/rvnipawgyz/fabflee-party-flared-sleeves-printed-women-yellow-top-women-tops-crepe-top-tops-for-women-product-images-rvnipawgyz-4-202309260654.jpg"
//                 ],
//                 "rating": 4,
//                 "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ",
//                 "id": 50
//               },
//               {
//                 "productName": "Shrug with Shawl Lapel",
//                 "price": "699.00",
//                 "oldPrice": "989.00",
//                 "weight": [],
//                 "RAM": [],
//                 "SIZE": [
//                   "M",
//                   "L",
//                   "XL"
//                 ],
//                 "catImg": "https://www.jiomart.com/images/product/original/441131609_grey/shrug-with-shawl-lapel-model-441131609_grey-0-202309271631.jpg",
//                 "discount": "65",
//                 "brand": "FIG",
//                 "productImages": [
//                   "https://www.jiomart.com/images/product/original/441131609_grey/shrug-with-shawl-lapel-model2-441131609_grey-2-202309271631.jpg",
//                   "https://www.jiomart.com/images/product/original/441131609_grey/shrug-with-shawl-lapel-model3-441131609_grey-3-202309271631.jpg",
//                   "https://www.jiomart.com/images/product/original/441131609_grey/shrug-with-shawl-lapel-model3-441131609_grey-3-202309271631.jpg",
//                   "https://www.jiomart.com/images/product/original/441131609_grey/shrug-with-shawl-lapel-model4-441131609_grey-4-202309271631.jpg",
//                   "https://www.jiomart.com/images/product/original/441131609_grey/shrug-with-shawl-lapel-model5-441131609_grey-5-202309271631.jpg"
//                 ],
//                 "rating": 5,
//                 "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ",
//                 "id": 51
//               }
//             ]
//           }
//         ]
//       }
//     ],
//     "productReviews": [
//       {
//         "review": "nice ",
//         "userName": "rinku verma",
//         "rating": "5",
//         "productId": "47",
//         "date": "11/19/2023, 12:35:32 AM",
//         "id": 1
//       },
//       {
//         "review": "good ",
//         "userName": "sfsdf",
//         "rating": "4",
//         "productId": "40",
//         "date": "11/19/2023, 12:36:30 AM",
//         "id": 2
//       },
//       {
//         "review": "Realme C55 DLC 64GB, 4 GB RAM, Sunshower, Mobile Phone  nice product ",
//         "userName": "rinku verma",
//         "rating": "5",
//         "productId": "38",
//         "date": "11/19/2023, 12:37:35 AM",
//         "id": 3
//       },
//       {
//         "review": "HARYANA FRESH Rich Desi Danedar Ghee 500 Grams (Carton)  nice product ",
//         "userName": "@rinkuv37",
//         "rating": "5",
//         "productId": "13",
//         "date": "11/19/2023, 6:54:23 PM",
//         "id": 4
//       },
//       {
//         "review": "nice product ",
//         "userName": "rinku verma",
//         "rating": "5",
//         "productId": "36",
//         "date": "11/19/2023, 8:43:56 PM",
//         "id": 5
//       },
//       {
//         "review": "zsfzsdf",
//         "userName": "dfsdff",
//         "rating": "5",
//         "productId": "8",
//         "date": "11/22/2023, 6:57:23 PM",
//         "id": 6
//       },
//       {
//         "review": "",
//         "userName": "",
//         "rating": 0,
//         "productId": 0,
//         "date": "",
//         "id": 7
//       },
//       {
//         "review": "nice product",
//         "userName": "rinku verma",
//         "rating": 0,
//         "productId": "1",
//         "date": "12/17/2023, 5:58:25 AM",
//         "id": 8
//       },
//       {
//         "review": "nice product",
//         "userName": "rinku verma",
//         "rating": "5",
//         "productId": "1",
//         "date": "12/17/2023, 5:58:43 AM",
//         "id": 9
//       },
//       {
//         "review": "nice product ",
//         "userName": "rinku verma",
//         "rating": "5",
//         "productId": "36",
//         "date": "12/17/2023, 10:18:11 PM",
//         "id": 10
//       }
//     ],
//     "cartItems": [
//       {
//         "productName": "Moong Dal 2 kg",
//         "price": "246",
//         "oldPrice": "320",
//         "weight": [
//           50,
//           100,
//           150,
//           200,
//           250,
//           500
//         ],
//         "catImg": "https://www.jiomart.com/images/product/original/491432711/moong-dal-2-kg-product-images-o491432711-p491432711-0-202205191636.jpg",
//         "discount": "16",
//         "brand": "Private Label",
//         "productImages": [
//           "https://www.jiomart.com/images/product/original/491432711/moong-dal-2-kg-product-images-o491432711-p491432711-0-202205191636.jpg",
//           "https://www.jiomart.com/images/product/original/491432711/moong-dal-2-kg-product-images-o491432711-p491432711-1-202205191636.jpg",
//           "https://www.jiomart.com/images/product/original/491432711/moong-dal-2-kg-legal-images-o491432711-p491432711-3-202205191636.jpg"
//         ],
//         "rating": 4,
//         "description": "Moong Dal is essentially packed with loads of nutrients that are extremely beneficial for your health. Moong contains almost every important element that your body might need. Buy Moong Dal online today.",
//         "id": 2,
//         "quantity": 1
//       },
//       {
//         "productName": "BULLMER Men Beige Cotton Blend Printed Single Sweatshirts",
//         "price": "699.00",
//         "oldPrice": "989.00",
//         "weight": [],
//         "RAM": [],
//         "SIZE": [
//           "M",
//           "L",
//           "XL"
//         ],
//         "catImg": "https://www.jiomart.com/images/product/original/rvqq9gohkt/bullmer-men-beige-cotton-blend-printed-single-sweatshirts-product-images-rvqq9gohkt-0-202210291839.jpg",
//         "discount": "60",
//         "brand": "BULLMER",
//         "productImages": [
//           "https://www.jiomart.com/images/product/original/rvqq9gohkt/bullmer-men-beige-cotton-blend-printed-single-sweatshirts-product-images-rvqq9gohkt-0-202210291839.jpg",
//           "https://www.jiomart.com/images/product/original/rvqq9gohkt/bullmer-men-beige-cotton-blend-printed-single-sweatshirts-product-images-rvqq9gohkt-1-202210291839.jpg",
//           "https://www.jiomart.com/images/product/original/rvqq9gohkt/bullmer-men-beige-cotton-blend-printed-single-sweatshirts-product-images-rvqq9gohkt-2-202210291839.jpg"
//         ],
//         "rating": 4.5,
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ",
//         "id": 47,
//         "parentCatName": "Fashion",
//         "subCatName": "Men Western Wear",
//         "quantity": 1
//       },
//       {
//         "productName": "Good Life Moong Dal 1 kg",
//         "price": "145",
//         "oldPrice": "189",
//         "weight": [
//           50,
//           100,
//           150,
//           200,
//           250,
//           500
//         ],
//         "catImg": "https://www.jiomart.com/images/product/original/491187257/good-life-moong-dal-1-kg-product-images-o491187257-p491187257-0-202301171616.jpg",
//         "discount": "12",
//         "brand": "Good Life",
//         "productImages": [
//           "https://www.jiomart.com/images/product/original/491187257/good-life-moong-dal-1-kg-product-images-o491187257-p491187257-0-202301171616.jpg",
//           "https://www.jiomart.com/images/product/original/491187257/good-life-moong-dal-1-kg-product-images-o491187257-p491187257-1-202301171616.jpg",
//           "https://www.jiomart.com/images/product/original/491187257/good-life-moong-dal-1-kg-legal-images-o491187257-p491187257-2-202301171616.jpg"
//         ],
//         "rating": 4.5,
//         "description": "Good life Moong Dal is procured from reliable and high-quality sources. The beans are best consumed after being sprouted. Dosa with whole moong also turns out to be yummy, another exotic way to eat moong is to eat it as a korma which is spiced up with tangy tomatoes and a cashew paste. It is mainly used as the base for curries such as sambar, dal etc. Buy Good Life Moong Dal online now!",
//         "id": 5,
//         "quantity": 1
//       },
//       {
//         "productName": "Bomber Jacket with Zipper Pockets",
//         "price": "1,593.00",
//         "oldPrice": "3,125.00  ",
//         "weight": [],
//         "RAM": [],
//         "SIZE": [
//           "M",
//           "L",
//           "XL",
//           "XXL"
//         ],
//         "catImg": "https://www.jiomart.com/images/product/original/469255919_black/bomber-jacket-with-zipper-pockets-model-469255919_black-0-202301311905.jpg",
//         "discount": "49",
//         "brand": "Fort Collins",
//         "productImages": [
//           "https://www.jiomart.com/images/product/original/469255919_black/bomber-jacket-with-zipper-pockets-model-469255919_black-0-202301311905.jpg",
//           "https://www.jiomart.com/images/product/original/469255919_black/bomber-jacket-with-zipper-pockets-model2-469255919_black-2-202301311905.jpg",
//           "https://www.jiomart.com/images/product/original/469255919_black/bomber-jacket-with-zipper-pockets-model3-469255919_black-3-202301311905.jpg",
//           "https://www.jiomart.com/images/product/original/469255919_black/bomber-jacket-with-zipper-pockets-model4-469255919_black-4-202301311905.jpg"
//         ],
//         "rating": 4.5,
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ",
//         "id": 44,
//         "quantity": 1
//       },
//       {
//         "productName": "Mid-Rise Skinny Fit Jeans",
//         "price": "269.00",
//         "oldPrice": "899.00",
//         "weight": [],
//         "RAM": [],
//         "SIZE": [
//           28,
//           30,
//           32,
//           34
//         ],
//         "catImg": "https://www.jiomart.com/images/product/original/420434311_blue/skinny-jeans-with-button-closure-model-420434311_blue-0-202308081627.jpg",
//         "discount": "49",
//         "brand": "Fort Collins",
//         "productImages": [
//           "https://www.jiomart.com/images/product/original/420434311_blue/skinny-jeans-with-button-closure-model-420434311_blue-0-202308081627.jpg",
//           "https://www.jiomart.com/images/product/original/420434311_blue/skinny-jeans-with-button-closure-model2-420434311_blue-2-202308081627.jpg",
//           "https://www.jiomart.com/images/product/original/420434311_blue/skinny-jeans-with-button-closure-model3-420434311_blue-3-202308081627.jpg",
//           "https://www.jiomart.com/images/product/original/420434311_blue/skinny-jeans-with-button-closure-model4-420434311_blue-4-202308081627.jpg",
//           "https://www.jiomart.com/images/product/original/420434311_blue/skinny-jeans-with-button-closure-model5-420434311_blue-5-202308081627.jpg"
//         ],
//         "rating": 5,
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ",
//         "id": 45,
//         "quantity": 1
//       },
//       {
//         "productName": "Plutus Men Black Solid Polyester Casual Jacket M",
//         "price": "499.00",
//         "oldPrice": "699.00",
//         "weight": [],
//         "RAM": [],
//         "SIZE": [
//           "M",
//           "L",
//           "XL"
//         ],
//         "catImg": "https://www.jiomart.com/images/product/original/rvurcwrojo/plutus-men-black-solid-polyester-casual-jacket-m-product-images-rvurcwrojo-0-202209240106.jpg",
//         "discount": "60",
//         "brand": "PLUTUS",
//         "productImages": [
//           "https://www.jiomart.com/images/product/original/rvurcwrojo/plutus-men-black-solid-polyester-casual-jacket-m-product-images-rvurcwrojo-0-202209240106.jpg",
//           "https://www.jiomart.com/images/product/original/rvurcwrojo/plutus-men-black-solid-polyester-casual-jacket-m-product-images-rvurcwrojo-1-202209240106.jpg",
//           "https://www.jiomart.com/images/product/original/rvurcwrojo/plutus-men-black-solid-polyester-casual-jacket-m-product-images-rvurcwrojo-2-202209240106.jpg",
//           "https://www.jiomart.com/images/product/original/rvurcwrojo/plutus-men-black-solid-polyester-casual-jacket-m-product-images-rvurcwrojo-3-202209240106.jpg",
//           "https://www.jiomart.com/images/product/original/rvurcwrojo/plutus-men-black-solid-polyester-casual-jacket-m-product-images-rvurcwrojo-4-202209240106.jpg"
//         ],
//         "rating": 5,
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ",
//         "id": 46,
//         "quantity": 1
//       },
//       {
//         "productName": "Men Checked Slim Fit Shirt",
//         "price": "179.00",
//         "oldPrice": "489.00",
//         "weight": [],
//         "RAM": [],
//         "SIZE": [
//           "M",
//           "L",
//           "XL"
//         ],
//         "catImg": "https://www.jiomart.com/images/product/original/420395610_red/checked-slim-fit-shirt-model-420395610_red-0-202309052055.jpg",
//         "discount": "45",
//         "brand": "ROXTAR",
//         "productImages": [
//           "https://www.jiomart.com/images/product/original/420395610_red/checked-slim-fit-shirt-model-420395610_red-0-202309052055.jpg",
//           "https://www.jiomart.com/images/product/original/420395610_red/checked-slim-fit-shirt-model2-420395610_red-2-202309052055.jpg",
//           "https://www.jiomart.com/images/product/original/420395610_red/checked-slim-fit-shirt-model3-420395610_red-3-202309052055.jpg",
//           "https://www.jiomart.com/images/product/original/420395610_red/checked-slim-fit-shirt-model4-420395610_red-4-202309052055.jpg",
//           "https://www.jiomart.com/images/product/original/420395610_red/checked-slim-fit-shirt-model5-420395610_red-5-202309052055.jpg"
//         ],
//         "rating": 4.5,
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ",
//         "id": 48,
//         "quantity": 1
//       },
//       {
//         "productName": "Good Life Whole Moong 500 g",
//         "price": "20",
//         "oldPrice": "140",
//         "weight": [
//           50,
//           100,
//           150,
//           200,
//           250,
//           500
//         ],
//         "catImg": "https://www.jiomart.com/images/product/original/491187309/good-life-whole-moong-500-g-product-images-o491187309-p491187309-0-202308311426.jpg",
//         "discount": "12",
//         "brand": "AASHIRVAAD",
//         "productImages": [
//           "https://www.jiomart.com/images/product/original/491187309/good-life-whole-moong-500-g-product-images-o491187309-p491187309-0-202308311426.jpg",
//           "https://www.jiomart.com/images/product/original/491187309/good-life-whole-moong-500-g-product-images-o491187309-p491187309-1-202308311426.jpg",
//           "https://www.jiomart.com/images/product/original/491187309/good-life-whole-moong-500-g-product-images-o491187309-p491187309-2-202308311426.jpg",
//           "https://www.jiomart.com/images/product/original/491187309/good-life-whole-moong-500-g-product-images-o491187309-p491187309-3-202308311426.jpg",
//           "https://www.jiomart.com/images/product/original/491187309/good-life-whole-moong-500-g-product-images-o491187309-p491187309-4-202308311426.jpg",
//           "https://www.jiomart.com/images/product/original/491187309/good-life-whole-moong-500-g-legal-images-o491187309-p491187309-5-202308311427.jpg"
//         ],
//         "rating": 3.5,
//         "description": "Good Life Whole Moong is one of the light meal to digest. It is often given to people who prefer diet for fitness. It contains antioxidants which are very healthy for the good functioning of the human body. It can be included in our daily diet as it can fulfil the nutritional and dietary requirements of an entire meal. Buy Good Life Whole Moong online now!",
//         "id": 1,
//         "parentCatName": "groceries",
//         "subCatName": "dals and pulses",
//         "quantity": 1
//       }
//     ]
//   }

//   export default data;