import { useEffect, useState } from "react";
import { insert, read, update, remove } from "../services/apiService";

// props or { match, history }
const Course = props => {
  // match is an object within props that contains url
  // including parameters of a path
  const [id] = useState(props.match.params.id);
  // course is a state variable
  const [course, setCourse] = useState({
    _id: "0",
    name: "",
    points: 0
  });
  const [inputRequired, setInputRequired] = useState({});

  useEffect(() => {
    if (id !== "0") {
      read("courses", id, data => {
        if (data) setCourse(data);
      });
    }
    // put here all dependencies that will couse some changes
  }, [id]);

  // cannot be an arrow function
  function changeHandler(event) {
    setCourse({
      // existing data
      ...course,
      // field affected by change (it has name and value)
      [event.target.name]: event.target.value
    });
  }

  const back = () => {
    props.history.push("/courses");
  };

  const save = () => {
    if (course.name && course.points) {
      if (id === "0") {
        insert(
          "courses",
          (({ name, points }) => ({ name, points }))(course),
          data => {
            if (data) return props.history.push("/courses");
            console.log("There was an error during save data");
          }
        );
      } else {
        update("courses", id, course, data => {
          if (data) return props.history.push("/courses");
          console.log("There was an error during save data");
        });
      }
    } else {
      if (!course.name && !course.points) {
        setInputRequired({
          nameError: "Please fill out this field.",
          pointsError: "Please fill out this field."
        })
      } else if (!course.name) {
        setInputRequired({
          nameError: "Please fill out this field.",
          pointsError: ""
        })
      } else {
        setInputRequired({
          nameError: "",
          pointsError: "Please fill out this field."
        })
      }
    }
  };

  const del = () => {
    remove("courses", id, data => {
      props.history.push("/courses");
    });
  };
  
  return (
    <div className="container">
      <h2>Course</h2>
      <form className="input-form">
        <div style={{ margin: "12px 0" }}>
          <label htmlFor="name">Course name: </label>
          <input
            type="text"
            name="name"
            value={course.name}
            onChange={changeHandler}
            style={{ width: "60%" }}
          />
          <span style={{color: "red"}}>{inputRequired.nameError}</span>
        </div>
        <div style={{ margin: "12px 0" }}>
          <label htmlFor="points">Course points: </label>
          <input
            type="text"
            name="points"
            value={course.points}
            onChange={changeHandler}
            style={{ width: "60%" }}
          />
           <span style={{color: "red"}}>{inputRequired.pointsError}</span>
        </div>
        <hr />
        {id !== "0" && (
          <div className="left">
            <button type="button" onClick={del}>
              DELETE
            </button>
          </div>
        )}
        <div className="right">
          <button type="button" onClick={back}>
            BACK
          </button>
          &nbsp;&nbsp;
          <button type="button" onClick={save}>
            SAVE
          </button>
        </div>
      </form>
    </div>
  );
};

export default Course;
