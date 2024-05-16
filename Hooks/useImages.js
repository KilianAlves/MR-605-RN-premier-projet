import { useState } from "react";

export default function useImages() {
  const [assetImages, setAssetImages] = useState([
    {
      uri: "https://www.freedigitalphotos.net/images/img/homepage/87357.jpg",
    },
    require("../assets/android.png"),
    require("../assets/biere.png"),
    require("../assets/cinema.jpeg"),
    require("../assets/maison.jpeg"),
    require("../assets/paysage.jpeg"),
  ]);
  const [imgIndex, setImgIndex] = useState(0);
  const [img, setImg] = useState(assetImages[0]);

  const pressedImages = () => {
    const nbImage = (imgIndex + 1) % assetImages.length;
    setImgIndex(nbImage);
    setImg(assetImages[nbImage]);
    console.log(nbImage);
  };

  const addImage = (newImage) => {
    setAssetImages([...assetImages, newImage]);
  };

  return { img, pressedImages, addImage };
}
