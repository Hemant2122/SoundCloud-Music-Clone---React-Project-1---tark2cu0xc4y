import { IoMdHeart } from "react-icons/io";
import styles from "./LikeMusic.module.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Loading from "../../components/Loading/Loading";

function LikeMusic(props) {

    // const { musicList } = props;
    const [musicList, setMusicList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchMusicList() {
            setIsLoading(true);
            try {
              const url = "https://academics.newtonschool.co/api/v1/music/song";
              const myHeaders = new Headers();
              myHeaders.append("projectID", "tark2cu0xc4y");
        
              const requestOptions = {
                method: "GET",
                headers: myHeaders,
                redirect: "follow",
              };
        
              const response = await fetch(url, requestOptions);
              const result = await response.json();
              const data = result.data;
        
              setMusicList(data);
              // setTimeout(() => {
              setIsLoading(false);
              // }, 1000);
        
              // console.log(data, "data");
            } catch (error) {
              console.log(error);
            }
        }

        fetchMusicList();
    }, [])

  return (
    <>
        <div className={styles.like_music_container}>
            <div className={styles.likes_viewAll}>
                <div className={styles.likes}>
                    <IoMdHeart className={styles.like_heart} />
                    Likes..
                </div>
                <div onClick={() => {
                    navigate("/library");
                }} className={styles.view_all}>
                    View all
                </div>
            </div>
            {
                isLoading ? (
                    <div className={styles.loading}>
                        <Loading />
                    </div>
                ) : (
                    <div className={styles.song_container} id="song_container">
        
                {
                    musicList.map((music) => {
                        const { _id, title, thumbnail, artist, audio_url } = music;

                        return (
                            <>
                                <div key={_id} className={styles.like_card_container}>
                                    <div className={styles.imags}>
                                        <img src={thumbnail} alt="thumbnail" />
                                    </div>
                                    <div className={styles.music_details}>
                                        <div className={styles.title}>
                                            {title}
                                        </div>
                                        <div className={styles.artist_name}>
                                            {artist[0]?.name}
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </div>
                )
            }
        </div>
    </>
  )
}

export default LikeMusic