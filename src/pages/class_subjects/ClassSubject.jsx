import './ClassSubject.scss'
import { coefficients, subjects, teachers } from './data'
import AddIcon from '@mui/icons-material/Add'

const ClassSubject = () => {
  return (
    <div className="classSubject">
      <div className="wrapper">
        <div className="info">Upper Sixth Science</div>
        <section>
          <div className="sectionWrapper">
            <div className="subject">
              <select>
                <option disabled selected>
                  --Select the subject--
                </option>
                {subjects.map((subject) => (
                  <option key={subject.id}>{subject.name}</option>
                ))}
              </select>
              <AddIcon
                className="icon"
                sx={{ fontSize: '1.8rem' }}
                titleAccess="CREATE SUBJECT"
              />
            </div>

            <div className="coefficient">
              <select>
                <option disabled selected>
                  --Coefficient--
                </option>
                {coefficients.map((c) => (
                  <option key={c.id}>{c.coefficient}</option>
                ))}
              </select>
            </div>

            <div className="teacher">
              <select>
                <option disabled selected>
                  --Select the teacher--
                </option>
                {teachers.map((t) => (
                  <option key={t.id}>{t.name}</option>
                ))}
              </select>
              <AddIcon
                className="icon"
                sx={{ fontSize: '1.8rem' }}
                titleAccess="CREATE TEACHER"
              />
            </div>
          </div>
        </section>
        <section>
          <div className="sectionWrapper">
            <div className="subject">
              <select>
                <option disabled selected>
                  --Select the subject--
                </option>
                {subjects.map((subject) => (
                  <option key={subject.id}>{subject.name}</option>
                ))}
              </select>
              <AddIcon
                className="icon"
                sx={{ fontSize: '1.8rem' }}
                titleAccess="CREATE SUBJECT"
              />
            </div>

            <div className="coefficient">
              <select>
                <option disabled selected>
                  --Coefficient--
                </option>
                {coefficients.map((c) => (
                  <option key={c.id}>{c.coefficient}</option>
                ))}
              </select>
            </div>

            <div className="teacher">
              <select>
                <option disabled selected>
                  --Select the teacher--
                </option>
                {teachers.map((t) => (
                  <option key={t.id}>{t.name}</option>
                ))}
              </select>
              <AddIcon
                className="icon"
                sx={{ fontSize: '1.8rem' }}
                titleAccess="CREATE TEACHER"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default ClassSubject
