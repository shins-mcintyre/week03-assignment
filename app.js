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

// global scope
let totalFlowerCount = 0;
let fps = 0;

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

// TODO: create DOM elements for the shop upgrades
// 1. create element
// 2. assign value to its property (textContent)
// 3. append it to the DOM

// after you complete this task, you should see the upgrades in the shop container

// get the shop container element in the DOM to append them to
const shopContainer = document.getElementById("shop-container");

async function renderShop() {
  const shopData = await fetchShopData();

  for (let i = 0; i < shopData.length; i++) {
    // create element in DOM for each shop element to live in
    const shopElement = document.createElement("div");
    // add text from array into each element
    shopElement.textContent = shopData[i].name;
    // append that text into the div elements
    shopContainer.appendChild(shopElement);
  }
}
renderShop();

// TODO: create a function which increases the flower counter by 1 every time the flower is clicked
// event listener = click, event handler = flower count value increases by 1

const flowerIcon = document.getElementById("flower-icon");
const clickFeedback = document.getElementById("click-feedback");
const flowerCounter = document.getElementById("flower-counter");
const flowersPerSecond = document.getElementById("fps-counter");

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
});

// TODO: create function(s) to handle the purchase action
// the user needs a button to buy the item
// when the user clicks the button:
// - subtract cost of upgrade from totalCookieCount
// - add increase value to cps
// - save new values in local storage

// ==========================================================================

// the interval
// use this code in whatever way you think it works

setInterval(function () {
  totalFlowerCount += fps;
  // totalCookieCount = totalCookieCount + cps
  // update the DOM to reflect the changes in values
  // save the values in local storage
}, 1000);

// 1. Add buttons to each of the shop elements (using a loop)
// 2. Add logic to first button - on click, if totalFlowerCount < 100 with pop up message you don't have enough flowers to buy this. if totalFlowerCount >= 100, reduce totalFlowerCount by 100 and implement a function where flowers counter increases by 1 every second (look at stopwatch code for this)
// 3. Make the data available in local host so it remains when refreshed
// 4. Do this same thing for all shop items
// 5. Make everything pretty - according to the design principles
