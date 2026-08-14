const menu = [
  {category:'Breakfast',slug:'breakfast',tagline:'Fresh mornings · made to nourish',items:[['Avacado Toast with Poached Eggs','Creamy avocado toast topped with poached eggs and served with a fresh garden salad',48,'assets/avacado-toast-poached-eggs.png',''],['Avacado Toast with Salmon','Creamy avocado toast topped with salmon and served with a fresh garden salad',58,'assets/avacado-toast-salmon.png','']]},
  {category:'Hot Beverages',slug:'hot-beverages',tagline:'Warm cups · better moments',items:[['Americano','Espresso lengthened with hot water for a smooth, bold cup',18,'assets/hot-americano.png',''],['Cappuccino / Latte','Espresso with silky steamed milk and a smooth foam finish',22,'assets/hot-cappuccino-latte.png',''],['Expresso','A rich, full-bodied single shot',14,'assets/hot-expresso.png',''],['Hot Matcha Latte','Matcha whisked with smooth steamed milk',26,'assets/hot-matcha-latte.png','V'],['Iced V60','Hand-brewed filter coffee served over ice',28,'assets/hot-iced-v60.png',''],['Mochaccino','Espresso, chocolate and silky steamed milk',25,'assets/hot-mochaccino.png',''],['Piccolo','A short espresso softened with textured milk',20,'assets/hot-piccolo.png',''],['Tea Selections','A curated selection of classic hot teas',18,'assets/hot-tea-selections.png','V'],['Tisane Tea','A soothing caffeine-free herbal infusion',20,'assets/hot-tisane-tea.png','VG'],['V60','Hand-poured filter coffee with a clean, aromatic finish',26,'assets/hot-v60.png','']]},
  {category:'Salads',slug:'salads',tagline:'Fresh · crisp · satisfying',items:[['Blood Sugar Level','Chickpeas, avocado, cucumber, tomatoes, radish and olives',48,'assets/salad-blood-sugar-level.png','VG'],['Chicken Ceasar','Grilled chicken, avocado, baby gem, parmesan and croutons',54,'assets/salad-chicken-ceasar.png',''],['Colon Cleaning','Beetroot, carrot and cabbage in a bright citrus dressing',42,'assets/salad-colon-cleaning.png','VG'],['Flat Stomach','Green peas, cucumber and red cabbage with fresh herbs',44,'assets/salad-flat-stomach.png','VG'],['Tabbouloleh Salad','Couscous, cucumber, tomato, herbs and red onion',44,'assets/salad-tabbouloleh.png','VG'],['Triple Berries','Spinach, strawberries, blueberries, blackberries and feta',49,'assets/salad-triple-berries.png','V']]},
  {category:'Sandwiches',slug:'sandwiches',tagline:'Freshly made · full of flavour',items:[['Beef Pastrami','Beef pastrami, melted cheese, lettuce and onion',52,'assets/sandwich-beef-pastrami.png',''],['Chickado','Chicken, avocado, tomato, cucumber and creamy dressing',48,'assets/sandwich-chickado.png',''],['Halloumi Avacado','Halloumi, avocado, cucumber and tomato',46,'assets/sandwich-halloumi-avacado.png','V'],['Halloumi Pesto','Halloumi, pesto, cucumber and tomato',46,'assets/sandwich-halloumi-pesto.png','V'],['Labneh','Labneh, cucumber, tomato, olives and greens',42,'assets/sandwich-labneh.png','V'],['Melted Cheese','Warm melted cheese and tomato',40,'assets/sandwich-melted-cheese.png','V'],['Smoked Salmon','Smoked salmon, cucumber and cream cheese',54,'assets/sandwich-smoked-salmon.png',''],['Smoked Turkey','Smoked turkey, melted cheese, tomato and pesto',48,'assets/sandwich-smoked-turkey.png','']]},
  {category:'Healthy Bowls',slug:'healthy-bowls',tagline:'Balanced fuel · bold flavour',items:[['Acai Bowl','Açaí topped with banana, berries, granola and peanut butter',48,'assets/bowl-acai.png','VG'],['Blue Crash Bowl','A vibrant blue smoothie bowl with mango, banana, berries and granola',48,'assets/bowl-blue-crash.png','VG'],['Bowl','A berry smoothie bowl with avocado, banana, cucumber and granola',46,'assets/bowl-original.png','VG'],['Bowl 2','A colourful wellness bowl with fruit, vegetables, nuts and granola',49,'assets/bowl-2.png','VG'],['Bowl 4','A pink smoothie bowl topped with tropical fruit, berries and pomegranate',48,'assets/bowl-4.png','VG'],['Tropical Glow Bowl','A tropical green bowl with avocado, mango, pineapple and berries',49,'assets/bowl-tropical-glow.png','VG'],['Watermelon Feta','Fresh watermelon, feta, chia seeds and mint',38,'assets/bowl-watermelon-feta.png','V']]},
  {category:'Protein Bars',slug:'protein-bars',tagline:'Clean energy · ready to go',items:[['Fignuts','Figs, nuts and seeds pressed into a naturally energising bar',22,'assets/protein-bar-fignuts.png','VG'],['Klalnana','A rich cacao and nut protein bar with a smooth finish',24,'assets/protein-bar-klalnana.png','VG'],['Nutri Tropix','A layered tropical fruit and nut energy bar',24,'assets/protein-bar-nutri-tropix.png','VG'],['Nutty Date Delight Ball','Chocolate-coated date and nut energy balls',22,'assets/protein-bar-nutty-date-delight-ball.png','VG']]},
  {category:'Cakes & Pastries',slug:'cakes-pastries',tagline:'Freshly baked · perfectly paired',items:[['Banana Cake','A soft, moist slice of classic banana cake',20,'assets/pastry-banana-cake.png',''],['Blueberry Muffin','A tender muffin baked with juicy blueberries',18,'assets/pastry-blueberry-muffin.png',''],['Brownies','A rich, fudgy chocolate brownie',20,'assets/pastry-brownies.png',''],['Chocolate Muffin','A soft chocolate muffin with a deeply cocoa-rich finish',18,'assets/pastry-chocolate-muffin.png','']]},
  {category:'Protein Shakes',slug:'protein-shakes',tagline:'Strong blends · smooth finish',items:[['Cookies & Cream','Cookies-and-cream protein blended with chilled milk',36,'assets/protein-shake-cookies-cream.png',''],['Date-me','Dates, banana and protein blended into a naturally sweet shake',36,'assets/protein-shake-date-me.png',''],['PB & J','Peanut butter, berries and protein blended until smooth',38,'assets/protein-shake-pb-j.png',''],['Rumble in the Jungle','A green protein blend with banana and leafy greens',38,'assets/protein-shake-rumble-jungle.png','']]},
  {category:'Cold Beverages',slug:'cold-beverages',tagline:'Chilled · clean · refreshing',items:[['Blue Lagoon Mojito','A bright citrus-mint cooler with sparkling blue lagoon flavour',28,'assets/cold-blue-lagoon-mojito.png','VG'],['Blueberry Mojito','Blueberry, fresh mint, citrus and sparkling soda',28,'assets/cold-blueberry-mojito.png','VG'],['Classic Mojito','Fresh lime, mint and sparkling soda',26,'assets/cold-classic-mojito.png','VG'],['Passion Fruit Mojito','Passion fruit, fresh mint, lime and sparkling soda',28,'assets/cold-passion-fruit-mojito.png','VG'],['Evian Water','Natural mineral water from the French Alps',16,'assets/cold-evian-water.png','VG'],['Vitamin Well Upgrade','Lemon-cactus vitamin drink with magnesium and zinc',22,'assets/cold-vitamin-well-upgrade.png','VG'],['C4 Energy Drink','Zero-sugar performance energy drink',24,'assets/cold-c4-energy-drink.png','VG'],['Cold Drip Coffee','Slow-dripped cold coffee with a smooth, bold finish',26,'assets/cold-drip-coffee.png',''],['Ginger Ice Tea','Chilled tea infused with bright, warming ginger',24,'assets/cold-ginger-ice-tea.png','VG'],['Ice Americano','Double espresso poured over ice',18,'assets/cold-iced-americano.png',''],['Ice Matcha Latte','Matcha shaken with chilled milk and ice',29,'assets/cold-iced-matcha-latte.png','V'],['Iced Spanish Latte','Espresso, chilled milk and gentle sweetness',27,'assets/cold-iced-spanish-latte.png',''],['Passion Fruit Ice Tea','Chilled tea brightened with tropical passion fruit',26,'assets/cold-passion-fruit-ice-tea.png','VG'],['Peach Ice Tea','Smooth chilled tea with ripe peach flavour',24,'assets/cold-peach-ice-tea.png','VG'],['Rasberry Cano','A refreshing raspberry-infused iced Americano',24,'assets/cold-raspberry-cano.png',''],['Perrier Sparkling Water','Classic Perrier natural sparkling mineral water',18,'assets/cold-perrier-bottle.png','VG'],['Perrier Sparkling Water with Lemon','Perrier sparkling water served over ice with lemon',20,'assets/cold-perrier-glass.png','VG']]},
  {category:'Frappes',slug:'frappes',tagline:'Blended cold · seriously smooth',items:[['Caramel Frappe','Espresso, caramel and chilled milk blended until smooth',32,'assets/frappe-caramel.png',''],['Matcha Frappe','Matcha and chilled milk blended to a creamy finish',34,'assets/frappe-matcha.png','V'],['Mocha Frappe','Espresso, dark chocolate and chilled milk blended until smooth',32,'assets/frappe-mocha.png',''],["Press'd Frappe",'Our signature creamy coffee frappe',34,'assets/frappe-pressd.png','']]},
  {category:'Smoothies',slug:'smoothies',tagline:'Fruit-forward · naturally energising',items:[['Energy Booster','Mixed berries, banana and a naturally energising fruit blend',30,'assets/smoothie-energy-booster.png','VG'],['Green Machine','Leafy greens, apple, banana and a fresh tropical blend',30,'assets/smoothie-green-machine.png','VG'],['Mango Mania','Mango, banana and tropical fruit blended until smooth',30,'assets/smoothie-mango-mania.png','VG'],['Pina Colada','Pineapple and coconut blended into a creamy tropical smoothie',30,'assets/smoothie-pina-colada.png','VG'],['Ruby Antioxydont Blind','A deep ruby blend of antioxidant-rich fruits and berries',32,'assets/smoothie-ruby-antioxydont-blind.png','VG'],['Srawberry Fusin','Strawberries and banana blended into a bright fruit smoothie',30,'assets/smoothie-srawberry-fusin.png','VG']]},
  {category:'Fresh Juices',slug:'fresh-juices',tagline:'Pressed fresh · nothing hidden',items:[['Carrot','Freshly pressed carrot juice served chilled',24,'assets/juice-carrot.png','VG'],['Green Apple','Crisp green apples pressed fresh to order',26,'assets/juice-green-apple.png','VG'],['Orange','Freshly pressed orange juice served chilled',24,'assets/juice-orange.png','VG'],['Watermelon','Fresh watermelon juice served over ice',24,'assets/juice-watermelon.png','VG']]},
  {category:'Mocktails',slug:'mocktails',tagline:'Bright · sparkling · alcohol-free',items:[['Fresh Mint Lemonade','Fresh lemon and mint blended into a bright, cooling drink',26,'assets/mocktail-fresh-mint-lemonade.png','VG'],['Immunity Booster','A vibrant citrus blend made for a refreshing lift',28,'assets/mocktail-immunity-booster.png','VG'],['Incredible Hulk','A bold green wellness blend served chilled',30,'assets/mocktail-incredible-hulk.png','VG'],['The Shield','A smooth, refreshing signature wellness blend',30,'assets/mocktail-the-shield.png','VG']]}
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
  'Ice Matcha Latte':{name:'Iced Matcha Latte',price:26,ingredients:['Matcha green tea','Ice cubes and milk'],size:'14 oz'},
  'Iced Spanish Latte':{price:26,ingredients:['Double shot of espresso','Sweet condensed milk','Ice cubes and cold milk'],size:'14 oz'},
  'Rasberry Cano':{name:'Raspberry-Cano',price:24,ingredients:['Double shots of espresso','Raspberry syrup','Ice cubes and water'],size:'14 oz'},
  'Peach Ice Tea':{name:'Peach Iced Tea',price:25,ingredients:['Pre-made fruit tea and lemon','Peach syrup and ice cubes'],size:'14 oz'},
  'Passion Fruit Ice Tea':{name:'Passion Fruit Iced Tea',price:25,ingredients:['Pre-made fruit tea','Passion syrup','Fresh passion fruit and lemon'],size:'14 oz'},
  'Ginger Ice Tea':{name:'Ginger Iced Tea',price:25,ingredients:['Pre-made fruit tea','Fresh ginger and lemon','Honey'],size:'14 oz'},
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
  'Ruby Antioxydont Blind':{name:'Black Detox',price:32,ingredients:['Activated charcoal','Blackberry','Blueberry','Cherry fruit','Blackcurrant','Beetroot','Apple juice'],protein:'34g',carbohydrates:'85g',calories:'463 kcal'},
  'Orange':{price:20,ingredients:['Fresh orange juice'],protein:'2g',carbohydrates:'26g',calories:'168 kcal'},
  'Green Apple':{price:20,ingredients:['Fresh green apple juice'],protein:'2g',carbohydrates:'52g',calories:'175 kcal'},
  'Carrot':{price:20,ingredients:['Fresh carrot juice'],protein:'2g',carbohydrates:'23g',calories:'103 kcal'},
  'Watermelon':{price:20,ingredients:['Fresh watermelon juice'],protein:'4g',carbohydrates:'46g',calories:'180 kcal'},
  'Fresh Mint Lemonade':{price:24,ingredients:['Mint','Lemon','Sugar'],protein:'1g',carbohydrates:'39g',calories:'156 kcal'},
  'Immunity Booster':{price:24,ingredients:['Carrot','Ginger','Green apple'],protein:'3g',carbohydrates:'65g',calories:'258 kcal'},
  'The Shield':{price:24,ingredients:['Green apple','Ginger','Pineapple','Turmeric','Black pepper'],protein:'1g',carbohydrates:'58g',calories:'230 kcal'},
  'Incredible Hulk':{price:24,ingredients:['Green apple','Ginger','Pineapple','Passion fruit','Green spirulina powder'],protein:'5g',carbohydrates:'56g',calories:'214 kcal'},
  'Smoked Turkey':{price:39,ingredients:['Mozzarella cheese','Smoked turkey','Pesto sauce','Tomatoes','Bread'],protein:'55g',carbohydrates:'60g',calories:'888 kcal'},
  'Beef Pastrami':{price:39,ingredients:['Emmental cheese','Beef pastrami','Caramelized onions','Lettuce','Bread'],protein:'56.5g',carbohydrates:'64g',calories:'759 kcal'},
  'Smoked Salmon':{price:39,ingredients:['Philadelphia mix','Smoked salmon','Cucumber','Tomato','Bread'],protein:'20g',carbohydrates:'9g',calories:'467 kcal'},
  'Chickado':{price:39,ingredients:['Mozzarella cheese','Chicken mousse','Cucumber','Tomato','Avocado','Bread'],protein:'60g',carbohydrates:'44.4g',calories:'1,261 kcal'},
  'Melted Cheese':{price:39,ingredients:['Cheddar and Emmental cheese','Tomato','Bread'],protein:'49g',carbohydrates:'30g',calories:'844 kcal'},
  'Halloumi Avacado':{name:'Halloumi Avocado',price:39,ingredients:['Grilled halloumi cheese','Avocado sauce','Tomato','Cucumber','Bread'],protein:'35g',carbohydrates:'51g',calories:'804 kcal'},
  'Halloumi Pesto':{price:39,ingredients:['Grilled halloumi cheese','Pesto sauce','Tomato','Cucumber','Bread'],protein:'43g',carbohydrates:'89g',calories:'985 kcal'},
  'Labneh':{price:39,ingredients:['Labneh cheese','Sliced green olives','Olive oil','Tomato','Cucumber','Bread'],protein:'11g',carbohydrates:'57g',calories:'595 kcal'}
};

