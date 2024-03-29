import axios from "axios";
import { useEffect, useState } from "react";
import { url } from "../Utilities/url";

// import useActivity from "../hooks/useActivity";
function ActivityCards() {
  // const [token, setToken] = useState("");
  const [activities, setActivities] = useState([]);
  // const {activity} = useActivity();
  // console.log(activity);

  useEffect(() => {
    const fetchingData = async () => {
      const localToken = JSON.parse(localStorage.getItem("token"));
      // setToken(localToken);
      try {
        const {data} = await axios.get(`${url}/dashboard/my_activities`, {
          headers: { Authorization: localToken },
        });
        console.log(data.exercises);
        setActivities(data.exercises)
      } catch (error) {
        console.log(error.message);
      }

    };
    fetchingData()

  }, []);
  return (
    <div className="justify-content-center row">
      {activities.map((item,key)=>(
        <div className="card text-white bg-dark mb-3 col-sm-10 col-md-6 col-lg-4 col-xl-3 m-4 col-10">
        <div className="card-header">
          <div className="card-title m-2 d-flex justify-content-between">
            <span>{item.name}</span>
            <span>{item.duration}</span>
          </div>

          <div className="card-title m-2 d-flex justify-content-between">
            <span>Type</span>
            <h5>
              <span className="badge bg-secondary bg-black">{item.type}</span>
            </h5>
          </div>
        </div>

        <div className="card-body">
          <p className="card-text">
           {item.description}
          </p>

          <div className="card-footer d-flex justify-content-center">
            {item.date}
          </div>
        </div>
      </div>
      ))}
      
    </div>
  );
}

export default ActivityCards;
