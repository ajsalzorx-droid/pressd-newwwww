let menu = [
  {category:'Breakfast',slug:'breakfast',tagline:'Fresh mornings · made to nourish',items:[['Avacado Toast with Poached Eggs','Creamy avocado toast topped with poached eggs and served with a fresh garden salad',41,'assets/avacado-toast-poached-eggs-f2.webp',''],['Avacado Toast with Salmon','Creamy avocado toast topped with salmon and served with a fresh garden salad',49,'assets/avacado-toast-salmon-f1.webp',''],['Avacado Toasted Poached Egg','Avocado toast with a poached egg, served with a fresh garden salad',41,'assets/avacado-toasted-poached-egg-f3.webp','']]},
  {category:'Pancakes',slug:'pancakes',tagline:'Warm stacks · sweet moments',items:[['Nutella Pancake','Fluffy pancakes layered with Nutella and finished with fresh berries',32,'assets/pancake-nutella.png','V'],['Berries Pancake','Fluffy pancakes topped with strawberries, blueberries, raspberries and blackberries',32,'assets/pancake-berries.png','V'],['Classic Pancake','Classic fluffy pancakes finished with cream, berries and a touch of syrup',27,'assets/pancake-classic.png','V'],['French Toast','Golden French toast served with banana, cream and fresh berries',46,'assets/pancake-french-toast.png','V'],['Pistachio Pancake','Fluffy pancakes topped with pistachio cream, crushed pistachios and fresh fruit',32,'assets/pancake-pistachio.png','V']]},
  {category:'Hot Beverages',slug:'hot-beverages',tagline:'Warm cups · better moments',items:[['Americano','Espresso lengthened with hot water for a smooth, bold cup',19,'assets/hot-americano.webp',''],['Cappuccino','Espresso with silky steamed milk and a smooth foam finish',24,'assets/hot-cappuccino-flat-white.png',''],['Cafe Latte','Espresso marked with silky milk and a smooth foam finish',24,'assets/hot-cappuccino-macchiato.png',''],['Spanish Latte','Espresso balanced with warm, lightly textured milk',24,'assets/hot-cappuccino-cortado.png',''],['Expresso','A rich, full-bodied single shot',17,'assets/hot-expresso.webp',''],['Hot Matcha Latte','Matcha whisked with smooth steamed milk',26,'assets/hot-matcha-latte.webp','V'],['Matcha','Smooth matcha served warm with a creamy finish',26,'assets/hot-matcha-new.png','V'],['Mochaccino','Espresso, chocolate and silky steamed milk',25,'assets/hot-mochaccino.webp',''],['Cortado','A short espresso softened with textured milk',24,'assets/hot-piccolo.webp',''],['Flat White','Velvety espresso with smooth steamed milk and a fine microfoam finish',24,'assets/hot-piccolo.webp',''],['Piccolo','A short espresso softened with smooth steamed milk',24,'assets/hot-piccolo.webp',''],['Tea Selections','A curated selection of classic hot teas',18,'assets/hot-tea-selections.webp','V'],['Tisane Tea','A soothing caffeine-free herbal infusion',20,'assets/hot-tisane-tea.webp','VG'],['V60','Hand-poured filter coffee with a clean, aromatic finish',26,'assets/hot-v60.webp','']]},
  {category:'Salads',slug:'salads',tagline:'Fresh · crisp · satisfying',items:[['Blood Sugar Level','Chickpeas, avocado, cucumber, tomatoes, radish and olives',25,'assets/salad-blood-sugar-level.webp','VG'],['Chicken Ceasar','Grilled chicken, avocado, baby gem, parmesan and croutons',29,'assets/salad-chicken-ceasar.webp',''],['Colon Cleaning','Beetroot, carrot and cabbage in a bright citrus dressing',25,'assets/salad-colon-cleaning.webp','VG'],['Flat Stomach','Green peas, cucumber and red cabbage with fresh herbs',25,'assets/salad-flat-stomach.webp','VG'],['Tabbouloleh Salad','Couscous, cucumber, tomato, herbs and red onion',25,'assets/salad-tabbouloleh.webp','VG'],['Triple Berries Salad','Spinach, strawberries, blueberries, blackberries and feta',29,'assets/salad-triple-berries.webp','V']]},
  {category:'Sandwiches',slug:'sandwiches',tagline:'Freshly made · full of flavour',items:[['Beef Pastrami','Beef pastrami, melted cheese, lettuce and onion',38,'assets/sandwich-beef-pastrami-new.png',''],['Chickado','Chicken, avocado, tomato, cucumber and creamy dressing',38,'assets/sandwich-chickado-new.png',''],['Halloumi Avacado','Halloumi, avocado, cucumber and tomato',38,'assets/sandwich-halloumi-avocado-new.png','V'],['Halloumi Pesto','Halloumi, pesto, cucumber and tomato',38,'assets/sandwich-halloumi-pesto-new.png','V'],['Labneh','Labneh, cucumber, tomato, olives and greens',38,'assets/sandwich-labneh-new.png','V'],['Melted Cheese','Warm melted cheese and tomato',38,'assets/sandwich-melted-cheese-new.png','V'],['Smoked Salmon','Smoked salmon, cucumber and cream cheese',38,'assets/sandwich-smoked-salmon-new.png',''],['Smoked Turkey','Smoked turkey, melted cheese, tomato and pesto',38,'assets/sandwich-smoked-turkey-new.png','']]},
  {category:'Healthy Bowls',slug:'healthy-bowls',tagline:'Balanced fuel · bold flavour',items:[['Acai Bowl','Açaí topped with banana, berries, granola and peanut butter',46,'assets/bowl-acai-new.webp','VG'],['Blue Crash Bowl','A vibrant blue smoothie bowl with mango, banana, berries and granola',44,'assets/bowl-blue-crash-new.webp','VG'],['Mystic Matcha Bowl','A berry smoothie bowl with avocado, banana, cucumber and granola',44,'assets/bowl-mystic-matcha-new.webp','VG'],['Green Dream Bowl','A colourful wellness bowl with fruit, vegetables, nuts and granola',44,'assets/bowl-green-dream-new.webp','VG'],['Detox Me Later Glow Bowl','A pink smoothie bowl topped with tropical fruit, berries and pomegranate',44,'assets/bowl-detox-glow-new.webp','VG'],['Tropical Glow Bowl','A tropical green bowl with avocado, mango, pineapple and berries',44,'assets/bowl-tropical-glow-new.webp','VG'],['Watermelon Feta','Fresh watermelon, feta, chia seeds and mint',25,'assets/bowl-watermelon-feta-new.webp','V']]},
  {category:'Protein Bars',slug:'protein-bars',tagline:'Clean energy · ready to go',items:[['Fignuts','Figs, nuts and seeds pressed into a naturally energising bar',16,'assets/protein-bar-fignuts.webp','VG'],['Walnana','A rich cacao and nut protein bar with a smooth finish',16,'assets/protein-bar-klalnana.webp','VG'],['Nutri Tropix','A layered tropical fruit and nut energy bar',16,'assets/protein-bar-nutri-tropix.webp','VG'],['Nutty Date Delight Ball','Chocolate-coated date and nut energy balls',16,'assets/protein-bar-nutty-date-delight-ball.webp','VG']]},
  {category:'Cakes & Pastries',slug:'cakes-pastries',tagline:'Freshly baked · perfectly paired',items:[['Banana Bread','A soft, moist slice of classic banana bread',16,'assets/pastry-banana-cake.webp',''],['Blueberry Muffin','A tender muffin baked with juicy blueberries',16,'assets/pastry-blueberry-muffin.webp',''],['Brownies','A rich, fudgy chocolate brownie',16,'assets/pastry-brownies.webp',''],['Chocolate Muffin','A soft chocolate muffin with a deeply cocoa-rich finish',16,'assets/pastry-chocolate-muffin.webp','']]},
  {category:'Protein Shakes',slug:'protein-shakes',tagline:'Strong blends · smooth finish',items:[['Cookies & Cream','Cookies-and-cream protein blended with chilled milk',36,'assets/protein-shake-cookies-cream.webp',''],['Date-me','Dates, banana and protein blended into a naturally sweet shake',36,'assets/protein-shake-date-me.webp',''],['PB & J','Peanut butter, berries and protein blended until smooth',38,'assets/protein-shake-pb-j.webp',''],['Rumble in the Jungle','A green protein blend with banana and leafy greens',38,'assets/protein-shake-rumble-jungle.webp',''],['Power Protein','A smooth, creamy protein shake made to fuel your day',38,'assets/protein-shake-power-protein-new.png',''],['Ice and Shake','A chilled, creamy protein shake blended smooth over ice',26,'assets/protein-shake-ice-and-shake.png',''],['Build Your Own','Choose your preferred ingredients and create your own protein shake',38,'assets/protein-shake-build-your-own.png','']]},
  {category:'Cold Beverages',slug:'cold-beverages',tagline:'Chilled · clean · refreshing',items:[['Blue Lagoon Mojito','A bright citrus-mint cooler with sparkling blue lagoon flavour',28,'assets/cold-blue-lagoon-mojito.webp','VG'],['Blueberry Mojito','Blueberry, fresh mint, citrus and sparkling soda',28,'assets/cold-blueberry-mojito.webp','VG'],['Strawberry Mojito','Strawberry, fresh mint, lime and sparkling soda',25,'assets/cold-strawberry-mojito.png','VG'],['Classic Mojito','Fresh lime, mint and sparkling soda',26,'assets/cold-classic-mojito.webp','VG'],['Passion Fruit Mojito','Passion fruit, fresh mint, lime and sparkling soda',28,'assets/cold-passion-fruit-mojito.webp','VG'],['Evian Water','Natural mineral water from the French Alps',12,'assets/cold-evian-water.webp','VG'],['Vitamin Well Upgrade','Lemon-cactus vitamin drink with magnesium and zinc',20,'assets/cold-vitamin-well-upgrade.webp','VG'],['C4 Energy Drink','Zero-sugar performance energy drink',20,'assets/cold-c4-energy-drink.webp','VG'],['Cold Drip Coffee','Slow-dripped cold coffee with a smooth, bold finish',26,'assets/cold-drip-coffee.webp',''],['Iced V60','Hand-brewed filter coffee served over ice',28,'assets/hot-iced-v60.webp',''],['Ginger Ice Tea','Chilled tea infused with bright, warming ginger',20,'assets/cold-ginger-ice-tea.webp','VG'],['Ice Americano','Double espresso poured over ice',18,'assets/cold-iced-americano.webp',''],['Ice Latte','Espresso layered with chilled milk and served over ice',24,'assets/ice-latte.png',''],['Ice Matcha Latte','Matcha shaken with chilled milk and ice',29,'assets/cold-iced-matcha-latte.webp','V'],['Iced Spanish Latte','Espresso, chilled milk and gentle sweetness',27,'assets/cold-iced-spanish-latte.webp',''],['Passion Fruit Ice Tea','Chilled tea brightened with tropical passion fruit',20,'assets/cold-passion-fruit-ice-tea.webp','VG'],['Peach Ice Tea','Smooth chilled tea with ripe peach flavour',20,'assets/cold-peach-ice-tea.webp','VG'],['Rasberry Cano','A refreshing raspberry-infused iced Americano',24,'assets/cold-raspberry-cano.webp',''],['Perrier Sparkling Water','Classic Perrier natural sparkling mineral water',12,'assets/cold-perrier-bottle.webp','VG'],['Perrier Sparkling Water with Lemon','Perrier sparkling water served over ice with lemon',12,'assets/cold-perrier-glass.webp','VG']]},
  {category:'Frappes',slug:'frappes',tagline:'Blended cold · seriously smooth',items:[['Caramel Frappe','Espresso, caramel and chilled milk blended until smooth',32,'assets/frappe-caramel.webp',''],['Matcha Frappe','Matcha and chilled milk blended to a creamy finish',34,'assets/frappe-matcha.webp','V'],['Mocha Frappe','Espresso, dark chocolate and chilled milk blended until smooth',32,'assets/frappe-mocha.webp',''],["Press'd Frappe",'Our signature creamy coffee frappe',34,'assets/frappe-pressd.webp','']]},
  {category:'Smoothies',slug:'smoothies',tagline:'Fruit-forward · naturally energising',items:[['Energy Booster','Mixed berries, banana and a naturally energising fruit blend',30,'assets/smoothie-energy-booster.webp','VG'],['Green Machine','Leafy greens, apple, banana and a fresh tropical blend',30,'assets/smoothie-green-machine.webp','VG'],['Mango Mania','Mango, banana and tropical fruit blended until smooth',30,'assets/smoothie-mango-mania.webp','VG'],['Pina Colada','Pineapple and coconut blended into a creamy tropical smoothie',30,'assets/smoothie-pina-colada.webp','VG'],['Rubby Antioxidant Blend','A deep ruby blend of antioxidant-rich fruits and berries',32,'assets/smoothie-ruby-antioxydont-blind.webp','VG'],['Srawberry Fusin','Strawberries and banana blended into a bright fruit smoothie',30,'assets/smoothie-srawberry-fusin.webp','VG'],['Build Your Own','Choose your preferred ingredients and create your own smoothie',32,'assets/smoothie-build-your-own.png','']]},
  {category:'Fresh Juices',slug:'fresh-juices',tagline:'Pressed fresh · nothing hidden',items:[['Carrot','Freshly pressed carrot juice served chilled',24,'assets/juice-carrot.webp','VG'],['Green Apple','Crisp green apples pressed fresh to order',26,'assets/juice-green-apple.webp','VG'],['Orange','Freshly pressed orange juice served chilled',24,'assets/juice-orange.webp','VG'],['Watermelon','Fresh watermelon juice served over ice',24,'assets/juice-watermelon.webp','VG']]},
  {category:'Mocktails',slug:'mocktails',tagline:'Bright · sparkling · alcohol-free',items:[['Fresh Mint Lemonade','Fresh lemon and mint blended into a bright, cooling drink',26,'assets/mocktail-fresh-mint-lemonade.webp','VG'],['Immunity Booster','A vibrant citrus blend made for a refreshing lift',28,'assets/mocktail-immunity-booster.webp','VG'],['Incredible Hulk','A bold green wellness blend served chilled',30,'assets/mocktail-incredible-hulk.webp','VG'],['The Shield','A smooth, refreshing signature wellness blend',30,'assets/mocktail-the-shield.webp','VG']]}
];

