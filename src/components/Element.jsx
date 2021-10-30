import React from "react";
import { useDispatch } from "react-redux";
import { deletePayment } from "../actions/payment";

const Element = ({ data }) => {
  const dispatch = useDispatch();
  const { date, amount, id } = data;
  let displayDate;

  if (date.seconds) {
    const cleanDate = date.toDate();
    displayDate = cleanDate.toLocaleDateString();
  } else {
    displayDate = date;
  }

  const handleDelete = () => {
    dispatch(deletePayment(id));
  };

  return (
    <tr className="animate__animated animate__fadeInUp">
      <td>{displayDate}</td>
      <td>${amount}</td>
      <td>
        <button onClick={handleDelete} className="btn red">
          <i class="material-icons">delete_forever</i>
        </button>
      </td>
    </tr>
  );
};

export default Element;
