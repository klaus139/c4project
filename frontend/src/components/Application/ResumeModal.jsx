import React from "react";

const ResumeModal = ({ fileUrl, onClose }) => {
  const isImage = imageUrl?.toLowerCase().endsWith('.png') || imageUrl?.toLowerCase().endsWith('.jpeg') || imageUrl?.toLowerCase().endsWith('.jpg') || imageUrl?.toLowerCase().endsWith('.webp');
  
  return (
    <div className="resume-modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        {isImage ? (
          <img src={imageUrl} alt="resume" />
        ) : (
          <iframe src={imageUrl} title="resume" width="100%" height="500px" />
        )}
      </div>
    </div>
  );
};


export default ResumeModal;
