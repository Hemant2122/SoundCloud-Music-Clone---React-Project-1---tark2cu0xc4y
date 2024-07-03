import { useEffect, useState } from "react";
import styles from "./carousel.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function CarouselSlider() {
  const [musicList, setMusicList] = useState([]);

  var settings = {
    // dots: true,
    infinite: false,
    speed: 250,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 1120,
        settings: {
          slidesToShow: 3.5,
          slidesToScroll: 3.5,
          infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  useEffect(() => {
    async function fetchMusicList() {
      // setIsLoading(true);
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
        //   setIsLoading(false);

        //   console.log(data, "data");
      } catch (error) {
        console.log(error);
      }
    }

    fetchMusicList();
  }, []);

  return (
    <>
      <div className={styles.carousel_container}>
        <Slider {...settings}>
          {musicList.map((music) => {
            const { featured, audio_url, thumbnail, _id } = music;

            return (
              <div key={_id} className={styles.card_container}>
                <div className={styles.image}>
                  <img src={thumbnail} alt="thumbnail" />
                </div>
                <div className={styles.details}>
                  <div className={styles.featured}>
                    {featured == null ? "SoundCloud" : featured}
                  </div>
                  <div className={styles.discovery_playlists}>
                    Discovery Playlists
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
}

export default CarouselSlider;