// Menu facts transcribed from the supplied printed menu. Items not present in
// that source still get a details view using their existing card description.
const productDetails={
  'Mochaccino':{price:26,ingredients:['Single shot espresso','Chocolate','Steamed milk and froth'],size:'8 oz'},
  'V60':{price:29,ingredients:['Coffee origin'],size:'8 oz'},
  'Tea Selections':{price:20,ingredients:['Earl Grey','Camomile','English Breakfast','Green Tea with Mint','Green Tea with Jasmine']},
  'Tisane Tea':{price:20,ingredients:['Ginger','Fresh lemon juice','Honey','Hot water']},
  'Hot Matcha Latte':{price:26,ingredients:['Matcha green tea','Steamed milk and froth']},
  'Iced V60':{price:29,ingredients:['Coffee origin','Ice cubes'],size:'14 oz'},
  'Cold Drip Coffee':{price:29,ingredients:['Slow-dripped cold coffee']},
  'Ice Americano':{name:'Iced Americano',price:19,ingredients:['Double shots of espresso','Ice cubes and water'],size:'14 oz'},
  'Ice Latte':{price:24,ingredients:['Espresso','Chilled milk','Ice cubes'],size:'14 oz'},
  'Ice Matcha Latte':{name:'Iced Matcha Latte',price:26,ingredients:['Matcha green tea','Ice cubes and milk'],size:'14 oz'},
  'Iced Spanish Latte':{price:26,ingredients:['Double shot of espresso','Sweet condensed milk','Ice cubes and cold milk'],size:'14 oz'},
  'Rasberry Cano':{name:'Raspberry-Cano',price:24,ingredients:['Double shots of espresso','Raspberry syrup','Ice cubes and water'],size:'14 oz'},
  'Peach Ice Tea':{name:'Peach Iced Tea',price:20,ingredients:['Pre-made fruit tea and lemon','Peach syrup and ice cubes'],size:'14 oz'},
  'Passion Fruit Ice Tea':{name:'Passion Fruit Iced Tea',price:20,ingredients:['Pre-made fruit tea','Passion syrup','Fresh passion fruit and lemon'],size:'14 oz'},
  'Ginger Ice Tea':{name:'Ginger Iced Tea',price:20,ingredients:['Pre-made fruit tea','Fresh ginger and lemon','Honey'],size:'14 oz'},
  'Classic Mojito':{price:25,ingredients:['Fresh mint and lemon','Mint mojito syrup'],size:'14 oz'},
  'Blueberry Mojito':{price:25,ingredients:['Fresh mint, lemon & blueberry','Blueberry syrup'],size:'14 oz'},
  'Passion Fruit Mojito':{price:25,ingredients:['Fresh mint, lemon & passion fruit','Passion syrup'],size:'14 oz'},
  'Blue Lagoon Mojito':{price:25,ingredients:['Fresh mint & lemon','Blue Lagoon syrup'],size:'14 oz'},
  "Press'd Frappe":{name:'Press’d Frappe',price:29,ingredients:['Double shots of espresso','Vanilla ice cream'],size:'14 oz'},
  'Matcha Frappe':{price:29,ingredients:['Matcha green tea','Vanilla ice cream'],size:'14 oz'},
  'Mocha Frappe':{price:29,ingredients:['Single shot of espresso','Chocolate','Vanilla ice cream'],size:'14 oz'},
  'Caramel Frappe':{price:29,ingredients:['Double shots of espresso','Caramel syrup','Vanilla ice cream'],size:'14 oz'},
  'Date-me':{name:'Dates Me',price:38,ingredients:['Dates fruits','Banana','Granola','Whey protein','Milk'],protein:'34g',carbohydrates:'85g',calories:'463 kcal'},
  'PB & J':{price:38,ingredients:['Strawberry','Raspberry','Banana','Granola','Peanut butter','Beetroot','Whey protein','Milk'],protein:'35g',carbohydrates:'64g',calories:'455 kcal'},
  'Cookies & Cream':{price:38,ingredients:['Chocolate','Banana','Granola','Peanut butter','Whey protein','Cocoa powder','Milk'],protein:'35g',carbohydrates:'74g',calories:'461 kcal'},
  'Rumble in the Jungle':{price:38,ingredients:['Avocado','Broccoli','Baby spinach','Kale','Banana','Whey','Milk'],protein:'31g',carbohydrates:'46g',calories:'378 kcal'},
  'Energy Booster':{price:32,ingredients:['Acai puree','Blueberry','Banana','Beetroot','Peanut butter','Apple juice'],protein:'30g',carbohydrates:'57g',calories:'355 kcal'},
  'Srawberry Fusin':{name:'Strawberry Fusion',price:32,ingredients:['Strawberry','Mango','Raspberry','Banana','Beetroot','Apple juice'],protein:'35g',carbohydrates:'74g',calories:'461 kcal'},
  'Mango Mania':{price:32,ingredients:['Mango','Pineapple','Peach','Apple juice'],protein:'31g',carbohydrates:'46g',calories:'378 kcal'},
  'Pina Colada':{price:32,ingredients:['Pineapple','Coconut','Banana','Apple juice'],protein:'31g',carbohydrates:'46g',calories:'378 kcal'},
  'Green Machine':{price:32,ingredients:['Kale','Broccoli','Baby spinach','Banana','Pineapple','Avocado','Apple juice'],protein:'35g',carbohydrates:'64g',calories:'455 kcal'},
  'Rubby Antioxidant Blend':{name:'Rubby Antioxidant Blend',price:32,ingredients:['Activated charcoal','Blackberry','Blueberry','Cherry fruit','Blackcurrant','Beetroot','Apple juice'],protein:'34g',carbohydrates:'85g',calories:'463 kcal'},
  'Orange':{price:20,ingredients:['Fresh orange juice'],protein:'2g',carbohydrates:'26g',calories:'168 kcal'},
  'Green Apple':{price:20,ingredients:['Fresh green apple juice'],protein:'2g',carbohydrates:'52g',calories:'175 kcal'},
  'Carrot':{price:20,ingredients:['Fresh carrot juice'],protein:'2g',carbohydrates:'23g',calories:'103 kcal'},
  'Watermelon':{price:20,ingredients:['Fresh watermelon juice'],protein:'4g',carbohydrates:'46g',calories:'180 kcal'},
  'Fresh Mint Lemonade':{price:24,ingredients:['Mint','Lemon','Sugar'],protein:'1g',carbohydrates:'39g',calories:'156 kcal'},
  'Immunity Booster':{price:24,ingredients:['Carrot','Ginger','Green apple'],protein:'3g',carbohydrates:'65g',calories:'258 kcal'},
  'The Shield':{price:24,ingredients:['Green apple','Ginger','Pineapple','Turmeric','Black pepper'],protein:'1g',carbohydrates:'58g',calories:'230 kcal'},
  'Incredible Hulk':{price:24,ingredients:['Green apple','Ginger','Pineapple','Passion fruit','Green spirulina powder'],protein:'5g',carbohydrates:'56g',calories:'214 kcal'},
  'Smoked Turkey':{price:38,ingredients:['Mozzarella cheese','Smoked turkey','Pesto sauce','Tomatoes','Bread'],protein:'55g',carbohydrates:'60g',calories:'888 kcal'},
  'Beef Pastrami':{price:38,ingredients:['Emmental cheese','Beef pastrami','Caramelized onions','Lettuce','Bread'],protein:'56.5g',carbohydrates:'64g',calories:'759 kcal'},
  'Smoked Salmon':{price:38,ingredients:['Philadelphia mix','Smoked salmon','Cucumber','Tomato','Bread'],protein:'20g',carbohydrates:'9g',calories:'467 kcal'},
  'Chickado':{price:38,ingredients:['Mozzarella cheese','Chicken mousse','Cucumber','Tomato','Avocado','Bread'],protein:'60g',carbohydrates:'44.4g',calories:'1,261 kcal'},
  'Melted Cheese':{price:38,ingredients:['Cheddar and Emmental cheese','Tomato','Bread'],protein:'49g',carbohydrates:'30g',calories:'844 kcal'},
  'Halloumi Avacado':{name:'Halloumi Avocado',price:38,ingredients:['Grilled halloumi cheese','Avocado sauce','Tomato','Cucumber','Bread'],protein:'35g',carbohydrates:'51g',calories:'804 kcal'},
  'Halloumi Pesto':{price:38,ingredients:['Grilled halloumi cheese','Pesto sauce','Tomato','Cucumber','Bread'],protein:'43g',carbohydrates:'89g',calories:'985 kcal'},
  'Labneh':{price:38,ingredients:['Labneh cheese','Sliced green olives','Olive oil','Tomato','Cucumber','Bread'],protein:'11g',carbohydrates:'57g',calories:'595 kcal'}
};

