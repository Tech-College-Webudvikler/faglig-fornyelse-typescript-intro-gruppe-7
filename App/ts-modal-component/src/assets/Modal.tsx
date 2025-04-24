// Modal.tsx
import React from 'react';

type ModalProps = {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  children: React.ReactNode;
  backgroundColor?: string;
  fontColor?: string;
  width?: string;
  height?: string;
};

const Modal = ({
  isOpen,
  setIsOpen,
  children,
  backgroundColor = 'white',
  fontColor = 'black',
  width = '400px',
  height = '300px',
} :ModalProps) => {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0,0,0,0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onClick={() => setIsOpen(false)}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor,
          color: fontColor,
          width,
          height,
          padding: '20px',
          borderRadius: '8px',
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
