import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import DisplayContainer from "./components/DisplayContainer";
import GeneralInfos from "./components/FormContainer";

const App = () => {
  const [data, sendData] = useState("");
  return (
    <>
      <GeneralInfos sendData={sendData} />
      <DisplayContainer data={data} />
    </>
  );
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

// CV app :
// 1- sections:
//  ==> general information (name, email, phone num)
//  ==> educational experience (school name, title of study and date of study)
//  ==> practical experience (company name, position title, main responsibilities of your jobs, date from and until when you worked for that company)

// 2- each section has an edit and submit button.
//  ==> submit button :
//      # should display value of input fields in html elemens.
//  ==> edit button :
//      # should display the input fields again (with previously information as values inside).
//      # able to edit and resumbit the content.
