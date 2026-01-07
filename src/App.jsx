// App.jsx
import React, { useState } from 'react';
import HomePage from './pages/Home';

export default function App() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div>
      <HomePage />
    </div>
  );
}