import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { newPayment } from "../actions/payment";

const PayForm = () => {
  const dispatch = useDispatch();
  const [viewForm, setViewForm] = useState(false);

  const [amount, setAmount] = useState({
    amountHours: 0,
    hours: 0,
  });
  const { amountHours, hours } = amount;
  const handleChange = (e) => {
    setAmount({
      ...amount,
      [e.target.name]: e.target.value,
    });
  };
  const handleAdd = () => {
    setViewForm(!viewForm);
  };
  const handleSave = () => {
    const finalAmount = hours * amountHours;
    dispatch(newPayment(finalAmount));
    setAmount({
      amountHours: 0,
      hours: 0,
    });
  };
  return (
    <div>
      <button className="btn green" onClick={handleAdd}>
        {!viewForm ? "Add" : "Close"}
      </button>
      {viewForm && (
        <>
          <div className="input-field col s12 animate__animated animate__backInLeft">
            <label htmlFor="amountHours">Amount per hour</label>
            <input
              type="text"
              value={amountHours}
              onChange={handleChange}
              name="amountHours"
              id="amountHours"
            />
          </div>
          <div className="input-field col s12 animate__animated animate__backInLeft">
            <label htmlFor="hours">Hours worked</label>
            <input
              type="text"
              value={hours}
              onChange={handleChange}
              name="hours"
              id="hours"
            />
          </div>
          <button onClick={handleSave} className="btn purple">
            Save new payment
          </button>
        </>
      )}
    </div>
  );
};

export default PayForm;
