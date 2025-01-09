import React, { FC } from "react";

interface ViewDetailsPopup {
  isOpen: boolean;
  onClose: () => void;
  content: React.ReactNode;
  title?: string;
}

const ViewDetailsPopup: FC<ViewDetailsPopup> = ({
  isOpen,
  onClose,
  content,
  title,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        {title && <h2 className="text-xl font-bold mb-4">{title}</h2>}
        <div>{content}</div>
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ViewDetailsPopup;
