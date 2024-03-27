import React, { useState, useEffect } from "react";
import axios from "axios";
import ItemStructure from "./ItemStructure";
import { useNavigate } from "react-router-dom";


function CreateItem(props) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [items, setItems] = useState([]);
  
  const navigate = useNavigate();

  function getItems() {
    axios
      .get("http://localhost:8088/item/get")
      .then((response) => {
        setItems(response.data);
      })
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    getItems();
  }, []);

  function createItem() {
    axios
      .post("http://localhost:8088/item/create", {
        name,
        price
      })
      .then((response) => {
        console.log(response);
      
        setName("");
        setPrice("");
        getItems();
      })
      .catch((err) => console.error(err));
  }

  const newItems = [];
  for (let item of items) {
    newItems.push(
      <ItemStructure
        key={item.name + "" + item.price}
        id={item.id}
        name={item.name}
        price={item.price}
        getItems={getItems}
      />
    );
  }

  return (
    <div>
      <h1 style={{ textAlign: "center", justifyContent: "center" }}>
        Items &nbsp;
      </h1>
      <form
        style={{
          margin: "auto",
          fontSize: "20px",
          backgroundColor: "#243D72",
          padding: "30px",
          borderRadius: "10%",
          maxWidth: "18rem",
          fontWeight: "bold",
          color: "white"
        }}
        onSubmit={(e) => {
          e.preventDefault();
          createItem();
        }}
      >
        <label htmlFor="itemName">Item Name: </label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          id="itemName"
          type="text"
          className="form-control"
          aria-label="Item Name"
        />
        <br />
        <label htmlFor="itemPrice">Item Price: </label>
        <input
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          id="itemPrice"
          type="text"
          className="form-control"
          aria-label="Item Price"
        />
        
        <br />
        <button
          style={{ marginLeft: "4.5rem"}}
          type="submit"
          className="btn btn-success btn-lg"
        >
          Submit
        </button>
      </form>
      <br />
      <br />
      <div className="row row-cols-1 row-cols-md-4 g-4 mt-1">{newItems}</div>
    </div>
  );
}

export default CreateItem;