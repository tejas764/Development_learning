// App.jsx
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import MsgBox from './msgBox';  // Capitalized import
import Product from './Product';
import Price from './Price';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <div style={{border: "1rem solid white"}}>
        <Product productName="TataSky" description="fcghjbndmdjnjdmn"></Product>
      <Price oldPrice={3000} newPrice={5000}></Price>
    </div>
      
    </>
  );
}

export default App;
