import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material';

export default function ProductContainer(props) {
    return (
        <div className="productContainer" >
            <div className="circle"></div>
            <img src={props.data.img} alt="" />
            <div className="info">
                <div className="icon">
                    <ShoppingCartOutlined />
                </div>
                <div className="icon">
                    <SearchOutlined />
                </div>
                <div className="icon">
                    <FavoriteBorderOutlined />
                </div>
            </div>
        </div>
    )
}