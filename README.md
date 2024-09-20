# VogueVault API (Backend)

#### For API part only -> visit comit : "Expand routes for new modules" on api-routes branch only.

### 🚀 Overview

The **VogueVault API** is a highly scalable and secure backend solution developed using **ExpressJS** and **Mongoose**, forming the backbone of the VogueVault eCommerce platform. This project highlights my technical skills in designing robust and efficient API architectures for real-world applications. The API manages core functionalities like user authentication, product management, and transaction security, built with advanced technologies such as **JSON Web Tokens (JWT)** and **CryptoJS** for secure data transmission and encryption.

### 🛠 Technologies

- **ExpressJS**: Fast and flexible Node.js web framework for API development.
- **Mongoose**: Elegant MongoDB object modeling for Node.js.
- **JSON Web Token (JWT)**: Secure authentication with stateless JWT.
- **CryptoJS**: Encrypts sensitive user data for secure transactions.
- **Nodemon**: Automatically restarts the server during development.
- **dotenv**: Environment variable management.
- **Stripe**: Integrated for handling secure online payments.

---

## ⚙️ Installation

Follow these steps to get the backend up and running locally:

### Prerequisites

Make sure you have the following installed:

- [Node.js v14.x](https://nodejs.org/en/download/) or higher
- [MongoDB v4.x](https://www.mongodb.com/try/download/community)
- [Postman](https://www.postman.com/downloads/) ( for API testing)

### Installation Steps

1. Clone the repository and navigate to the API branch:
   ```bash
   git clone https://github.com/your-username/project-name.git
   cd project-name
    ```
2. Install the required dependencies:
    ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

## ✨ Features
  - **Routing**: Uses Express to map URL endpoints to functions, enabling clear and maintainable API routes.
  - **Middleware**: Includes custom middleware for authentication, error handling, and data validation.
  - **Secure Authentication**: Implements JSON Web Tokens (JWT) for secure, stateless user authentication.
  - **Data Encryption**: Utilizes CryptoJS for sensitive data encryption, ensuring secure storage of information like passwords.
  - **Error Handling**: Robust error handling throughout the API, ensuring that all failed operations provide useful feedback.
  - **Scalability**: Built for performance and scalability, making it adaptable for larger, more complex use cases.
  - **Payment Integration**: Stripe integration for handling secure payments, ensuring that all transactions are safe and compliant.

## 📦 Dependencies
Here’s a list of key dependencies and their roles in the project:

  - ExpressJS: Core framework for building the API.
  - Mongoose: Object Data Modeling (ODM) to interact with MongoDB.
  - jsonwebtoken: For JWT-based authentication.
  - crypto-js: Encrypts sensitive user information (e.g., passwords).
  - dotenv: Manages environment variables.
  - nodemon: For automatically restarting the server during development.
  - stripe: Manages secure payment processing.

## 📊 Usage
  - To run the API locally:
    ```bash
    npm start
    ```
  - Use Postman or cURL to test API endpoints:
    ```bash
    # Example API request using cURL to get all products
    curl http://localhost:5000/api/products
    ```

## 🔒 Security
  - **JWT Authentication**: Secures routes and protects endpoints.
  - **CryptoJS**: Encrypts sensitive data such as passwords before storing them in the database.
  - **Stripe**: Integrated for secure and encrypted payment transactions.

## 🤝 Contributing
Pull requests are welcome. For significant changes, please open an issue first to discuss what you would like to change.

## 📝 License
Distributed under the MIT License. See LICENSE for more information.

---

### Key Adjustments:
1. The **Overview** focuses on backend API development.
2. Technologies specific to API and security tools are emphasized.
3. Dependencies include libraries and packages relevant to API development (e.g., Express, Mongoose, JWT).
4. The **Security** section highlights data encryption and secure transactions. 

This structure is tailored to highlight your backend API skills while demonstrating advanced knowledge of security and scalability.

  
    
