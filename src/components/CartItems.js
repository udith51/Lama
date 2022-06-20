import Remove from '@mui/icons-material/Remove';
import Add from '@mui/icons-material/Add';

export default function CartItems() {
    return (
        <div className="cartItems">
            <h1 className="title">YOUR BAG</h1>
            <div className="top">
                <button className="topButton">Shopping Bag(2)</button>
                <div className="topTexts">
                    <span className="topText">Shopping Bag(2)</span>
                    <span className="topText">Your Wishlist(0)</span>
                </div>
                <button className="topButton">Your Wishlist(0)</button>
            </div>
            <div className="bottom">
                <div className="info">
                    <div className="product">
                        <div className="productDetails">
                            <img src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />

                            <div className="details">
                                <span className="name">
                                    <b>Product: </b>JESSIE THUNDER SHOES</span>
                                <span className="id">
                                    <b>ID: </b>983279021
                                </span>
                                <div className="color" style={{ backgroundColor: "black" }}>

                                </div>
                                <span className="size">
                                    <b>SIZE: </b>37.5
                                </span>
                            </div>
                        </div>
                        <div className="productPrice">
                            <div className="productAmtCont">
                                <Remove />
                                <span className="productAmt">2</span>
                                <Add />
                            </div>
                            <div className="priceAmt">	&#8377; 2250</div>
                        </div>
                    </div>
                    <hr />
                    <div className="product">
                        <div className="productDetails">
                            <img src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png" />

                            <div className="details">
                                <span className="name">
                                    <b>Product: </b>HAKURA T-SHIRT</span>
                                <span className="id">
                                    <b>ID: </b>93813718293
                                </span>
                                <div className="color" style={{ backgroundColor: "gray" }}>

                                </div>
                                <span className="size">
                                    <b>SIZE: </b>M
                                </span>
                            </div>
                        </div>
                        <div className="productPrice">
                            <div className="productAmtCont">
                                <Remove />
                                <span className="productAmt">1</span>
                                <Add />
                            </div>
                            <div className="priceAmt">	&#8377; 1500</div>
                        </div>
                    </div>
                </div>

                <div className="summary">
                    <h1>ORDER SUMMARY</h1>
                    <div className="item">
                        <div className="text">Subtotal</div>
                        <div className="price">&#8377; 6000</div>
                    </div>
                    <div className="item">
                        <div className="text">Estimated Shipping</div>
                        <div className="price">&#8377; 75</div>
                    </div>
                    <div className="item">
                        <div className="text">
                            Shipping Discount
                        </div>
                        <div className="price">
                            (-) &#8377; 75
                        </div>
                    </div>
                    <div className="item" id="total">
                        <div className="text" >Total</div>
                        <div className="price">&#8377; 6000</div>
                    </div>
                    <button>CHECKOUT NOW</button>
                </div>
            </div>
        </div>
    );

}