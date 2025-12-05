console.log("Hello world");

// game logic
// THERE IS NOT ONE WAY TO BUILD THIS GAME!
// when the user clicks on the cookie, the total count of cookies goes up by 1
// when the user clicks on the "buy" button in an upgrade in the shop, the total count of cookies goes down by the cost of the upgrade, and the cps value goes up

// we need functions to contain the game logic - each function will have a task
// to create the logic for the shop upgrade:
// option 1: you could have a function to handle each upgrade
// option 2: you could have a reusable function that works for all upgrades

// we will get the shop upgrades data from the API

// tip on local storage:
// make sure the local storage values are updated after the user buys an upgrade AND when the user clicks on the cookie

// ======================================================================
// data storage

// TODO: create DOM elements
// 1. create element
// 2. assign value to its property (textContent)
// 3. append it to the DOM
// global scope
let totalFlowerCount = 0;
let fps = 0;
const flowerIcon = document.getElementById("flower-icon");
const clickFeedback = document.getElementById("click-feedback");
const flowerCounter = document.getElementById("flower-counter");
const fpsCounter = document.getElementById("fps-counter");
const shopContainer = document.getElementById("shop-container");
const gardenContainer = document.getElementById("garden");

// if there is data already in local storage, update stats with this data so the user picks it up where they left off

// =======================================================================
// shop upgrades

// fetch the upgrades from the API
async function fetchShopData() {
  const response = await fetch(
    "https://cookie-upgrade-api.vercel.app/api/upgrades"
  );
  console.log("Shop Data:", response);
  //   translate / pass data into json
  const data = await response.json();
  console.log(data);
  // return so we can use it out of scope
  return data;
}

// TODO: create function(s) to handle the purchase action
// the user needs a button to buy the item
// when the user clicks the button:
// - subtract cost of upgrade from totalCookieCount
// - add increase value to cps
// - save new values in local storage

// === THE BIG SHOP FUNCTION ======
async function renderShop() {
  const shopData = await fetchShopData();

  for (let i = 0; i < shopData.length; i++) {
    // create element in DOM for each shop element to live in
    const shopElement = document.createElement("div");
    // add text from array into each element
    shopElement.textContent = shopData[i].name;
    // append that text into the div elements
    shopContainer.appendChild(shopElement);
    const purchaseButton = document.createElement("button");
    purchaseButton.textContent = `Purchase upgrade ${shopData[i].id}`;
    shopContainer.appendChild(purchaseButton);

    // add logic for event listener etc. here
    // 2. Add logic to first button - on click, if totalFlowerCount < 100 with pop up message you don't have enough flowers to buy this. if totalFlowerCount >= 100, reduce totalFlowerCount by 100 and implement a function where flowers counter increases by 1 every second (look at stopwatch code for this)
    const purchaseFeedback = document.getElementById("purchase-feedback");

    purchaseButton.addEventListener("click", function () {
      if (totalFlowerCount < shopData[i].cost) {
        purchaseFeedback.textContent =
          "Sorry, you don't have enough flowers to purchase this item";
        setTimeout(function () {
          purchaseFeedback.textContent = " ";
        }, 1000);
        return;
      } else if (totalFlowerCount >= shopData[i].cost) {
        // feedback message
        purchaseFeedback.textContent = "Congrats! You purchased an upgrade!";
        setTimeout(function () {
          purchaseFeedback.textContent = " ";
        }, 1000);

        // totalFlowerCount reduces and fps increases
        totalFlowerCount -= shopData[i].cost;
        // totalFlowerCount = totalFlowerCount - shopData[i].cost;
        fps += shopData[i].increase;
        // fps = shopData[i].increase;

        // update DOM
        flowerCounter.textContent = `Total flower count: ${totalFlowerCount}`;
        fpsCounter.textContent = `Flowers per second (fps): ${fps}`;
        // fpsCounter.textContent = `Flowers per second (fps): ${shopData[i].increase}`;
      }
      shopContainer.appendChild(purchaseFeedback);
    });
  }
}

// TODO: create a function which increases the flower counter by 1 every time the flower is clicked
// event listener = click, event handler = flower count value increases by 1

// ===== per second flower count to kick off =====
setInterval(function () {
  totalFlowerCount += fps;
  flowerCounter.textContent = `Total flower count: ${totalFlowerCount}`;
}, 1000);
renderShop();

// set up event for the click feedback to appear
flowerIcon.addEventListener("click", function () {
  clickFeedback.textContent = "+1 flower!";
  setTimeout(function () {
    clickFeedback.textContent = " ";
  }, 300);
  // and counter to increase
  totalFlowerCount = totalFlowerCount + 1;
  //   check it's working in console.log - it is!
  console.log(totalFlowerCount);
  //   use this to update the counter on screen
  flowerCounter.textContent = `Total flower count: ${totalFlowerCount}`;
  gardenContainer.appendChild(clickFeedback);
});

// ==========================================================================

// the interval
// use this code in whatever way you think it works

// 1. Add buttons to each of the shop elements (using a loop)

// 2. Add logic to first button - on click, if totalFlowerCount < 100 with pop up message you don't have enough flowers to buy this. if totalFlowerCount >= 100, reduce totalFlowerCount by 100 and implement a function where flowers counter increases by 1 every second (look at stopwatch code for this)

// 3. Make the data available in local host so it remains when refreshed
// 4. Do this same thing for all shop items
// 5. Make everything pretty - according to the design principles
