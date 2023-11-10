import icon from "../../../assest/search.svg"
import "./search.css"

const Search = () => {
    return (
        <div className="search-container">
            <button className="search-button"><img src={icon} alt="" /></button>
            <input class="search-input" type="text" placeholder="Поиск" />
        </div>

    )

}


export default Search;