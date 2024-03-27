import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function BasketsDisplay(props) {
  const [baskets, setBaskets] = useState([]);
  const params = useParams(); 

  useEffect(() => {
    axios.get("http://localhost:8088/basket/get")
      .then(response => setBaskets(response.data))
      .catch(error => console.error(error));
  }, []);

  const deleteBasket = () => {
    axios
    .delete(`http://localhost:8088/basket/delete/1`)
    .then(() => {
    })
  };

  function clearItems(){
    console.log(props.id)
    axios.patch("http://localhost:8088/item/remove/" + props.id)
    .then((res) => {
      console.log(res);
    }).catch((err) => console.error(err))
  };


  const calculateTotalPrice = (items) => {
    if (!items || items.length === 0) {
      return "0.00";
    }

    let total = items.reduce((total, item) => total + item.price, 0);

    return total.toFixed(2);
  };

  return (
    <div>
      <div className="card" style={{ padding: "10px" }}>
        <div className="card border-dark mb-3" style={{ textAlign: "center" }}>
          <div className="card-body">
          {baskets.map(basket => (
            <div className="card-title" key={basket.id}>
              <h3>{basket.name}</h3>
              <div>
              <ul className="list-group list-group-flush">
              <li className="list-group-item">
              {basket.items.map(basketItem => (
                  <div key={basketItem.id}>
                    {basketItem.name} - Price: £{basketItem.price} 
                    <button onClick={clearItems} className="btn btn-danger " style={{marginLeft: "5px"}}>Clear Item</button>
                  </div>
                  
                ))}
              </li>
              
                </ul>
                <br/>
              </div>
              <p>Total Price: £{calculateTotalPrice(basket.items)}</p>
            </div>
          ))}


          </div>
        </div>
      </div>
    </div>

  );
}

export default BasketsDisplay;
