import React, { useEffect, useState } from 'react'
import styles from "../styles/modulesAdd.module.scss"
import { getModules,addModules,getModulesByCourse } from "../redux/slices/module"

import { getSections } from "../redux/slices/section"
import { addSectionTitles,getSectionTitlesByModule } from "../redux/slices/sectionTitle"
import { getChallenge,addChallenge } from "../redux/slices/challenge"
import { getProject,addProject } from "../redux/slices/project"

import image1 from "../media/home.png";

import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import axios from 'axios'



export default function ModuleAdd() {

    // for module popup state
    const [modal, setModal] = useState(false)

    const [modalProject, setModalProject] = useState(false)
    const [modalChallenge, setModalChallege] = useState(false)
    const [modalSection, setModalSection] = useState(false)
    // for module function state
    const [inputData, setInputData] = useState('')
    //  for sectionTitle function state
    const [text, setText] = useState(0)
    //  for section function state
    const [sectionText, sectionSetText] = useState('')
    const dispatch = useDispatch();

    const location = useLocation()
    const moduleHeading = location.state.course.course_name
    const course = location.state.course
    const module = useSelector(state => state.modules.getModulesByCourse);
    
    
    const toggleModal = () => {
        setModal(!modal)
    }
    const toggleProjectModal = () => {
        setModalProject(!modalProject)
    }
    const toggleSectionTitleModal = () => {
        setModalSection(!modalSection)
    }
    const toggleChallengeModal = () => {
        setModalChallege(!modalChallenge)
    }
    
    useEffect(() => { dispatch(getModules()) }, [])
    
    useEffect(() => { dispatch(getSections()) }, [])
    useEffect(() => { dispatch(getModulesByCourse({courseId: course._id})) }, [])

    const sectionTitles = useSelector((state) => state.sectionTitle.value)
    const challengeAdd = useSelector((state) => state.challenge.add)
    const projectAdd = useSelector((state) => state.project.add)
    
    // For module click function
    const getSectionTitles = (c) => {
        setText(c);
       dispatch(getSectionTitlesByModule({moduleId: c._id}))
    }
    // console.log(text._id);

    
    // For sectionTitle
    const z = (s) => {
        sectionSetText(s)

    }

    // For Module adding

    const addTitle = () => {
        dispatch(addModules({
          input : {
            title: inputData,
            courseID : course._id
        },dispatch}));
        toggleModal();  
    }

    // For SectionTitle Adding

    const addSectionTitle = () => {
        // console.log(inputData);
        dispatch(addSectionTitles({
          input : {
            title: inputData,
            moduleID : text._id,
        }}));
        toggleSectionTitleModal();  
    }

    // For Challenge Adding

    const addChallengeFunction = () => {
        // console.log(inputData);
        dispatch(addChallenge({
          input : {
            title: inputData,
            moduleID : text._id
        }}));
        toggleModal();  
    }


    // For Project Adding

    const addProjectFunction = () => {
        console.log(inputData);
        dispatch(addProject({
          input : {
            title: inputData,
            moduleID : text._id
        }}));
        toggleProjectModal();  
    }

    return (
        <div className={styles.moduleContainer}>

            <div className={styles.moduleHeader}>
                <img className={styles.homeIcon} src={image1} alt="" />
                <div className={styles.headerText}> <span className={styles.headerTextArrow}>{`>`}</span>  {moduleHeading}</div>
            </div>

            <div className={styles.moduleGrid}>

                <div className={styles.moduleLeft}>

                    <button onClick={toggleSectionTitleModal} className={styles.moduleButton}>Add Module</button>

                    {modalSection && (
                        <div className={styles.modalBody}>
                            <div className={styles.modalContainer}>

                            <div className={styles.modalForm}>

                                <div className={styles.lineDiv}>
                                    <label htmlFor="" className={styles.lableName}>Title</label>
                                    <input type="text" className={styles.inputTitle}  value={inputData} onChange={e => setInputData(e.target.value)} />
                                </div>                                                            

                                <div className={styles.lineDiv}>
                                    <label htmlFor="" className={styles.lableDescription}>Description</label>
                                    <input type="text" className={styles.inputDescription} />
                                </div>

                                <div className={styles.buttonsDiv}>
                                    <button onClick={() => {addTitle()}} className={styles.moduleCloseButton}>Add Module</button>
                                    <button onClick={() => {toggleSectionTitleModal()}} className={styles.moduleCloseButton}>Close</button>
                                </div>

                            </div>

                            </div>
                        </div>
                    )}

                    <div className={styles.modulesDiv}>

                        {module && module.map((c) => {
                            return (

                                <div className={styles.DetailBox}>
                        
                                    <p className={styles.Heading} onClick={() => getSectionTitles(c)} >{c.title}</p>

                                </div>

                            )
                        })}

                    </div>


                </div>

                <div className={styles.moduleRight}>

                    <div className={styles.moduleBtnDiv}>

                        {/* For SectionTitle popup */}

                        <button onClick={toggleSectionTitleModal} className={styles.sectionBtn}>Create Section</button>

                        {modalSection && (
                        <div className={styles.modalBody}>
                            <div className={styles.modalContainer}>

                                <div className={styles.modalForm}>

                                    <div className={styles.lineDiv}>
                                        <label htmlFor="" className={styles.lableName}>Title</label>
                                        <input type="text" className={styles.inputTitle} value={inputData} onChange= {(event) => setInputData(event.target.value)} />
                                    </div>

                                    <div className={styles.lineDiv}>
                                        <label htmlFor="" className={styles.lableDescription}>Description</label>
                                        <input type="text" className={styles.inputDescriptionSection} />
                                    </div>

                                    <div className={styles.buttonsDiv}>
                                        <button onClick={() => {addSectionTitle()}} className={styles.moduleCloseButton}>Add SectionTitle</button>
                                        <button onClick={() => {toggleSectionTitleModal()}} className={styles.moduleCloseButton}>Close</button>
                                    </div>
                                
                                </div>

                            </div>
                        </div>
                        )}


                        {/* For Challenge popup */}
                        
                        <button onClick={toggleChallengeModal} className={styles.sectionBtn}>Add Challenge</button>

                        {modalChallenge && (
                        <div className={styles.modalBody}>
                            <div className={styles.modalContainer}>

                            <div className={styles.modalForm}>

                                <div className={styles.lineDiv}>
                                    <label htmlFor="" className={styles.lableName}>Title</label>
                                    <input type="text" className={styles.inputTitle} value={inputData} onChange= {(event) => setInputData(event.target.value)} />
                                </div>

                                <div className={styles.lineDiv}>
                                    <label htmlFor="" className={styles.lableDescription}>Description</label>
                                    <input type="text" className={styles.inputDescription} />
                                </div>

                                <div className={styles.buttonsDiv}>
                                    <button onClick={() => {addChallengeFunction()}} className={styles.moduleCloseButton}>Add Challenge</button>
                                    <button onClick={() => {toggleChallengeModal()}} className={styles.moduleCloseButton}>Close</button>
                                </div>
                            
                            </div>


                            </div>
                        </div>
                        )}


                        {/* For Project Popup */}
                        <button onClick={toggleProjectModal} className={styles.sectionBtn}>Add Project</button>

                        {modalProject && (
                        <div className={styles.modalBody}>
                            <div className={styles.modalContainer}>

                            <div className={styles.modalForm}>

                                <div className={styles.lineDiv}>
                                    <label htmlFor="" className={styles.lableName}>Title</label>
                                    <input type="text" className={styles.inputTitle} value={inputData} onChange= {(event) => setInputData(event.target.value)} />
                                </div>
                                

                                <div className={styles.lineDiv}>
                                    <label htmlFor="" className={styles.lableDescription}>Description</label>
                                    <input type="text" className={styles.inputDescription} />
                                </div>

                                <div className={styles.buttonsDiv}>
                                    <button onClick={() => addProjectFunction()} className={styles.moduleCloseButton}>Add Project</button>
                                    <button onClick={() => {toggleProjectModal()}} className={styles.moduleCloseButton}>Close</button>
                                </div>
                            
                            </div>


                            </div>
                        </div>
                        )}

                    </div>


                    <div className={styles.sectionRenderDiv}>

                        {sectionTitles ? sectionTitles.map( (s) =>
                            <div className={styles.sectionContainer}>

                                <Link className={styles.sectionLink} to={"/section"} state={{moduleId:text._id}}>      

                                    <div >

                                        <p className={styles.sectionName} onClick={() => z(s)} >{s.title} </p>

                                    </div>
                                    
                                </Link>

                            </div>

                        ) : <div className={styles.sectionContainer}>Click on module to display Section</div>}

                    </div>

                </div>

            </div>

        </div>

    )
}
