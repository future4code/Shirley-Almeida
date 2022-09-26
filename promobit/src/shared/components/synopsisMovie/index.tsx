import { Container } from "./styles";

interface SynopsisMovieProps {
  overview: string;
};

export function SynopsisMovie ({ overview }: SynopsisMovieProps) {
  return (
    <Container>
      <h3>Sinopse</h3>
      <p>{overview}</p>
    </Container>
  );
};