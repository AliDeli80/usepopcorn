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

📝 To Do / Improvements
 - Add pagination or infinite scroll for search results

 - Add genre filtering or sorting options

 - Add user authentication (for saved lists)

 - Improve mobile responsiveness

## 🤝 Contributing
Feel free to fork the repo and submit a pull request if you'd like to add features or fix bugs. Contributions are welcome!

## 📄 License
This project is licensed under the [MIT License](LICENSE).

👨‍💻 Author
GitHub: AliDeli80
