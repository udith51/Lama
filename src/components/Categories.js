import { categories } from "../data"
import CategoryItem from "./CategoryItem"

export default function Categories() {
    return (
        <div className="categories">
            {categories.map(item => {
                return (
                    <CategoryItem item={item} key={item.id} />
                )
            })}
        </div>

    )
}