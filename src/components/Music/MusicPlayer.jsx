import { useEffect } from "react";
import styles from "./MusicPlayer.module.css";
import { FcLike } from "react-icons/fc";
import { TbHeart } from "react-icons/tb";
import useUser from "../../CustomHook/useUser";
import { useNavigate } from "react-router-dom";

function MusicPlayer(props) {

    const { thumbnail, artist, audio_url, title, _id, isPlaying = false, setIsPlaying, isFav } = props;
    
    const { getToken } = useUser();
    const navigate = useNavigate();

    async function likeUnLikeSong(){
        try {
            const url = "https://academics.newtonschool.co/api/v1/music/favorites/like";
            const myHeaders = new Headers();
            myHeaders.append("Authorization", `Bearer ${getToken}`);
            myHeaders.append("projectID", "tark2cu0xc4y");
            myHeaders.append("Content-Type", "application/json");

            const raw = JSON.stringify({
            "songId": _id
            });

            const requestOptions = {
            method: "PATCH",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
            };

            const response = await fetch(url, requestOptions);
            const data = await response.json();
            
            // console.log(data, "likeUnLikeSong");

        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        const sound = () => {
            const sound = document.getElementById("audio_player");
            if(isPlaying){
                sound.pause();
                sound.currentTime = 0;
                setIsPlaying(true);
            }else if(!isPlaying){
                sound.play();
                sound.currentTime = 0
                setIsPlaying(false);
            }

            if(sound.paused){
                setIsPlaying(true);
            }else{
                setIsPlaying(false);
            }
        }

        sound();
    }, [isPlaying])

  return (
    <>
        <div key={_id} className={styles.musicPlayer}>
            <audio className={styles.audio_player} id="audio_player" controls src={audio_url}></audio>

            <img className={styles.image} src={thumbnail} alt="thumbnail" />

            <div className={styles.artist_title}>
                <div className={styles.artist_name}>
                    {artist}
                </div>
                <div className={styles.title}>
                    {title}
                </div>
            </div>

            {
                getToken ? (
                    <div className={styles.like_song}>
                        {
                            isFav ? (
                                <div onClick={() => {
                                    likeUnLikeSong();
                                }}>
                                    <FcLike className={styles.like_unLike} />
                                </div>
                            ) : (
                                <div onClick={() => {
                                    likeUnLikeSong();
                                }}>
                                    <TbHeart  className={[`${styles.like_unLike} ${styles.unLike}`]} />
                                </div>
                            )
                        }
                    </div>
                ) : (
                    <div onClick={() => {
                        navigate("/login");
                    }} className={styles.like_song}>
                        <TbHeart className={[`${styles.like_unLike} ${styles.unLike}`]} />
                    </div>
                )
            }
        </div>
    </>
  )
}

export default MusicPlayer