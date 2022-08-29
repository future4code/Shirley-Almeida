import { useState, useEffect } from 'react'
import cards from '../../data/tarot.json';
import {CardInformation} from '../CardInformation';
import {PopupModal} from '../Popup';
import { Container, UlContainer } from './styles';


export const CardsList = ({activeModal, setActiveModal}) => {
    
    const [selectedCard, setSelectedCard] = useState(false)
    const cardsList = cards.cards
    const cardsImg = cards.imagesUrl
    const backImage = cards.imageBackCard

    useEffect(() => {
        shuffleArray(cardsList)
    }, [])

    function searchCard(nameCard) {
        const card = cardsList.find((item) => {

            return item.name === nameCard
        })

        setSelectedCard(card)
        setActiveModal(true)
        return card
    }
    


    function reloadPage() {

        window.location.reload(true)
    }

    function shuffleArray(arr) {

        for (let i = arr.length - 1; i > 0; i--) {

            const j = Math.floor(Math.random() * (i + 1));

            [arr[i], arr[j]] = [arr[j], arr[i]];
        }

        return arr;
    }



    return (

        <Container>
            <button onClick={reloadPage}>EMBARALHAR</button>
            <UlContainer>

                {
                    cardsList.map((card) => {
                        return (
                            <li key={card.name} onClick={() => searchCard(card.name)}>
                                {
                                    selectedCard?.name === card.name ?
                                        <div>
                                            
                                            <img src={`${cardsImg}${card.image}`} alt={card.name} />
                                        </div>
                                        :
                                        <img src={backImage} alt='Background Image' />
                                }
                            </li>
                        )

                    })

                }


            </UlContainer>

                {
                 activeModal && <PopupModal setActiveModal = {setActiveModal}>
                    <CardInformation
                    nameCard = {selectedCard?.name}
                    descriptionCard = {selectedCard?.description}
                    imgCard = {`${cardsImg}${selectedCard?.image}`}
                    />
                 </PopupModal>  
                }

        </Container>

    )
}