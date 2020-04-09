import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Transactions = () => {
   const [chain, setChain] = useState([]);
   useEffect(() => {
      axios
         .get('http://localhost:5000/chain')
         .then((res) => {
            setChain(res.data.chain);
         })
         .catch((err) => {
            console.log('Got an error', err);
         });
   }, []);

   const sent = [];
   const recieved = [];

   for (const block of chain) {
      block.transactions
         .filter((t) => t.sender === 'alec_bl') // TODO: Make the name dynamic
         .map((tr) => sent.push(tr));
   }

   for (const block of chain) {
      block.transactions
         .filter((t) => t.recipient === 'alec_bl') // TODO: Make the name dynamic
         .map((tr) => recieved.push(tr));
   }

   return (
      <div className="transactions-list">
         <div className="outgoing">
            <h2>Outgoing Transactions:</h2>
            {sent.map((info) => (
               <div className="transaction-details">
                  <div className="transaction-data">{info.sender}</div>
                  <div className="transaction-data">{info.recipient}</div>
                  <div className="transaction-data">{info.amount}</div>
               </div>
            ))}
         </div>
      </div>
   );
};

export default Transactions;
