import Announcements from '../components/Announcements';
import FilterContainer from '../components/FilterContainer';
import Navbar from '../components/Navbar';
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
export default function ProductList() {
    return (
        <div className="productList">

            <Navbar />
            <Announcements />
            <h1>Dresses</h1>
            <FilterContainer />
            <Products />
            <Newsletter />
            <Footer />
        </div>
    )
}