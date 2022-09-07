import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import {
  getSections,
  addSections,
  getSectionsBySectionTitle,
} from "../redux/slices/section";
import { getSectionTitlesByModule  } from "../redux/slices/sectionTitle";
import { getModules } from "../redux/slices/section";
import accodionIcon from "../media/accodion_3dots.png";

import styles from "../styles/sectionAdd.module.scss";
import { Collapse } from "antd";
import "antd/dist/antd.css";
import { useLocation,useNavigate } from "react-router-dom";
const { Panel } = Collapse;

export default function SectionAdd() {
  const navigate = useNavigate();

  const location = useLocation();
  const videoRef = useRef();

  const moduleId = location.state.moduleId;

  const dispatch = useDispatch();
  let sections = [];
  useEffect(()=>{
    dispatch(getSectionTitlesByModule({moduleId}))
  },[])
   sections = useSelector((state) => state.sectionTitle.value);
  // console.log(sections);

  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };

  // for vdoCipher video upload

  const fileRef = useRef();
  const [creds, setCreds] = useState({});
  const getCreds = async () => {
    // console.log(fileRef)
    try {
      const CredData = await axios.post("https://pay.temanedtech.com/getCreds", {
        fileName: fileRef.current.files[0].name,
        folderId: "3a62c56b6bae4b36bb18de1415bb59f0",
      });
      setCreds(CredData.data);
      // console.log(CredData.data);
    } catch (error) {
      console.log(error);
    }
  };

  // for add btn function to get sectionTitle Id
  const [text, setText] = useState("");

  const h = (c) => {
    setText(c);
    toggleModal();
  };
  // console.log(text);

  // For Section adding

  const [inputData, setInputData] = useState({
    title: "",
    video: "",
    videoId: "",
    resource: "",
    description: "",
    type: "",
    code: "",
  });

  // const uploadVideo = () => {
  //   setInputData({video: videoRef.current.files[0]})
  // }

  const addTitle = () => {
    console.log(inputData);
    dispatch(
      addSections({
        input: {
          title: inputData.title,
          video: inputData.video,
          videoId: creds.videoId,
          sectionTitleID: text._id,
          resources: {
            type: inputData.type,
            url: inputData.url,
          },
          about: {
            description: inputData.description,
          },
          sourceCode: {
            type: inputData.type,
            code: inputData.code,
          },
          moduleId
        },
      })
    );
    toggleModal();
  };

  return (
    <>
      <div className={styles.sectionContainer}>
        <div className={styles.sectionGrid}>
          <div className={styles.sectionLeftGrid}>
            {sections.length ?
              sections.map((c) => {
                return (
                  <div className={styles.sectionDetailBox}>
                    <Collapse accordion={true} expandIconPosition="end">
                      <Panel
                        header={
                          <div>
                            <div> {c.title} </div>
                            <div> {c.resource} </div>
                          </div>
                        }
                        className={styles.sectionPanal}
                      >
                        {c.Section &&
                          c.Section.map((s) => {
                            return (
                              <>
                                <div className={styles.accodionText}>
                                  <p className={styles.sectionText}>
                                    {s.title}
                                  </p>
                                  <span className={styles.accodionIconSpan}>
                                    <img
                                      className={styles.accodionIcon}
                                      src={accodionIcon}
                                      alt=""
                                    />
                                  </span>
                                </div>
                              </>
                            );
                          })}
                        <div className={styles.accodionAddBtnContainer}>
                          <button
                            onClick={() => h(c)}
                            className={styles.accodionAddBtn}
                          >
                            Add
                          </button>
                        </div>
                      </Panel>
                    </Collapse>
                  </div>
                );
              }) :
              <button onClick={() => navigate(-1)}>Add Sections</button>
              }
          </div>

          <div className={styles.sectionRightGrid}>
            <div
              className={
                modal
                  ? styles.sectionRightContainer
                  : styles.sectionRightContainerNone
              }
            >
              {modal && (
                <div className={styles.modalBody}>
                  <div className={styles.modalContainer}>
                    <div className={styles.modalForm}>
                      <div>
                        <div className={styles.projectTitle}>
                          <label htmlFor="">Title</label>
                          <input
                            type="text"
                            value={inputData.title}
                            onChange={(event) =>
                              setInputData({
                                ...inputData,
                                title: event.target.value,
                              })
                            }
                          />
                        </div>
                        <div className={styles.projectTitle}>
                          <label className={styles.objectivesLabel} htmlFor="">
                            Description
                          </label>
                          <input
                            type="text"
                            value={inputData.description}
                            onChange={(event) =>
                              setInputData({
                                ...inputData,
                                description: event.target.value,
                              })
                            }
                          />
                        </div>
                        <div className={styles.projectTaskTitle}>
                          <div className={styles.projectTitle}>
                            <label htmlFor="">About Video</label>
                            {/* <input className={styles.taskInput} type="textarea" /> */}
                            <textarea
                              name=""
                              className={styles.addTaskTextArea}
                              cols="60"
                              rows="5"
                            ></textarea>
                          </div>
                          <button className={styles.taskButton}>
                            Add Task
                          </button>
                        </div>
                        <div className={styles.projectImageDiv}>
                          <label className={styles.uploadImageLabel} htmlFor="">
                            Video
                          </label>

                          <form
                            action="https://vdo-ap-southeast.s3-accelerate.amazonaws.com"
                            method="post"
                            enctype="multipart/form-data"
                          >
                            {creds.clientPayload && (
                              <>
                                <input
                                  type="hidden"
                                  name="key"
                                  value={creds.clientPayload.key}
                                />
                                <input
                                  type="hidden"
                                  name="success_action_status"
                                  value="201"
                                />
                                <input
                                  type="hidden"
                                  name="success_action_redirect"
                                  // value="http://localhost:3000/section"
                                />
                                <input
                                  type="hidden"
                                  name="x-amz-credential"
                                  value={
                                    creds.clientPayload["x-amz-credential"]
                                  }
                                />
                                <input
                                  type="hidden"
                                  name="x-amz-signature"
                                  value={creds.clientPayload["x-amz-signature"]}
                                />
                                <input
                                  type="hidden"
                                  name="x-amz-algorithm"
                                  value={creds.clientPayload["x-amz-algorithm"]}
                                />
                                <input
                                  type="hidden"
                                  name="x-amz-date"
                                  value={creds.clientPayload["x-amz-date"]}
                                />
                                <input
                                  type="hidden"
                                  name="policy"
                                  value={creds.clientPayload.policy}
                                />
                              </>
                            )}

                            <input
                              ref={fileRef}
                              className={styles.fileImageInput}
                              type="file"
                              onChange={getCreds}
                            />
                            <button className={styles.uploadButton} type="submit" >Upload</button>
                            {/*<input type="submit" name="submit" value="Upload" />*/}
                          </form>
                        </div>
                        <div className={styles.projectImageDiv}>
                          <label className={styles.uploadImageLabel} htmlFor="">
                            Resources
                          </label>
                          <input
                            className={styles.fileImageInput}
                            type="file"
                            accept="image/*"
                          />
                          <button className={styles.uploadButton}>
                            Upload
                          </button>
                        </div>
                        <div className={styles.projectTitle}>
                          <label htmlFor="">Source Code</label>
                          {/* <input className={styles.taskInput} type="textarea" /> */}
                          <textarea
                            name=""
                            className={styles.addTaskTextArea}
                            cols="60"
                            rows="5"
                            value={inputData.type}
                            onChange={(event) =>
                              setInputData({
                                ...inputData,
                                type: event.target.value,
                              })
                            }
                          ></textarea>
                        </div>

                        <div className={styles.projectImageDiv}>
                          <label
                            className={styles.uploadImageLabel}
                            htmlFor=""
                          ></label>
                          <input
                            className={styles.fileImageInput}
                            type="file"
                            value={inputData.code}
                          />
                          <button
                            className={styles.uploadButton}
                            onClick={(event) =>
                              setInputData({
                                ...inputData,
                                code: event.target.value,
                              })
                            }
                          >
                            Upload
                          </button>
                        </div>
                        <button
                          onClick={() => {
                            addTitle();
                          }}
                          className={styles.saveButton}
                        >
                          save
                        </button>
                      </div>

                      <div className={styles.buttonsDiv}>
                        <button
                          onClick={() => {
                            toggleModal();
                          }}
                          className={styles.moduleCloseButton}
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
