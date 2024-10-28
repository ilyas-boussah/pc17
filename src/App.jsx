import React from "react";
import Product from "./Product";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const products = [
    {
      id: 1,
      title: 'PC Portable Gamer HP VICTUS',
      price: '10699 DH',
      thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEbWYhaWmQ4KuiFR5A2VM14MnkHybfvGVikA&s',
    },
    {
      id: 2,
      title: 'PC Portable Gamer HP VICTUS',
      price: '8149 DH',
      thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQTQxKYqrBK5thDn-UeRibNNAsiG2LTA4J5w&s',
    },
    {
      id: 3,
      title: 'Pc Portable Chromebook Acer',
      price: '7929 DH',
      thumbnail: 'https://img.freepik.com/vecteurs-premium/illustration-ordinateur-portable-ouvert-moderne-fond-blanc_906149-71186.jpg',
    },
    {
      id: 4,
      title: 'PC Portable - HUAWEI',
      price: '5999 DH',
      thumbnail:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-o8D_mzL0jvnbwPXzpggVDi1Z_05nYt0ieg&s"
    },
  
  
  ];

  return (
    <div className="container-fluid my-5 ">
      <div className="row g-4">
        {products.map((product) => (
          <Product
            key={product.id}
            title={product.title}
            price={product.price}
            thumbnail={product.thumbnail}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
