import React, { useEffect, useState } from 'react';
import styles from "../styles/batchAdd.module.scss"
import { useSelector,useDispatch } from 'react-redux';
import {getBatches, addBatches} from "../redux/slices/batch"
import {getCourses} from "../redux/slices/course"
export default function BatchAdd() {

  const [modal, setModal] = useState(false)
  
  const [inputData, setInputData] = useState({
    start:"",
    end:"",
    price:"",
    offerId:"",
    discount:"",
    currentStatus:"",
  })
 
  const dispatch = useDispatch();

  const toggleModal = () => {
    setModal(!modal)
  }
 

  useEffect(()=> {dispatch(getBatches())}, [])

  const batches = useSelector((state) => state.batch.value)

  useEffect(()=> {dispatch(getCourses())},[])
  const courses = useSelector((state) => state.course.value)

  // For adding batch

  const addTitle = () => {
    console.log(inputData);
    dispatch(addBatches({
      input : {
        start: inputData.start,
        end:inputData.end,
        price:inputData.price,
        offerId:inputData.offerId,
        discount:inputData.discount,
        currentStatus:inputData.currentStatus
      }}));
      const res = batches.addBatches.__typename;
      if(res === "res") {
        dispatch(getBatches());
      } else {
        console.log(batches.addBatches)
      }
      toggleModal();
    
  }


  return (
    <div className={styles.batchContainer} >

        <button onClick={toggleModal} className={styles.batchButton}>Add batch</button>

      <div className={styles.batchDetailContainer}>


        {modal && (
          <div className={styles.modalBody}>
            <div className={styles.modalContainer}>

              <form action="" className={styles.modalForm}>

              <table>

                <tr className={styles.lineDiv}>
                  <td>
                    <label htmlFor="" className={styles.lableName}>Batch Start</label>
                  </td>
                  <td>
                    <input type="text" className={styles.inputTitle} value={inputData.start} onChange= {(event) => setInputData({...inputData,start:event.target.value})} />
                  </td>
                </tr> 
                <tr className={styles.lineDiv}>
                  <td>
                    <label htmlFor="" className={styles.lableName}>Batch End</label>
                  </td>
                  <td>
                    <input type="text" className={styles.inputTitle} value={inputData.end} onChange= {(event) => setInputData({...inputData,end:event.target.value})} />
                  </td>
                </tr>
                <tr className={styles.lineDiv}>
                  <td>
                    <label htmlFor="" className={styles.lableName}>Price</label>
                  </td>
                  <td>
                    <input type="text" className={styles.inputTitle} value={inputData.price} onChange= {(event) => setInputData({...inputData,price:event.target.value})} />
                  </td>
                </tr>
                <tr className={styles.lineDiv}>
                  <td>
                    <label htmlFor="" className={styles.lableName}>Offer ID</label>
                  </td>
                  <td>
                    <input type="text" className={styles.inputTitle} value={inputData.offerId} onChange= {(event) => setInputData({...inputData,offerId:event.target.value})} />
                  </td>
                </tr>
                <tr className={styles.lineDiv}>
                  <td>
                    <label htmlFor="" className={styles.lableName}>Discount %</label>
                  </td>
                  <td>
                    <input type="text" className={styles.inputTitle} value={inputData.discount} onChange= {(event) => setInputData({...inputData,discount:event.target.value})} />
                  </td>
                </tr>
                <tr className={styles.lineDiv}>
                  <td>
                    <label htmlFor="" className={styles.lableName}>Current Status</label>
                  </td>
                  <td>
                    <input type="text" className={styles.inputTitle} value={inputData.currentStatus} onChange= {(event) => setInputData({...inputData,currentStatus:event.target.value})} />
                  </td>
                </tr>
                
              </table>
                

                <button onClick={() => {addTitle()}} className={styles.batchCloseButton}>Add batch</button>
                <button onClick={() => {toggleModal()}} className={styles.batchCloseButton}>Close</button>

              
              </form>


            </div>
          </div>
        )}


        <div className={styles.batchDetailBoxContainer}>

          {batches && batches.map((c)=>{
            // console.log(c);
          return(

            <div className={styles.batchDetailBox}>
              <p className={styles.batchHeading}>Batch ID : {c._id}</p>

              <div>
                <p className={styles.batchText}>  <p>Batch Start:</p> <p>{c.start}</p> </p>
                <p className={styles.batchText}>  <p>Batch End:</p> <p>{c.end}</p> </p>
                <p className={styles.batchText}>  <p>EnrolledStudents:</p> <p></p> </p>
                <p className={styles.batchText}>  <p>Total Revenue:</p> <p>{c.price}</p> </p>
                <p className={styles.batchText}>  <p>Offer ID:</p> <p>{c.offerId}</p> </p>
                <p className={styles.batchText}>  <p>Discount %: </p> <p>{c.discount}</p> </p>
                <br />


                <p className={styles.batchText}> <p>No. of Video:</p> <p>   </p> </p>
                <p className={styles.batchText}>  <p>Total Duration:</p> <p>  </p> </p>
                <p className={styles.batchText}> <p>No. of Projects:</p> <p>   </p> </p>
                <p className={styles.batchText}>  <p>No. of Challenges:</p> <p>  </p> </p>
                <p className={styles.batchText}>  <p>No. of Assignments:</p> <p>  </p> </p>


                <br />
                <p className={styles.batchText}>  <p>Current Status:</p> <p>{c.currentStatus}</p> </p>
              </div>

            </div>


          )})}

        </div>
        

        
      </div>


    </div>
  )
}
