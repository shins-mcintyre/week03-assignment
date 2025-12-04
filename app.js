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
let totalCookieCount = 0;
let cps = 0;

// if there is data already in local storage, update stats with this data so the user picks it up where they left off

// =======================================================================
// shop upgrades

// fetch the upgrades from the API

// create multiple dom elements to contain the upgrades (loop)

// TODO: create DOM elements for the shop upgrades
// 1. create element
// 2. assign value to its property (textContent)
// 3. append it to the DOM

// after you complete this task, you should see the upgrades in the shop container

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
  totalCookieCount += cps;
  // totalCookieCount = totalCookieCount + cps
  // update the DOM to reflect the changes in values
  // save the values in local storage
}, 1000);
