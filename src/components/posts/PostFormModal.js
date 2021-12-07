import { posts } from 'aleph-js'
import { useState } from 'react'

function PostFormModal(props) {

  const [postContent, setPostContent] = useState('')

  const handleTyping = (e) => {
    setPostContent(e.target.value)
  }

  const submitPost = async (e) => {
    e.preventDefault()
    
    await posts.submit(
      props.alephAccount.address,
      'chat',
      {'body': postContent},
      {
        'account': props.alephAccount,
        'channel': 'TEST',
        'api_server': 'https://api2.aleph.im',
        'ref': 'hall'
      }
     )
  }

  return (
    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <label>Post Something</label>
            <textarea onChange={handleTyping} placeholder='Type your message...' className='form-control' />
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-primary" onClick={submitPost}>Post</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostFormModal;
