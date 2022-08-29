import { Container, ButtonClose } from "./styles";

export const PopupModal = ({ children, setActiveModal } ) => {
    return (
        <Container>
            <ButtonClose>
                <button
                    onClick={() => setActiveModal(false)}
                    title="Fechar"
                >
                 X   
                </button>
            </ButtonClose>
            {children}
        </Container>
    );
};

