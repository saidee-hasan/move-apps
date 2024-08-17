import { Fade, Slide, Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import"./Sidebar.css"
const Slider = () => {
    
const fadeImages = [
    {
      url: 'https://e1.pxfuel.com/desktop-wallpaper/180/40/desktop-wallpaper-bheeshma-movie-nitin-and-rashmika.jpg',
      caption: 'First Slide'
    },
    {
      url: 'https://i.ytimg.com/vi/7Z65hthKZsU/maxresdefault.jpg',
      caption: 'Second Slide'
    },
    {
      url: 'https://i.ytimg.com/vi/GQ8hnfe5v_M/maxresdefault.jpg',
      caption: 'Third Slide'
    },
  ];
    return (
        <div>
 <div className="slide-container  container  ">
      <Zoom scale={0.7} >
        {fadeImages.map((fadeImage, index) => (
          <div className='sidebar-img'  key={index}>
            <img src={fadeImage.url}  alt=''/>
            <h2 className='sidebar-text'>{fadeImage.caption}</h2>
          </div>
        ))}
      </Zoom>
    </div>
        </div>
    );
};

export default Slider;