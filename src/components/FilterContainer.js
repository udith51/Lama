
export default function FilterContainer() {
    return (
        <div className="filterContainer">
            <div className="filter">
                <span className="filterText">Filter Products</span>
                <select>
                    <option value="" selected disabled>Color</option>
                    <option value="Red">Red</option>
                    <option value="Blue">Blue</option>
                    <option value="Black">Black</option>
                    <option value="Green">Green</option>
                    <option value="Yellow">Yellow</option>
                    <option value="Pink">Pink</option>
                </select>
                <select>
                    <option value="" selected disabled>Size</option>
                    <option value="XS">XS</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                </select>
            </div>

            <div className="filter">
                <span className="filterText">Sort Products</span>
                <select>
                    <option value="Newest">Newest</option>
                    <option value="Asc">Price (Asc)</option>
                    <option value="Dec">Price (Dec)</option>
                </select>
            </div>
        </div>
    )
}