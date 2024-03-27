import CreateItem from "./CreateItem";
import CreateBasket from "../Basket/CreateBasket";
import BasketDisplay from "../Basket/BasketDisplay";

function CreateItemPage() {
    return (
        <div style={{display: "flex"}}>
            <div style={{flex: 1}}>
            <CreateItem/>
            </div>
                <div style={{ flex: 2, display: "flex", flexDirection: "column", alignItems: "center", maxWidth: "14rem", marginRight: "3rem" }}>
                <CreateBasket/>
                <BasketDisplay/>
                </div>
            </div>
    )
}

export default CreateItemPage;