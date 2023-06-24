import './AddSubject.scss'

const AddSubject = ({ setOpen }) => {
  return (
    <div className="addSubject">
      <div className="addWrapper">
        <button onClick={() => setOpen(false)}>close</button>
        <p>Lorem ipsum dolor sit</p>
      </div>
    </div>
  )
}

export default AddSubject
