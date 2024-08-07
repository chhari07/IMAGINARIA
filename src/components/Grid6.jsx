import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    overflow: ${({ modalOpen }) => (modalOpen ? 'hidden' : 'auto')};
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  padding: 1rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
 
  &:hover img {
    transform: scale(1.1);
  }
  &:hover div, &:hover p {
    opacity: 1;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  transition: transform 0.5s ease-in-out;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(255, 0, 0, 0.5);
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
`;

const Text = styled.p`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2rem;
  font-weight: bold;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.8);
  z-index: 1000;
`;

const ModalContent = styled.div`
  position: relative;

  padding: 1rem;
  border-radius: 0.5rem;
  text-align: center;
  max-width: 80%;
  max-height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const BlurBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(10px);
  z-index: 999;
`;

const ModalImage = styled.img`
  max-width: 100%;
  max-height: 60vh;
  margin-bottom: 1rem;
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  margin: 0.5rem;
  cursor: pointer;
  border-radius: 0.25rem;
  &:hover {
    background-color: #0056b3;
  }
`;

const images = [
  ' https://wallpapercave.com/wp/wp6629378.jpg',
  '  https://wallpapercave.com/wp/wp6629386.jpg',
  ' https://wallpapercave.com/wp/wp6629400.jpg   ',
  ' https://wallpapercave.com/wp/wp6629438.jpg  ',
  ' https://wallpapercave.com/wp/wp6629536.jpg ',
  ' https://wallpapercave.com/wp/wp6629564.jpg ',
];

const Grid6 = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  const openModal = (image) => {
    setCurrentImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentImage('');
  };

  const downloadImage = (url) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = url.split('/').pop(); // Extract filename from URL
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <GlobalStyle modalOpen={modalOpen} />
      <GridContainer className='bg-white'>
        {images.map((image, index) => (
          <ImageContainer key={index} onClick={() => openModal(image)}>
            <Image src={image} alt={`Image ${index + 1}`} />
            <Overlay />
        
          </ImageContainer>
        ))}
      </GridContainer>

      {modalOpen && (
        <>
          <BlurBackground onClick={closeModal} />
          <Modal>
            <ModalContent>
              <ModalImage src={currentImage} alt="Enlarged" />
              <button onClick={() => downloadImage(currentImage)} class="cursor-pointer group relative flex gap-1.5 px-8 py-4 bg-black bg-opacity-80 text-[#f1f1f1] rounded-3xl hover:bg-opacity-70 transition font-semibold shadow-md">
                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="24px" width="24px"><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <g id="Interface / Download"> <path stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="#f1f1f1" d="M6 21H18M12 3V17M12 17L17 12M12 17L7 12" id="Vector"></path> </g> </g></svg>
                            Download
                      
                       </button>
              <Button onClick={closeModal}>Close</Button>
            </ModalContent>
          </Modal>
        </>
      )}
    </>
  );
};

export default Grid6;
