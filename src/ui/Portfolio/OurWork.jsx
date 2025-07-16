import img1 from "../../../public/i-1.png"
import img2 from "../../../public/i-2.png"
import img3 from "../../../public/i-3.png"
import img4 from "../../../public/i-4.png"
import img5 from "../../../public/i-5.png"
import img6 from "../../../public/i-6.png"
import img7 from "../../../public/i-7.png"
import img8 from "../../../public/i-8.png"

function OurWork() {
  return (
    <div class="grid grid-cols-4 grid-rows-10 gap-4 p-20 h-[1500px]">
  <div class="col-span-2 row-span-2 bg-blue-500 rounded-xl text-white flex items-center justify-center overflow-hidden">
  <img src={img1} alt="" class="w-full h-full object-cover"/>
  </div>

  <div class="col-span-1 row-span-4 bg-red-500 rounded-xl text-white flex items-center justify-center overflow-hidden">
    <img src={img2} alt="" class="w-full h-full object-cover"/>
  </div>

  <div class="col-span-1 row-span-2 bg-green-500 rounded-xl text-white flex items-center justify-center overflow-hidden">
   <img src={img7} alt="" class="w-full h-full object-cover"/>
  </div>

  <div class="col-span-1 row-span-2 bg-yellow-500 rounded-xl text-white flex items-center justify-center overflow-hidden">
    <img src={img5} alt="" class="w-full h-full object-cover"/>
  </div>

  <div class="col-span-1 row-span-4 bg-purple-500 rounded-xl text-white flex items-center justify-center overflow-hidden">
    <img src={img3} alt="" class="w-full h-full object-cover"/>
  </div>

  <div class="col-span-1 row-span-2 bg-pink-500 rounded-xl text-white flex items-center justify-center overflow-hidden">
    <img src={img8} alt="" class="w-full h-full object-cover"/>
  </div>

  <div class="col-span-1 row-span-2 bg-gray-700 rounded-xl text-white flex items-center justify-center overflow-hidden">
    <img src={img4} alt="" class="w-full h-full object-cover"/>
  </div>

  <div class="col-span-2 row-span-2 bg-cyan-600 rounded-xl text-white flex items-center justify-center overflow-hidden">
    <img src={img6} alt="" class="w-full h-full object-cover"/>
  </div>
</div>
  );
}

export default OurWork;