menu.forEach(category=>category.items.forEach(item=>{
  const details=productDetails[item[0]]||{};
  item[5]={ingredients:details.ingredients||[item[1]],size:details.size,protein:details.protein,carbohydrates:details.carbohydrates,calories:details.calories};
  if(details.price)item[2]=details.price;
  if(details.name)item[0]=details.name;
}));

// Reorganise products into customer-facing menu sections and related columns.
const originalMenu=new Map(menu.map(category=>[category.category,category.items]));
const tagged=(category,column,filter=()=>true)=>(originalMenu.get(category)||[]).filter(filter).map(item=>{item[6]=column;return item});
const coldItems=originalMenu.get('Cold Beverages')||[];
const isMojito=item=>/Mojito/i.test(item[0]);
const isIcedTea=item=>/Iced? Tea/i.test(item[0]);
const isRefreshing=item=>['Evian Water','Perrier Sparkling Water','Perrier Sparkling Water with Lemon','Vitamin Well Upgrade','C4 Energy Drink'].includes(item[0]);
const isIcedCoffee=item=>!isMojito(item)&&!isIcedTea(item)&&!isRefreshing(item);
const icedCoffeeItems=coldItems.filter(isIcedCoffee);
const icedCoffeeLastRow=['Cold Drip Coffee','Iced V60'];
const orderedIcedCoffee=[...icedCoffeeItems.filter(item=>!icedCoffeeLastRow.includes(item[0])),...icedCoffeeItems.filter(item=>icedCoffeeLastRow.includes(item[0]))];
menu=[
  {category:'Fresh Start',slug:'fresh-start',tagline:'Breakfast · bowls · salads · pancakes',items:[...tagged('Breakfast','Breakfast'),...tagged('Healthy Bowls','Bowls'),...tagged('Salads','Salads'),...tagged('Pancakes','Pancakes'),...tagged('Cakes & Pastries','Cakes & Pastries')]},
  {category:'Hot Beverages',slug:'hot-beverages',tagline:'Coffee · teas · warm moments',items:[...tagged('Hot Beverages','Coffee',item=>!/Tea/i.test(item[0])),...tagged('Hot Beverages','Teas',item=>/Tea/i.test(item[0]))]},
  {category:'Ice Beverages',slug:'ice-beverages',tagline:'Iced coffee · frappe',items:[...orderedIcedCoffee.map(item=>{item[6]='Iced Coffee';return item}),...tagged('Frappes','Frappe')]},
  {category:'Protein Shakes/Bars',slug:'protein-shakes-bars',tagline:'Protein shakes · protein bars',items:[...tagged('Protein Shakes','Protein Shakes'),...tagged('Protein Bars','Protein Bars')]},
  {category:'Smoothies',slug:'smoothies',tagline:'Fruit-forward · naturally energising',items:tagged('Smoothies','Smoothies')},
  {category:'Fresh Juices',slug:'fresh-juices',tagline:'Cold press · mocktails',items:[...tagged('Fresh Juices','Cold Press'),...tagged('Mocktails','Mocktails')]},
  {category:'Refreshing Drinks',slug:'refreshing-drinks',tagline:'Iced teas · mojitos · refreshers',items:[...coldItems.filter(isIcedTea).map(item=>{item[6]='Iced Teas';return item}),...coldItems.filter(isMojito).map(item=>{item[6]='Mojitos';return item}),...coldItems.filter(isRefreshing).map(item=>{item[6]='Refreshing Drinks';return item})]},
  {category:'Sandwiches',slug:'sandwiches',tagline:'Freshly made · full of flavour',items:tagged('Sandwiches','Sandwiches')}
];

