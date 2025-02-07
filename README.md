# Food Recipe App

## What
The Food Recipe App is a web application that allows users to search for and view various food recipes. Users can also save their favorite recipes and create a personalized recipe collection.

![Demo gif](./assets/yelp-food-rec.gif)

## How To Run the App
1. **Clone the repository:**
    ```bash
    git clone https://github.com/beijiez/yelp-food-recommendation-demo.git
    ```
2. **Navigate to the project directory:**
    ```bash
    cd food-rec-app
    ```
3. **Start the backend server:**
    ```bash
    cd backend
    npm install express cors axios dotenv
    # Update index.js with the YELP access key
    node index.js
    ```
4. **Start the development server:**
    ```bash
    # in a new terminal
    cd frontend
    npm install axios
    npm start
    ```
5. **Open the app in your browser:**
    Navigate to `http://localhost:3001` in your web browser.

## Resources
- **React Documentation:** [https://reactjs.org/docs/getting-started.html](https://reactjs.org/docs/getting-started.html)
- **Node.js Documentation:** [https://nodejs.org/en/docs/](https://nodejs.org/en/docs/)
- **Recipe API:** [https://www.themealdb.com/api.php](https://www.themealdb.com/api.php)

<details>
  <summary>Click to see App building demo notes</summary>
## Demo notes: HowTo Setup from scratch

```bash
# Make project directory
mkdir client server
```

```bash
cd server
npm install express cors axios dotenv
touch index.js
# edit index.js, use copilot to "Generate a API to call GET on yelp business API to retrieve a list of restaurants given input of 
# location, cuisine, and limit. Show restaurant name, rating, price, and url. Make sure to handle CORS"
node index.js
```

```bash
# Open new terminal
cd client
npx create-react-app .
# In index.js, comment out two reportWebVitals() and 
#   import reportWebVitals from './reportWebVitals';
npm install axios
# edit App.js, use copilot to "generate a form that takes in location, cuisine, and limit
# make sure it gets from the server api /restaurants and serving port 3000
# Restaurant output should have name, rating, price ($), and url"
npm start
Y
```

```bash
# Demo the app
# if times allows, update css using copilot
# Ask for questions, feedback, and suggestions
# "push to git", pass to James
```

```bash
# Bejie explain requirements to James
# "Now we will swap roles, I will be the customer, while James will add more features to the app"
# "I want validation added to the app such that if the user tries to submit while leaving cuisine, location, or limit empty, an error shows that they're missing it."
```
```bash
cd server
# select 'validator.js'
# prompt: "Create a validator class that satisfies the requirements: cuisine, location, and limit are required. limit must be an integer. Then, show me how to integrate it into my server code."
```
```bash
cd client
# select 'App.js'
# prompt: "Modify this code to surface the error message from the server side validator at the bottom of the page and in red text."
# demonstrate changes in app
cd server 
npm i
node index.js
cd ../client
npm i
npm start
```
```bash
cd server
# select 'tests/validator.test.js'
# prompt: "Generate some unit tests for the Validator class."
npm i jest --save-dev
add npm test script to package.json
"scripts": {
    "test": "jest"
}
npm test
```
```bash
# select 'validator.js'
# break it (remove an 'if' block) & re-run tests
# prompt: "My tests are failing. How should I fix my code?"
npm test
# Now our tests are all passing again
```
```bash
# "Great! Can we talk about how we would deploy this app to the cloud? Perhaps with a Terraform template? Can you help me with that?"
# Go to Copilot Edits, select files
# prompt: "Generate terraform that uses the Azure provider to deploy this project as a webapp, and show me what commands i would run to execute the terraform, bundle my app, and deploy to those Azure resources"
```
```bash
Bejie: "Now let's add a README so others know how it works."
# create README
# try autocomplete with copilot (fails)
# try generating README with project file context (success)
```

</details>