import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from "@mui/icons-material";

export default function Footer() {
    return (
        <div className="footer">
            <div className="left">
                <h1 className="logo">LAMA.</h1>
                <p className="description">
                    There are many variations of passages of Lorem Ipsum available, but
                    the majority have suffered alteration in some form, by injected
                    humour, or randomised words which don’t look even slightly believable.
                </p>
                <div className="socialContainers">
                    <div className="icon" style={{ backgroundColor: "#3b5999" }}>
                        <Facebook />
                    </div>
                    <div className="icon" style={{ backgroundColor: "#e4405f" }}>
                        <Instagram />
                    </div>
                    <div className="icon" style={{ backgroundColor: "#55acee" }}>
                        <Twitter />
                    </div>
                    <div className="icon" style={{ backgroundColor: "#e60023" }}>
                        <Pinterest />
                    </div>
                </div>
            </div>
            <div className="middle">
                <h3 className="title">
                    Useful Links
                </h3>
                <ul className="list">
                    <li className="listItem">Home</li>
                    <li className="listItem">Cart</li>
                    <li className="listItem">Man Fashion</li>
                    <li className="listItem">Woman Fashion</li>
                    <li className="listItem">Accessories</li>
                    <li className="listItem">My Account</li>
                    <li className="listItem">Order Tracking</li>
                    <li className="listItem">Wishlist</li>
                    <li className="listItem">Wishlist</li>
                    <li className="listItem">Terms</li>
                </ul>
            </div>
            <div className="right">
                <h3 className="title">Contact Us</h3>
                <div className="contactItem">
                    <Room />
                    <p>24/1 Narsingh Bose Lane, Howrah 711101</p>
                </div>
                <div className="contactItem">
                    <Phone />
                    <p>+91 9674775337</p>
                </div>
                <div className="contactItem">
                    <MailOutline />
                    <p>udithshyamsukha@gmail.com</p>
                </div>
                <img src="https://i.ibb.co/Qfvn4z6/payment.png" />
            </div>
        </div>

    )
}