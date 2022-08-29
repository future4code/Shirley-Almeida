import { Container } from "./styles"

export const CardInformation = ({nameCard, descriptionCard , imgCard}) => {
  
    return (      
        <Container>        
          <h2>{nameCard}</h2>  
          <img src={imgCard} alt='Card Image'/>
          <p>{descriptionCard}</p>
          
        </Container>
    ) 
}