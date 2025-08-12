# 🍿 usePopcorn

**usePopcorn** is a fun and interactive React application that lets you search for movies, view details, and keep track of your watched list. It’s a simple movie tracker that leverages the OMDb API and modern React features like custom hooks.

## 🎬 Features

- 🔍 Search movies using the OMDb API
- 📃 View detailed info like year, rating, and runtime
- ⭐ Rate and add movies to your personal watched list
- 📊 See average rating, runtime, and other stats
- 🧠 Built with React hooks, including a custom `useLocalStorage` hook

## 🛠️ Tech Stack

- **React** (with Hooks and functional components)
- **JavaScript (ES6+)**
- **CSS** (custom styling)
- **OMDb API** for movie data

## 📦 Getting Started

Clone the repository and start the development server:

```bash
git clone https://github.com/AliDeli80/usepopcorn.git
cd usepopcorn
npm install
npm start
```

## 📁 Project Structure

```plaintext
usepopcorn/
├── public/
├── src/
│   ├── components/
│   │   ├── Box.js
│   │   ├── Loader.js
│   │   ├── Movie.js
│   │   ├── MovieDetails.js
│   │   ├── MovieList.js
│   │   ├── Navbar.js
│   │   ├── NumResults.js
│   │   ├── Search.js
│   │   ├── StarRating.js
│   │   └── WatchedSummary.js
│   │   └── WatchedMovieList.js
│   ├── hooks/
│   │   └── useLocalStorageState.js
│   ├── App.js
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── index.html
├── package.json
└── README.md
```

## 🧠 Key Concepts Used
- useEffect, useState, useRef

- Custom hook for syncing state with localStorage

- Conditional rendering and controlled components

- API fetching and state management

## 📸 Screenshots
**1. Start Screen** – The main interface where users can search for movies using the search bar and view a list of matching results fetched from the API.

<img width="1920" height="866" alt="Screenshot (9)" src="https://github.com/user-attachments/assets/d2af7012-813a-480f-8546-fc89956c04fa" />

**2. Movie Details Screen** – Shows detailed information about the selected movie, including title, release date, genre, IMDb rating, and a short plot summary.

<img width="1920" height="865" alt="Screenshot (10)" src="https://github.com/user-attachments/assets/a6b06e51-10a5-4868-b75a-765c5867d46a" />

**3. Watchlist Screen** – Displays all movies added to the user’s watchlist, with options to remove movies or mark them as watched.

<img width="1920" height="864" alt="Screenshot (12)" src="https://github.com/user-attachments/assets/be70be60-4795-4b8f-90f6-10c742143040" />

## 📝 To Do / Improvements
 - Add pagination or infinite scroll for search results

 - Add genre filtering or sorting options

 - Add user authentication (for saved lists)

 - Improve mobile responsiveness

## 🤝 Contributing
Feel free to fork the repo and submit a pull request if you'd like to add features or fix bugs. Contributions are welcome!

## 📄 License
This project is licensed under the [MIT License](LICENSE).

## 👨‍💻 Author
Ali Delgoshaei
