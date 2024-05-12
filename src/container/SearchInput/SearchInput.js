import styles from "./SearchInput.module.css";
import searchIcon from "../../assets/icons/search_icon.svg";

function SearchInput() {
  return (
    <div className={styles.searchInputContainer}>
        <input className={styles.searchInput} type="text" placeholder="Search for artists, bands, tracks, podcasts"  />

        <img className={styles.searchIcon} src={searchIcon} alt={searchIcon} />
    </div>
  )
}

export default SearchInput
