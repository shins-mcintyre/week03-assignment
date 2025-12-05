# week03-assignment

clicker game

Reflection
Please also provide an assignment reflection in your project README.md file.

Required
🎯 What requirements did you achieve?

##Fetch upgrade data from the provided API and at least one upgrade from the API update the cookie count.

- I fetched the data from the API with no issues - I have used the name so far but plan to use the other elements to create a loop in the upgrade setInterval thing (the cost and increase)

##Ensure that functions are used effectively to keep code organised and reusable.

- At first I was afraid to try the loop in case it was too difficult but I soon realised it would be MUCH easier than doing everything separately and it actually wasn't too hard once I tried. For some reason I though lots of separate functions would be easier, but because of scope I found it better to make one big function for the shop functionality

##Implement event listeners to handle user interactions.

- Yes I did this ok - some issues but that was down to syntax usually!

##Use local storage to save and restore the cookie count and relevant game information.

- I found this requirement quite difficult - I tried going back over the demo/workshop, but it wasn't clear to me where to put these lines of code to save to local storage. I tried a few different things, but I did ask chat gpt where in my code to put it for it to work properly. My code itself was pretty much there, but it explained the issue was that I was only running the save to local storage once at page load and not every time a count updated, which is why I then added the function which saves both counts to storage into all functions where the count changes.

##Use setInterval to increment the cookie count and manage the game state each second.
Managing the game state includes saving progress and updating the DOM.

- I have managed to implement this (finally!) after lots of trial and error - as I initially was putting the interval function into the loop.

🎯 Were there any requirements or goals that you were unable to achieve?
🎯 If so, what was it that you found difficult about these tasks?
Optional
🏹 Feel free to add any other reflections you would like to share about your submission, for example:

Requesting feedback about a specific part of your submission.
What useful external sources helped you complete the assignment (e.g Youtube tutorials)?
What errors or bugs did you encounter while completing your assignment? How did you solve them?
What went really well and what could have gone better?

Stretch User Stories
🐿️ As a developer, I want to use a single function to handle all upgrades, so that the code is more organized and easier to maintain.

- I figured out how to do this from the get-go as it was actaully easier than trying to write everything separately - I thought I would struggle but actually my guesses of how to do this worked - like a miracle!

🐿️ As a user, I want the game to include animations, sound effects, or other visual effects, so that my experience is more engaging and enjoyable.
🐿️ As a developer, I want the README to provide a clear project description, deployment instructions, and other relevant information, so that it’s easy to understand and use the project.
🐿️ As a user, I want the game to handle errors well, so that I have a smooth experience even when something goes wrong.
🐿️ As a user, I want a menu to adjust game options like sound effects and display preferences, so that I can customize the game to my liking.
