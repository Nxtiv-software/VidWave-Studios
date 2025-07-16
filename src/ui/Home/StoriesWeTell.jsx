import img1 from "../../../public/s-1.png";
import img2 from "../../../public/s-2.png";
import img3 from "../../../public/s-3.png";
import img4 from "../../../public/s-4.png";

const images = [{ img: img1 }, { img: img2 }, { img: img3 }, { img: img4 }];

function StoriesWeTell() {
  return (
    <div className="flex flex-col items-center justify-center pb-40">
      <h3 className="mb-10 text-4xl text-white">Stories We Tell</h3>
      <div className="h-[50vh] flex gap-20 items-center">
        {images.map((img) => (
          <img className="h-60 w-60 object-cover rounded-lg" src={img.img} />
        ))}
      </div>
    </div>
  );
}

export default StoriesWeTell;
