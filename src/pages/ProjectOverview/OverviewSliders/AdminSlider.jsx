import { useRef } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import '../OverviewSliders/style.css';

// Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/effect-creative';



// import required modules
import { EffectCreative, Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function AdminSlider() {

    // swipper slider related
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

    const adminData = [
        {
            image: "https://i.ibb.co.com/VYQMyzS/1-1.jpg"
        },
        {
            image: "https://i.ibb.co.com/gWXxfnG/1-2.jpg"
        },
        {
            image: "https://i.ibb.co.com/4266ppb/1-3.jpg"
        },
        {
            image: "https://i.ibb.co.com/n6NmP8B/1-4.png"
        },
        
        {
            image: "https://i.ibb.co.com/X54nQ3C/1-5.jpg"
        }
    ];

    return (
        <>
            <Swiper
                grabCursor={true}
                effect={'creative'}
                creativeEffect={{
                    prev: {
                        shadow: true,
                        translate: [0, 0, -400],
                    },
                    next: {
                        translate: ['100%', 0, 0],
                    },
                }}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Pagination, Navigation, EffectCreative]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper"
            >
                <div>
                    {
                        adminData.map(data => (<SwiperSlide
                            key={data.image}
                        >
                            <div className='h-[620px] rounded-xl'>
                                <img src={data.image} className='w-full h-full rounded-xl' />
                            </div>
                        </SwiperSlide>))
                    }
                </div>

                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>

            </Swiper>
        </>
    );
}
