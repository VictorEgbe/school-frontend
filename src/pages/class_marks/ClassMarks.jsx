import { useState } from 'react'
import './ClassMarks.scss'
import { students, subjects } from './data'
import { CircularProgress } from '@mui/material'

const ClassMarks = () => {
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
  }

  return (
    <div className="classMarks">
      <div className="wrapper">
        <div className="info">
          <div className="classInfo">class: Form 1</div>
          <div className="boys">Boys: 30</div>
          <div className="girls">Girls: 40</div>
          <div className="total">Total: 70</div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="upperSection">
            <select required name="subject">
              <option disabled>--Select the subject--</option>
              {subjects.map((s) => (
                <option key={s.id}>{s.name}</option>
              ))}
            </select>
            <p>Second Term</p>
            <p>First Sequence</p>
            <input
              type="text"
              placeholder="Enter Competency"
              className="competency"
              required
            />
          </div>

          <table>
            <colgroup>
              <col span={1} style={{ width: '5px' }}></col>
              <col></col>
              <col></col>
              <col style={{ textAlign: 'left' }}></col>
            </colgroup>
            <thead>
              <tr>
                <th>S/N</th>
                <th>Image</th>
                <th>Student ID</th>
                <th>Name</th>
                <th>Gender</th>
                <th>Score</th>
              </tr>
            </thead>

            <tbody>
              {students.map((student, index) => (
                <tr key={student.id}>
                  <td>{index + 1}</td>
                  <td>
                    <img src={student.image} alt="" />
                  </td>
                  <td>{student.mat}</td>
                  <td className="name">{student.name}</td>
                  <td>{student.gender}</td>
                  <td>
                    <input
                      required
                      type="number"
                      min={0}
                      max={20}
                      disabled={loading}
                    />
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

export default ClassMarks
