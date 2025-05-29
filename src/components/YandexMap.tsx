import React, { useEffect } from 'react';

interface YandexMapProps {
  center: [number, number];
  zoom: number;
  balloonContent?: string;
}

const YandexMap: React.FC<YandexMapProps> = ({ center, zoom, balloonContent }) => {
  useEffect(() => {
    const loadYandexMap = () => {
      const script = document.createElement('script');
      script.src = "https://api-maps.yandex.ru/2.1/?lang=ru_RU";
      script.onload = () => {
        // @ts-ignore
        if (typeof ymaps !== 'undefined') {
          // @ts-ignore
          ymaps.ready(() => {
            // @ts-ignore
            const map = new ymaps.Map("yandex-map", {
              center: center,
              zoom: zoom
            });
            // @ts-ignore
            const placemark = new ymaps.Placemark(center, {
              balloonContent: balloonContent
            });
            // @ts-ignore
            map.geoObjects.add(placemark);
          });
        }
      };
      document.body.appendChild(script);
      return () => {
        document.body.removeChild(script);
      };
    };
    loadYandexMap();
  }, [center, zoom, balloonContent]);

  return (
    <div id="yandex-map" style={{ width: '90%', height: '400px', marginTop: '20px' }}></div>
  );
};

export default YandexMap;
