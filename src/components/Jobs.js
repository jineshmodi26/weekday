import { Box, Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import OutlinedCard from './Card';
import axios from "axios"
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from './Loader';

const Jobs = () => {

    const [jobs, setJobs] = useState([])
    const [hasMore, setHasMore] = useState(true)
    const [offset, setOffset] = useState(0)
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
            setJobs(res.data.jdList)
            setLoading(true)
            setOffset((prevOffset) => prevOffset + 10);
        }).catch((error) => {
            console.log(error)
        })
    }, []);

    const fetchMoreData = () => {
        axios({
            method: "POST",
            url: "https://api.weekday.technology/adhoc/getSampleJdJSON",
            data: {
                limit: 10,
                offset: offset
            },
            headers: {
                "Content-Type": "application/json"
            }
        }).then((res) => {
            setJobs((prevItems) => [...prevItems, ...res.data.jdList]);
    
            res.data.jobList.length > 0 ? setHasMore(true) : setHasMore(false);
          })
          .catch((err) => console.log(err));
    
        setOffset((prevOffset) => prevOffset + 10);
      };

  return (

    <InfiniteScroll
      dataLength={jobs.length}
      next={fetchMoreData}
      hasMore={hasMore}
      scrollThreshold={0.99}
      loader={<Loader />}
    >
      <Box>
        <Grid container spacing={3}>
            {
                loading ? jobs.map((job) => {
                    return <Grid item xs={12} sm={6} md={4} lg={3} xl={3} key={job.jdUid}>
                        <OutlinedCard job={job}/>
                    </Grid>
                }) : "Loading..."
            }
        </Grid>
    </Box>
    </InfiniteScroll>
  )
}

export default Jobs
