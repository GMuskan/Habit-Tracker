import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AddHabitModal } from "../Components/AddHabitModal";
import { EditHabitModal } from "../Components/EditHabitModal";
import { DataContext } from "../Context/DataContext";
import "./../styles.css";

export const Home = () => {
  const {
    habits,
    habitModal,
    setHabitModal,
    editModal,
    setEditModal,
    setActiveHabit,
    deleteHabit,
    addToArchieves
  } = useContext(DataContext);

  const navigate = useNavigate();

  return (
    <div className="habits-page">
      <h1>Habit Tracker</h1>
      {habits?.map((habit) => (
        <div key={habit?.name}>
          <div className="habit-card">
            <p
              style={{ cursor: "pointer" }}
              onClick={() => navigate(`/${habit?.name}`)}
            >
              {habit?.name}
            </p>
            <div>
              <button
                onClick={() => {
                  setEditModal(true);
                  setActiveHabit(habit);
                }}
              >
                Edit
              </button>
              <button onClick={() => deleteHabit(habit?.name)}>Delete</button>
              <button onClick={() => addToArchieves(habit?.name)}>
                Archive
              </button>
            </div>
          </div>
        </div>
      ))}
      <div>
        <button className="add-habit-btn" onClick={() => setHabitModal(true)}>
          Add Habit
        </button>
        <button
          className="see-archieves-btn"
          onClick={() => navigate("/archieves")}
        >
          See Archieves
        </button>
      </div>
      {habitModal && <AddHabitModal />}
      {editModal && <EditHabitModal />}
    </div>
  );
};
