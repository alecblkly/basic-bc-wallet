import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Transactions = () => {
   const [chain, setChain] = useState({
      //   index: 0,
      //   previous_hash: 0,
      //   proof: 0,
      //   timestamp: 0,
      //   transations: {}
   });
   useEffect(() => {
      axios
         .get('http://localhost:5000/chain')
         .then(res => {
            console.log('Res :', Object.entries(res.data.chain));
            setChain(Object.entries(res.data.chain));
         })
         .catch(err => {
            console.log('Got an error', err);
         });
   }, []);

   console.log('Chain: ', chain);

   const { timestamp, transactions, previous_hash, proof } = chain;
   return (
      <div className="transactions-list">
         <div>
            <b>Previous Hash: </b>
            {previous_hash}
         </div>
         <div>
            <b>Proof: </b>
            {proof}
         </div>
         <div>
            <b>Timestamp: </b>
            {timestamp}
         </div>
         <div>
            <b>Transactions: </b>
            {/* # TODO: Update transactions, when multiple transactions, will want to map over */}
            {transactions}
         </div>
      </div>
   );
};

export default Transactions;
