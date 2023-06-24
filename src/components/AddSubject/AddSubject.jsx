import './AddSubject.scss'
import Add from '@mui/icons-material/Add'

const AddSubject = ({ setOpen }) => {
  return (
    <div className="addSubject">
      <div className="addWrapper">
        <div className="form">
          <section className="upper">
            <input
              type="text"
              placeholder="Subject Name"
              className="subjectName"
            />

            <select defaultValue={1} className="coefficient">
              <option value={1} disabled>
                --Coefficient--
              </option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>

            <div className="teacherName">
              <select>
                <option disabled>--Select Teacher--</option>
                <option>Lucile Huff</option>
                <option>Lettie Walker</option>
                <option>Lucinda Harper</option>
                <option>Allen Vargas</option>
                <option>Ethan Goodwin</option>
                <option>Lillian Newton</option>
                <option>Jason Perez</option>
                <option>Adrian Logan</option>
                <option>Jim Reed</option>
                <option>Esther Ramos</option>
              </select>
              <div className="addIcon" title="Add Teacher">
                <Add />
              </div>
            </div>
          </section>

          <section className="upper">
            <input
              type="text"
              placeholder="Subject Name"
              className="subjectName"
            />

            <select defaultValue={1} className="coefficient">
              <option value={1} disabled>
                --Coefficient--
              </option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>

            <div className="teacherName">
              <select>
                <option disabled>--Select Teacher--</option>
                <option>Lucile Huff</option>
                <option>Lettie Walker</option>
                <option>Lucinda Harper</option>
                <option>Allen Vargas</option>
                <option>Ethan Goodwin</option>
                <option>Lillian Newton</option>
                <option>Jason Perez</option>
                <option>Adrian Logan</option>
                <option>Jim Reed</option>
                <option>Esther Ramos</option>
              </select>
              <div className="addIcon" title="Add Teacher">
                <Add />
              </div>
            </div>
          </section>

          <section className="upper">
            <input
              type="text"
              placeholder="Subject Name"
              className="subjectName"
            />

            <select defaultValue={1} className="coefficient">
              <option value={1} disabled>
                --Coefficient--
              </option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>

            <div className="teacherName">
              <select>
                <option disabled>--Select Teacher--</option>
                <option>Lucile Huff</option>
                <option>Lettie Walker</option>
                <option>Lucinda Harper</option>
                <option>Allen Vargas</option>
                <option>Ethan Goodwin</option>
                <option>Lillian Newton</option>
                <option>Jason Perez</option>
                <option>Adrian Logan</option>
                <option>Jim Reed</option>
                <option>Esther Ramos</option>
              </select>
              <div className="addIcon" title="Add Teacher">
                <Add />
              </div>
            </div>
          </section>

          <section className="lower">
            <button onClick={() => setOpen(false)} className="cancel">
              Cancel
            </button>
            <button className="addSub">Add Subject</button>
            <button className="submit">Submit</button>
          </section>
        </div>
      </div>
    </div>
  )
}

export default AddSubject
