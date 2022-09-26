import { useWindowDimensions } from "../../hooks/useWindowDimensions";

import { SwiperProps, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectCards } from "swiper";
import "swiper/css/effect-cards";

import { SliderComponent } from "../sliderComponent";

import { ICast } from "../../services/movies/types";

import { Container, Card } from "./styles";

interface IMovieActorsProps {
  actorsList: ICast[] | undefined;
  isLoading: boolean;
};

function settingsResponsive (width: number) {
  const settings: SwiperProps = {
    spaceBetween: 30,
    slidesPerView: width < 700 ? 2 : 3,
    centeredSlides: width < 700 && true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination:  {
      clickable: true,
      type: "fraction",
    },
    navigation: false,
    modules: [Autoplay, Pagination, Navigation, EffectCards],
    effect: width < 700 ? "cards" : "slide",
  };

  return settings;
};

export function MovieActors ({ actorsList, isLoading }: IMovieActorsProps) {

  const { width } = useWindowDimensions();

  if ( isLoading ) {
    return <p>Carregando...</p>
  };

  return (
    <Container>
      <h1>Elenco original</h1>
      <div>
        <SliderComponent settings={settingsResponsive(width)}>
            {
              actorsList?.map((actor) => {
                return (
                  <SwiperSlide key={actor.id}>
                      <Card>
                          <img src={
                            actor.profile_path ? `https://image.tmdb.org/t/p/original/${actor.profile_path}`
                            : 
                            `https://br.images.search.yahoo.com/images/view;_ylt=AwrFGvucBDJjaWkHhmn16Qt.;_ylu=c2VjA3NyBHNsawNpbWcEb2lkA2ZhYzUwODJlNTEyNmJjMjZmZWNhYzJhYmNjZDMwMjg2BGdwb3MDMQRpdANiaW5n?back=https%3A%2F%2Fbr.images.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Dvideo%2Bnot%2Bfound%26ei%3DUTF-8%26type%3DE210BR91199G0%26fr%3Dmcafee%26fr2%3Dsb-top-br.images.search%26tab%3Dorganic%26ri%3D1&w=1920&h=1448&imgurl=picturesofmaidenhead.files.wordpress.com%2F2019%2F01%2Fimage-not-found.jpg&rurl=https%3A%2F%2Fpicturesofmaidenhead.wordpress.com%2Fimage-not-found%2F&size=37.4KB&p=video+not+found&oid=fac5082e5126bc26fecac2abccd30286&fr2=sb-top-br.images.search&fr=mcafee&tt=image-not-found+%7C+Pictures+of+Maidenhead&b=0&ni=80&no=1&ts=&tab=organic&sigr=cmZYzUkY1y9W&sigb=.y5lKjVO6P.q&sigi=JdAtAKJ2AF9_&sigt=81WHrtrwsNar&.crumb=f0kkL21ZIJu&fr=mcafee&fr2=sb-top-br.images.search&type=E210BR91199G0`
                          } alt={actor.name} />
                          <h4>{actor.name}</h4>
                          <h5>{actor.character}</h5>
                      </Card>
                  </SwiperSlide>
                )
              })
            }
        </SliderComponent>
      </div>
    </Container>
  );
};