const categories=document.querySelector('.categories');
categories.innerHTML='<button class="active" data-filter="all">All</button>'+menu.map(c=>`<button data-filter="${c.slug}">${c.category}</button>`).join('');
const categoryWrap=categories.closest('.category-wrap');
const categoryPrev=document.createElement('button'),categoryNext=document.createElement('button');
categoryPrev.className='category-arrow category-prev';categoryNext.className='category-arrow category-next';
categoryPrev.type=categoryNext.type='button';categoryPrev.setAttribute('aria-label','Show previous menu categories');categoryNext.setAttribute('aria-label','Show more menu categories');
categoryPrev.innerHTML='<span aria-hidden="true">←</span>';categoryNext.innerHTML='<span aria-hidden="true">→</span>';
categoryWrap.prepend(categoryPrev);categoryWrap.append(categoryNext);
const updateCategoryArrows=()=>{const max=categories.scrollWidth-categories.clientWidth;categoryPrev.disabled=categories.scrollLeft<3;categoryNext.disabled=categories.scrollLeft>max-3;categoryWrap.classList.toggle('can-scroll',max>3)};
const moveCategories=direction=>categories.scrollBy({left:direction*Math.max(180,categories.clientWidth*.68),behavior:'smooth'});
categoryPrev.addEventListener('click',()=>moveCategories(-1));categoryNext.addEventListener('click',()=>moveCategories(1));
categories.addEventListener('scroll',updateCategoryArrows,{passive:true});addEventListener('resize',updateCategoryArrows,{passive:true});requestAnimationFrame(updateCategoryArrows);
const content=document.querySelector('.menu-content');
const renderMenuCard=(item,categoryIndex,itemIndex)=>{
  const category=menu[categoryIndex],isFullCustomDrink=['hot-beverages','ice-beverages'].includes(category.slug),isProteinShake=item[6]==='Protein Shakes',customizeMode=isProteinShake?'milk-only':isFullCustomDrink?'full':'';
  const controls=customizeMode?`<button class="view-details" data-category-index="${categoryIndex}" data-item-index="${itemIndex}">Details <span aria-hidden="true">↗</span></button><button class="customize-product" data-product="${item[0]}" data-customize-mode="${customizeMode}"><span aria-hidden="true">⚙</span> Customize</button>`:`<button class="view-details" data-category-index="${categoryIndex}" data-item-index="${itemIndex}">Details <span aria-hidden="true">↗</span></button><button class="comment-product" data-product="${item[0]}"><span aria-hidden="true">💬</span> Comment</button>`;
  return `<div class="menu-card${customizeMode?' customizable-card':''}" role="button" tabindex="0" aria-label="View details for ${item[0]}" data-category-index="${categoryIndex}" data-item-index="${itemIndex}"><div class="menu-img"><img src="${item[3]}" alt="${item[0]}" loading="lazy">${item[4]?`<span>${item[4]}</span>`:''}</div><div class="menu-card-info"><div class="product-summary"><h4>${item[0]}</h4><div class="product-controls">${controls}</div></div><div class="menu-card-actions"><strong>AED ${item[2]}</strong><button class="add-cart" data-name="${item[0]}" data-price="${item[2]}" data-image="${item[3]}">Add +</button></div></div></div>`;
};
content.innerHTML=menu.map((category,categoryIndex)=>{
  const columns=[...new Set(category.items.map(item=>item[6]))];
  const columnId=column=>`${category.slug}-${column.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'')}`;
  const subnav=columns.length>1?`<nav class="menu-subnav" aria-label="${category.category} sections">${columns.map((column,index)=>`<button type="button" data-subtarget="${columnId(column)}"><span>${String(index+1).padStart(2,'0')}</span>${column}</button>`).join('')}</nav>`:'';
  const columnMarkup=columns.map(column=>`<section class="menu-subsection" id="${columnId(column)}" data-column="${column}"><header><span>${String(columns.indexOf(column)+1).padStart(2,'0')}</span><h4>${column}</h4></header><div class="menu-grid">${category.items.map((item,itemIndex)=>item[6]===column?renderMenuCard(item,categoryIndex,itemIndex):'').join('')}</div></section>`).join('');
  return `<article class="menu-category" id="${category.slug}" data-category="${category.slug}"><header class="category-title"><div><p>${String(categoryIndex+1).padStart(2,'0')} · MENU</p><h3>${category.category}</h3></div><span>${category.tagline}</span></header>${subnav}<div class="menu-subsections">${columnMarkup}</div></article>`;
}).join('');
content.addEventListener('click',event=>{const button=event.target.closest('[data-subtarget]');if(!button)return;document.getElementById(button.dataset.subtarget)?.scrollIntoView({behavior:'smooth',block:'start'})});
const mobileSubnavDock=document.createElement('nav');
mobileSubnavDock.className='mobile-subnav-dock';
mobileSubnavDock.setAttribute('aria-label','Current menu subsections');
mobileSubnavDock.hidden=true;document.body.append(mobileSubnavDock);
mobileSubnavDock.addEventListener('click',event=>{const button=event.target.closest('[data-subtarget]');if(!button)return;document.getElementById(button.dataset.subtarget)?.scrollIntoView({behavior:'smooth',block:'start'})});

const productModal=document.createElement('dialog');
productModal.className='product-details-modal';
productModal.setAttribute('aria-labelledby','product-modal-title');
productModal.innerHTML='<button class="product-modal-close" type="button" aria-label="Close product details">×</button><div class="product-modal-image"><img alt=""></div><div class="product-modal-copy"><p class="product-modal-eyebrow">PRESS’D MENU</p><div class="product-modal-heading"><h2 id="product-modal-title"></h2><strong class="product-modal-price"></strong></div><p class="product-modal-description"></p><div class="product-modal-section"><h3>What’s inside</h3><ul></ul></div><dl class="product-modal-facts"></dl><div class="product-modal-actions"></div></div>';
document.body.append(productModal);
const closeProductModal=()=>productModal.close();
productModal.querySelector('.product-modal-close').addEventListener('click',closeProductModal);
productModal.addEventListener('click',event=>{if(event.target===productModal)closeProductModal()});
productModal.addEventListener('close',()=>document.body.classList.remove('product-modal-open'));
const openProductDetails=trigger=>{
  const categoryIndex=Number(trigger.dataset.categoryIndex),category=menu[categoryIndex],item=category.items[Number(trigger.dataset.itemIndex)],details=item[5],isFullCustomDrink=['hot-beverages','ice-beverages'].includes(category.slug),isProteinShake=item[6]==='Protein Shakes',customizeMode=isProteinShake?'milk-only':isFullCustomDrink?'full':'';
  productModal.querySelector('img').src=item[3];productModal.querySelector('img').alt=item[0];
  productModal.querySelector('h2').textContent=item[0];productModal.querySelector('.product-modal-price').textContent=`AED ${item[2]}`;
  productModal.querySelector('.product-modal-description').textContent=item[1];
  productModal.querySelector('ul').innerHTML=details.ingredients.map(value=>`<li>${value}</li>`).join('');
  const facts=[['Size',details.size],['Protein',details.protein],['Carbohydrates',details.carbohydrates],['Calories',details.calories]].filter(([,value])=>value);
  productModal.querySelector('.product-modal-facts').innerHTML=facts.map(([label,value])=>`<div><dt>${label}</dt><dd>${value}</dd></div>`).join('');
  productModal.querySelector('.product-modal-actions').innerHTML=`${customizeMode?`<button class="customize-product" data-product="${item[0]}" data-customize-mode="${customizeMode}"><span aria-hidden="true">⚙</span> Customize</button>`:`<button class="comment-product" data-product="${item[0]}"><span aria-hidden="true">💬</span> Comment</button>`}<button class="add-cart" data-name="${item[0]}" data-price="${item[2]}" data-image="${item[3]}">Add to Order +</button>`;
  document.body.classList.add('product-modal-open','modal-open');productModal.showModal();
};
document.addEventListener('click',event=>{
  const button=event.target.closest('.view-details');
  if(button){openProductDetails(button);return}
  const card=event.target.closest('.menu-card');
  if(!card||event.target.closest('button,a,input,textarea,select,label'))return;
  openProductDetails(card);
});
document.addEventListener('keydown',event=>{
  const card=event.target.closest('.menu-card');
  if(!card||event.target!==card||!['Enter',' '].includes(event.key))return;
  event.preventDefault();openProductDetails(card);
});

