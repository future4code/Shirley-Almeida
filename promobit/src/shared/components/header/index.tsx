import tmdbImage from "../../assets/imgs/Vector@2x.png"

import { HeaderContainer, Img } from "./styles"

export function Header () {
  return (
   <HeaderContainer>
      <Img src={tmdbImage} alt="tmdb-logo" />
    </HeaderContainer>
  );
}; 