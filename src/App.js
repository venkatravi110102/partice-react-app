import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { Aboutus } from './components/Aboutus';
import { Blog } from './components/Blog';
import { ProductPreview } from './components/ProductPreview';
import { ProductList } from './components/ProductList';
import { Dashboard } from './components/Dashboard';



// function Button({color,text}){
//   return (
//     <button style={{ backgroundColor: color }}>{text}</button>
//   );
// }

// function App() {
//   const [counter, setCounter] = useState(0);
//   const [buttonClickCount, setButtonClickCount] = useState(0);

//  useEffect(()=>{
//   console.log(buttonClickCount)
//   setCounter(counter + 1)
//   console.log("Clicked....")
//  },[buttonClickCount])



//  const sampleArray = [1, 2, 3, 4, 5,]
//  const multipliedArray = sampleArray.map((item) => item * 2);
//  const evenNumbers = sampleArray.filter((item) => item % 2 === 0);
//  const firstEvenNumber = sampleArray.find((item) => item % 2 === 0);
 
// map()
// filter()
// find()

const add = (a, b) => a + b;
add(2, 3);
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Aboutus" element={<Aboutus />} />
       
        <Route path="/product" element={<Dashboard />}>
         <Route path="ProductPreview" element={<ProductPreview />} />
        <Route path="ProductList" element={<ProductList />} />
        </Route>
      </Routes>
      <Routes to ="/about-us">About Us</Routes>
      {/* <a href="/about-us">About-us</a> */}

      
    </div>
  );
}


export default App;

