import axios from "axios";
import { useEffect, useState } from "react"; 
import { useParams, useNavigate } from "react-router-dom";


function EditItem() {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const navigate = useNavigate(); 
    const params = useParams();

    useEffect(() => {
        axios.get("http://localhost:8088/item/get/" + params.id)
        .then((res) => {
            console.log(res);
            setName(res.data.name);
            setPrice(res.data.price);
        }).catch(err => console.error(err))
    }, []);

    function updateItem(){
        axios.put("http://localhost:8088/item/update/" + params.id, {
            name,
            price
        })
        .then(res => 
            navigate(-1))
            .catch(err => console.error(err))
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
          updateItem();
        }}
      >
        <label htmlFor="itemName">Item Name: </label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          id="name"
          type="text"
          className="form-control"
        />
        <br />
        <label htmlFor="itemPrice">Item Price: </label>
        <input
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          id="itemPrice"
          type="text"
          className="form-control"
        />
        
        <br />
        <button
          style={{ marginLeft: "8rem"}}
          type="submit"
          className="btn btn-success btn-lg"
        >
          Submit
        </button>
      </form>
      <br />
      <br />
        </div>
     );
}

export default EditItem;