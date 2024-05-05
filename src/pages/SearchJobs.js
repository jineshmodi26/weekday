import { Box } from '@mui/material'
import React from 'react'
import Filters from '../components/Filters'
import Jobs from '../components/Jobs'

const SearchJobs = () => {
  return (
    <Box sx={{
        padding: "20px"
    }}>
        <Box>
            <Filters />
        </Box>
        <Box sx={{
            marginTop: "10px"
        }}>
            <Jobs />
        </Box>
    </Box>
  )
}

export default SearchJobs