menu.forEach(category=>category.items.forEach(item=>{
  const details=productDetails[item[0]]||{};
  item[5]={ingredients:details.ingredients||[item[1]],size:details.size,protein:details.protein,carbohydrates:details.carbohydrates,calories:details.calories};
  if(details.price)item[2]=details.price;
  if(details.name)item[0]=details.name;
}));

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
content.innerHTML=menu.map((c,index)=>c.editorial?`<article class="menu-category editorial ${index%2?'flip':''}" id="${c.slug}" data-category="${c.slug}"><div class="editorial-image"><img src="${c.items[0][3]}" alt="${c.category}" loading="lazy"></div><div class="editorial-list"><header><p>${String(index+1).padStart(2,'0')} · MENU</p><h3>${c.category}</h3><span>${c.tagline}</span></header>${c.items.map((x,i)=>`<div class="line-item"><b>${String(i+1).padStart(2,'0')}</b><div><h4>${x[0]} ${x[4]?`<i>${x[4]}</i>`:''}</h4><p>${x[1]}</p></div><div class="line-actions"><strong>AED ${x[2]}</strong><button class="view-details" data-category-index="${index}" data-item-index="${i}">View Details</button><button class="add-cart" data-name="${x[0]}" data-price="${x[2]}">Add +</button></div></div>`).join('')}</div></article>`:`<article class="menu-category" id="${c.slug}" data-category="${c.slug}"><header class="category-title"><div><p>${String(index+1).padStart(2,'0')} · MENU</p><h3>${c.category}</h3></div><span>${c.tagline}</span></header><div class="menu-grid">${c.items.map((x,i)=>`<div class="menu-card"><div class="menu-img"><img src="${x[3]}" alt="${x[0]}" loading="lazy">${x[4]?`<span>${x[4]}</span>`:''}</div><div class="menu-card-info"><div><h4>${x[0]}</h4><p>${x[1]}</p></div><div class="menu-card-actions"><strong>AED ${x[2]}</strong><button class="view-details" data-category-index="${index}" data-item-index="${i}">View Details</button><button class="add-cart" data-name="${x[0]}" data-price="${x[2]}">Add +</button></div></div></div>`).join('')}</div></article>`).join('');

