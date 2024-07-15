import Card from "./Card";
import React, { useState } from 'react'

const Cards = (props) => {
    // console.log(category);
    // console.log(props.category);
    // console.log(props.courses);

    let courses=props.courses;
    // console.log(courses);
    let category = props.category;
    const [likedCourses, setLikedCourses] = useState([]);
    //   let allCourse = [];

    // It Returns list of all courses received from the api Response

    // const getCourses = () => {
    //     Object.values(props.courses).forEach((courseCategory) => {
    //         courseCategory.forEach((course) => {
    //             allCourse.push(course);
    //         });
    //     });
    //     return allCourse;
    // };

    
    function getCourses() {
        // category="Lifestyle";
        // console.log(category);
        if (category === "All") {
            let allCourses = [];
            Object.values(courses).forEach(array => {
                array.forEach(courseData => {
                    allCourses.push(courseData);
                });
            });
            return allCourses;
        }
        else
        {
            return courses[category];
        }
    }

    //   console.log(allCourse);
    return (
        <div className="flex flex-wrap justify-center gap-4 mb-4">
            {
                getCourses().map((course) => (
                  <Card course={course} key={course.id} likedCourses={likedCourses}
                   setLikedCourses={setLikedCourses} />
                ))
            }
        </div>
    );
}; 

export default Cards;
