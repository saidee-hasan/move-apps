import { Fade, Slide, Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import"./Slider.css";
const Slider = () => {
    
const fadeImages = [
    {
      url: 'https://i.ytimg.com/vi/sRJICIeGFPs/maxresdefault.jpg',
      caption: 'First Slide'
    },
    {
      url: 'https://i.ytimg.com/vi/0vuTLrSIbGU/maxresdefault.jpg',
      caption: 'Second Slide'
    },
    {
      url: 'https://s1.dmcdn.net/v/W3i-41cXNkVh9hUFJ/x720',
      caption: 'Third Slide'
    },
  ];
    return (
      <div className=' container '>
      <div className=" h-3/5     ">
           <Zoom scale={0.7} >
             {fadeImages.map((fadeImage, index) => (
               <div className='sidebar-img'  key={index}>
                 <img className=''  src={fadeImage.url}  alt=''/>
                 <h2 className='sidebar-text'>{fadeImage.caption}</h2>
               </div>
             ))}
           </Zoom>
         </div>


    <div className="grid grid-cols-3 gap-5 mt-10">
      <div className="bg-green-300 h-24 rounded-xl p-4 text-3xl text-center">
        <h1>Tamil bangla</h1>

      </div>
   
      <div className="bg-red-300 h-24 rounded-xl p-4 text-3xl text-center">
        <h1>Course</h1>

      </div>
   
      <div className="bg-orange-300 h-24 rounded-xl p-4 text-3xl text-center">
        <h1>Seeen</h1>

      </div>
   


</div>

         
             </div>
    );
};

export default Slider;