const productModal=document.createElement('dialog');
productModal.className='product-details-modal';
productModal.setAttribute('aria-labelledby','product-modal-title');
productModal.innerHTML='<button class="product-modal-close" type="button" aria-label="Close product details">×</button><div class="product-modal-image"><img alt=""></div><div class="product-modal-copy"><p class="product-modal-eyebrow">MENU DETAILS</p><h2 id="product-modal-title"></h2><strong class="product-modal-price"></strong><div class="product-modal-section"><h3>Ingredients</h3><ul></ul></div><dl class="product-modal-facts"></dl></div>';
document.body.append(productModal);
const closeProductModal=()=>productModal.close();
productModal.querySelector('.product-modal-close').addEventListener('click',closeProductModal);
productModal.addEventListener('click',event=>{if(event.target===productModal)closeProductModal()});
productModal.addEventListener('close',()=>document.body.classList.remove('product-modal-open'));
document.addEventListener('click',event=>{
  const button=event.target.closest('.view-details');if(!button)return;
  const item=menu[Number(button.dataset.categoryIndex)].items[Number(button.dataset.itemIndex)],details=item[5];
  productModal.querySelector('img').src=item[3];productModal.querySelector('img').alt=item[0];
  productModal.querySelector('h2').textContent=item[0];productModal.querySelector('.product-modal-price').textContent=`AED ${item[2]}`;
  productModal.querySelector('ul').innerHTML=details.ingredients.map(value=>`<li>${value}</li>`).join('');
  const facts=[['Size',details.size],['Protein',details.protein],['Carbohydrates',details.carbohydrates],['Calories',details.calories]].filter(([,value])=>value);
  productModal.querySelector('.product-modal-facts').innerHTML=facts.map(([label,value])=>`<div><dt>${label}</dt><dd>${value}</dd></div>`).join('');
  document.body.classList.add('product-modal-open');productModal.showModal();
});

