import './Years.scss'
import { years, terms, sequences } from './data'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import CancelIcon from '@mui/icons-material/Cancel'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import ToggleOffIcon from '@mui/icons-material/ToggleOff'
import AddIcon from '@mui/icons-material/Add'
const Years = () => {
  return (
    <div className="years">
      <div className="container">
        <div className="actionSection">
          <div className="add">
            <AddIcon /> Year
          </div>
          <div className="add">
            <AddIcon /> Term
          </div>
          <div className="add">
            <AddIcon /> Sequence
          </div>
        </div>
        <table className="yearsTable">
          <thead>
            <tr>
              <th>S/N</th>
              <th>Years</th>
              <th>Active?</th>
              <th>Actions</th>
            </tr>
          </thead>

          {years.map((year, index) => (
            <tr key={year.id}>
              <td>{index + 1}</td>
              <td>{year.name}</td>
              <td>
                {year.isActive ? (
                  <CheckCircleIcon
                    sx={{ color: '#1b5e20' }}
                    titleAccess="Active"
                  />
                ) : (
                  <CancelIcon
                    sx={{ color: '#d50000' }}
                    titleAccess="Inactive"
                  />
                )}
              </td>
              {year.isActive && (
                <td className="actions">
                  <EditIcon
                    sx={{ color: 'blue', cursor: 'pointer' }}
                    titleAccess="Edit year"
                  />
                  <ToggleOffIcon
                    sx={{ color: 'green', cursor: 'pointer' }}
                    titleAccess="Deactivate year"
                  />
                  <DeleteIcon
                    sx={{ color: 'red', cursor: 'pointer' }}
                    titleAccess="Delete Year"
                  />
                </td>
              )}
            </tr>
          ))}
        </table>

        <div className="termSequenceWrapper">
          <div className="terms">
            <p>Terms</p>
            <table className="table">
              <colgroup>
                <col style={{ width: 'maxContent' }}></col>
                <col></col>
                <col></col>
                <col style={{ width: '40%' }}></col>
              </colgroup>
              <tr>
                <th>s/n</th>
                <th>Name</th>
                <th>IsActive?</th>
                <th>Actions</th>
              </tr>
              {terms.map((term, index) => (
                <tr key={term.id}>
                  <td>{index + 1}</td>
                  <td>{term.name}</td>
                  <td>
                    {term.isActive ? (
                      <CheckCircleIcon
                        sx={{ color: '#1b5e20' }}
                        titleAccess="Active"
                      />
                    ) : (
                      <CancelIcon
                        sx={{ color: '#d50000' }}
                        titleAccess="Inactive"
                      />
                    )}
                  </td>
                  {term.isActive && (
                    <td className="actions">
                      <EditIcon
                        sx={{ color: 'blue', cursor: 'pointer' }}
                        titleAccess="Edit term"
                      />
                      <ToggleOffIcon
                        sx={{ color: 'green', cursor: 'pointer' }}
                        titleAccess="Deactivate term"
                      />
                      <DeleteIcon
                        sx={{ color: 'red', cursor: 'pointer' }}
                        titleAccess="Delete term"
                      />
                    </td>
                  )}
                </tr>
              ))}
            </table>
          </div>
          <div className="sequences">
            <p>Sequences</p>
            <table className="table">
              <colgroup>
                <col style={{ width: 'maxContent' }}></col>
                <col></col>
                <col></col>
                <col style={{ width: '40%' }}></col>
              </colgroup>
              <tr>
                <th>s/n</th>
                <th>Name</th>
                <th>IsActive?</th>
                <th>Actions</th>
              </tr>
              {sequences.map((sequence, index) => (
                <tr key={sequence.id}>
                  <td>{index + 1}</td>
                  <td>{sequence.name}</td>
                  <td>
                    {sequence.isActive ? (
                      <CheckCircleIcon
                        sx={{ color: '#1b5e20' }}
                        titleAccess="Active"
                      />
                    ) : (
                      <CancelIcon
                        sx={{ color: '#d50000' }}
                        titleAccess="Inactive"
                      />
                    )}
                  </td>
                  {sequence.isActive && (
                    <td className="actions">
                      <EditIcon
                        sx={{ color: 'blue', cursor: 'pointer' }}
                        titleAccess="Edit sequence"
                      />
                      <ToggleOffIcon
                        sx={{ color: 'green', cursor: 'pointer' }}
                        titleAccess="Deactivate sequence"
                      />
                      <DeleteIcon
                        sx={{ color: 'red', cursor: 'pointer' }}
                        titleAccess="Delete sequence"
                      />
                    </td>
                  )}
                </tr>
              ))}
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Years
