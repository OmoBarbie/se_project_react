# SE_PROJECT_REACT

This project is a esponsive, component-based React web application built to practice modern front-end development patterns. The project simulates a social-style interface where users can view, add, and interact with items through dynamic UI updates.
The focus of the project was on mastering React fundamentals, clean project structure, reusable components, and managing application state effectively.

Core Functionalities
-Component-Based Architecture
Built using React with a structured, modular folder hierarchy
Implemented reusable components including App, Header, Main, Footer, ItemCard, WeatherCard, and modal components
Clean separation of concerns for scalability and maintainability

-Dynamic Rendering & State Management
Uses React hooks (useState, useEffect) to manage application state
Dynamically renders content without page reloads
Ensures smooth UI updates based on user interactions

-Modal & Form Functionality
Reusable modal components for displaying item details and forms
Controlled form inputs with validation logic
Modal visibility managed through component state

-User Interaction Flow
Handles user actions such as opening modals, submitting forms, and interacting with item cards
Ensures predictable UI behavior across components

Debugged rendering issues related to imports, component returns, and CSS visibility

-Responsive Design & Styling
Styled using BEM methodology for consistent, readable CSS
Includes normalize.css for cross-browser consistency

-Debugging & Refactoring
Resolved rendering and import issues during development
Refactored component structure to improve clarity and performance

-Technilogies USED
React (JSX, hooks, component lifecycle)
Reacr Router v6, ReactContext API
JavaScript (ES6+)
CSS (some BEM methodology, Flexbox)
Vite
Debugging and refactoring legacy code
Custom Hooks
json-server
Git version control

FEATURES
Temperature Unit Toggle
-Users can switch between Fahrenheit and Celsius using a custom toggle switch.
-The temperature unit is managed globally using React Context and updates all temperature displays instantly.

Weather Integration
-The app fetches live weather data using the OpenWeather API and displays:
current temperature
weather condition
day or night visuals
Routing
React Router provides two main views:
Home page (weather + recommended clothing)
Profile page (all clothing items)
Navigation is handled without page reloads.
Clothing Management
Users can:
add new clothing items through a modal form
delete items with confirmation
view items in a preview modal

All items are stored and retrieved from a mock backend using json-server.
Controlled Forms
Forms use a custom useForm hook to:
manage input values
validate fields
reset after submission
Mock Backend API
The project uses json-server to simulate backend behavior with:
GET /items
POST /items
DELETE /items/:id

Pictures, GIFs, or screenshots that detail project features (highly
recommended)

A demo video of your project (highly recommended)

https://github.com/OmoBarbie/se_project_react

Project 10. Checklist 3
The code is well-formatted using the Prettier.

## Screenshots

### Home Page

Home (./screenshots/Homepage.png)

### Temperature Toggle

Fahrenheit and Celsius (./screenshots/Toggleswitch.qt)

### Header

Heade r(./screenshots/Header.png)

### Header Full View

Header Full View (./screenshots/HeaderFullView.png)

### WeatherCard

Weather Card (./screenshots/WeatherCard.png)

### Profile Page

Profile (./screenshots/ProfilePageClothesCardRendering.qt)

### Cards Rendered

Cards Rendered (./screenshots/CardsRendere.qt)

### Footer

Footer (./screenshots/Footer.png)

### Mobile View

Mobile (./screenshots/Mobileview.png)
