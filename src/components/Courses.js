import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { list } from "../services/apiService";

const Courses = () => {
  // since in this case data is representing a state,
  // simple data association is not allowed
  const [courses, setCourses] = useState([]);

  // React Hooks that is started at the beginning, when loading a component
  // but useEffect is also started at any change of dependencies
  useEffect(() => {
    list("courses", data => {
      //console.log(data);
      setCourses(data);
    });
    // [] dependency array; when left out useEffect is performed every time
    // if left empty, useEffect is performed once
  }, []);

  return (
    <div className="container">
      <h1>Courses</h1>
      <table>
        <thead>
          <tr>
            <th>Course name</th>
            <th>Points</th>
            <td>
              <Link to="/courses/0">Add new</Link>
            </td>
          </tr>
        </thead>
        <tbody>
          {courses.map(c => (
            // every single element of a collection should have a key
            <tr key={c._id}>
              <td>{c.name}</td>
              <td>{c.points}</td>
              <td>
                <Link to={`/courses/${c._id}`}>Edit</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Courses;
