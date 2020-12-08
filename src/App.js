import React, { useEffect, useState } from "react";
import CourseList from "./components/CourseList";
import CourseForm from "./components/CourseForm";

function App() {
  const [courses, setCourses] = useState([]);

  const loadCourses = async () => {
    //TODO:load the courses
    try {
      const res = await fetch("/api/courses");
      const courses = await res.json();
      setCourses(courses);
    } catch (err) {
      console.error(err);
      setCourses([]);
    }
  };

  useEffect(() => {
    loadCourses();
  }, []);
  return (
    <div className="container mt-5">
      <h1 className="mb-5 text-center">Course Tracker</h1>
      <CourseForm courseAdded={loadCourses} />
      <CourseList courses={courses} refreshCourses={loadCourses} />
    </div>
  );
}

export default App;
