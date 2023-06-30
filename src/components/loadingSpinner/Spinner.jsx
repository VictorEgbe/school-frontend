import { Box } from '@mui/material'
import './Spinner.scss'
import LinearProgress from '@mui/material/LinearProgress'

const Spinner = () => {
  return (
    <div className="spinner">
      <div className="container">
        <Box
          sx={{ width: '100%' }}
          display="flex"
          flexDirection="column"
          gap={'20px'}
        >
          <LinearProgress color="primary" />
          <LinearProgress color="primary" />
          <LinearProgress color="primary" />
        </Box>
      </div>
    </div>
  )
}

export default Spinner
