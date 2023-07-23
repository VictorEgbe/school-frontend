import './Classes.scss'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import { Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { authCall } from '../../apiCalls/index'
import Spinner from '../../components/loadingSpinner/Spinner'
import Error from '../../components/Error/Error'

const Classes = () => {
  const {isError, isLoading, data} = useQuery({
    queryKey: ['classes'],
    queryFn: () => authCall.get('classes').then(res => res.data),
    retry: 2
  })

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    const errorMsg = 'Something went wrong. Please reload the page.'
    return <Error errorMsg={errorMsg} />
  }

  return (
    <div className="classes">
      <div className="wrapper">
        <div className="header">
          <div className="basicInfo">Classes for the year {data.current_year}</div>
          <div className="addClassBtn">
            <AddCircleIcon /> Add class
          </div>
        </div>
        <div className="classesCardsContainer">
          {
            data.classes.length === 0 ?
            <div className="noClasses">No classes created for the year {data.current_year} </div>:
            data.classes.map((c) => (
              <Link
                to={`/classes/${c.id}`}
                className="classCard link"
                key={c.id}
              >
                <div className="topClass">{c.name}</div>
                <div className="bottomClass">
                  <div className='gender'>
                    <p>Boys: {c.boys}</p>
                    <p>Girls: {c.girls}</p>
                  </div>
                  <span>Total: {c.total}</span>
                </div>
              </Link>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Classes
