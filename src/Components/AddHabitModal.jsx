import { useContext } from "react";
import { DataContext } from "../Context/DataContext";
import "./../styles.css";

export const AddHabitModal = () => {
  const { habitDetails, setHabitDetails, setHabitModal, addHabit } = useContext(
    DataContext
  );
  return (
    <div className="modal-wrapper">
      <div className="modal">
        <div className="modal-header">
          <h1>Add new Habit</h1>
        </div>
        <div>
          <label htmlFor="name">
            Name:
            <input
              id="name"
              type="text"
              value={habitDetails?.name}
              onChange={(e) =>
                setHabitDetails((prev) => ({ ...prev, name: e.target.value }))
              }
            />
          </label>
        </div>
        <div>
          <label htmlFor="description">
            Description:
            <input
              id="description"
              type="text"
              value={habitDetails?.description}
              onChange={(e) =>
                setHabitDetails((prev) => ({
                  ...prev,
                  description: e.target.value
                }))
              }
            />
          </label>
        </div>
        <div>
          <label htmlFor="frequency">
            Frequency:
            <select
              id="frequency"
              value={habitDetails?.frequency}
              onChange={(e) =>
                setHabitDetails((prev) => ({
                  ...prev,
                  frequency: e.target.value
                }))
              }
            >
              <option value="Daily">Daily</option>
              <option value="Weekly">Weekly</option>
              <option value="Monthly">Monhtly</option>
            </select>
          </label>
        </div>
        <div>
          <label htmlFor="goal">
            Goal:
            <select
              id="goal"
              value={habitDetails?.goal}
              onChange={(e) =>
                setHabitDetails((prev) => ({
                  ...prev,
                  goal: e.target.value
                }))
              }
            >
              <option value="1 times Day">1 times Day</option>
              <option value="2 times Day">2 times Day</option>
            </select>
          </label>
        </div>
        <div>
          <label htmlFor="date">
            Start Date:
            <select
              id="date"
              value={habitDetails?.startDate}
              onChange={(e) =>
                setHabitDetails((prev) => ({
                  ...prev,
                  startDate: e.target.value
                }))
              }
            >
              <option value="today">today</option>
              <option value="tomorrow">tomorrow</option>
            </select>
          </label>
        </div>
        <div>
          <button onClick={() => setHabitModal(false)}>Close</button>
          <button
            onClick={() => {
              addHabit(habitDetails);
              setHabitModal(false);
            }}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};
