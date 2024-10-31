# SughandhAura

A full-featured MERN application dedicated to perfumes, built with a robust tech stack including React, Node.js, Express, MongoDB, and deployed on Netlify and Render.
## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Setup](#project-setup)
- [Deployment](#deployment)
- [Project Structure](#project-structure)
- [Future Enhancements](#future-enhancements)
- [Contributing](#contributing)
- [License](#license)

## Demo

Check out the live site here: [SughandhAura on Netlify](https://sughandh-aura-fe.netlify.app/)

Backend API: [SughandhAura API on Render](https://sughandhaura.onrender.com/)

## Features

- **Product Display**: Browse a collection of premium perfumes with high-quality images, descriptions, and prices.
- **User Reviews**: Users can add and view reviews for products.
- **Social Media Sharing**: Share product pages on LinkedIn, Twitter, and WhatsApp with just a click.
- **Responsive Design**: Optimized for both desktop and mobile experiences.
- **Loading State**: Displays a "Loading..." message while images load to enhance user experience.
  
## Technologies Used

- **Frontend**: 
  - React
  - Vite
  - Tailwind CSS

- **Backend**:
  - Node.js
  - Express
  - MongoDB (Mongoose ORM)
  
- **Deployment**:
  - **Frontend**: Netlify
  - **Backend**: Render
  
## Project Setup

### Prerequisites
Ensure you have the following installed:

- Node.js
- npm or yarn
- MongoDB (for local development)

### Installation

1. **Clone the repository**
    ```bash
    git clone https://github.com/your-username/sughandhAura.git
    cd sughandhAura
    ```

2. **Backend Setup**
   - Navigate to the backend directory:
     ```bash
     cd backend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Set up environment variables:
     Create a `.env` file with the following:
     ```plaintext
     MONGODB_URI=<Your MongoDB URI>
     PORT=5000
     ```
   - Start the server:
     ```bash
     npm start
     ```

3. **Frontend Setup**
   - Navigate to the frontend directory:
     ```bash
     cd frontend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Update the API base URL in the frontend code to match your backend deployment URL if necessary.

   - Start the application:
     ```bash
     npm run dev
     ```

## Deployment

### Frontend (Netlify)

1. Connect your GitHub repository to Netlify.
2. Set the build command to `npm run build`.
3. Set the publish directory to `dist`.
4. Deploy the site.

### Backend (Render)

1. Connect your GitHub repository to Render.
2. Set the root directory to `backend`.
3. Specify `npm start` as the start command.
4. Configure environment variables for MongoDB URI.
5. Deploy the server.

## Project Structure

```plaintext
sughandhAura
├── backend
│   ├── models
│   │   └── Review.js             # Review schema
│   ├── routes
│   │   └── reviewRoutes.js       # Review routes
│   ├── server.js                 # Express setup
│   └── .env                      # Environment variables
├── frontend
│   ├── public
│   ├── src
│   │   ├── assets                # Image assets
│   │   ├── components            # Reusable components
│   │   ├── pages                 # Pages for the app
│   │   ├── App.jsx               # Main app component
│   │   └── main.jsx              # Entry file
│   └── vite.config.js            # Vite configuration
└── README.md
