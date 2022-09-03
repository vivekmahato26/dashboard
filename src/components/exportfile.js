import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";
import Styles from "../styles/export.module.scss";
import { useSelector } from "react-redux";

export const ExportToExcel = () => {
  const sdata = useSelector((state) => state.student.value);
  const fileType = "xlsx";
  const exportToCSV = () => {
    const ws = XLSX.utils.json_to_sheet(sdata);
    const wb = {
      Sheets: { StudentDetails: ws },
      SheetNames: ["StudentDetails"],
    };

    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, "students Data" + ".xlsx");
  };
  return (
    <button className={Styles.download} onClick={exportToCSV}>
      Downoad to excel
    </button>
  );
};
