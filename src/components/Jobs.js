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
    const [count, setCount] = useState()
    const jobData = useSelector((state) => state.reducer.jobs)
    const filters = useSelector((state) => state.reducer.filters)

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
            setCount(res.data.totalCount)
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
            setCount(res.data.totalCount)
          })
          .catch((err) => console.log(err));
    
        setOffset((prevOffset) => prevOffset + 10);
      };

      const filteredJobs = jobData.filter(job => {
        // Check if the job matches the filter criteria
        const meetsMinExperience = filters.minExperience === 0 || job.minExp >= filters.minExperience;
        const matchesCompanyName = filters.companyName === "" || job.companyName.toLowerCase().includes(filters.companyName.toLowerCase());
        const matchesLocation = filters.location === "" || job.location.toLowerCase().includes(filters.location.toLowerCase());
        const matchesRemote = filters.remote === "" || (filters.remote.toLowerCase() === "on-site" && job.location.toLowerCase() !== "remote") || job.location.toLowerCase() === filters.remote.toLowerCase();
        const matchesRole = filters.role === "" || job.jobRole.toLowerCase().includes(filters.role.toLowerCase());
        const meetsMinJdSalary = filters.minJdSalary === 0 || job.minJdSalary >= filters.minJdSalary;
    
        // Return true if all filter criteria are met
        return meetsMinExperience && matchesCompanyName && matchesLocation && matchesRemote &&matchesRole && meetsMinJdSalary;
    });

  return <>

    {
        loading ? filteredJobs.length == 0 ? "No Data Found" : <InfiniteScroll
        dataLength={filteredJobs.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={offset > count ? null : <Loader />}
        scrollThreshold={0.99}
      >
        <Box>
          <Grid container spacing={3}>
              {
                filteredJobs.map((job) => {
                      return <Grid item xs={12} sm={6} md={4} lg={3} xl={3} key={job.jdUid}>
                          <OutlinedCard job={job}/>
                      </Grid>
                  })
              }
          </Grid>
      </Box>
      </InfiniteScroll> : <Loader />
    }

    </>
}

export default Jobs
