import React from "react";

export interface IEmployeeItem {
  firstName: string;
  lastName: string;
  role: string;
}

const EmployeeItem: React.FC<IEmployeeItem> = (props) => {
  const { firstName, lastName, role } = props;
  console.log();
  return (
    <div>
      <div>{`Role: ${firstName} ${lastName} ${role}`}</div>
      <br />
    </div>
  );
};

export default EmployeeItem;
