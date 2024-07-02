import CarouselSlider from "../../container/Home/Carousel"
import styles from "./Home.module.css"
import appleStore from "../../assets/icons/app-store-apple-logo.svg";
import playStore from "../../assets/icons/google-play-logo.svg";

function Home()  {

  return (
    <>
        <div className={styles.homeContainer}>
          <div className={styles.music_list_container}>
            <h1 className={styles.main_heading}>Discover Tracks and Playlists</h1>
            
            {/* Treding Song */}

            <div className={styles.song_container}>
              <h1 className={styles.song_heading}>Trending Music on SoundCloud</h1>
              <div>
                <CarouselSlider />
              </div>
            </div>

            <div className={styles.song_container}>
              <h1 className={styles.song_heading}>Party</h1>
              <div>
                <CarouselSlider />
              </div>
            </div>

            <div className={styles.song_container}>
              <h1 className={styles.song_heading}>Chill</h1>
              <div>
                <CarouselSlider />
              </div>
            </div>

            <div className={styles.song_container}>
              <h1 className={styles.song_heading}>Introducing Buzzing</h1>
              <div>
                <CarouselSlider />
              </div>
            </div>

            <div className={styles.song_container}>
              <h1 className={styles.song_heading}>Workout</h1>
              <div>
                <CarouselSlider />
              </div>
            </div>

            <div className={styles.song_container}>
              <h1 className={styles.song_heading}>Feel Good</h1>
              <div>
                <CarouselSlider />
              </div>
            </div>

            <div className={styles.song_container}>
              <h1 className={styles.song_heading}>Music Therapy</h1>
              <div>
                <CarouselSlider />
              </div>
            </div>

            <div className={styles.song_container}>
              <h1 className={styles.song_heading}>At Home</h1>
              <div>
                <CarouselSlider />
              </div>
            </div>

            <div className={styles.song_container}>
              <h1 className={styles.song_heading}>Study</h1>
              <div>
                <CarouselSlider />
              </div>
            </div>
          </div>

          <div className={styles.app_store}>
              <div className={styles.app_store_heading}>
                Go mobile
              </div>
              <div className={styles.app_logo_container}>
                <div>
                  <img className={styles.apple_store} src={appleStore} alt="appleStore" />
                </div>
                <div>
                  <img className={styles.play_store} src={playStore} alt="playStore" />
                </div>
              </div>
          </div>
        </div>
    </>
  )
}

export default Home
