
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
export default function CarruselBebidas({ bebidas, onSelect, seleccionada }) {
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={20}
      slidesPerView={3}
      loop={true}
      centeredSlides={true}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      style={{ width: '100%', maxWidth: '100vw', padding: '1rem 0' }}
      breakpoints={{
        0: { slidesPerView: 1.2 },
        600: { slidesPerView: 2 },
        900: { slidesPerView: 3 }
      }}
    >
      {bebidas.map((bebida, idx) => (
        <SwiperSlide key={bebida.nombre} style={{ width: 220, maxWidth: 220 }}>
          <div
            className={'bebida-frame' + (seleccionada === idx ? ' selected' : '')}
            onClick={() => onSelect(idx)}
            style={{ cursor: 'pointer' }}
          >
            <span style={{ marginBottom: '0.5rem', color: '#0c0b0b', fontWeight: 600, fontSize: '1.1rem', textAlign: 'center' }}>{bebida.nombre}</span>
            <img src={bebida.img} alt={bebida.nombre + ' Bebida'} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
