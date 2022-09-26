import { Container, Img } from "./styles";

interface MovieTitleDateImgProps {
  title: string;
  img: string;
};

export function MovieImg ({ img, title }: MovieTitleDateImgProps) {
  return (
    <Container>
        <Img 
            src={`https://image.tmdb.org/t/p/original/${img}`} 
            alt={title} 
          />
    </Container>
  );
}; 