import ArtistCard from "../AristCard";

import "./OurArtists.css";
import "../../variables.css";

const OurArtists = () => {
  return (
    <div className="artistsWrapper">
      <div className="ourArtists">
        <p className="artistsTitle">Our Artists</p>

        <div className="controls">
          <svg
            className="controlsButton"
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
            viewBox="0 0 80 80"
            fill="none"
          >
            <rect
              width="80"
              height="80"
              rx="10"
              transform="matrix(-1 0 0 1 80 0)"
              fill="#282C2F"
            />
            <rect
              x="-0.5"
              y="0.5"
              width="79"
              height="79"
              rx="9.5"
              transform="matrix(-1 0 0 1 79 0)"
              stroke="white"
              stroke-opacity="0.1"
            />
            <path
              d="M26.125 33L19.375 39.75L26.125 46.5M20.3125 39.75L61 39.75"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <svg
            className="controlsButton"
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
            viewBox="0 0 80 80"
            fill="none"
          >
            <rect width="80" height="80" rx="10" fill="#FF512A" />
            <path
              d="M53.875 33L60.625 39.75L53.875 46.5M59.6875 39.75L19 39.75"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>

      <div className="artists">
        <ArtistCard
          image="/img/artists/artist_1.png"
          name="Max Steel"
          description="Max Steel is known for his bold and edgy tattoo designs. His art pushes the boundaries of creativity, and his fearless approach results in tattoos that are not only visually striking but also reflect the personality of his clients."
        />
        <ArtistCard
          image="/img/artists/artist_3.png"
          name="Ava inkwell"
          description="Ava Inkwell is a master of storytelling through tattoos. Her pieces often incorporate elements of mythology and fantasy, taking her clients on a journey with every inked stroke. Her work transforms bodies into canvases of enchantment."
        />
        <ArtistCard
          image="/img/artists/artist_2.png"
          name="Elena Sterling"
          description="With a delicate touch andan eye for intricate details, Elena Sterling specializes in ornate and elegant tattoo designs. Her work is a fusion of artistry and precision, making each piece a masterpiece."
        />

        <ArtistCard
          image="/img/artists/artist_3.png"
          name="Ava inkwell"
          description="Ava Inkwell is a master of storytelling through tattoos. Her pieces often incorporate elements of mythology and fantasy, taking her clients on a journey with every inked stroke. Her work transforms bodies into canvases of enchantment."
        />

        <ArtistCard
          image="/img/artists/artist_1.png"
          name="Max Steel"
          description="Max Steel is known for his bold and edgy tattoo designs. His art pushes the boundaries of creativity, and his fearless approach results in tattoos that are not only visually striking but also reflect the personality of his clients."
        />
      </div>

      <div className="scroller">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          max-width="100%"
          width="14px"
          height="auto;"
          viewBox="0 0 14 14"
          fill="none"
        >
          <circle cx="7" cy="7.23657" r="6.5" fill="#FF512A" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          max-width="100%"
          width="14px"
          height="auto;"
          viewBox="0 0 14 14"
          fill="none"
        >
          <circle cx="7" cy="7.23657" r="6.5" fill="#282C2F" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          max-width="100%"
          width="14px"
          height="auto;"
          viewBox="0 0 14 14"
          fill="none"
        >
          <circle cx="7" cy="7.23657" r="6.5" fill="#282C2F" />
        </svg>
      </div>
    </div>
  );
};

export default OurArtists;
