import { useState } from 'react'
import './ClassAbsences.scss'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import Table from '../../components/Table/Table'

const ClassAbsences = () => {
  const [startDate, setStartDate] = useState(null)
  console.log(startDate)
  return (
    <div className="ClassAbsences">
      <div className="wrapper">
        <div className="info">
          <div className="classInfo">class: Form 1</div>
          <div className="boys">Boys: 30</div>
          <div className="girls">Girls: 40</div>
          <div className="total">Total: 70</div>
        </div>
        <form>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            dateFormat="dd-MM-yyyy"
            maxDate={new Date()}
            filterDate={(date) => date.getDay() !== 6 && date.getDay() !== 0}
            isClearable
            showYearDropdown
            scrollableYearDropdown
            placeholderText="Select a date"
            className="datePicker"
          />
          <div className="classList">
            <Table />
          </div>
        </form>
      </div>
    </div>
  )
}

export default ClassAbsences