const instructionsModal=document.createElement('dialog');
instructionsModal.className='instructions-modal';
instructionsModal.setAttribute('aria-labelledby','instructions-title');
instructionsModal.innerHTML='<button class="instructions-close" type="button" aria-label="Close special instructions">×</button><p class="instructions-eyebrow">CUSTOMISE YOUR ORDER</p><h2 id="instructions-title">Special Instructions</h2><p class="instructions-product"></p><form><label for="product-instructions">Tell us what you’d like to reduce, remove, or add to this product…</label><textarea id="product-instructions" name="instructions" maxlength="500" rows="5" placeholder="Tell us what you’d like to reduce, remove, or add to this product…"></textarea><p class="instructions-note" aria-live="polite"></p><div><button class="instructions-cancel" type="button">Cancel</button><button type="submit">Save Instructions</button></div></form>';
document.body.append(instructionsModal);
let instructionsProduct='';
const readInstructions=()=>{try{return JSON.parse(localStorage.getItem('pressd-instructions')||'{}')}catch{return {}}};
document.addEventListener('click',event=>{
  const button=event.target.closest('.comment-product');if(!button)return;
  instructionsProduct=button.dataset.product;
  instructionsModal.querySelector('.instructions-product').textContent=instructionsProduct;
  instructionsModal.querySelector('textarea').value=readInstructions()[instructionsProduct]||'';
  instructionsModal.querySelector('.instructions-note').textContent='';document.body.classList.add('modal-open');instructionsModal.showModal();
});
const closeInstructions=()=>instructionsModal.close();
instructionsModal.querySelector('.instructions-close').addEventListener('click',closeInstructions);
instructionsModal.querySelector('.instructions-cancel').addEventListener('click',closeInstructions);
instructionsModal.addEventListener('click',event=>{if(event.target===instructionsModal)closeInstructions()});
instructionsModal.querySelector('form').addEventListener('submit',event=>{
  event.preventDefault();const saved=readInstructions(),value=event.currentTarget.elements.instructions.value.trim();
  if(value)saved[instructionsProduct]=value;else delete saved[instructionsProduct];
  localStorage.setItem('pressd-instructions',JSON.stringify(saved));
  const cartItem=cart?.find(item=>item.name===instructionsProduct);
  if(cartItem){cartItem.instructions=value;renderCart()}
  instructionsModal.querySelector('.instructions-note').textContent='Instructions saved.';setTimeout(closeInstructions,700);
});

const customizeModal=document.createElement('dialog');
customizeModal.className='customize-modal';
customizeModal.setAttribute('aria-labelledby','customize-title');
const beanOptions=[['Brazil',0],['Honduras',2],['El Salvador',3],['Hamasho',4],['Decaf (Colombia)',4]];
const milkOptions=[['Fresh Milk',0],['Oat Milk',5],['Almond Milk',5],['Coconut Milk',5]];
const syrupOptions=[['None',0],['Caramel',5],['Hazelnut',5],['Vanilla',5],['Pistachio',5]];
const pricedOptions=(options,name)=>options.map(([option,price],index)=>`<label class="option-card"><input type="radio" name="${name}" value="${option}" data-price="${price}"${index===0?' checked':''}><span>${option}</span>${price?`<b>+ ${price.toFixed(2)} AED</b>`:''}</label>`).join('');
const milkPricedOptions=milkOptions.map(([option,price],index)=>`<label class="option-card milk-option"><span class="milk-option-content"><input class="milk-radio" type="radio" name="milk" value="${option}" data-price="${price}"${index===0?' checked':''}><span class="milk-option-info"><span class="milk-name">${option}</span>${price?`<b class="milk-price">+ ${price.toFixed(2)} AED</b>`:''}</span></span></label>`).join('');
customizeModal.innerHTML=`<button class="customize-close close-btn" type="button" aria-label="Close drink customization">×</button><div class="modal-header customize-header"><span class="customize-eyebrow eyebrow">MAKE IT YOURS</span><h2 id="customize-title">Customize Your Drink</h2><h3 class="customize-product-name product-name"></h3></div><form><div class="customize-grid customize-content"><section class="custom-section coffee-section"><h4>COFFEE BEANS</h4><div class="customize-options option-grid coffee-options">${pricedOptions(beanOptions,'beans')}</div></section><section class="custom-section milk-section milk-comment-area"><h4 class="milk-section-title">MILKS</h4><div class="customize-options option-grid milk-options">${milkPricedOptions}</div></section><section class="custom-section add-on-section"><h4>SYRUPS</h4><div class="customize-options option-grid addon-options">${pricedOptions(syrupOptions,'syrup')}</div></section><section class="custom-section customize-comment comment-section milk-comment-area"><h4 class="comment-section-title">COMMENT / SPECIAL INSTRUCTIONS</h4><p class="comment-description">Tell us what you’d like to reduce, remove, or add to this drink.</p><textarea class="comment-textarea" id="customize-instructions" name="instructions" maxlength="500" rows="4" placeholder="Add your comment or special instructions..."></textarea></section></div><p class="customize-note" aria-live="polite"></p><button class="customize-save save-btn" type="submit">SAVE SELECTION</button></form>`;
document.body.append(customizeModal);
let customizeProduct='';
let customizeMode='full';
const optionPrice=(options,selected)=>options.find(([name])=>name===selected)?.[1]||0;
const customizationExtra=customization=>customization?.mode==='milk-only'?optionPrice(milkOptions,customization.milk):customization?.beans?optionPrice(beanOptions,customization.beans)+optionPrice(milkOptions,customization.milk)+optionPrice(syrupOptions,customization.syrup):0;
const sanitizeCustomization=customization=>customization?.mode==='milk-only'?{mode:'milk-only',milk:customization.milk,extraPrice:customizationExtra(customization)}:customization?.beans?{beans:customization.beans,milk:customization.milk,syrup:customization.syrup,extraPrice:customizationExtra(customization)}:customization;
const readCustomizations=()=>{try{return Object.fromEntries(Object.entries(JSON.parse(localStorage.getItem('pressd-customizations')||'{}')).map(([product,customization])=>[product,sanitizeCustomization(customization)]))}catch{return {}}};
localStorage.setItem('pressd-customizations',JSON.stringify(readCustomizations()));
const customizationText=customization=>{if(!customization)return'';if(customization.mode==='milk-only')return`Milk: ${customization.milk}${customizationExtra(customization)?`; Addition: + AED ${customizationExtra(customization).toFixed(2)}`:''}`;if(!customization.beans)return`Coffee: ${customization.coffee||'Standard'}; Milk: ${customization.milk||'Standard'}; Add-ons: ${customization.addons?.length?customization.addons.join(', '):'None'}`;return`Beans: ${customization.beans}; Milk: ${customization.milk}; Syrup: ${customization.syrup}${customizationExtra(customization)?`; Additions: + AED ${customizationExtra(customization).toFixed(2)}`:''}`};
const updateCustomizationPrice=()=>{const extra=[...customizeModal.querySelectorAll('.custom-section:not([hidden]) input:checked')].reduce((sum,input)=>sum+Number(input.dataset.price||0),0);customizeModal.querySelector('.save-btn').textContent=`SAVE SELECTION${extra?` · + AED ${extra.toFixed(2)}`:''}`;return extra};
document.addEventListener('click',event=>{
  const button=event.target.closest('.customize-product');if(!button)return;
  customizeProduct=button.dataset.product;customizeMode=button.dataset.customizeMode||'full';
  customizeModal.classList.toggle('milk-only-mode',customizeMode==='milk-only');
  customizeModal.querySelector('.coffee-section').hidden=customizeMode==='milk-only';customizeModal.querySelector('.add-on-section').hidden=customizeMode==='milk-only';customizeModal.querySelector('.comment-section').hidden=false;
  const defaults=customizeMode==='milk-only'?{milk:'Fresh Milk'}:{beans:'Brazil',milk:'Fresh Milk',syrup:'None'},stored=readCustomizations()[customizeProduct],saved=stored&&(customizeMode==='milk-only'?stored.mode==='milk-only':stored.beans)?stored:defaults;
  customizeModal.querySelector('.customize-product-name').textContent=customizeProduct;
  Object.keys(defaults).forEach(name=>customizeModal.querySelectorAll(`input[name="${name}"]`).forEach(input=>input.checked=input.value===(saved[name]||defaults[name])));
  customizeModal.querySelector('textarea[name="instructions"]').value=readInstructions()[customizeProduct]||'';
  customizeModal.querySelector('.customize-note').textContent='';updateCustomizationPrice();document.body.classList.add('modal-open');customizeModal.showModal();
});
customizeModal.addEventListener('change',updateCustomizationPrice);
const closeCustomize=()=>customizeModal.close();
customizeModal.querySelector('.customize-close').addEventListener('click',closeCustomize);
customizeModal.addEventListener('click',event=>{if(event.target===customizeModal)closeCustomize()});
customizeModal.querySelector('form').addEventListener('submit',event=>{
  event.preventDefault();
  const form=new FormData(event.currentTarget),saved=readCustomizations();
  const customization=customizeMode==='milk-only'?{mode:'milk-only',milk:form.get('milk'),extraPrice:updateCustomizationPrice()}:{beans:form.get('beans'),milk:form.get('milk'),syrup:form.get('syrup'),extraPrice:updateCustomizationPrice()},instructions=String(form.get('instructions')||'').trim();
  saved[customizeProduct]=customization;localStorage.setItem('pressd-customizations',JSON.stringify(saved));
  const savedInstructions=readInstructions();if(instructions)savedInstructions[customizeProduct]=instructions;else delete savedInstructions[customizeProduct];localStorage.setItem('pressd-instructions',JSON.stringify(savedInstructions));
  const cartItem=cart?.find(item=>item.name===customizeProduct);
  if(cartItem){const basePrice=cartItem.basePrice??(cartItem.price-customizationExtra(cartItem.customization));cartItem.basePrice=basePrice;cartItem.price=basePrice+customization.extraPrice;cartItem.customization=customization;cartItem.instructions=instructions;renderCart()}
  customizeModal.querySelector('.customize-note').textContent='Your drink customization is saved.';setTimeout(closeCustomize,650);
});

