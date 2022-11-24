import { IonInput } from "@ionic/react";
import React, { useState } from "react";

const TestingLoop = () => {
  const [data, setData] = useState([
    {
      srno: "",
      firstname: "",
      lastname: "",
    },
  ]);

  const someData = [
    {
      srno: 11,
      firstname: "Shyam",
      lastname: "Dhawale",
    },
    {
      srno: 12,
      firstname: "Nutan",
      lastname: "Dhawale",
    },
  ];

  return (
    <div>
      <table>
        <tbody>
          {data.map((item, index) => (
            <tr>
              <td>
                <IonInput
                  type="text"
                  value={item.firstname}
                  name={item.firstname}
                ></IonInput>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TestingLoop;
