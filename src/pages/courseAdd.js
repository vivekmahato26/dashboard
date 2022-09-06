import React, { useEffect, useState } from 'react';
import styles from "../styles/courseAdd.module.scss"
import { useSelector,useDispatch } from 'react-redux';
import {getCourses,addCourses} from "../redux/slices/course"
import { Link } from 'react-router-dom';

export default function CourseAdd() {

  const [modal, setModal] = useState(false)
  const [inputData, setInputData] = useState('Full-Stack Development in MEAN')
  const dispatch = useDispatch();

  const toggleModal = () => {
    setModal(!modal)
  }


  useEffect(()=> {dispatch(getCourses())},[])
  // const Course = () => {
    const courses = useSelector((state) => state.course.value)
  // }

  
  
  // For course adding
  
  const addTitle = () => {
    console.log(inputData);
    dispatch(addCourses({
      input : {
        course_name: inputData,
    }}));
    const res = courses.addCourse.__typename;
    if(res === "res") {
      dispatch(getCourses());
    } else {
      console.log(courses.addCourse)
    }
    toggleModal();
    
  }
 


  return (
    <div className={styles.courseContainer} >
      

      <div className={styles.courseDetailContainer}>

        <button onClick={toggleModal} className={styles.courseButton}>Add course</button>

        {modal && (
          <div className={styles.modalBody}>
            <div className={styles.modalContainer}>

              <form action="" className={styles.modalForm}>

                <table>

                  <tr className={styles.lineDiv}>
                    <td>
                      <label htmlFor="" className={styles.lableName}>Title</label>
                    </td>
                    <td>
                      <input type="text" className={styles.inputTitle} value={inputData} onChange={e => setInputData(e.target.value)} />
                    </td>
                  </tr>
                  
                  <tr className={styles.lineDiv}>
                    <td>
                      <label name="mode" htmlFor="" className={styles.lableMode}>Mode</label>
                    </td>
                    <td>
                      <input type="radio" name="mode"  className={styles.inputMode}/> <span  className={styles.spanMode}>Offline</span>
                      <input type="radio" name="mode"  className={styles.inputMode}/> <span  className={styles.spanMode}>Online</span>
                    </td>
                  </tr>


                  <div className={styles.buttonsDiv}>
                    <button onClick={() => { addTitle()}} className={styles.courseCloseButton}>Add course</button>
                    <button onClick={() => {toggleModal()}} className={styles.courseCloseButton}>Close</button>
                  </div>

                </table>
              
              </form>


            </div>
          </div>
        )}


        <div className={styles.courseDetailBoxContainer}>

          <div className={styles.courseDetailBox}>
            <p className={styles.courseHeading}>Front-End Development with React Js</p>

            <div>
              <p className={styles.courseText}>10 Videos</p>
              <p className={styles.courseText}>02 Milestones</p>
              <p className={styles.courseText}>05 Projects</p>
              <p className={styles.courseText}>05 Challenges</p>
            </div>

          </div>
            
          
          {courses && courses.map((c)=>{
            console.log(c);
            return(


              
            
              <Link to={"/module"+c._id} state={{course : c}}>
                <div className={styles.courseDetailBox} >
                  <p className={styles.courseHeading}>{c.course_name}</p>

                  <div>
                    <p className={styles.courseText}>{c.totalVideos}</p>
                    <p className={styles.courseText}>{c.totalAssignments}</p>
                    <p className={styles.courseText}>{c.totalProjects}</p>
                    <p className={styles.courseText}>{c.totalMilestones}</p>
                  </div>
                
                </div>
              </Link>

            
          )})}

        </div>
        
      </div>


    </div>
  )
}
