import React, { useState } from 'react';
import { usePlaidLink } from 'react-plaid-link';
import axios from 'axios';

const HomePage = () => {
  const backendUrlBase = 'http://localhost:8000';

  const [linkToken, setLinkToken] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  const [transactions, setTransactions] = useState(null);

  // Generate Link Token when component mounts
  React.useEffect(() => {
    async function createLinkToken() {
      const response = await axios.post(backendUrlBase + '/api/create_link_token');
      setLinkToken(response.data.link_token);
    }
    createLinkToken();
  }, []);

  // Create Plaid Link hook
  const { open, ready } = usePlaidLink({
    token: linkToken,
    onSuccess: async (public_token) => {
      // Exchange public token for access token
      const response = await axios.post(backendUrlBase + '/api/exchange_public_token', {
        public_token,
      });

      setAccessToken(response.data.access_token);

      // Get the most recent transaction
      const transactionsRes = await axios.post(backendUrlBase + '/api/transactions', {
        access_token: response.data.access_token,
      });
      console.log(transactionsRes.data);
      setTransactions(transactionsRes.data); // Assuming transactions is not empty
    },
  });

  return (
    <div>
      <h1>Welcome to Driven</h1>
      <button onClick={() => open()} disabled={!ready}>
        Connect Bank Account
      </button>
      {transactions && (
        // <div>
        //   <h3>Most Recent Transaction:</h3>
        //   <p>Name: {transaction.name}</p>
        //   <p>Amount: ${transaction.amount}</p>
        //   <p>Date: {transaction.date}</p>
        // </div> const { accounts, added: transactions } = data;
        
        <div>
      <h2>Accounts Overview</h2>
      {transactions.accounts.map((account) => (
        <div key={account.account_id} style={styles.accountContainer}>
          {/* Displaying account details */}
          <h3>{account.name}</h3>
          <p><strong>Account ID:</strong> {account.account_id}</p>
          <p><strong>Type:</strong> {account.type}</p>
          <p><strong>Subtype:</strong> {account.subtype}</p>
          <p><strong>Available Balance:</strong> {account.balances.available !== null ? `$${account.balances.available}` : 'N/A'}</p>

          {/* Filtering and displaying transactions for each account */}
          <h4>Transactions:</h4>
          <div style={styles.transactionContainer}>
            {transactions.added.filter(transactn => transactn.account_id === account.account_id)
              .map((transactn) => (
                <div key={transactn.transaction_id} style={styles.transaction}>
                  <p><strong>Date:</strong> {transactn.date}</p>
                  {(transactn.amount >= 0 ) ? <p><strong>Amount:</strong> ${transactn.amount}</p> : <p style={{backgroundColor: 'yellow'}}><strong>Amount:</strong> ${transactn.amount}</p> }
                  <p><strong>Account ID:</strong> {transactn.account_id}</p>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
      )}
    </div>
  );
};
const styles = {
  accountContainer: {
    border: '1px solid #ccc',
    padding: '15px',
    margin: '15px 0',
    borderRadius: '8px',
  },
  transactionContainer: {
    marginTop: '10px',
    paddingLeft: '15px',
  },
  transaction: {
    borderBottom: '1px solid #ddd',
    marginBottom: '10px',
    paddingBottom: '10px',
  },
};
export default HomePage;