const nav=document.querySelector('.navbar'), toggle=document.querySelector('.menu-toggle'), mobile=document.querySelector('.mobile-menu');
addEventListener('scroll',()=>nav.classList.toggle('scrolled',scrollY>40),{passive:true});
toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')==='true';toggle.setAttribute('aria-expanded',!open);mobile.classList.toggle('open',!open);mobile.setAttribute('aria-hidden',open);document.body.classList.toggle('menu-open',!open)});
mobile.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>toggle.click()));

categories.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;categories.querySelectorAll('button').forEach(x=>x.classList.remove('active'));b.classList.add('active');if(b.dataset.filter==='all')document.querySelector('#hot-beverages').scrollIntoView({behavior:'smooth',block:'start'});else document.getElementById(b.dataset.filter).scrollIntoView({behavior:'smooth',block:'start'});});
const menuSections=[...document.querySelectorAll('.menu-category')];
const menuObserver=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){categories.querySelectorAll('button').forEach(b=>b.classList.toggle('active',b.dataset.filter===e.target.dataset.category));const active=categories.querySelector('.active');active?.scrollIntoView({behavior:'smooth',block:'nearest',inline:'center'});setTimeout(updateCategoryArrows,350);}}),{rootMargin:'-30% 0px -55%',threshold:0});
menuSections.forEach(x=>menuObserver.observe(x));

