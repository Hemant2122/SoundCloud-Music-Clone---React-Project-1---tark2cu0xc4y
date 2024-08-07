import React, { useEffect, useState } from "react";
import mentroboomin_1 from "../../assets/images/metroboomin_1.jpeg";
import mentroboomin_2 from "../../assets/images/mentroboomin_2.jpeg";
import styles from "./Metroboomin.module.css";
import checkSVG from "../../assets/icons/check-mark.svg";
import starCircle from "../../assets/icons/star-circle.svg";
import { BiStation } from "react-icons/bi";
import { SlUserFollow } from "react-icons/sl";
import { FaPlayCircle, FaShareSquare } from "react-icons/fa";
import Loading from "../../components/Loading/Loading";
import { IoEarth } from "react-icons/io5";
import { RiFacebookFill } from "react-icons/ri";
import { CgPlayPause } from "react-icons/cg";
import MusicPlayer from "../../components/Music/MusicPlayer";
import { UserContext } from "../../Provider/UserProvider";
import { useContext } from "react";
import useUser from "../../CustomHook/useUser";
import LikeMusic from "../../container/Metroboomin/LikeMusic";
import ComingSoon from "../../components/ComingSoon/ComingSoon";

function Metroboomin() {
  const [musicList, setMusicList] = useState([]);
  const [selectMusic, setSelectMusic] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [getMusic, setMusic] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isDisplay, setIsDisplay] = useState(false);
  const [favSongList, setFavSongList] = useState([]);

  const isFavSong = favSongList?.filter(
    (item) => item._id === selectMusic._id
  ).length;

  // const contextData = useContext(UserContext);
  // const { searchText } = contextData;
  const { searchText, getToken } = useUser();

  const [active, setActive] = useState("items_all");

  function actionActive(e) {
    const value = e.target.id;
    setActive(value);
  }

  useEffect(() => {
    fetchMusicList();
  }, []);

  useEffect(() => {
    fetchMusicList();
  }, [searchText]);

  async function fetchMusicList() {
    setIsLoading(true);
    try {
      let url;
      // let url = "https://academics.newtonschool.co/api/v1/music/song";
      if (searchText != null && searchText != "") {
        url = `https://academics.newtonschool.co/api/v1/music/song?search={"title":"${searchText}"}`;
      } else {
        url = "https://academics.newtonschool.co/api/v1/music/song";
      }
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

        setFavSongList(songs);
      } catch (error) {
        console.error(error);
      }
    }

    getListOfFavoSong();
  }, []);

  return (
    <>
      <div className={styles.imageContainer}>
        <img
          className={styles.mentroboomin_1}
          src={mentroboomin_1}
          alt={"mentroboomin_1"}
        />
        <img
          className={styles.mentroboomin_2}
          src={mentroboomin_2}
          alt={"mentroboomin_2"}
        />

        <div className={styles.mentroboominMessage}>
          <h1 id={styles.MetroboominH1}>
            Metro Boomin
            <span>
              <img
                className={styles.checkicon}
                src={checkSVG}
                alt="Check_Image"
              />
            </span>
          </h1>
          <p className={styles.MetroboominStates}>Metro Boomin</p>
          <p className={styles.MetroboominStates}>Atlanta, United States</p>
          <div id={styles.nextPro}>
            <span>
              <img
                className={styles.starCircle}
                src={starCircle}
                alt="starCircle_Image"
              />
            </span>
            NEXT PRO
          </div>
        </div>

        {/* Music Container */}
        <div className={styles.music_container}>
          <div className={styles.music_sugetion_list}>
            <div className={styles.sugetion}>
              <div
                id="items_all"
                className={[
                  `${styles.items} ${active === "items_all" ? `${styles.active}` : ""}`,
                ]}

                onClick={actionActive}
              >
                All
              </div>
              <div
                id="items_popular"
                className={[
                  `${styles.items} ${
                    active === "items_popular" ? `${styles.active}` : ""
                  }`,
                ]}
                onClick={actionActive}
              >
                Popular tracks
              </div>
              <div
                id="items_tracks"
                className={[
                  `${styles.items} ${
                    active === "items_tracks" ? `${styles.active}` : ""
                  }`,
                ]}
                onClick={actionActive}
              >
                Tracks
              </div>
              <div
                id={"items_albums"}
                className={[
                  `${styles.items} ${
                    active === "items_albums" ? `${styles.active}` : ""
                  }`,
                ]}
                onClick={actionActive}
              >
                Albums
              </div>
              <div
                id={"items_playlists"}
                className={[
                  `${styles.items} ${
                    active === "items_playlists" ? `${styles.active}` : ""
                  }`,
                ]}
                onClick={actionActive}
              >
                Playlists
              </div>
              <div
                id={"items_reposts"}
                className={[
                  `${styles.items} ${
                    active === "items_reposts" ? `${styles.active}` : ""
                  }`,
                ]}
                onClick={actionActive}
              >
                Reposts
              </div>
            </div>

            <div className={styles.station_follow_share}>
              <div className={styles.items}>
                <div className={[`${styles.station} ${styles.btn}`]}>
                  <BiStation className={styles.icon} /> Station
                </div>

                <div className={styles.coming_soon}>
                  <ComingSoon />
                </div>
              </div>

              <div className={styles.items}>
                <div className={[`${styles.follow} ${styles.btn}`]}>
                  <SlUserFollow className={styles.icon} />
                  Follow
                </div>

                <div className={styles.coming_soon}>
                  <ComingSoon />
                </div>
              </div>

              <div className={styles.items}>
                <div className={[`${styles.share} ${styles.btn}`]}>
                  <FaShareSquare className={styles.icon} />
                  Share
                </div>

                <div className={styles.coming_soon}>
                  <ComingSoon />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* music List map and follow, Like music */}
        <div className={styles.musicList_follow_like}>
          {/* music List map */}
          <div className={styles.music_list}>
            {isLoading ? (
              <div className={styles.loading}>
                <Loading />
              </div>
            ) : (
              <div className={styles.music_container_song}>
                <div className={styles.spotlight}>Spotlight</div>
                {musicList.map((music) => {
                  const { thumbnail, artist, audio_url, mood, title, _id } =
                    music;

                  return (
                    <>
                      <div key={_id}>
                        <div
                          onClick={() => {
                            setMusic(true);
                            setSelectMusic({
                              thumbnail,
                              artist: artist[0]?.name,
                              audio_url,
                              title,
                              _id,
                            });
                          }}
                          className={styles.song_container}
                        >
                          {/* Images */}
                          <div className={styles.image}>
                            <img
                              className={styles.img_song}
                              src={thumbnail}
                              alt="thumbnail"
                            />
                          </div>

                          {/* Song Detailes */}
                          <div className={styles.song_details}>
                            {/* play artist name title description */}
                            <div
                              className={styles.play_artist_title_description}
                            >
                              <div className={styles.play_btn}>
                                {!isPlaying && selectMusic._id === _id ? (
                                  <CgPlayPause
                                    onClick={(e) => {
                                      setIsPlaying(true);
                                    }}
                                    className={styles.playPause_btn_icon}
                                  />
                                ) : (
                                  <FaPlayCircle
                                    onClick={(e) => {
                                      setIsPlaying(false);
                                    }}
                                    className={styles.play_btn_icon}
                                  />
                                )}
                              </div>
                              <div className={styles.artist_title_description}>
                                <div className={styles.artist_name}>
                                  {artist[0]?.name}
                                </div>
                                <div className={styles.title}>{title}</div>
                                <div className={styles.description}>
                                  {artist[0]?.description}
                                </div>
                              </div>
                            </div>
                            {/* Mood */}
                            <div className={styles.mood}>{mood}</div>

                            {/* Song play */}
                            <div className={styles.song_player}></div>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            )}
          </div>

          {/* follow like music */}

          <div className={styles.follow_like_music}>
            <div className={styles.follow}>
              <div className={styles.followers_following_tracks}>
                <div className={styles.followers}>
                  <p>Followers</p>
                  <h1>989K</h1>
                </div>
                <div className={styles.following}>
                  <p>Following</p>
                  <h1>39</h1>
                </div>
                <div className={styles.tracks}>
                  <p>Tracks</p>
                  <h1>236</h1>
                </div>
              </div>

              <div className={styles.social_media}>
                <a
                  href="https://www.instagram.com/"
                  className={styles.icon_social_media}
                >
                  <IoEarth className={styles.icon_social} />
                  Instagram
                </a>
                <a href="https://x.com/" className={styles.icon_social_media}>
                  <IoEarth className={styles.icon_social} /> Twitter
                </a>
                <p
                  onClick={() => {
                    alert("coming soon");
                  }}
                  className={styles.icon_social_media}
                >
                  <IoEarth className={styles.icon_social} /> Website
                </p>
                <a
                  href="https://www.youtube.com/"
                  className={styles.icon_social_media}
                >
                  <IoEarth className={styles.icon_social} /> YouTube
                </a>
                <a
                  href="https://www.facebook.com/"
                  className={styles.icon_social_media}
                >
                  <RiFacebookFill className={styles.icon_social} /> Facebook
                </a>
                <p
                  onClick={() => {
                    alert("coming soon");
                  }}
                  className={styles.icon_social_media}
                >
                  <IoEarth className={styles.icon_social} /> Sign Up
                </p>
              </div>
            </div>

            <div className={styles.like_music}>
              <LikeMusic />
            </div>
          </div>
        </div>
      </div>
      {getMusic && (
        <MusicPlayer
          _id={selectMusic._id}
          title={selectMusic.title}
          audio_url={selectMusic.audio_url}
          artist={selectMusic.artist}
          thumbnail={selectMusic.thumbnail}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          isFav={isFavSong}
        />
      )}
    </>
  );
}

export default Metroboomin;
