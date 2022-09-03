import React, { useEffect, useState } from 'react'
import styles from "../styles/modulesAdd.module.scss"
import { getModules,addModules } from "../redux/slices/module"

import { getSections } from "../redux/slices/section"
import { getSectionTitles,addSectionTitles } from "../redux/slices/sectionTitle"
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
    const [text, setText] = useState('Click on module to display Section')
    //  for section function state
    const [sectionText, sectionSetText] = useState('')
    const dispatch = useDispatch();

    const location = useLocation()
    const module = location.state.module.modules
    const moduleHeading = location.state.module.course_name
    const moduleHead = location.state.module
console.log(moduleHead._id);
    
    
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
    
    
    // const getVideoCred = async(videoId) => {
    //     try {
    //         const data = await axios.post("http://localhost:4000/getVideoOTP",{videoId});
    //         console.log(data);
    //     } catch (error) {
            
    //     }
    // }
    useEffect(() => { dispatch(getModules()) }, [])
    
    useEffect(() => { dispatch(getSections()) }, [])
    // useEffect(() => { getVideoCred() }, [])
    
    
    const modules = useSelector((state) => state.modules.value)
    // const sectionTitle = useSelector((state) => state.sectionTitle.value)
    const sectionTitleAdd = useSelector((state) => state.sectionTitle.add)
    const challengeAdd = useSelector((state) => state.challenge.add)
    const projectAdd = useSelector((state) => state.project.add)
    
    // For module click function
    const h = (c) => {
        setText(c)
    }
    // console.log(text._id);

    
    // For sectionTitle
    const z = (s) => {
        sectionSetText(s)

    }

    // For Module adding

    const addTitle = () => {
        console.log(inputData);
        dispatch(addModules({
          input : {
            title: inputData,
            courseID : moduleHead._id
        }}));
        const res = modules.addModules.__typename;
        if(res === "res") {
        dispatch(getModules());
        } else {
        console.log(modules.addModules)
        }
        toggleModal();  
    }

    // For SectionTitle Adding

    const addSectionTitle = () => {
        // console.log(inputData);
        dispatch(addSectionTitles({
          input : {
            title: inputData,
            moduleID : text._id
        }}));
        const res = sectionTitleAdd.addSectionTitle.__typename;
        console.log(res);
        if(res === "res") {
        dispatch(getModules());
        } else {
        console.log(modules.addModules)
        }
        toggleModal();  
    }

    // For Challenge Adding

    const addChallengeFunction = () => {
        // console.log(inputData);
        dispatch(addChallenge({
          input : {
            title: inputData,
            moduleID : text._id
        }}));
        const res = challengeAdd.addChallenge.__typename;
        
        if(res === "res") {
        dispatch(getModules());
        } else {
        console.log(modules.addModules)
        }
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
        const res = projectAdd.addProject.__typename;
        
        if(res === "res") {
        dispatch(getModules());
        } else {
        console.log(modules.addModules)
        }
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

                    <button onClick={toggleModal} className={styles.moduleButton}>Add Module</button>

                    {modal && (
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
                                    <button onClick={() => {toggleModal()}} className={styles.moduleCloseButton}>Close</button>
                                </div>

                            </div>

                            </div>
                        </div>
                    )}

                    <div className={styles.modulesDiv}>

                        {module && module.map((c) => {
                            console.log(c)
                            return (

                                <div className={styles.DetailBox}>
                        
                                    <p className={styles.Heading} onClick={() => h(c)} >{c.title}</p>

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

                        {text.SectionTitle ? text.SectionTitle.map( (s) =>
                            <div className={styles.sectionContainer}>

                                <Link className={styles.sectionLink} to={"/section"} state={{sections: text.SectionTitle}}>      

                                    <div >

                                        <p className={styles.sectionName} onClick={() => z(s)} >{s.title} </p>

                                    </div>
                                    
                                </Link>

                            </div>

                        ) : <div className={styles.sectionContainer}>{text}</div>}

                    </div>

                </div>

            </div>

        </div>

    )
}
