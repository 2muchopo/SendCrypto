import './App.css';
import {useMoralis} from 'react-moralis'
import {useWeb3Transfer} from 'react-moralis';
import Login from './Login'


const App = () =>  {

  const { isAuthenticated, Moralis, logout } = useMoralis();
  
    
  const {fetch} = useWeb3Transfer({type: "native", amount:Moralis.Units.ETH("0.001"), receiver: "0x1C10F7DCB85f56Ece0C20415BBc5C70fc72Cd8C5"})
    
  return (
    <div className="App">  
      
      <div className='nav'>
        <img src="https://w7.pngwing.com/pngs/368/176/png-transparent-ethereum-cryptocurrency-blockchain-bitcoin-logo-bitcoin-angle-triangle-logo.png" alt="Logo"/>
        <h1>SendCrypto</h1> 
      </div>

      <div className='subject'>
        <h2>Send Crypto Conveniently</h2> </div>
      
    {isAuthenticated ? 
        <div className='details'>
        <div>
          <label htmlFor="type">Type:</label> <br />
          <input type="text" placeholder = 'Native, ERC20 or ERC721' id='type' />
        </div>
        <div>
          <label htmlFor="amount">Amount to Send:</label> <br />
          <input type="number" name="amount" id="amount" placeholder = '0.5' />
        </div>
        <div>
          <label htmlFor="receiver">Receiver:</label> <br />
          <input type="text" id='receiver' placeholder = '0x42...37a' />
        </div> <br />
        <div className='send'>
          <button onClick={()=> fetch()}>Send</button>
          <button onClick={()=>logout()} >Logout</button>
        </div>
      </div> 
      
        :

       <Login/> }
      
      
     
    </div>
  );
}

export default App;



  