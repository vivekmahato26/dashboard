import React, { useEffect, useState } from 'react'
import styles from "../styles/projectAdd.module.scss"
import { Collapse } from 'antd';
import accodionIcon from "../media/accodion_3dots.png";

const { Panel } = Collapse;

const header1 = `Section 1`
const header2 = `Section Sub-heading`

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;


export default function projectAdd() {
    const y=1;
    
    const r = Math.ceil((Math.random() + 1)*3);

    console.log(r);
  return (

    
    <div className={styles.projectContainer}>

        <div className={styles.projectGrid}>

            <div className={styles.projectLeftDiv}>
                <Collapse accordion className={styles.accordionDiv} expandIconPosition="end">
                    <Panel header={
                        <div>
                            <div className={styles.accordionHeading}>{header1}</div>
                            <div className={styles.accordionSubHeading}>{header2}</div>
                        </div>
                    } key={r}>
                        <p className={styles.accodionText}>
                            {text} 
                            <span className={styles.accodionIconSpan}>
                                <img className={styles.accodionIcon} src={accodionIcon} alt="" />
                            </span>
                        </p>
                        <p className={styles.accodionText}>
                            {text} 
                            <span className={styles.accodionIconSpan}>
                                <img className={styles.accodionIcon} src={accodionIcon} alt="" />
                            </span>
                        </p>
                        <button className={styles.accodionButton}>Add</button>
                    </Panel>
                    <Panel header={
                        <div>
                            <div className={styles.accordionHeading}>{header1}</div>
                            <div className={styles.accordionSubHeading}>{header2}</div>
                        </div>
                    } key={r}>
                        <p className={styles.accodionText}>
                            {text} 
                            <span className={styles.accodionIconSpan}>
                                <img className={styles.accodionIcon} src={accodionIcon} alt="" />
                            </span>
                        </p>
                        <p className={styles.accodionText}>
                            {text} 
                            <span className={styles.accodionIconSpan}>
                                <img className={styles.accodionIcon} src={accodionIcon} alt="" />
                            </span>
                        </p>
                        <button className={styles.accodionButton}>Add</button>
                    </Panel>
                    <Panel header={
                        <div>
                            <div className={styles.accordionHeading}>{header1}</div>
                            <div className={styles.accordionSubHeading}>{header2}</div>
                        </div>
                    } key={r}>
                        <p className={styles.accodionText}>
                            {text} 
                            <span className={styles.accodionIconSpan}>
                                <img className={styles.accodionIcon} src={accodionIcon} alt="" />
                            </span>
                        </p>
                        <p className={styles.accodionText}>
                            {text} 
                            <span className={styles.accodionIconSpan}>
                                <img className={styles.accodionIcon} src={accodionIcon} alt="" />
                            </span>
                        </p>
                        <button className={styles.accodionButton}>Add</button>
                    </Panel>                                        
                </Collapse>
            </div>

            <div className={styles.projectRightDiv}>
                <form action="">
                    <div className={styles.projectTitle}>
                        <label htmlFor="">Title</label>
                        <input type="text" />
                    </div>
                    <div className={styles.projectTitle}>
                        <label className={styles.objectivesLabel} htmlFor="">Objectives</label>
                        <input type="text" />
                    </div>
                    <div className={styles.projectTaskTitle}>
                        <div className={styles.projectTitle}>
                            <label htmlFor="">Task</label>
                            {/* <input className={styles.taskInput} type="textarea" /> */}
                            <textarea name="" className={styles.addTaskTextArea} cols="60" rows="5"></textarea>
                        </div>
                            <button className={styles.taskButton} type='submit'>Add Task</button>
                    </div>
                    <div className={styles.projectImageDiv}>
                        <label className={styles.uploadImageLabel} htmlFor="">Video</label>
                        <input className={styles.fileImageInput} type="file" />
                        <button className={styles.uploadButton}>Upload</button>
                    </div>
                    <div className={styles.projectImageDiv}>
                        <label className={styles.uploadImageLabel} htmlFor="">Resources</label>
                        <input className={styles.fileImageInput} type="file" />
                        <button className={styles.uploadButton}>Upload</button>
                    </div>
                    
                    <div className={styles.projectTitle}>
                        <label htmlFor="">Source Code</label>
                        {/* <input className={styles.taskInput} type="textarea" /> */}
                        <textarea name="" className={styles.addTaskTextArea} cols="60" rows="5"></textarea>
                    </div>
                           
                    <div className={styles.projectImageDiv}>
                        <label className={styles.uploadImageLabel} htmlFor=""></label>
                        <input className={styles.fileImageInput} type="file" />
                        <button className={styles.uploadButton}>Upload</button>
                    </div>
                    <button className={styles.saveButton}>save</button>
                </form>
            </div>

        </div>

    </div>
  )
}
