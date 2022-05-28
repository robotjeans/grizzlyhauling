import styled from 'styled-components';

export const SCModal = styled.div<{ open: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  min-height: 100%;
  height: auto;
  padding: 70px auto;
  opacity: 0;
  transition: all 0.3s;
  background-color: rgba(0, 0, 0, 0.75);

  ${(props) => props.open && `z-index: 3000; opacity: 1`}
`;

export const CloseButton = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 64px;
  height: 64px;
  cursor: pointer;
  z-index: 1;
  transition: all 0.3s ease-in-out;
  background-color: #fcfcfc;

  &:before,
  &:after {
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 20px;
    height: 2px;
    background-color: #202121;
  }

  &:before {
    transform: translate(-50%, -50%) rotate(-45deg);
  }

  &:after {
    transform: translate(-50%, -50%) rotate(45deg);
  }
`;

export const Wrapper = styled.div<{ open: boolean }>`
  display: inline-block;
  max-width: 100%;
  width: 650px;
  padding: 50px;
  margin: auto 0;
  opacity: 0;
  background-color: #f4f7f6;
  transform: translateY(30px);
  transition: opacity 0.3s, transform 0.3s;

  ${(props) => props.open && `transform: translateY(0); opacity: 1`}
`;
