import React, { useState,useEffect } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router";
import axios from "axios";
import Heart from "react-animated-heart";

function ItemStructure(props) {
  const [isClick, setClick] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
 const savedState = localStorage.getItem(`heart-${props.id}`);
    setClick(savedState === "true");
  }, [props.id]);

  const handleHeartClick = () => {
    const newState = !isClick;
    setClick(newState);
    localStorage.setItem(`heart-${props.id}`, newState);
  };

  const handleEdit = () => {
    navigate("/EditItem/" + props.id);
  };

  const handleAddToBasket = () => {
    axios
      .patch(`http://localhost:8088/item/add/${props.id}/1`)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => alert('Item has already been added to the basket '));
  };

  const deleteItem = () => {
    axios
      .delete(`http://localhost:8088/item/delete/${props.id}`)
      .then((response) => {
        console.log(response)
        props.getItems();
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
    <div style={{ marginLeft: "20px", maxWidth: "20rem", margin: "auto", alignItems: "center" }} className="col">
      <div className="card">
        <div
          style={{
            fontWeight: "bold",
            textAlign: "center",
            fontSize: "20px",
          }}
          className="card-body"
        >
          <h5 className="card-title">{props.name}</h5>
          <div className="card-text">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">£{props.price}</li>
            </ul> 
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <button onClick={handleAddToBasket} className="btn btn-success ">Add to Basket</button>
                
              </li>
              <li className="list-group-item">
                <button
                  style={{  maxWidth: "100%" }}
                  className="btn btn-primary "
                  onClick={handleEdit}
                >
                  Edit Item
                </button>
              </li>
              <li className="list-group-item">
                <button
                  style={{  maxWidth: "100%" }}
                  className="btn btn-danger "
                  onClick={deleteItem}
                >
                  Delete Item
                </button>
              </li>
              <li className="list-group-item">
                <p>Add To Wishlist</p>
                <div style={{margin: "-3rem"}}>
            <Heart isClick={isClick} onClick={handleHeartClick} />
            </div>
                
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

ItemStructure.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
};

export default ItemStructure;



