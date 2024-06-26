import styles from "./SearchInput.module.css";
import searchIcon from "../../assets/icons/search_icon.svg";
import { UserContext } from "../../Provider/UserProvider";
import { useContext } from "react";

function SearchInput() {
  const contextData = useContext(UserContext);
  const { setSearchText } = contextData;
  
  return (
    <div className={styles.searchInputContainer}>
        <input onChange={(e)=>setSearchText(e.target.value)} className={styles.searchInput} type="text" placeholder="Search for artists, bands, tracks, podcasts"  />

        <img className={styles.searchIcon} src={searchIcon} alt={searchIcon} />
    </div>
  )
}

export default SearchInput
