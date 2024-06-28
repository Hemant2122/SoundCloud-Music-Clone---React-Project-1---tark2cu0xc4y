import { useEffect, useState } from "react";
import useUser from "../../CustomHook/useUser";
import styles from "./library.module.css";
import MusicPlayer from "../../components/Music/MusicPlayer";

function Library() {
  const [favSongList, setFavSongList] = useState([]);
  const [selectMusic, setSelectMusic] = useState({});
  const [getMusic, setMusic] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const { getToken } = useUser();

  useEffect(() => {
    async function getListOfFavoSong() {
      try {
        const url =
          "https://academics.newtonschool.co/api/v1/music/favorites/like";
        const myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${getToken}`);
        myHeaders.append("projectID", "tark2cu0xc4y");

        const requestOptions = {
          method: "GET",
          headers: myHeaders,
          redirect: "follow",
        };
        const response = await fetch(url, requestOptions);
        const data = await response.json();

        const songs = data?.data?.songs;

        console.log(songs, "song Like");

        setFavSongList(songs);
      } catch (error) {
        console.error(error);
      }
    }

    getListOfFavoSong();
  }, []);
  return (
    <>
      <div className={styles.library_container}>
        <h1 className={styles.container_name}>Your Library</h1>

        <div className={styles.song_section}>
          {favSongList.map((music) => {
            const { _id, title, thumbnail, audio_url, mood } = music;

            return (
              <div
                onClick={() => {
                  setMusic(true);
                  setSelectMusic({
                    _id,
                    title,
                    thumbnail,
                    audio_url,
                  });
                }}
                key={_id}
                className={styles.song_card_container}
              >
                <div className={styles.image}>
                  <img src={thumbnail} alt="thumbnail" />
                </div>
                <div className={styles.song_details}>
                  <div className={styles.title}>{title}</div>
                  <div className={styles.mood}>{mood}</div>
                </div>
              </div>
            );
          })}
        </div>
        {getMusic && (
          <MusicPlayer
            _id={selectMusic._id}
            title={selectMusic.title}
            thumbnail={selectMusic.thumbnail}
            audio_url={selectMusic.audio_url}
            setIsPlaying={setIsPlaying}
            isFav={favSongList}
          />
        )}
      </div>
    </>
  );
}

export default Library;
