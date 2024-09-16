# VogueVault

![Project Logo](https://via.placeholder.com/150) <!-- Replace with your project logo URL -->

## 🚀 Overview
**VogueVault** is a full-stack eCommerce platform built using the MERN stack (MongoDB, Express.js, React.js, Node.js) that enables customers to explore and purchase wearables with ease. The platform is designed to demonstrate advanced web development skills, incorporating responsive design, secure payment gateways, and personalized shopping experiences. VogueVault addresses the complexities of delivering an intuitive, high-performance online shopping solution, with features like user-friendly navigation, high-quality product displays, robust authentication, and real-time customer engagement.

## 📝 Table of Contents
- [Installation](#installation)
- [Technologies Used](#technologies-used)
- [Steps](#steps)
- [Features](#features)
- [Dependencies](#dependencies)

## ⚙️ Installation
Follow these steps to get a local copy up and running.

### Prerequisites
Ensure you have the following installed:
- **Node.js** (v14.x or later) – [Download Node.js here](https://nodejs.org/en/)
- **MongoDB** (v4.x or later) – [Download MongoDB here](https://www.mongodb.com/try/download/community)
- **NPM** (v6.x or later) – Comes bundled with Node.js.
- **Git** – [Download Git here](https://git-scm.com/downloads)
- **Postman** (for API testing) – [Download Postman here](https://www.postman.com/downloads/)

## 🛠 Technologies
- **Frontend:** HTML, CSS, JavaScript, ReactJS, Redux
- **Backend:** NodeJS, ExpressJS, MongoDB
- **Authentication:** JWT
- **Payments:** Stripe
- **API Integration:** Axios
- **Deployment & Scalability:** Firebase
- **Testing Tools:** Postman

## Steps
1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/project-name.git
    ```
2. Navigate into the project directory:
    ```bash
    cd project-name
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```
4. Run the project:
    ```bash
    npm start
    ```
    
5. Set up environment variables:<br>
    Create a .env file in the root directory and configure it with the necessary environment variables such as:
    ```bash
    MONGO_URI=<Your MongoDB connection string>
    JWT_SECRET=<Your JWT secret>
    STRIPE_SECRET=<Your Stripe secret key>
    ```
    
6. Start the MongoDB server:<br>
    Ensure your MongoDB server is running. You can start it locally or use an online service like [MongoDB Atlas](https://www.mongodb.com/products/platform/atlas-database).
    
7. Run the backend:
    ```bashh
    cd api
    npm start
    ```
8. Run the frontend:
   ```bash
   cd client_ui
   npm start
   ```
9. Testing API using Postman (optional):<br>
  ```bash
    #You can use Postman to test your APIs.
    #Import the collection provided (if available) or manually create requests for authentication, product management, and payment processes.
  ```

10. Access the project:<br>
  Once the setup is complete, open your browser and go to:
  ```bash
    http://localhost:3000
  ```

## ✨ Features

- **User-Friendly Interface**: Provides an intuitive and clean interface that allows users to easily browse and purchase wearables.
  
- **Responsive Design**: The platform is fully responsive and adapts seamlessly to all devices, ensuring a smooth shopping experience on mobile, tablet, and desktop.

- **Secure Payment Integration**: Integrated with Stripe to ensure secure and smooth online transactions for all customers.

- **Real-Time Authentication**: Uses JWT Authentication to ensure a secure login and logout process with real-time session management.

- **Personalized Recommendations**: Dynamically provides personalized product recommendations based on users' preferences and past purchases.

- **High-Quality Product Displays**: Presents products with high-quality images and detailed descriptions to enhance the customer shopping experience.

- **Customer Reviews & Ratings**: Allows customers to leave reviews and ratings to build trust and assist future buyers in making informed decisions.

- **Effective Search Functionality**: Robust search feature with filters for easier product discovery based on categories, price range, and more.

- **Clear Call-to-Action Buttons**: Strategically placed buttons throughout the platform to guide users towards desired actions like purchasing or browsing.

- **Seamless Navigation**: Simplified and intuitive navigation that enhances the overall user experience by making the platform easy to explore.


## 📦 Dependencies

The project uses several dependencies in both the backend and frontend. Below is a list of all dependencies and their purposes.

### Backend (Node.js / Express)
The backend of this project is built with Node.js and Express.js. Below are the key dependencies used:

- **express**: Web framework for Node.js to build APIs and handle routing.
- **mongoose**: ODM (Object Data Modeling) library to interact with MongoDB.
- **jsonwebtoken**: For implementing JWT-based authentication.
- **stripe**: For handling secure online payments.
- **dotenv**: To load environment variables from a `.env` file.
- **axios**: Used for making HTTP requests between services.

Install backend dependencies:
```bash
npm install express mongoose jsonwebtoken stripe dotenv axios
```

### Frontend (React.js)
The frontend of the project is built using React.js. Below are the key dependencies used:

- **react**: JavaScript library for building user interfaces.
- **redux**: A predictable state container for managing application state.
- **react-redux**: React bindings for Redux.
- **redux-thunk**: Middleware for handling asynchronous actions in Redux.
- **axios**: For making API calls to the backend.
- **jwt-decode**: For decoding JWT tokens on the frontend.
- **react-router-dom**: For handling navigation and routing in the app.
- **firebase**: Used for deployment and real-time data handling.

  Install frontend dependencies:
  ```bash
  cd client
  npm install react redux react-redux redux-thunk axios jwt-decode react-router-dom firebase
  ```

  ### Development Dependencies
  The following dependencies are used to streamline development and testing:

  - **nodemon**: Automatically restarts the Node.js server when code changes.
  - **concurrently**: To run both the backend and frontend servers simultaneously.
  
    Install development dependencies:
     ```bash
     npm install --save-dev nodemon concurrently
    ```

