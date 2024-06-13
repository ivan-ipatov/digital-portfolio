import React from 'react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import {Swiper, SwiperSlide} from 'swiper/react';

import {Autoplay, EffectCoverflow, Pagination} from 'swiper/modules';
import Image from 'next/image';
import block from 'bem-cn-lite';
import styles from './PostCard.module.scss';
import {Modal} from '@gravity-ui/uikit';

const b = block('carousel');
type Props = {
    attachments: string[];
};

export default function PortfolioAttachments({attachments}: Props) {
    const [open, setOpen] = React.useState(10000);
    return (
        <Swiper
            effect={'coverflow'}
            grabCursor={true}
            autoHeight={true}
            centeredSlides={true}
            coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            }}
            breakpoints={{
                768: {
                    slidesPerView: 3,
                    spaceBetween: 15,
                },
            }}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            }}
            pagination={true}
            modules={[Autoplay, EffectCoverflow, Pagination]}
            className="mySwiper"
            style={{width: '100%', padding: '10px 0 50px 0'}}
        >
            {attachments.map((attachment, index) => (
                <SwiperSlide key={index}>
                    <Image
                        onClick={() => setOpen(index)}
                        src={attachment}
                        alt={'img'}
                        width={1000}
                        height={1000}
                        className={styles[b('image')]}
                    />

                    <Modal
                        style={{padding: '0px'}}
                        open={index === open}
                        onClose={() => setOpen(100000)}
                    >
                        <Image
                            src={attachment}
                            alt={'img'}
                            width={1080}
                            height={1920}
                            className={styles[b('image-big')]}
                        />
                    </Modal>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
