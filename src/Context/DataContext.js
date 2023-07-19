import { createContext, useState } from "react";
import { myHabits } from "../data";
import { useNavigate } from "react-router-dom";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const navigate = useNavigate();
  const [habits, setHabits] = useState(myHabits);
  const [archieves, setArchieves] = useState([]);
  const [habitModal, setHabitModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [habitDetails, setHabitDetails] = useState({
    name: "",
    description: "",
    frequency: "daily",
    goal: "1 times day",
    startDate: "today"
  });
  const [activeHabit, setActiveHabit] = useState({});

  const addHabit = (habitDetails) => {
    const endHabit = habits[habits.length - 1];
    const endHabitId = endHabit ? Number(endHabit?.id) : 0;
    const newHabitDetails = { id: endHabitId, ...habitDetails };
    setHabits((prevHabits) => [...prevHabits, newHabitDetails]);
  };

  const deleteHabit = (habitName) => {
    const updatedHabits = habits.filter((habit) => habit.name !== habitName);
    setHabits(updatedHabits);
  };

  const addToArchieves = (habitName) => {
    const archievedHabit = habits.find((habit) => habit?.name === habitName);
    setArchieves((prev) => [...prev, archievedHabit]);
    const updatedHabits = habits.filter((habit) => habit.name !== habitName);
    setHabits(updatedHabits);
    navigate("/archieves");
  };

  const updateHabit = (habit) => {
    const updatedHabits = habits.map((dbHabit) =>
      dbHabit.id === habit.id ? habit : dbHabit
    );
    setHabits(updatedHabits);
  };
  return (
    <DataContext.Provider
      value={{
        habits,
        setHabits,
        archieves,
        setArchieves,
        habitModal,
        setHabitModal,
        editModal,
        setEditModal,
        habitDetails,
        setHabitDetails,
        activeHabit,
        setActiveHabit,
        addHabit,
        deleteHabit,
        updateHabit,
        addToArchieves
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