const nav=document.querySelector('.navbar'), toggle=document.querySelector('.menu-toggle'), mobile=document.querySelector('.mobile-menu');
addEventListener('scroll',()=>nav.classList.toggle('scrolled',scrollY>40),{passive:true});
toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')==='true';toggle.setAttribute('aria-expanded',!open);mobile.classList.toggle('open',!open);mobile.setAttribute('aria-hidden',open);document.body.classList.toggle('menu-open',!open)});
mobile.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>toggle.click()));

categories.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;const target=document.getElementById(b.dataset.filter==='all'?menu[0].slug:b.dataset.filter);categories.querySelectorAll('button').forEach(x=>x.classList.remove('active'));b.classList.add('active');if(target){menuSections.forEach(section=>section.classList.toggle('active-menu-category',section===target));updateMobileSubnav(target);target.scrollIntoView({behavior:'smooth',block:'start'});}});
const menuSections=[...document.querySelectorAll('.menu-category')];
menuSections[0]?.classList.add('active-menu-category');
const updateMobileSubnav=section=>{const source=section?.querySelector('.menu-subnav');mobileSubnavDock.innerHTML=source?.innerHTML||'';mobileSubnavDock.hidden=!source};
updateMobileSubnav(menuSections[0]);
const menuObserver=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){menuSections.forEach(section=>section.classList.toggle('active-menu-category',section===e.target));updateMobileSubnav(e.target);categories.querySelectorAll('button').forEach(b=>b.classList.toggle('active',b.dataset.filter===e.target.dataset.category));const active=categories.querySelector('.active');active?.scrollIntoView({behavior:'smooth',block:'nearest',inline:'center'});setTimeout(updateCategoryArrows,350);}}),{rootMargin:'-30% 0px -55%',threshold:0});
menuSections.forEach(x=>menuObserver.observe(x));
const setActiveSubnav=section=>{
  const id=section?.id;if(!id)return;
  document.querySelectorAll('[data-subtarget]').forEach(button=>button.classList.toggle('active',button.dataset.subtarget===id));
  mobileSubnavDock.querySelector(`[data-subtarget="${id}"]`)?.scrollIntoView({behavior:'smooth',block:'nearest',inline:'center'});
};
const subsectionObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting)setActiveSubnav(entry.target)}),{rootMargin:'-28% 0px -58%',threshold:0});
document.querySelectorAll('.menu-subsection').forEach(section=>subsectionObserver.observe(section));

const revealObserver=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');revealObserver.unobserve(e.target)}}),{threshold:.13});
document.querySelectorAll('.reveal,.menu-card,.category-title,.editorial').forEach(x=>revealObserver.observe(x));
if(matchMedia('(prefers-reduced-motion: reduce)').matches)document.querySelectorAll('video[autoplay]').forEach(video=>video.pause());
if(!matchMedia('(prefers-reduced-motion: reduce)').matches)addEventListener('scroll',()=>{document.querySelector('.hero-media').style.transform=`translateY(${scrollY*.12}px) scale(1.06)`},{passive:true});

const booking=document.querySelector('.booking');document.querySelectorAll('[data-book]').forEach(b=>b.addEventListener('click',()=>{document.body.classList.add('modal-open');booking.showModal()}));
document.querySelectorAll('.dialog-close').forEach(b=>b.addEventListener('click',()=>b.closest('dialog').close()));
booking.querySelector('form').addEventListener('submit',e=>{e.preventDefault();booking.querySelector('.form-note').textContent='Thanks — we’ll call shortly to confirm your table.';e.target.querySelector('button[type=submit]').textContent='Request received ✓';});
const lightbox=document.querySelector('.lightbox');document.querySelectorAll('.gallery-grid button').forEach(b=>b.addEventListener('click',()=>{lightbox.querySelector('img').src=b.querySelector('img').src;lightbox.querySelector('img').alt=b.querySelector('img').alt;document.body.classList.add('modal-open');lightbox.showModal()}));
const syncModalScrollLock=()=>document.body.classList.toggle('modal-open',[...document.querySelectorAll('dialog')].some(dialog=>dialog.open));
document.querySelectorAll('dialog').forEach(d=>{d.addEventListener('click',e=>{if(e.target===d)d.close()});d.addEventListener('close',syncModalScrollLock);d.addEventListener('cancel',()=>requestAnimationFrame(syncModalScrollLock))});

const detailSections=[...document.querySelectorAll('main>section:not(.hero)')];
const categoryPinSpacer=document.createElement('div');
categoryPinSpacer.className='category-pin-spacer';
categoryWrap.before(categoryPinSpacer);
const categoryPinMedia=matchMedia('(max-width:760px)');
let categoryPinStart=Infinity,categoryPinHeight=0,categoryPinFrame=0;
const categoryPinTop=()=>innerWidth<=390?80:82;
const restoreCategoryBar=()=>{
  if(categoryWrap.parentElement===document.body)categoryPinSpacer.after(categoryWrap);
  categoryWrap.classList.remove('is-pinned');
  categoryPinSpacer.style.height='0px';
};
const syncCategoryPin=()=>{
  categoryPinFrame=0;
  if(categoryPinMedia.matches&&document.body.classList.contains('menu-detail-view')){
    if(!categoryWrap.classList.contains('is-pinned')){
      categoryPinHeight=categoryWrap.offsetHeight;
      categoryPinSpacer.style.height=`${categoryPinHeight}px`;
      document.body.append(categoryWrap);categoryWrap.classList.add('is-pinned');requestAnimationFrame(updateCategoryArrows);
    }
    return;
  }
  const shouldPin=categoryPinMedia.matches&&document.body.classList.contains('detail-view')&&!document.body.classList.contains('menu-detail-view')&&scrollY>=categoryPinStart;
  if(shouldPin&&!categoryWrap.classList.contains('is-pinned')){
    categoryPinSpacer.style.height=`${categoryPinHeight}px`;
    document.body.append(categoryWrap);
    categoryWrap.classList.add('is-pinned');
    requestAnimationFrame(updateCategoryArrows);
  }else if(!shouldPin&&categoryWrap.classList.contains('is-pinned'))restoreCategoryBar();
};
const requestCategoryPinSync=()=>{
  if(!categoryPinFrame)categoryPinFrame=requestAnimationFrame(syncCategoryPin);
};
const measureCategoryPin=()=>{
  restoreCategoryBar();
  categoryPinStart=Infinity;
  if(!categoryPinMedia.matches||!document.body.classList.contains('detail-view'))return;
  if(document.body.classList.contains('menu-detail-view')){requestCategoryPinSync();return}
  const style=getComputedStyle(categoryWrap);
  categoryPinHeight=categoryWrap.offsetHeight+parseFloat(style.marginTop||0)+parseFloat(style.marginBottom||0);
  categoryPinStart=categoryWrap.getBoundingClientRect().top+scrollY-categoryPinTop();
  requestCategoryPinSync();
};
addEventListener('scroll',requestCategoryPinSync,{passive:true});
addEventListener('resize',()=>requestAnimationFrame(measureCategoryPin),{passive:true});
categoryPinMedia.addEventListener?.('change',measureCategoryPin);
const openRelatedSection=(target,behavior='smooth')=>{
  detailSections.forEach(section=>section.classList.toggle('active-detail',section===target));
  document.body.classList.remove('home-view');
  document.body.classList.add('detail-view');
  document.body.classList.toggle('menu-detail-view',target.id==='menu');
  requestAnimationFrame(()=>{
    window.scrollTo({top:0,behavior:'auto'});
    target.scrollTop=0;
    requestAnimationFrame(measureCategoryPin);
  });
};
const openHome=()=>{
  restoreCategoryBar();
  detailSections.forEach(section=>section.classList.remove('active-detail'));
  document.body.classList.remove('detail-view','menu-detail-view');
  document.body.classList.add('home-view');
  window.scrollTo({top:0,behavior:reducedMotion?'auto':'smooth'});
};

detailSections.forEach(section=>{
  const homeButton=document.createElement('button');
  homeButton.className='section-home-button';
  homeButton.type='button';
  homeButton.setAttribute('aria-label','Go back to home');
  homeButton.innerHTML='<span aria-hidden="true">⌂</span>';
  homeButton.addEventListener('click',()=>{
    openHome();
    history.replaceState(null,'','#home');
  });
  section.append(homeButton);
});


