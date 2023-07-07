import './Teacher.scss'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'

const Teacher = () => {
  return (
    <div className="teacher">
      <div className="mainTeacherContainer">
        <section className="top">
          <div className="left">
            <div className="topLeft">
              <h1>{"Teacher's"} Information</h1>

              <div>
                <button title="Edit Teacher Info">
                  <EditIcon sx={{ fontSize: '16px' }} /> Edit
                </button>
                <button title="Delete Teacher">
                  <DeleteIcon sx={{ fontSize: '16px' }} /> Delete
                </button>
              </div>
            </div>
            <div className="bottomLeft">
              <div className="imageContainer">
                <img
                  src="https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                />
              </div>
              <div className="otherInfos">
                <h1>Helen McMoli Enoh</h1>

                <div className="others">
                  <p className="age">Age: 26 years old</p>
                  <p className="department">Depart: Mathematics</p>
                  <p className="gender">Gender: Male</p>
                  <p className="gender">H.O.D: NO</p>
                  <p className="gender">Married: NO</p>
                  <p className="address">Address: Yaounde</p>
                  <p className="DOB">D.O.B: 26/march/2023</p>
                  <p className="email">Email: ki@sih.vu</p>
                  <p className="tel">Phone: 675725140</p>
                  <p className="username">Username: JW</p>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="rightContainer">
              <h1>
                Classes assigned to <span>Helen McMoli Enoh</span>{' '}
              </h1>
              <table>
                <tr>
                  <th>Class</th>
                  <th>Subject</th>
                </tr>

                <tbody>
                  <tr>
                    <td>Form 1</td>
                    <td>History</td>
                  </tr>
                  <tr>
                    <td>Form 2</td>
                    <td>History</td>
                  </tr>
                  <tr>
                    <td>Form 3</td>
                    <td>History</td>
                  </tr>
                  <tr>
                    <td>Form 4</td>
                    <td>History</td>
                  </tr>
                  <tr>
                    <td>Form 5</td>
                    <td>History</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
        <section className="bottom">
          <h1>Teachers of the same department (Similar Teachers)</h1>
          <div className="similarContainer">
            <div className="similarCard">
              <img
                src="https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />

              <div>
                John Doe <span>(H.O.D)</span>
              </div>
            </div>
            <div className="similarCard">
              <img
                src="https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />

              <div>
                John Doe <span>(H.O.D)</span>
              </div>
            </div>
            <div className="similarCard">
              <img
                src="https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />

              <div>
                John Doe <span>(H.O.D)</span>
              </div>
            </div>
            <div className="similarCard">
              <img
                src="https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />

              <div>
                John Doe <span>(H.O.D)</span>
              </div>
            </div>
            <div className="similarCard">
              <img
                src="https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />

              <div>
                John Doe <span>(H.O.D)</span>
              </div>
            </div>
            <div className="similarCard">
              <img
                src="https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />

              <div>
                John Doe <span>(H.O.D)</span>
              </div>
            </div>
            <div className="similarCard">
              <img
                src="https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />

              <div>
                John Doe <span>(H.O.D)</span>
              </div>
            </div>
            <div className="similarCard">
              <img
                src="https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />

              <div>
                John Doe <span>(H.O.D)</span>
              </div>
            </div>
            <div className="similarCard">
              <img
                src="https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />

              <div>
                John Doe <span>(H.O.D)</span>
              </div>
            </div>
            <div className="similarCard">
              <img
                src="https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />

              <div>
                John Doe <span>(H.O.D)</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Teacher
