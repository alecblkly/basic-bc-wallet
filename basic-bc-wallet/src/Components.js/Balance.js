import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Balance = () => {
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
         .map((tr) => sent.push(tr.amount));
   }

   for (const block of chain) {
      block.transactions
         .filter((t) => t.recipient === 'alec_bl') // TODO: Make the name dynamic
         .map((tr) => recieved.push(tr.amount));
   }

   const sent_total = sent.reduce((a, b) => a + b, 0);
   const recieved_total = recieved.reduce((a, b) => a + b, 0);
   const balance = recieved_total - sent_total;

   return (
      <div className="balance-data">
         <div className="transactions-data">
            <h4>Balance</h4>
            <div className="transaction-details">
               <div className="transaction-data">
                  <p>Amount: {balance}</p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Balance;
