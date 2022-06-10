import { Add, Remove } from "@mui/icons-material";

export default function ProductDetails() {
    return (
        <div className="productDetails">
            <div className="imgContainer">
                <img src="https://i.ibb.co/S6qMxwr/jean.jpg" alt="" />
            </div>
            <div className="infoContainer">
                <h1 className="title">Denim Jumpsuit</h1>
                <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque magnam perferendis impedit repellat dolorem nam expedita mollitia deserunt laborum, ratione laudantium nobis velit aliquam, minus, error quisquam ducimus! Deserunt, a?</p>
                <span className="price">&#8377; 1400</span>
                <div className="filterContainer">
                    <div className="filter">
                        <span className="filterTitle">Color</span>
                        <div className="filterColor" style={{ backgroundColor: "black" }}></div>
                        <div className="filterColor" style={{ backgroundColor: "darkblue" }}></div>
                        <div className="filterColor" style={{ backgroundColor: "gray" }}></div>
                    </div>
                    <div className="filter">
                        <span className="filterTitle">Size</span>
                        <select className="filterSize">
                            <option value="XS">XS</option>
                            <option value="S">S</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                            <option value="XL">XL</option>
                        </select>
                    </div>
                </div>
                <div className="addContainer">
                    <div className="amtContainer">
                        <Remove />
                        <div className="amount">1</div>
                        <Add />
                    </div>
                    <button>ADD TO CART</button>
                </div>
            </div>
        </div>
    )
}