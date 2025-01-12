# Game-Chill: A Game Review Application

**Game-Chill** is a user-friendly platform that allows users to explore, share, and manage game reviews. Whether you're a casual gamer or a hardcore fan, this app offers a chill experience for discovering games, reading reviews, and creating a personalized watchlist.

## 🔗 [Live Website Link Of **Game-Chill**](https://saiyam-assignment10.netlify.app/)

## Key features :

### **🔑 Authentication**:

- **Secure Login & Registration**: Email/Password-based authentication using Firebase.
- **Google Login**: Quick access via Google account.

### **Game Reviews**:

- Users can create new reviews for games they have played, providing ratings, descriptions, and genre information.
- Reviews can be updated and deleted by the user who created them.
- Review data is stored in MongoDB.

### **Game WatchList**:

- Logged-in users can add games to their personal watchList.
- Users can view, manage, and delete games from their watchList.

### **Review Management**:

- All Reviews Page: A collection of all game reviews submitted by users.
- Detailed Review Page: Each review has its dedicated page with full details, including an option to add the game to the watchList.
- Sort & Filter: Users can sort reviews by rating or year and filter by genre to narrow down game selections.

### **Responsive Design**:

- The application is fully responsive, supporting mobile, tablet, and desktop views for a seamless experience across all devices.

### **Dark/Light Theme Toggle**:

- Users can toggle between dark and light themes based on their preference.

### **Loading Spinner**:

- Displays a loading spinner when fetching data from the server, improving the user experience during data loading.

## 📄 Pages Overview

### 🏠 Home Page (`/`)

- Banner/Slider: A carousel with meaningful game-related content (3+ slides).
- Highest Rated Games: A list of top-rated games fetched from the database.
- Latest Game News and Updates: A feed or list that highlights recent news about the gaming industry, updates for games, or major gaming events.
- Top-10 Newest Games: Display the ten latest game releases with their release dates.displayed using a smooth marquee with hover effects.
- Upcoming Games: A section featuring highly anticipated games that will be released soon, with their release dates and key highlights.

### Login Page (`/login`)

- Email/password form with validation and error handling.
- Google Login option for quick access.

### Register Page (`/register`)

- Form with fields for Name, Email, Profile Picture URL, and Password.
- Real-time password validation (uppercase, lowercase, minimum length).

### Add Review: (`/add-review`) _(Private Route)_

- A form for submitting game reviews includes title, description, rating, and genre and more...

### My Reviews Page (`/my-reviews`) _(Private Route)_

- Displays all reviews submitted by the logged-in user.
- Allows users to update or delete their reviews:
- **Update:** Redirects to a form pre-filled with existing review data.
- **Delete:** Prompts the user for confirmation before deleting the review.

### Game WatchList Page (`my-watchlists`) _(Private Route)_

- Displays a user's personal game watchlist with the option to remove games.
- Only games added by the logged-in user are shown.

## ⚙️ JSON Data Structure

```
[
  {
   "_id": "67506bff642a5b74fd8d38ce",
   "title": "Fortnite",
   "gameCover": "https://cdn2.unrealengine.com/social-image-chapter4-s3-3840x2160-d35912cc25ad.jpg",
   "reviewDescription": "'Fortnite' revolutionized the battle royale genre with its fast-paced action, creative building mechanics, and vibrant graphics. Since its 2017 release, the game has become a cultural phenomenon, offering regular updates, new seasons, and exciting collaborations with brands like Marvel and Star Wars. The Battle Pass rewards progression, while Creative Mode gives players freedom to design their own worlds. 'Fortnite' continues to be a social hub, connecting players globally with cross-platform play. Its esports scene and live events have expanded its influence, making it a staple in gaming culture. A free-to-play model and constant evolution keep 'Fortnite' fresh, engaging, and relevant.",
   "rating": "4.6",
   "publishingYear": "2017",
   "genre": "Shooter",
   "userEmail": "your-name@gmail.com",
   "userName": "your-name"
  }
]
```

## Tech Stack

- **Frontend**:
- React.js
- Tailwind CSS for styling
- Firebase Authentication for user login
- React Router for routing

- **Backend**:
- Express.js for API handling
- MongoDB for data storage

- **Hosting**:
- **Client-side**: Netlify
- **Server-side**: Vercel

## 📦 NPM Packages

- **React Awesome reveal**
- **React-simple-typewriter**
- **React Fast Marquee**
- **React icons**
- **SweetAlert2**
- **Animate.css**

## ⚙️ Installation & Setup

**1. Clone the client repository**:

```
git clone https://github.com/sheikh-saiyam/Garir-Khoj-Client.git
cd Garir-Khoj-Client
```

**2. Clone the server repository**:

```
git clone https://github.com/sheikh-saiyam/Garir-Khoj-Server.git
cd Garir-Khoj-Client
```

**3. Install dependencies on client & server:**

```
npm install
```

**4. Set up environment variables in .env.local on client**

```
apiKey: import.meta.env.VITE_apiKey,
authDomain: import.meta.env.VITE_authDomain,
projectId: import.meta.env.VITE_projectId,
storageBucket: import.meta.env.VITE_storageBucket,
messagingSenderId: import.meta.env.VITE_messagingSenderId,
appId: import.meta.env.VITE_appId,
```

**5. Set up environment variables in .env on server**

```
DB_USER=your_db_user_name
DB_PASS=your_db_password
```

**6. Start the development:**

- client

```
npm run build
```

- server

```
npm start
```
