import { Box, Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import OutlinedCard from './Card';
import axios from "axios"
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from './Loader';
import { useSelector } from "react-redux";
import store from "../redux/store";
import actions from "../redux/actions"

const Jobs = () => {

    const [hasMore, setHasMore] = useState(true)
    const [offset, setOffset] = useState(0)
    const [loading, setLoading] = useState(false)
    const jobData = useSelector((state) => state.reducer.jobs)

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
            store.dispatch(actions.setJobs({jobs: res.data.jdList}))
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
            store.dispatch(actions.setJobs({jobs: [...jobData, ...res.data.jdList]}))
    
            res.data.jdList.length > 0 ? setHasMore(true) : setHasMore(false);
          })
          .catch((err) => console.log(err));
    
        setOffset((prevOffset) => prevOffset + 10);
      };

  return (

    <InfiniteScroll
      dataLength={jobData.length}
      next={fetchMoreData}
      hasMore={hasMore}
      scrollThreshold={0.99}
      loader={<Loader />}
    >
      <Box>
        <Grid container spacing={3}>
            {
                loading ? jobData.map((job) => {
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
