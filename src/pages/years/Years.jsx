import './Years.scss'
import { years } from './data'
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
        <table>
          <thead>
            <tr>
              <th>Years</th>
              <th>Active?</th>
              <th>Actions</th>
            </tr>
          </thead>

          {years.map((year) => (
            <tr key={year.id}>
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
          <div className="terms">Terms</div>
          <div className="sequences">Sequences</div>
        </div>
      </div>
    </div>
  )
}

export default Years
