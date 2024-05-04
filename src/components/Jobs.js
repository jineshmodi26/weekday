import { Box, Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import OutlinedCard from './Card';
import axios from "axios"
import { ConnectingAirportsOutlined } from '@mui/icons-material';

const Jobs = () => {

    const [jobs, setJobs] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        axios({
            method: "POST",
            url: "https://api.weekday.technology/adhoc/getSampleJdJSON",
            data: {
                limit: 10,
                offset: 0
            },
            headers: {
                "Content-Type": "application/json"
            }
        }).then((res) => {
            console.log(res.data)
        }).catch((error) => {
            console.log(error)
        })
    }, [])

  return (
    <Box>
        <Grid container spacing={3}>
            <Grid item lg={3}>
                <OutlinedCard />
            </Grid>
            <Grid item lg={3}>
                <OutlinedCard />
            </Grid>
            <Grid item lg={3}>
                <OutlinedCard />
            </Grid>
            <Grid item lg={3}>
                <OutlinedCard />
            </Grid>
            <Grid item lg={3}>
                <OutlinedCard />
            </Grid>
        </Grid>
    </Box>
  )
}

export default Jobs