// Make every hero quick-link reveal only its matching section.
document.querySelectorAll('.hero-rail a[href^="#"]').forEach(link=>link.addEventListener('click',event=>{
  const target=document.querySelector(link.getAttribute('href'));
  if(!target)return;
  event.preventDefault();
  openRelatedSection(target,reducedMotion?'auto':'smooth');
  history.replaceState(null,'',link.getAttribute('href'));
}));

// Auto-advance the six hero cards on phones; touching the rail pauses it.
const heroRail=document.querySelector('.hero-rail');
const heroCards=[...heroRail.querySelectorAll('.rail-card')];
const carouselDots=document.createElement('div');
carouselDots.className='hero-carousel-dots';
carouselDots.setAttribute('aria-label','Explore slide position');
carouselDots.innerHTML=heroCards.map((card,index)=>`<button type="button" aria-label="Show ${card.innerText.trim()}" data-slide="${index}"></button>`).join('');
heroRail.after(carouselDots);
const dotButtons=[...carouselDots.querySelectorAll('button')];
const mobileCarousel=matchMedia('(max-width:760px)');
let carouselIndex=0,carouselTimer=0,carouselResumeTimer=0;
const updateCarouselDots=()=>dotButtons.forEach((dot,index)=>{
  dot.classList.toggle('active',index===carouselIndex);
  dot.setAttribute('aria-current',index===carouselIndex?'true':'false');
});
const goToCarouselSlide=(index,behavior='smooth')=>{
  carouselIndex=(index+heroCards.length)%heroCards.length;
  heroRail.scrollTo({left:heroCards[carouselIndex].offsetLeft-heroRail.offsetLeft,behavior});
  updateCarouselDots();
};
const moveCarousel=()=>{
  if(!mobileCarousel.matches||document.hidden||!document.body.classList.contains('home-view'))return;
  goToCarouselSlide(carouselIndex+1);
};
const startCarousel=()=>{
  clearInterval(carouselTimer);
  if(mobileCarousel.matches&&!matchMedia('(prefers-reduced-motion: reduce)').matches)carouselTimer=setInterval(moveCarousel,3200);
};
const pauseCarousel=()=>{
  clearInterval(carouselTimer);
  clearTimeout(carouselResumeTimer);
  carouselResumeTimer=setTimeout(startCarousel,6500);
};
heroRail.addEventListener('pointerdown',pauseCarousel,{passive:true});
heroRail.addEventListener('touchstart',pauseCarousel,{passive:true});
heroRail.addEventListener('scroll',()=>{
  const nearest=heroCards.reduce((best,card,index)=>Math.abs(card.offsetLeft-heroRail.scrollLeft)<best.distance?{index,distance:Math.abs(card.offsetLeft-heroRail.scrollLeft)}:best,{index:0,distance:Infinity});
  carouselIndex=nearest.index;
  updateCarouselDots();
},{passive:true});
dotButtons.forEach(dot=>dot.addEventListener('click',()=>{pauseCarousel();goToCarouselSlide(Number(dot.dataset.slide))}));
document.addEventListener('visibilitychange',()=>document.hidden?clearInterval(carouselTimer):startCarousel());
mobileCarousel.addEventListener('change',startCarousel);
updateCarouselDots();
startCarousel();

// Every fresh page load begins with the branded loader, then reveals the hero.
if('scrollRestoration' in history)history.scrollRestoration='manual';
window.scrollTo(0,0);
window.addEventListener('load',()=>{
  const root=document.documentElement;
  const previousBehavior=root.style.scrollBehavior;
  root.style.scrollBehavior='auto';
  window.scrollTo(0,0);
  if(location.hash!=='#home')history.replaceState(null,'','#home');
  setTimeout(()=>{
    window.scrollTo(0,0);
    root.style.scrollBehavior=previousBehavior;
  },1250);
});

// Lightweight scroll progress and image parallax, batched to one frame.
if(!matchMedia('(prefers-reduced-motion: reduce)').matches){
  const parallaxImages=[...document.querySelectorAll('.pet-min-image img,.signature>img,.gallery-grid img')];
  parallaxImages.forEach(image=>image.classList.add('scroll-parallax'));
  let scrollFrame=0;
  const updateScrollMotion=()=>{
    scrollFrame=0;
    const max=document.documentElement.scrollHeight-innerHeight;
    document.documentElement.style.setProperty('--page-progress',max?Math.min(1,scrollY/max):0);
    parallaxImages.forEach(image=>{
      const rect=image.parentElement.getBoundingClientRect();
      if(rect.bottom<0||rect.top>innerHeight)return;
      const offset=((rect.top+rect.height/2)-innerHeight/2)/innerHeight;
      image.style.setProperty('--parallax-y',`${offset*-18}px`);
    });
  };
  addEventListener('scroll',()=>{if(!scrollFrame)scrollFrame=requestAnimationFrame(updateScrollMotion)},{passive:true});
  updateScrollMotion();
}

// Consistent smooth navigation, active-section feedback, and quick return to top.
const reducedMotion=matchMedia('(prefers-reduced-motion: reduce)').matches;
document.querySelectorAll('a[href^="#"]').forEach(link=>{
  if(link.closest('.hero-rail'))return;
  link.addEventListener('click',event=>{
    const target=document.querySelector(link.getAttribute('href'));
    if(!target)return;
    event.preventDefault();
    if(link.getAttribute('href')==='#home')openHome();else openRelatedSection(target,reducedMotion?'auto':'smooth');
    history.replaceState(null,'',link.getAttribute('href'));
  });
});
const backToTop=document.querySelector('.back-to-top');
backToTop.addEventListener('click',()=>{openHome();history.replaceState(null,'','#home')});
addEventListener('scroll',()=>backToTop.classList.toggle('visible',scrollY>700),{passive:true});
const primaryLinks=[...document.querySelectorAll('.desktop-nav a[href^="#"]')];
const primarySections=primaryLinks.map(link=>document.querySelector(link.getAttribute('href'))).filter(Boolean);
const activeNavObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{
  if(!entry.isIntersecting)return;
  primaryLinks.forEach(link=>{
    const active=link.getAttribute('href')===`#${entry.target.id}`;
    link.classList.toggle('active',active);
    if(active)link.setAttribute('aria-current','page');else link.removeAttribute('aria-current');
  });
}),{rootMargin:'-35% 0px -55%',threshold:0});
primarySections.forEach(section=>activeNavObserver.observe(section));

// Replayable section transitions respond to both downward and upward scrolling.
if(!reducedMotion){
  const motionSections=[...document.querySelectorAll('main>section:not(.hero)')];
  motionSections.forEach(section=>section.classList.add('section-motion'));
  let previousScrollY=scrollY;
  let scrollDirection='down';
  addEventListener('scroll',()=>{
    const nextY=scrollY;
    if(Math.abs(nextY-previousScrollY)>4)scrollDirection=nextY>previousScrollY?'down':'up';
    previousScrollY=nextY;
  },{passive:true});
  const sectionMotionObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{
    const section=entry.target;
    if(entry.isIntersecting){
      section.classList.toggle('from-up',scrollDirection==='up');
      requestAnimationFrame(()=>section.classList.add('in-view'));
    }else{
      const rect=section.getBoundingClientRect();
      if(rect.bottom<-120||rect.top>innerHeight+120)section.classList.remove('in-view');
    }
  }),{rootMargin:'8% 0px 8%',threshold:.04});
  motionSections.forEach(section=>sectionMotionObserver.observe(section));
}

