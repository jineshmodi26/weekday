import { Box } from '@mui/material'
import React from 'react'
import Filters from '../components/Filters'
import Jobs from '../components/Jobs'

const SearchJobs = () => {
  return (
    <Box sx={{
        padding: "40px"
    }}>
        <Box>
            <Filters />
        </Box>
        <Box>
            <Jobs />
        </Box>
    </Box>
  )
}

export default SearchJobs