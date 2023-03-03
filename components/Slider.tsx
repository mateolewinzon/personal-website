import Image from "next/image";
import SlickSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type Props = { images: string[] };

export default function Slider({ images }: Props) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
  };

  return (
    <SlickSlider {...settings}>
      {images.map((image, key) => (
        <li key={key}>
          <Image
            width={300}
            height={300}
            objectFit="cover"
            src={`/images/projects/${image}`}
          />
        </li>
      ))}
    </SlickSlider>
  );
}
