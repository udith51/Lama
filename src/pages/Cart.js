import Announcements from "../components/Announcements";
import CartItems from "../components/CartItems";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Cart() {
    return (
        <div className="cart">

            <Navbar />
            <Announcements />
            <CartItems />
            <Footer />
        </div>
    )
}