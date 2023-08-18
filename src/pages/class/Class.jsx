import "./Class.scss";
import { Link, useParams } from "react-router-dom";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteIcon from "@mui/icons-material/Delete";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../../components/loadingSpinner/Spinner";
import Error from "../../components/Error/Error";
import { authCall } from "../../apiCalls/index";

const Class = () => {
  const { id: class_id } = useParams();
  const { data, isError, isLoading } = useQuery({
    queryKey: ["class", class_id],
    queryFn: () =>
      authCall.get(`classes/get_class/${class_id}`).then((res) => res.data),
    retry: 2,
  });

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    const errorMsg = "Something went wrong. Please reload the page.";
    return <Error errorMsg={errorMsg} />;
  }

  const { students, enrollment, info, master, prefects } = data;

  return (
    <div className="class">
      <div className="mainClassContainer">
        <div className="topContainer">
          <div className="leftContainer">
            <div className="nameYear">
              <h1>Name: {info.name}</h1>
              <h3>Year: {info.year}</h3>
            </div>
            <div className="leaders">
              {!master ? (
                ".noMaster"
              ) : (
                <div className="masterInfo">
                  <img src={master.image} alt="" />
                  <div className="masterBasicInfo">
                    <h1>{master.name}</h1>
                    <p>{master.department}</p>
                    <p>(Class Master)</p>
                  </div>
                </div>
              )}
              <div className="prefectsContainer">
                {prefects.length > 0 ? (
                  <div className="prefects">We have prefects</div>
                ) : (
                  <div className="noPrefects">No Prefects</div>
                )}
              </div>
            </div>
          </div>
          <div className="rightContainer">Enrollment Pie Chart</div>
        </div>

        <div className="bottomContainer">
          <h1>Student</h1>
          {/* {students.map((student) => (
            <Link
              to={`/admin/students/${student.id}`}
              className="studentClassCard link"
              key={student.id}
            >
              <img src={student.image} alt="" />
              <div className="name">
                {student.name} ({student.mat})
              </div>
            </Link>
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default Class;
