// THIS IS FOR ALL MY TRIED AND TESTED CODE THAT DIDN@T MAKE THE CUT BUT I DONT WANT TO DELETE IT

// ==================CREATING DOM ELEMENTS FOR SHOP UPGRADES (PRE-LOOP)==========================
// Let's create an element first for the auto-clicker object

// ====0 AUTO-CLICKER=====
// function addShopElement0(data) {
//   const autoClicker = document.createElement("auto-click");
//   autoClicker.textContent = data[0].name;
//   //   append this element to the shopContainer
//   shopContainer.appendChild(autoClicker);
// }
// // now create a control function to make sure that the 2 functions fetchShopData and addShopElement run in the correct order
// async function renderShop0() {
//   const shopData = await fetchShopData();
//   addShopElement0(shopData);
// }
// renderShop0();

// do the same thing for each shop element - if I have time, tidy this up and make this into a loop, also update names to reflect my own theme

// ====0 ENHANCED OVEN=====
// function addShopElement1(data) {
//   const enhancedOven = document.createElement("enhanced-oven");
//   enhancedOven.textContent = data[1].name;
//   //   append this element to the shopContainer
//   shopContainer.appendChild(enhancedOven);
// }
// // now create a control function to make sure that the 2 functions fetchShopData and addShopElement run in the correct order
// async function renderShop1() {
//   const shopData = await fetchShopData();
//   addShopElement1(shopData);
// }
// renderShop1();

// Make a loop to run a function addShopElements for each item in the API array
// function addAllShopElements() {
//   for (let i = 0; i < data.length; i++) {
//     function addShopElement(data) {
//       const shopElement = document.createElement("shop-element");
//       shopElement.textContent = data[i].name;
//       //   append this element to the shopContainer
//       shopContainer.appendChild(shopElement);
//     }
//   }
// }

// ==================================================================
