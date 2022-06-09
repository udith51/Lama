export default function CategoryItem(props) {
    return (
        <div className="categoryItem">
            <img src={props.item.img} alt="models" />
            <div className="infoContainer">
                <h1 className="title">{props.item.title}</h1>
                <button>SHOP NOW</button>
            </div>
        </div>
    )
}