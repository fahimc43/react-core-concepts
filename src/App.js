import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const products = [
    {name: 'Photoshop', price: '$600'},
    {name: 'Illustrator', price: '$500'},
    {name: 'PDF Reader', price: '$200'}
]

  const hero = ['Manna', 'Dipjol', 'Misha', 'Razzak']
  const cinema = ['Gunda No-1', 'Mastan No-2']
  return (
    <div className="App">
      <header className="App-header">
      <p>I am a react person</p>
      <Counter></Counter>

        <ul>
          {
            hero.map(her => <li>{her}</li> )
          }

        </ul>
        <ul>
          {
            products.map(product => <li>{product.name}</li> )
          }
        </ul>
        <div>
        {
          products.map(pd => <Product product={pd}></Product> )
        }
        </div>
        

        {/* <Product detail={products[0].name} rate={products[0].price}></Product> */}
        <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Product product={products[2]}></Product>
        
        <Person name = "Nayok Rubel" nayika = "Moushumi"></Person>
        <Person name = "Josim" nayika = "Bobita"></Person>
        <Person name = {hero[0]} nayika = {cinema[1]}  ></Person>
        <Person></Person>
      </header>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(10)
  // const handleIncrease = () => setCount(count + 1);
  // {
  //   const newCount = count + 1;
  //   setCount(newCount);
  // };
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  )
  
}

function Product(props) {
  const ProductStyle = {
    border: '1px solid gray',
    borderRadius: '5px',
    height: '200px',
    width: '200px',
    backgroundColor: 'lightblue',
    float: 'left'
  }
  const {name, price} = props.product
  return (
    <div style={ProductStyle}>
      <h3>{name}</h3>
      <h4>{price}</h4>
      <button>Buy Now</button>
    </div>
  )  
}



function Person(props) {
  const personStyle = {
    border: '2px solid red',
    margin: '10px',
    padding: '10px'

  }
  console.log(props);
  return (
  <div style = {personStyle} >
    <h2>Name: {props.name} </h2>
    <h3>Hero of {props.nayika} </h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, cumque.</p>

  </div>
  )
}

export default App;