const revealObserver=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');revealObserver.unobserve(e.target)}}),{threshold:.13});
document.querySelectorAll('.reveal,.menu-card,.category-title,.editorial').forEach(x=>revealObserver.observe(x));
if(matchMedia('(prefers-reduced-motion: reduce)').matches)document.querySelectorAll('video[autoplay]').forEach(video=>video.pause());
if(!matchMedia('(prefers-reduced-motion: reduce)').matches)addEventListener('scroll',()=>{document.querySelector('.hero-media').style.transform=`translateY(${scrollY*.12}px) scale(1.06)`},{passive:true});

const booking=document.querySelector('.booking');document.querySelectorAll('[data-book]').forEach(b=>b.addEventListener('click',()=>booking.showModal()));
document.querySelectorAll('.dialog-close').forEach(b=>b.addEventListener('click',()=>b.closest('dialog').close()));
booking.querySelector('form').addEventListener('submit',e=>{e.preventDefault();booking.querySelector('.form-note').textContent='Thanks — we’ll call shortly to confirm your table.';e.target.querySelector('button[type=submit]').textContent='Request received ✓';});
const lightbox=document.querySelector('.lightbox');document.querySelectorAll('.gallery-grid button').forEach(b=>b.addEventListener('click',()=>{lightbox.querySelector('img').src=b.querySelector('img').src;lightbox.querySelector('img').alt=b.querySelector('img').alt;lightbox.showModal()}));
document.querySelectorAll('dialog').forEach(d=>d.addEventListener('click',e=>{if(e.target===d)d.close()}));

