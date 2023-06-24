import { useState } from 'react'
import './ClassSubject.scss'
import { subjects } from './data'
import AddSubject from '../../components/AddSubject/AddSubject'

const ClassSubject = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      {open && <AddSubject setOpen={setOpen} />}
      <div className="classSubject">
        <div className="wrapper">
          <div className="info">Upper Sixth Science and Arts</div>

          <table>
            <thead>
              <tr>
                <th>S/N</th>
                <th>Subject Name</th>
                <th>Coefficient</th>
                <th>Teacher(s)</th>
              </tr>
            </thead>

            <tbody>
              {subjects.map((s, i) => (
                <tr key={s.id}>
                  <td>{i + 1}</td>
                  <td>{s.name}</td>
                  <td>{s.coefficient}</td>
                  <td>{s.teacher}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div onClick={() => setOpen(true)} className="addBtn">
            Add Subject
          </div>
        </div>
      </div>
    </>
  )
}

export default ClassSubject
