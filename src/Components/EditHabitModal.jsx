import { useContext } from "react";
import { DataContext } from "../Context/DataContext";

export const EditHabitModal = () => {
  const { activeHabit, setActiveHabit, updateHabit, setEditModal } = useContext(
    DataContext
  );

  return (
    <div className="modal-wrapper">
      <div className="modal">
        <div className="modal-header">
          <h1>Edit Habit</h1>
        </div>
        <div>
          <label htmlFor="name">
            Name:
            <input
              id="name"
              type="text"
              value={activeHabit?.name}
              onChange={(e) =>
                setActiveHabit((prev) => ({ ...prev, name: e.target.value }))
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
              value={activeHabit?.description}
              onChange={(e) =>
                setActiveHabit((prev) => ({
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
              value={activeHabit?.frequency}
              onChange={(e) =>
                setActiveHabit((prev) => ({
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
              value={activeHabit?.goal}
              onChange={(e) =>
                setActiveHabit((prev) => ({
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
              value={activeHabit?.startDate}
              onChange={(e) =>
                setActiveHabit((prev) => ({
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
          <button onClick={() => setEditModal(false)}>Close</button>
          <button
            onClick={() => {
              updateHabit(activeHabit);
              setEditModal(false);
            }}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};
