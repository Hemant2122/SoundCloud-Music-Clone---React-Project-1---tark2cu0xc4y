import CarouselSlider from "../../container/Home/Carousel"
import styles from "./Home.module.css"

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
              app store
          </div>
        </div>
    </>
  )
}

export default Home
