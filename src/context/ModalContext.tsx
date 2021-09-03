import React, {createContext, useState} from 'react'

interface ModalContextData {
  isNewModalTrasactionOpen: boolean;
  openModal():void;
  closeModal():void;
 
}

export const ModalContext = createContext<ModalContextData>(
  {} as ModalContextData, 
);

const ModalProvider:React.FC = ({children}) =>{
   
   const [isNewModalTrasactionOpen, setIsNewModalTrasactionOpen] = useState(false)
   
   
     function openModal() {
       setIsNewModalTrasactionOpen(true);
     }
   
     function closeModal() {
       setIsNewModalTrasactionOpen(false);
     }

   return (
    <ModalContext.Provider value={{closeModal,openModal,isNewModalTrasactionOpen}}>
      {children}
    </ModalContext.Provider>
   );
}

export default ModalProvider
  




