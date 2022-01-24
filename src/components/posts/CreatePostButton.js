function CreatePostButton(props) {

  const openModal = (e) => {
    e.preventDefault()
    props.setModalOpen(true)
  }

  return (
    <div className='d-grid gap-2'>

      <button type="button" className="btn btn-primary btn-lg btn-post" onClick={openModal}>
        Post Something
      </button>

      
    </div>
  );
}

export default CreatePostButton;
