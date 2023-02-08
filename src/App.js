import logo from "./logo.svg";
import "./App.css";
import { Input, Box, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";

function App() {
  const [task, setTask] = useState([]);
  const [valueInput, setValueInput] = useState("");

  useEffect(() => {
    const task = localStorage.getItem("task");
    const parsedTaskeds = JSON.parse(task);
    setTask(parsedTaskeds);
  }, []);

  const handleChange = (value) => {
    setValueInput(value);
  };

  const chargeTask = () => {
    const newArray = [...task, valueInput];
    setTask(newArray);
    localStorage.setItem("task", JSON.stringify(newArray));
  };

  return (
    <div className="App">
      <InputAndButtonBox>
        <Input
          type="text"
          name="task"
          value={valueInput.value}
          onChange={(event) => {
            handleChange(event.target.value);
          }}
        ></Input>
        <Button onClick={chargeTask}>Cargar tarea</Button>
      </InputAndButtonBox>
      <CustomText>Tus tareas:</CustomText>
      <CustomBox>
        {task.map((item, index) => (
          <TaskBox key={index}>
            {index + 1} - {item}
          </TaskBox>
        ))}
      </CustomBox>
    </div>
  );
}

export default App;

const CustomBox = styled("div")(() => ({
  marginTop: "20px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "row",
  flexWrap: "wrap",
  gap: "20px",
}));

const TaskBox = styled("div")(() => ({
  backgroundColor: "lightblue",
  padding: "10px",
  width: "100px",
  borderRadius: "5px",
}));

const InputAndButtonBox = styled("div")(() => ({
  display: "flex",
  gap: "20px",
  justifyContent: "center",
  marginTop: "20px",
}));

const CustomText = styled("h4")(() => ({
  fontSize: "30px",
  margin: "10px, 0",
}));
