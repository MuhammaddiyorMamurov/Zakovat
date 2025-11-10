import {type ReactNode } from "react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

function Modal({ isOpen, children }: Props) {
  if (!isOpen) 
    return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-gray-800 p-6 rounded-xl shadow-xl min-w-[300px] relative">
        {children}
      </div>
    </div>
  );
}

export default Modal;
