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

// data storage

// TODO: create DOM elements
// 1. create element
// 2. assign value to its property (textContent)
// 3. append it to the DOM
// global scope
let totalFlowerCount = 0;
let fps = 0;
let paused = false;
const flowerIcon = document.getElementById("flower-icon");
const clickFeedback = document.getElementById("click-feedback");
const flowerCounter = document.getElementById("flower-counter");
const fpsCounter = document.getElementById("fps-counter");
const shopContainer = document.getElementById("shop-container");
const shopUpgrades = document.getElementById("shop-upgrades");
const gardenContainer = document.getElementById("garden");
const pauseBtn = document.getElementById("pause-button");

// create an array for the shop icons:
const shopIcons = [
  "./media/can.gif",
  "./media/trowel.png",
  "./media/rose.png",
  "./media/hose.png",
  "./media/grass.png",
  "./media/bee.gif",
  "./media/water.png",
  "./media/gardener.png",
  "./media/pollen.png",
  "./media/potion.png",
];

// == LOCAL STORAGE ====
// TODO: set up local data storage
const savedFlowerCount = JSON.parse(localStorage.getItem("flowerCount"));
const savedFPS = JSON.parse(localStorage.getItem("fps"));

// what do these lines do?
if (savedFlowerCount !== null) totalFlowerCount = savedFlowerCount;
if (savedFPS !== null) fps = savedFPS;

// Update DOM
flowerCounter.textContent = `You have ${totalFlowerCount} flowers`;
fpsCounter.textContent = `(${fps} fps)`;

// function to save new counts for both counters
function saveFlowers() {
  localStorage.setItem("flowerCount", JSON.stringify(totalFlowerCount));
  localStorage.setItem("fps", JSON.stringify(fps));
}

// ======================================================================

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

// TODO: create a function which increases the flower counter by 1 every time the flower is clicked
// event listener = click, event handler = flower count value increases by 1

// ===== FLOWER COUNTER =====
setInterval(function () {
  if (!paused) {
    totalFlowerCount += fps;
    flowerCounter.textContent = `You have ${totalFlowerCount} flowers`;
    saveFlowers();
  }
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
  flowerCounter.textContent = `You have ${totalFlowerCount} flowers`;
  gardenContainer.appendChild(clickFeedback);
  saveFlowers();
});

// set up logic for the pause button - chat GPT helped with how to change the text from pause to play
pauseBtn.addEventListener("click", function () {
  // when the game is running, paused = false (as set out above), so when the game is not running, paused = true (or !paused)
  paused = !paused;
  pauseBtn.textContent = paused ? "Play" : "Pause";
});

// TODO: create function(s) to handle the purchase action
// the user needs a button to buy the item
// when the user clicks the button:
// - subtract cost of upgrade from totalCookieCount
// - add increase value to cps
// - save new values in local storage

// UPDATE NAMES IN ARRAY

// === THE BIG SHOP FUNCTION ======
async function renderShop() {
  const shopData = await fetchShopData();
  //   update names of shop items in the array
  shopData[0].name = "Watering Can";
  shopData[1].name = "Shovel";
  shopData[2].name = "Flower Feed";
  shopData[3].name = "Hosepipe";
  shopData[4].name = "Super Duper Fertiliser";
  shopData[5].name = "Release the Bees!";
  shopData[6].name = "Sprinklers";
  shopData[7].name = "Hire a Gardener";
  shopData[8].name = "Pollen Avalanche!!";
  shopData[9].name = "FLOWER POTION";

  for (let i = 0; i < shopData.length; i++) {
    // create element in DOM for each shop element to live in
    const shopElement = document.createElement("div");
    shopElement.classList.add("shop-element");
    // add icons
    const icon = document.createElement("img");
    icon.src = shopIcons[i];
    icon.classList.add("shop-icon");
    shopElement.appendChild(icon);
    // add text from array into each element
    const title = document.createElement("p");
    title.classList.add("shop-titles");
    title.textContent = `${shopData[i].name} - Price: ${shopData[i].cost}🌼`;
    shopElement.appendChild(title);
    // shopElement.textContent = `${shopData[i].name} - Price: ${shopData[i].cost}🌼`;
    // append that text into the div elements
    // shopUpgrades.appendChild(shopElement);
    const purchaseButton = document.createElement("button");
    purchaseButton.classList.add("purchase-button");
    purchaseButton.textContent = `Purchase upgrade`;
    shopElement.appendChild(purchaseButton);

    shopUpgrades.appendChild(shopElement);

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
        flowerCounter.textContent = `You have ${totalFlowerCount} flowers`;
        fpsCounter.textContent = `(${fps} fps)`;
        // fpsCounter.textContent = `Flowers per second (fps): ${shopData[i].increase}`;
      }
      shopContainer.appendChild(purchaseFeedback);
      saveFlowers();
    });
  }
}

// ==========================================================================

// the interval
// use this code in whatever way you think it works

// 1. Add buttons to each of the shop elements (using a loop)

// 2. Add logic to first button - on click, if totalFlowerCount < 100 with pop up message you don't have enough flowers to buy this. if totalFlowerCount >= 100, reduce totalFlowerCount by 100 and implement a function where flowers counter increases by 1 every second (look at stopwatch code for this)

// 3. Make the data available in local host so it remains when refreshed
// 4. Do this same thing for all shop items
// 5. Make everything pretty - according to the design principles
