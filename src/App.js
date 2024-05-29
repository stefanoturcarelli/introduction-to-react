// App is the main component

// This is a Hook
import { useState } from "react";

function App() {
  const [userName, setUserName] = useState("");

  const handleInput = (event) => {
    setUserName(event.target.value);
  };

  let title = "Introduction to React";

  let message = (
    <h3 className="mt-20">
      Welcome to React, <span>{userName}</span>
    </h3>
  );

  const sectionTitle = <h2 className="mt-20">Using JSX</h2>;

  return (
    <main>
      <div className="container">
        {/* Comments on JSX */}
        <h2>{title}</h2>
        <p>
          React is a popular JavaScript library for building user interfaces,
          particularly for single-page applications. It allows developers to
          create large web applications that can change data, without reloading
          the page. One of its key features is the ability to break down complex
          UIs into simpler components.
        </p>
        {sectionTitle}
        {message}
        <input
          type="text"
          className="input"
          placeholder="Username"
          onChange={handleInput}
        />
      </div>
    </main>
  );
}

export default App;
