import { useState } from 'react'
import './ClassAbsences.scss'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { students } from './data'
import { Checkbox, CircularProgress } from '@mui/material'

const ClassAbsences = () => {
  const [startDate, setStartDate] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
  }

  return (
    <div className="ClassAbsences">
      <div className="wrapper">
        <div className="info">
          <div className="classInfo">class: Form 1</div>
          <div className="boys">Boys: 30</div>
          <div className="girls">Girls: 40</div>
          <div className="total">Total: 70</div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="upperSection">
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
            <p className="instructions">
              Select absent student by clicking on the box
            </p>
          </div>

          <table>
            <colgroup>
              <col span={1} style={{ width: '5px' }}></col>
            </colgroup>
            <thead>
              <tr>
                <th>S/N</th>
                <th>Image</th>
                <th>Student ID</th>
                <th>Name</th>
                <th>Absent?</th>
                <th>Reason</th>
              </tr>
            </thead>

            <tbody>
              {students.map((student, index) => (
                <tr key={student.id}>
                  <td>{index + 1}</td>
                  <td className="imageTD">
                    <img src={student.image} alt="" />
                  </td>
                  <td>{student.mat}</td>
                  <td className="name">{student.name}</td>
                  <td>
                    <Checkbox
                      // checked={checked}
                      // onChange={handleChange}
                      disabled={loading}
                      inputProps={{ 'aria-label': 'controlled' }}
                    />
                  </td>
                  <td className="inputTD">
                    <input type="text" disabled={loading} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <button disabled={loading} type="submit">
            {loading ? (
              <CircularProgress
                size={15}
                style={{ color: 'white', fontWeight: 'bold' }}
              />
            ) : (
              'Submit'
            )}
          </button>
        </form>
      </div>
    </div>
  )
}

export default ClassAbsences
