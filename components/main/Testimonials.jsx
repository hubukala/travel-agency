import styles from '../../styles/main/testimonials.module.scss';
import TestimonialsTile from './TestimonialsTile';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
    return (
        <>
            <section className={styles.sectionTestimonials}>
                <div className={styles.testimonials}>
                    <h3>TESTIMONIALS</h3>
                    <h1>What People Say About Us.</h1>
                </div>
                <div className={styles.tileContainer}>
                    <Swiper
                        modules={[Pagination]}
                        direction={"vertical"}
                        pagination={{ dynamicBullets: true, clickable: true }}
                        className={styles.mySwiper}
                    >
                        <SwiperSlide className={styles.swiperSlide}>
                            <TestimonialsTile
                                comment='“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”'
                                author="Mike Taylor"
                                location="London, UK"
                            />
                        </SwiperSlide>
                        <SwiperSlide className={styles.swiperSlide}>
                            <TestimonialsTile 
                                comment='"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec risus non elit interdum porta. Sed dui eros, convallis vehicula lacus eu, luctus elementum arcu."'
                                author="Robert Green"
                                location="Stockholm, Sweden"
                            />
                        </SwiperSlide>
                        <SwiperSlide className={styles.swiperSlide}>
                            <TestimonialsTile 
                                comment='“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dui diam, dictum vitae nulla nec, pellentesque rhoncus nulla. Integer dapibus aliquet eros, ut sagittis ante.”'
                                author="Severin Weber"
                                location="Berlin, Germany"
                            />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
        </>
    )
}

export default Testimonials;