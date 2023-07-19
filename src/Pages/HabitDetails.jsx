import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../Context/DataContext";

export const HabitDetails = () => {
  const { habits } = useContext(DataContext);

  const navigate = useNavigate();
  const { habitName } = useParams();
  const habitDetail = habits.find((habit) => habit.name === habitName);
  return (
    <div>
      <h1>{habitName}</h1>
      <p>{habitDetail?.description}</p>
      <p>{habitDetail?.frequency}</p>
      <p>{habitDetail?.goal}</p>
      <p>{habitDetail?.startDate}</p>
      <div>
        <button onClick={() => navigate("/")}>Back</button>
      </div>
    </div>
  );
};
