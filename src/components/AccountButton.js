function AccountButton(props) {

  return (
    <nav className="navbar fixed-bottom">
      <div className='container'>
        <div className='col-3'>
          {
            props.walletAddress ?
            props.truncateAddress(props.walletAddress)
            :
            <a className="btn btn-primary" aria-current="page" href="#" onClick={props.connectWallet}>Connect Wallet</a>
          }
        </div>
      </div>
    </nav>
  );
}

export default AccountButton;
