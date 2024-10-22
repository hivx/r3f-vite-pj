import React from 'react';
import { Html } from '@react-three/drei';
import { StyledModal } from '@/style';

interface PopupProps {
  open: boolean;
  onOk: () => void;
  onCancel: () => void;
  children: React.ReactNode;
}

export const Popup: React.FC<PopupProps> = ({
  open,
  onOk,
  onCancel,
  children,
}) => {
  return (
    <Html>
      <StyledModal
        open={open}
        onOk={onOk}
        onCancel={onCancel}
        width={1000}
        height={1000}
        closable={false}
      >
        {children}
      </StyledModal>
    </Html>
  );
};
