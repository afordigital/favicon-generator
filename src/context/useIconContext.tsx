import { useContext } from 'react';
import { IconContext } from './iconContext';

export const useIconContext = () => {
  const context = useContext(IconContext);
  if (!context) {
    throw new Error('useIconContext must be used within IconProvider');
  }
  return context;
};
