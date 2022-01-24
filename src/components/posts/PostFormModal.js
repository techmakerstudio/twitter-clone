import { posts } from 'aleph-js'
import { useState, useEffect } from 'react'
import Modal from "react-bootstrap/Modal";

function PostFormModal(props) {

  const [postContent, setPostContent] = useState('')
  const [txInProgress, setTxInProgress] = useState(false)

  useEffect(() => {
    if (props.modalOpen) {
      setPostContent('')
      setTxInProgress(false)
    }
  }, [props.modalOpen])

  const handleTyping = (e) => {
    setPostContent(e.target.value)
  }

  const close = (e) => {
    e.preventDefault()

    props.setModalOpen(false)
  }

  const submitPost = async (e) => {
    e.preventDefault()

    setTxInProgress(true)
    
    posts.submit(
      props.alephAccount.address,
      'chat',
      {'body': postContent},
      {
        'account': props.alephAccount,
        'channel': 'TEST',
        'api_server': 'https://api2.aleph.im',
        'ref': 'hall'
      }
    ).catch((error) => {
      setTxInProgress(false)
    })
  }

  return (
    <Modal show={props.modalOpen}>
      <Modal.Header className='py-0'>
        <a href='#' onClick={close}>×</a>
      </Modal.Header>
      {
        txInProgress ?
        <Modal.Body>
          <div className="p-5 text-center mb-5">
            <div class="lds-dual-ring"></div>
            <p className='mt-2'>Please confirm in your wallet.</p>
          </div>
        </Modal.Body>
        :
        <div>
          <Modal.Body>
            <textarea onChange={handleTyping} placeholder='Type your message...' className='form-control' />
          </Modal.Body>
          <Modal.Footer>
            <button type="button" className="btn btn-primary" onClick={submitPost} disabled={postContent == '' || postContent == undefined}>Post</button>
          </Modal.Footer>
        </div>
      }
    </Modal>
  );
}

export default PostFormModal;
