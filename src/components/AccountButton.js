function AccountButton(props) {

  return (
    <nav className="navbar fixed-bottom">
      <div className='container'>
        <div className='col-3'>
          {
            props.walletAddress ?
            <div className='account-btn me-3 py-2 mb-2'>
              {props.truncateAddress(props.walletAddress)}
            </div>
            :
            <div className='d-grid gap-2'>
              <a className="btn btn-dark btn-lg me-3 mb-2" aria-current="page" href="#" onClick={props.connectWallet}>Connect Wallet</a>
            </div>
          }
        </div>
      </div>
    </nav>
  );
}

export default AccountButton;
