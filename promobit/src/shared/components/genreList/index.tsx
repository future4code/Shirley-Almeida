import { useQuery } from "react-query";

import { apis } from "../../services/movies/apiMovies";

import { 
  Button, 
  Container, 
  Ul,
  Header
} from "./styles";

interface GenreListProps {
  genreId: string;
  setGenreId: (genre: string) => void;
};

export function GenreList ({ setGenreId, genreId }: GenreListProps) {
  const { data, isLoading, isError } = useQuery("genres", apis.getGenres, {
    refetchOnWindowFocus: false,
  });

  if ( isLoading ) {
    return <h2>Carregando ......</h2>
  };

  if ( isError ) {
    return <h2>Algo deu errado!.</h2>
  };

  if ( data?.genres.length === 0 ) {
    <h2>Lista vazia!.</h2>
  };

  return (
    <Container>
      <Header>
        <h1>
          Milhões de filmes, séries e pessoas para
          descobrir. Explore já.
        </h1>
        <h4>FILTRE POR:</h4>
      </Header>

      <Ul>
          <Button 
            className={genreId === "" ? "isActive" : ""}
            onClick={() => setGenreId("")}
          >
            Todos os filmes
          </Button>
        {
          data?.genres.map((genre) => {
            return (
              <li key={genre.id}>
                <Button  
                    className={genreId === String(genre.id) ? "isActive" : ""}
                    onClick={() => setGenreId(String(genre.id))}
                  >
                  <a href="#movies">{genre.name}</a>
                </Button>
              </li>
            )
          })
        }
      </Ul>
    </Container>
  );
}; 