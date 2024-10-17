import React from 'react';
import { Modal } from 'antd';
import { Html } from '@react-three/drei';

interface PopupProps {
  title: string;
  open: boolean;
  onOk: () => void;
  onCancel: () => void;
  children: React.ReactNode;
}

export const Popup: React.FC<PopupProps> = ({
  title,
  open,
  onOk,
  onCancel,
  children,
}) => {
  return (
    <Html>
      <Modal
        title={title}
        open={open}
        onOk={onOk}
        onCancel={onCancel}
      >
        {children}
      </Modal>
    </Html>
  );
};