// Cart with persistent quantities and a pre-filled WhatsApp order.
const cartToggle=document.querySelector('.cart-toggle'),dockCart=document.querySelector('.dock-cart'),dockCartCount=document.querySelector('.dock-cart i'),cartDrawer=document.querySelector('.cart-drawer'),cartBackdrop=document.querySelector('.cart-backdrop'),cartClose=document.querySelector('.cart-close'),cartItems=document.querySelector('.cart-items'),cartEmpty=document.querySelector('.cart-empty'),cartCount=document.querySelector('.cart-toggle span'),cartHeadingCount=document.querySelector('.cart-heading-count'),cartTotal=document.querySelector('.cart-total strong'),whatsappOrder=document.querySelector('.whatsapp-order');
let cart=[];
try{cart=JSON.parse(localStorage.getItem('pressd-cart')||'[]')}catch{cart=[]}
cart=cart.map(item=>{if(!item.customization?.beans)return item;const oldExtra=Number(item.customization.extraPrice||0),basePrice=item.basePrice??(item.price-oldExtra),customization=sanitizeCustomization(item.customization);return{...item,basePrice,price:basePrice+customizationExtra(customization),customization}});
const saveCart=()=>localStorage.setItem('pressd-cart',JSON.stringify(cart));
const menuItemByName=new Map(menu.flatMap(category=>category.items.map(item=>[item[0],item])));
const cartMenuItem=item=>menuItemByName.get(item.name);
const cartImageFor=item=>item.image||cartMenuItem(item)?.[3]||'';
const cartDetailsFor=item=>cartMenuItem(item)?.[1]||'';
const publicImageUrl=item=>{const image=cartImageFor(item);return image?new URL(image,location.href).href:''};
const escapeCartText=value=>String(value||'').replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
let cartToastTimer;
const showCartToast=name=>{
  let toast=document.querySelector('.cart-toast');
  if(!toast){toast=document.createElement('div');toast.className='cart-toast';toast.setAttribute('role','status');toast.setAttribute('aria-live','polite');document.body.appendChild(toast)}
  toast.innerHTML=`<span>✓</span><div><small>ADDED TO YOUR ORDER</small><strong>${name}</strong></div>`;
  toast.classList.remove('show');void toast.offsetWidth;toast.classList.add('show');
  clearTimeout(cartToastTimer);cartToastTimer=setTimeout(()=>toast.classList.remove('show'),2200);
};
const celebrateCartArrival=target=>{
  const rect=target.getBoundingClientRect(),ring=document.createElement('span');
  ring.className='cart-arrival-ring';
  Object.assign(ring.style,{left:`${rect.left+rect.width/2}px`,top:`${rect.top+rect.height/2}px`});
  document.body.appendChild(ring);setTimeout(()=>ring.remove(),850);
  [cartCount,dockCartCount].forEach(count=>{count.classList.remove('count-roll');void count.offsetWidth;count.classList.add('count-roll')});
};
const animateCartAdd=(button,name)=>{
  const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const target=cartToggle;
  button.classList.remove('is-added');
  void button.offsetWidth;
  button.classList.add('is-added');
  target.classList.remove('cart-bump');
  const card=button.closest('.menu-card')||button.closest('.line-item');
  card?.classList.remove('product-added');void card?.offsetWidth;card?.classList.add('product-added');
  setTimeout(()=>card?.classList.remove('product-added'),850);
  showCartToast(name);
  if(reduced){target.classList.add('cart-bump');celebrateCartArrival(target);return}
  const source=button.closest('.menu-card')?.querySelector('.menu-img img')||button.closest('.editorial')?.querySelector('.editorial-image img');
  const from=(source||button).getBoundingClientRect(),to=target.getBoundingClientRect();
  const flyer=document.createElement(source?'img':'span');
  flyer.className='cart-flyer';
  if(source){flyer.src=source.currentSrc||source.src;flyer.alt=''}else flyer.textContent='+';
  Object.assign(flyer.style,{left:`${from.left+from.width/2}px`,top:`${from.top+from.height/2}px`});
  document.body.appendChild(flyer);
  const dx=to.left+to.width/2-from.left-from.width/2,dy=to.top+to.height/2-from.top-from.height/2;
  const trail=document.createElement('span');trail.className='cart-flight-trail';document.body.appendChild(trail);
  const trailDots=Array.from({length:5},()=>{const dot=document.createElement('i');trail.appendChild(dot);return dot});
  flyer.animate([{transform:'translate(-50%,-50%) scale(.75) rotate(0deg)',opacity:0},{offset:.14,transform:'translate(-50%,-50%) scale(1.08) rotate(-5deg)',opacity:1},{offset:.58,transform:`translate(calc(-50% + ${dx*.55}px),calc(-50% + ${dy*.35-85}px)) scale(.72) rotate(8deg)`,opacity:.92},{transform:`translate(calc(-50% + ${dx}px),calc(-50% + ${dy}px)) scale(.12) rotate(18deg)`,opacity:.15}],{duration:880,easing:'cubic-bezier(.22,.8,.25,1)'}).onfinish=()=>{flyer.remove();trail.remove();target.classList.add('cart-bump');celebrateCartArrival(target)};
  trailDots.forEach((dot,i)=>dot.animate([{transform:`translate(${from.left+from.width/2}px,${from.top+from.height/2}px) scale(0)`,opacity:0},{offset:.25,transform:`translate(${from.left+from.width/2+dx*.22}px,${from.top+from.height/2+dy*.08-45}px) scale(1)`,opacity:.8},{transform:`translate(${to.left+to.width/2}px,${to.top+to.height/2}px) scale(0)`,opacity:0}],{duration:760,delay:i*42,easing:'cubic-bezier(.22,.8,.25,1)'}));
  const burst=document.createElement('span');burst.className='add-burst';
  const point=button.getBoundingClientRect();Object.assign(burst.style,{left:`${point.left+point.width/2}px`,top:`${point.top+point.height/2}px`});
  burst.innerHTML='<i></i><i></i><i></i><i></i><i></i><i></i>';document.body.appendChild(burst);setTimeout(()=>burst.remove(),700);
};
const openCart=()=>{cartDrawer.classList.add('open');cartBackdrop.classList.add('open');cartDrawer.setAttribute('aria-hidden','false');document.body.classList.add('cart-open');cartClose.focus()};
const closeCart=()=>{cartDrawer.classList.remove('open');cartBackdrop.classList.remove('open');cartDrawer.setAttribute('aria-hidden','true');document.body.classList.remove('cart-open');cartToggle.focus()};
const renderCart=()=>{
  const quantity=cart.reduce((sum,item)=>sum+item.qty,0),total=cart.reduce((sum,item)=>sum+item.price*item.qty,0);
  cartCount.textContent=quantity;dockCartCount.textContent=quantity;cartHeadingCount.textContent=quantity;cartTotal.textContent=`AED ${total}`;cartEmpty.hidden=cart.length>0;cartItems.hidden=!cart.length;
  cartItems.innerHTML=cart.map((item,index)=>`<article class="cart-item"><img class="cart-item-image" src="${cartImageFor(item)}" alt="${escapeCartText(item.name)}"><div class="cart-item-copy"><h3>${escapeCartText(item.name)}</h3><p>AED ${item.price}</p>${item.customization?`<p class="cart-item-customization"><b>Customized:</b> ${escapeCartText(customizationText(item.customization))}</p>`:''}${item.instructions?`<p class="cart-item-instructions"><b>Special instructions:</b> ${escapeCartText(item.instructions)}</p>`:''}</div><div class="cart-quantity"><button data-cart-action="minus" data-index="${index}" aria-label="Remove one ${escapeCartText(item.name)}">−</button><span>${item.qty}</span><button data-cart-action="plus" data-index="${index}" aria-label="Add one ${escapeCartText(item.name)}">+</button></div></article>`).join('');
  if(cart.length){const lines=cart.map(item=>`• ${item.name} x${item.qty} — AED ${item.price*item.qty}\n  Details: ${cartDetailsFor(item)}${item.customization?`\n  Customized: ${customizationText(item.customization)}`:''}${item.instructions?`\n  Special instructions: ${item.instructions}`:''}\n  Image: ${publicImageUrl(item)}`);const message=`Hello PRESS'D! I'd like to order:\n\n${lines.join('\n\n')}\n\nTotal: AED ${total}\n\nPlease confirm availability and delivery/pickup details.`;whatsappOrder.href=`https://wa.me/971504363386?text=${encodeURIComponent(message)}`;whatsappOrder.classList.remove('disabled');whatsappOrder.setAttribute('aria-disabled','false')}else{whatsappOrder.href='#';whatsappOrder.classList.add('disabled');whatsappOrder.setAttribute('aria-disabled','true')}
  document.querySelectorAll('.menu-card').forEach(card=>{const button=card.querySelector('.add-cart'),item=button&&cart.find(entry=>entry.name===button.dataset.name);card.classList.toggle('in-cart',!!item);if(button){button.setAttribute('aria-pressed',item?'true':'false');button.dataset.cartQty=item?.qty||''}});
  saveCart();
};
document.addEventListener('click',event=>{const add=event.target.closest('.add-cart');if(add){const name=add.dataset.name,basePrice=Number(add.dataset.price),image=add.dataset.image,instructions=readInstructions()[name]||'',customization=readCustomizations()[name],price=basePrice+customizationExtra(customization),existing=cart.find(item=>item.name===name);if(existing){existing.qty++;existing.basePrice=basePrice;existing.price=price;existing.image=image||existing.image;existing.instructions=instructions;existing.customization=customization}else cart.push({name,basePrice,price,image,instructions,customization,qty:1});renderCart();animateCartAdd(add,name);add.textContent='Added ✓';setTimeout(()=>{add.textContent='Add +';add.classList.remove('is-added')},1200)}const control=event.target.closest('[data-cart-action]');if(control){const index=Number(control.dataset.index);if(control.dataset.cartAction==='plus')cart[index].qty++;else cart[index].qty--;cart=cart.filter(item=>item.qty>0);renderCart()}});
cartToggle.addEventListener('click',openCart);dockCart.addEventListener('click',openCart);cartClose.addEventListener('click',closeCart);cartBackdrop.addEventListener('click',closeCart);document.addEventListener('keydown',event=>{if(event.key==='Escape'&&cartDrawer.classList.contains('open'))closeCart()});whatsappOrder.addEventListener('click',event=>{if(!cart.length)event.preventDefault()});renderCart();