const detailSections=[...document.querySelectorAll('main>section:not(.hero)')];
const openRelatedSection=(target,behavior='smooth')=>{
  detailSections.forEach(section=>section.classList.toggle('active-detail',section===target));
  document.body.classList.remove('home-view');
  document.body.classList.add('detail-view');
  requestAnimationFrame(()=>{
    window.scrollTo({top:0,behavior:'auto'});
    target.scrollTop=0;
  });
};
const openHome=()=>{
  detailSections.forEach(section=>section.classList.remove('active-detail'));
  document.body.classList.remove('detail-view');
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
const saveCart=()=>localStorage.setItem('pressd-cart',JSON.stringify(cart));
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
  cartItems.innerHTML=cart.map((item,index)=>`<article class="cart-item"><div><h3>${item.name}</h3><p>AED ${item.price}</p></div><div class="cart-quantity"><button data-cart-action="minus" data-index="${index}" aria-label="Remove one ${item.name}">−</button><span>${item.qty}</span><button data-cart-action="plus" data-index="${index}" aria-label="Add one ${item.name}">+</button></div></article>`).join('');
  if(cart.length){const lines=cart.map(item=>`• ${item.name} x${item.qty} — AED ${item.price*item.qty}`);const message=`Hello PRESS'D! I'd like to order:\n\n${lines.join('\n')}\n\nTotal: AED ${total}\n\nPlease confirm availability and delivery/pickup details.`;whatsappOrder.href=`https://wa.me/971543962660?text=${encodeURIComponent(message)}`;whatsappOrder.classList.remove('disabled');whatsappOrder.setAttribute('aria-disabled','false')}else{whatsappOrder.href='#';whatsappOrder.classList.add('disabled');whatsappOrder.setAttribute('aria-disabled','true')}
  saveCart();
};
document.addEventListener('click',event=>{const add=event.target.closest('.add-cart');if(add){const name=add.dataset.name,price=Number(add.dataset.price),existing=cart.find(item=>item.name===name);if(existing)existing.qty++;else cart.push({name,price,qty:1});renderCart();animateCartAdd(add,name);add.textContent='Added ✓';setTimeout(()=>{add.textContent='Add +';add.classList.remove('is-added')},1200)}const control=event.target.closest('[data-cart-action]');if(control){const index=Number(control.dataset.index);if(control.dataset.cartAction==='plus')cart[index].qty++;else cart[index].qty--;cart=cart.filter(item=>item.qty>0);renderCart()}});
cartToggle.addEventListener('click',openCart);dockCart.addEventListener('click',openCart);cartClose.addEventListener('click',closeCart);cartBackdrop.addEventListener('click',closeCart);document.addEventListener('keydown',event=>{if(event.key==='Escape'&&cartDrawer.classList.contains('open'))closeCart()});whatsappOrder.addEventListener('click',event=>{if(!cart.length)event.preventDefault()});renderCart();
