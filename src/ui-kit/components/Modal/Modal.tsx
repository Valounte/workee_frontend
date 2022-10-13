import React, { memo } from 'react';

import { Modal as MuiModal, ModalProps, styled } from '@mui/material';

const StyledModal = styled(MuiModal)``;

export const Modal = memo((props: ModalProps) => {
  const { children, ...otherProps } = props;
  return <StyledModal {...otherProps}>{children}</StyledModal>;
});
