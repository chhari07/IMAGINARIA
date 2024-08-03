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
  background: black;
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
  border-radius: 0.5rem;
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
  background: white;
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
  'https://wallpapercave.com/wp/wp4961905.jpg',
  'https://wallpapercave.com/wp/wp1817105.jpg',
  '  https://wallpapercave.com/wp/Dwhw5Vc.jpg',
  ' https://wallpapercave.com/wp/NFPJs42.jpg ',
  'https://wallpapercave.com/wp/wp2013981.jpg ',
  'https://wallpapercave.com/wp/wp1850081.jpg ',
];

const Grid = () => {
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
      <GridContainer>
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
              <Button onClick={() => downloadImage(currentImage)}>Download</Button>
              <Button onClick={closeModal}>Close</Button>
            </ModalContent>
          </Modal>
        </>
      )}
    </>
  );
};

export default Grid;
