const Modal = ({ selectedImage }) => {
  console.log(selectedImage.description);
  return (
    <>
      <input type="checkbox" id="my_modal_4" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-lg">{selectedImage.description}</h3>
          <p className="py-4">Click the button below to close</p>
          <div className="modal-action">
            <label htmlFor="my_modal_4" className="btn">
              X
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
