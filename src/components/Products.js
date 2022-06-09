import { popularProducts } from "../data";
import ProductContainer from "./ProductContainer";

export default function Products() {
    var productContainer = document.querySelector('.productContainer');

    return (
        <div className="products">
            {
                popularProducts.map(data => {
                    return (
                        <ProductContainer data={data} key={data.id} />
                    )
                })
            }
        </div>
    );

}