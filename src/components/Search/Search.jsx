import searchIcon from "@/assets/img/search-icon.svg";
import "./search.scss";
export const Search = () => {
  return (
    <div className="seach-area">
        <div className="input-group">
            <div className="input-group-prepend">
            <span className="input-group-text">
                <img src={searchIcon} alt="Search" />
            </span>
            </div>
            <input type="text" className="form-control border-left-0" placeholder="Search by product/treatment" />
        </div>
    </div>
  )
}
