import Announcements from "../components/Announcements";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import ProductDetails from "../components/ProductDetails";

export default function ProductInfo() {
    return (
        <div className="productInfo">

            <Navbar />
            <Announcements />
            <ProductDetails />
            <Newsletter />
            <Footer />
        </div>
    )
}