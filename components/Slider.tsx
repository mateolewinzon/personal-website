import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
// import SlickSlider from "react-slick";
import { getUrl } from "lib/sanity-client";

type Props = { images: string[] };

export default function Slider({ images }: Props) {
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  // };

  return (
    <div className="grid grid-cols-3 gap-2">
      {images.map((image, key) => (
        <Image
          key={key}
          width={800}
          height={600}
          objectFit="cover"
          src={getUrl(image).height(600).width(800).url()}
        />
      ))}
    </div>
  );
}
