import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ItemStructure from "./ItemStructure";
import axios from "axios";
function ItemDisplay({ listItems }) {

  // function getItems() {
  //   axios.get("http://localhost:8088/item/get")
  //     .then((response) => { setItems(response.data) })
  //     .catch(console.log);
  // }

  // useEffect(() => {
  //   getItems();
  // }, []);

  // const [items, setItems] = useState([]);

  return (
    <div>
      {listItems.map((item) => (
        <ItemStructure
          key={item.id}
          id={item.id}
          name={item.name}
          price={item.price}
          
        />
      ))}
    </div>
  );
}

ItemDisplay.propTypes = {
  listItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default ItemDisplay;
