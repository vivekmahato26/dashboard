// import React, { useEffect, useState } from 'react'
// import { useSelector,useDispatch } from 'react-redux';
// import {getSectionTitles} from "../redux/slices/sectionTitle"

// import styles from "../styles/sectionTitleAdd.module.scss"
// import { Collapse } from 'antd';
// import 'antd/dist/antd.css';
// import { Link } from 'react-router-dom';
// const { Panel } = Collapse;

// export default function SectionTitleAdd() {

//   const [inputData, setInputData] = useState('')


//   const sectionTitles = useSelector((state) => state.sectionTitles.value)



  
//   return (
//     <>

//       {/* <Link to={"/module"+c.id}> */}



//         <div>Lorem ipsum, dolor sit amet consectetur adipisicing</div>
      
//         <div className={styles.sectionTitleContainer}>

//           <div className={styles.sectionTitleGrid}>
//             <div className={styles.leftGrid}>

//               {sectionTitles && sectionTitles.map((c,index)=>{
//                 return(
            
              
//                 <div className={styles.sectionTitleDetailBox} key={Math.random()+index}>


//                   {/* <Collapse accordion={true} defaultActiveKey={['1']}>
//                     <Panel header={c.title} key={(index+1)} className={styles.sectioPanal}>
//                       <div>
//                         <p className={styles.sectionTitleText}>{c.description}</p>
//                         <p className={styles.sectionTitleText}>{c.createdAt}</p>
//                         <p className={styles.sectionTitleText}>{c.updatedAt}</p>
//                       </div>  
//                     </Panel>
//                   </Collapse> */}
                
//                 </div>
                
            
//               )})}

//             </div>

//           </div>
          
//         </div>

//       {/* </Link> */}
//     </>
//   )
// }
