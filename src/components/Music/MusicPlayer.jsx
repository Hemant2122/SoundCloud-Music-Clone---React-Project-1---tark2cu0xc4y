import { useEffect } from "react";
import styles from "./MusicPlayer.module.css";

function MusicPlayer(props) {

    const { thumbnail, artist, audio_url, title, _id, isPlaying = false, setIsPlaying } = props;

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
        </div>
    </>
  )
}

export default MusicPlayer