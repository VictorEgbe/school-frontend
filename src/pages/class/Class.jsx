import "./Class.scss";
import { Link, useParams } from "react-router-dom";
import Avatar from "../../assets/avatar.png";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../../components/loadingSpinner/Spinner";
import Error from "../../components/Error/Error";
import { authCall } from "../../apiCalls/index";
import BarChart from "./Enrollment";

const Class = () => {
  const { id: class_id } = useParams();
  const { data, isError, isLoading, error } = useQuery({
    queryKey: ["class", class_id],
    queryFn: () =>
      authCall.get(`classes/get_class/${class_id}`).then((res) => res.data),
    retry: 2,
  });

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    const errorMsg = error.response
      ? error.response.data.error
      : "Something went wrong. Please reload the page.";
    return <Error errorMsg={errorMsg} />;
  }
  const { students, enrollment, info, authorities } = data;

  return (
    <div className="class">
      <div className="mainClassContainer">
        <div className="topContainer">
          <div className="leftContainer">
            <div className="top">
              <div className="basicInfo">
                {info.name} <span>({info.year})</span>
              </div>

              <div className="actions">
                <button className="editBtn link" title="Edit class Info">
                  <EditIcon sx={{ fontSize: "16px" }} />
                </button>
                <button title="Delete Class" className="deleteBtn">
                  <DeleteIcon sx={{ fontSize: "16px" }} />
                </button>
              </div>
            </div>

            <div className="bottom">
              {authorities.length === 0 ? (
                <div className="noAuthority">
                  No class master and class prefect assigned for this class
                </div>
              ) : (
                <div className="authorities">
                  {authorities.map((authority, index) => (
                    <Link
                      to={
                        authority.role === "Class Master"
                          ? `/teachers/${authority.id}`
                          : `/students/${authority.id}`
                      }
                      className="authority link"
                      key={index}
                    >
                      <img
                        src={authority.image ? authority.image : Avatar}
                        alt={authority.name}
                      />
                      <div>
                        <p>{authority.name}</p>
                        <p>{authority.role}</p>
                        <p>{info.year}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="rightContainer">
            <BarChart enrollment={enrollment} />
          </div>
        </div>

        <div className="bottomContainer">
          <div className="allStudents">
            {students.map((student) => (
              <Link
                to={`/students/${student.id}`}
                className="studentClassCard link"
                key={student.id}
              >
                <img src={student.image ? student.image : Avatar} alt="" />
                <div className="name">{student.name}</div>
                <div className="studentMat">{student.mat}</div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Class;
