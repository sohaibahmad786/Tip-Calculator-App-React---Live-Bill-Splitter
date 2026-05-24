import React, { useState } from 'react'
import './Tip_calculator.css'

const Tip_calculator = () => {
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState(10);
  const [people, setPeople] = useState(1);

  const billNum = parseFloat(bill) || 0;
  const tipAmount = (billNum * tip) / 100;
  const total = billNum + tipAmount;
  const perPerson = people > 0 ? total / people : 0;

  return (
    <div style={{ maxWidth: "400px", margin: "auto", padding: "20px" }}>
      
      <h2>Tip Calculator</h2>

      <div>
        <label>Bill Amount</label>
        <input
          type="number"
          value={bill}
          onChange={(e) => setBill(e.target.value)}
          placeholder="Enter bill amount"
        />
      </div>

      <div>
        <label>Tip %</label>
        <div>
          {[10, 15, 20].map((val) => (
            <button
              key={val}
              onClick={() => setTip(val)}
              style={{
                margin: "5px",
                background: tip === val ? "green" : "gray",
                color: "white",
              }}
            >
              {val}%
            </button>
          ))}
        </div>

        <input
          type="number"
          placeholder="Custom tip %"
          onChange={(e) => setTip(Number(e.target.value))}
        />
      </div>

      <div>
        <label>Number of People</label>
        <input
          type="number"
          value={people}
          min="1"
          onChange={(e) => setPeople(Number(e.target.value))}
        />
      </div>

      <div style={{ marginTop: "20px" }}>
        <h3>Results</h3>
        <p>Tip: {tipAmount.toFixed(2)}</p>
        <p>Total: {total.toFixed(2)}</p>
        <p>Per Person: {perPerson.toFixed(2)}</p>
      </div>
    </div>
  );
};


export default Tip_calculator