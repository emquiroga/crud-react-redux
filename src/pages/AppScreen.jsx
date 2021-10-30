import React from "react";
import { useSelector } from "react-redux";
import Element from "../components/Element";
import Navbar from "../components/Navbar";
import PayForm from "../components/PayForm";

const AppScreen = () => {
  const name = useSelector((state) => state.login.displayName);
  const payment = useSelector((state) => state.payment.paymentData);

  return (
    <>
      <Navbar />
      <div className="container">
        <h1 className="center animate__animated animate__backInDown">
          Hello, {name}
        </h1>
        <PayForm />
        <hr />
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Amount</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {payment.map((element) => {
              return <Element key={element.id} data={element} />;
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AppScreen;
