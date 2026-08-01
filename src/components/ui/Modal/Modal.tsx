import type { MouseEvent } from "react";
import { X } from "lucide-react";
import Card from "../Card";
import type { ModalProps } from "./Modal.types";

const Modal = ({
  isOpen,
  title,
  children,
  onClose,
}: ModalProps) => {
  if (!isOpen) return null;

  const handleContentClick = (
    event: MouseEvent<HTMLDivElement>
  ) => {
    event.stopPropagation();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg px-4"
        onClick={handleContentClick}
      >
        <Card className="relative">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-gray-500 hover:text-gray-800"
            aria-label="Close Modal"
          >
            <X size={20} />
          </button>

          {title && (
            <h2 className="mb-4 text-xl font-semibold">
              {title}
            </h2>
          )}

          {children}
        </Card>
      </div>
    </div>
  );
};

export default Modal;