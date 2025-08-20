Summer Holiday Trip Plan (The React Version!)

Hi! This is the project page for our Summer Holiday Trip Timeline. It is not just your run-of-the-mill webpage; instead, this is an interactive timeline created with some of the recent web technology.

Consider this to be your digital scrapbook of your tour with a contemporary spin!

What's Cool About It?

It's Built Like a Pro App: We did not pack everything into one big file. The app is well organized as small, reusable pieces known as components as web apps are written in the real world.

Data Loaded on the Fly: As with a true web site, the trip details are fetched on the fly as you open the page.

Click for More Info: Don't browse by title—you can actually click on any event within the timeline to bring up a pop-up modal with all of the salacious details as well as a photograph!

Safe and Sound Code: Coding with TypeScript is essentially providing a safety net to your code. It prevents silly errors as well as makes sure your data is always in the correct format.

Smart and Efficient: The software uses React Hooks to store all of its data as well as keep track of what pop-up to display at a moment. It is a clean and up-to-date way to keep track of what is on the display.

What's Inside? Taking a Peek at What's Included
The whole app consists of a set of Legos that all intersect with each other. The main pieces are as follows:

<Header>: Brief and to the point. It is your banner at the very top with your trip title.

<FilterPanel>: It is only a placeholder at this time, but you will be able to filter your timeline from here (e.g., only show "Day 2").

<Timeline>: It is the heart of this application. It is what retrieves all of the travel incidents and presentates them nicely chronologically.

<EventMarker>: Each miniature card you see on the timeline is one of those. Click on it, and voilà! Magic!

<EventModal>: It is that dialog pop-up you are shown once you click on an event and are shown all its details.

Tech Toolbox: What We Used to Create This
Following is a short description of the instruments and concepts behind this interactive timeline:

React: This is the main library we used to build the user interface. It lets us create those reusable components (like the <Header> and <EventMarker>) and efficiently updates what you see on the screen.

TypeScript: It is essentially a more intelligent version of JavaScript. It injects what are called "types" into your code that ensure you are always manipulating your data properly (e.g., you ensure a title is always text and never a number).

Vite: The project build tool. It bundles all of our code together into a fast, optimized bundle that runs smoothly within the browser. It also provides us with an incredibly fast dev server to run while we're coding.

React Hooks (useState, useEffect): They are special React functions that allow our components to "remember" things (state). We are using useState to keep track of the event data and what modal is open, and useEffect to pull data immediately right as soon as the app loads up.

Component-Based Architecture: This is among the philosophies of breaking a large UI into small discrete portions (components). This renders code cleaner, easier to understand, and extremely easy to correct or enhance.

How to Get It Running on Your Computer
Want to try out the code yourself? Go ahead and try it!

First, make sure you've got Node.js installed.

Start your terminal and type npm install to install all required packages.

Finally, run npm run dev to start your local dev server.

Open your browser and visit the local URL it presents you with.
