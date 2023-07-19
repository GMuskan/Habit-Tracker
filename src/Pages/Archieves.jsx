import { useContext } from "react";
import { DataContext } from "../Context/DataContext";
import { useNavigate } from "react-router-dom";
import "./../styles.css";
export const Archieves = () => {
  const navigate = useNavigate();
  const { archieves } = useContext(DataContext);
  return (
    <div>
      {archieves?.length ? (
        archieves.map((habit) => (
          <div className="archieve-card" key={habit?.name}>
            <h2>{habit?.name}</h2>
            <p>{habit?.description}</p>
            <p>{habit?.frequency}</p>
            <p>{habit?.goal}</p>
            <p>{habit?.startDate}</p>
          </div>
        ))
      ) : (
        <div>
          <h1>No Archieves yet</h1>
        </div>
      )}
      <button className="see-archieves-btn" onClick={() => navigate("/")}>
        Back
      </button>
    </div>
  );
};
