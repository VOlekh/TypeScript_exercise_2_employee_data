import "./styles.css";
import React from "react";
import EmployeeItem, { IEmployeeItem } from "./ListItem";

interface IApp {}

const App: React.FC<IApp> = () => {
  const data: IEmployeeItem[] = [
    {
      firstName: "Ali",
      lastName: "Schick",
      role: "Developer"
    },
    {
      firstName: "John",
      lastName: "Doe",
      role: "Manager"
    },
    {
      firstName: "Valentina",
      lastName: "Olekhnovic",
      role: "Developer"
    },
    {
      firstName: "David",
      lastName: "Brown",
      role: "Designer"
    },
    {
      firstName: "Jack",
      lastName: "Shepherd",
      role: "Lead"
    }
  ];

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

      <div>
        {data.map((single_data) => {
          return (
            // Pay attantion to props
            // <EmployeeItem
            //  firstName={single_data.firstName}
            //  lastName={single_data.lastName}
            //  role={single_data.role}
            // />
            <EmployeeItem {...single_data} />
          );
        })}
      </div>
    </div>
  );
};
export default App;
