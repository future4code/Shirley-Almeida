import { useWindowDimensions } from "../../hooks/useWindowDimensions";

import { SwiperProps, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectCards, EffectCube } from "swiper";
import "swiper/css/effect-cards";
import "swiper/css/effect-cube";

import { SliderComponent, settingsDefault } from '../sliderComponent';

import {
  ContainerResponsive,
  ContainerFixe,
  CardResponsive,
  CardFixe
 } from "./styles";

import { ICrew } from "../../services/movies/types";

interface ProducersMovieProps {
  producers: ICrew[] | [];
  isLoading: boolean;
};

function settingsResponsive (arrayLength: number, width: number) {
  const widthMedia2 = width < 500;
 
  const settings: SwiperProps = {
    ...settingsDefault,
    centeredSlides: false,
    slidesPerView: 3,
    pagination:  {
      clickable: true,
      type: "progressbar",
    },
    modules: [Autoplay, Pagination, Navigation, EffectCards, EffectCube],
    effect: arrayLength > 3 && widthMedia2 ? "cube" : "slide",
  };

    return settings;
  };

  const settingsFixe: SwiperProps = {
    ...settingsDefault,
    centeredSlides: false,
    slidesPerView: 3,
  };

export function ProducersMovie ({ producers, isLoading }: ProducersMovieProps) {

  const { width } = useWindowDimensions();

  if ( isLoading ) {
    return <h2>Carr ......</h2>
  };

  return (
    <>
      {
          width < 1000 ?
        (
            <ContainerResponsive numberProducers={producers.length}>
                <ul>
                    <SliderComponent settings={settingsResponsive(producers.length, width)}>
                        {
                          producers?.map((producer) => {
                            return (
                              <SwiperSlide key={self.crypto.randomUUID()}>
                                  <CardResponsive numberProducers={producers.length}>
                                      <img
                                          src={
                                            producer.profile_path ?
                                            `https://image.tmdb.org/t/p/original/${producer.profile_path}`
                                            : 
                                            `https://tse2.mm.bing.net/th?id=OIP.ODF68Yqk4FnO3-Kcbie-3AHaFl&pid=Api&P=0`
                                          } 
                                          alt={producer.name} 
                                        />
                                        <h4>{producer.name}</h4>
                                        <h5>{producer.job}</h5>
                                    </CardResponsive>
                                </SwiperSlide>
                            )
                          })
                        }
                    </SliderComponent>
                </ul>
            </ContainerResponsive>
          )
        :
          (
            <ContainerFixe>
                <ul>
                    <SliderComponent settings={settingsFixe}>
                        {
                          producers?.map((producer) => {
                            return (
                              <SwiperSlide key={self.crypto.randomUUID()}>
                                  <CardFixe numberProducers={producers.length}>
                                      <img
                                        src={
                                          producer.profile_path ?
                                          `https://image.tmdb.org/t/p/original/${producer.profile_path}`
                                          : 
                                          `https://tse2.mm.bing.net/th?id=OIP.ODF68Yqk4FnO3-Kcbie-3AHaFl&pid=Api&P=0`
                                        } 
                                        alt={producer.name} 
                                      />
                                      <h4>{producer.name}</h4>
                                      <h5>{producer.job}</h5>
                                  </CardFixe>
                              </SwiperSlide>
                            )
                          })
                        }
                    </SliderComponent>
                </ul>
            </ContainerFixe>
        )
      }
    </>
  );
};