import GDG from "../../public/GDG.png";
import IIT from "../../public/IIT.png";
import Jetwing from "../../public/Jetwing.png";
import Kernells from "../../public/Kernells.png";

const images = [
  {
    id: 1,
    img: GDG,
    height: 10

  },
  {
    id: 2,
    img: IIT,
    height: 10
  },
  {
    id: 3,
    img: Jetwing,
    height: 15
  },
  {
    id: 4,
    img: Kernells,
    height: 20
  },
];

function Testimonials() {
  return (
    <div className="h-[50vh] flex flex-col justify-center items-center text-white font-extralight">
      <p>Some of our trusted clients</p>
      <div className="flex gap-20 items-center mt-20">
      {images.map((image) => <img class={`h-${image.height}`} src={image.img}/>)}
      </div>
    </div>
  );
}

export default Testimonials;
