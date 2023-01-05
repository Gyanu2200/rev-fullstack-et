import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import { Button, Form } from "react-bootstrap";

export const CustomTabel = ({ transaction }) => {
  const [itemToDelete, setItemToDelete] = useState([]);

  //is allSelected
  const [isAllselected, setIsAllSelected] = useState(false);
  //calculates total amount
  const totalAmt = transaction.reduce(
    (acc, { type, amount }) =>
      type === "income" ? acc + amount : acc - amount,
    0
  );

  //select individual transaction
  const handleOnSelect = (e) => {
    // console.log(e.target);
    const { checked, value } = e.target;
    // checked?setItemToDelete([...itemToDelete, value]):
    if (checked) {
      setItemToDelete([...itemToDelete, value]);
    } else {
      setItemToDelete(itemToDelete.filter((item) => item !== value));
    }
  };

  //select all transaction
  const handleAllOnChange = (e) => {
    const { checked } = e.target;
    if (checked) {
      setItemToDelete(
        transaction.map(({ _id }) => {
          return _id;
        })
      );
      setIsAllSelected(true);
    } else {
      setItemToDelete([]);
      setIsAllSelected(false);
    }
  };

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>
              <Form.Check
                checked={isAllselected}
                onChange={handleAllOnChange}
                type="checkbox"
              />
            </th>
            <th>#</th>
            <th> Name</th>
            <th> Type</th>
            <th> Amount</th>
          </tr>
        </thead>
        <tbody>
          {transaction.map((item, i) => (
            <tr key={i}>
              <td>
                <Form.Check
                  onChange={handleOnSelect}
                  type="checkbox"
                  value={item._id}
                />
              </td>
              <td>{i + 1}</td>
              <td>{item.name}</td>
              <td>
                {item.type === "income" ? (
                  <>
                    <td>{item.amount}</td>
                    <td></td>
                  </>
                ) : (
                  <>
                    <td></td>
                    <td>{item.amount}</td>
                  </>
                )}
              </td>
              <td>{item.amount}</td>
            </tr>
          ))}
          <tr>
            <td colSpan={4}>Total Amount</td>
            <td>{totalAmt}</td>
          </tr>
        </tbody>
      </Table>

      {itemToDelete.length ? (
        <div className="d-grid">
          <Button variant="danger">Delete</Button>
        </div>
      ) : null}
    </>
  );
};
