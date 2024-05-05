import React, { useState } from 'react'
import {
    Box,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Grid
} from "@mui/material"
import store from "../redux/store"
import {useSelector} from "react-redux"
import TextField from '@mui/material/TextField';
import actions from '../redux/actions';

const Filters = () => {

    const filters = useSelector((state) => state.reducer.filters)

    const handleChange = (key, value) => {
        if (key === "minExperience" && value < 0) {
            value = 0
        }
        store.dispatch(actions.setFilters({key: key, value: value}))
    }

    return (
        <Grid container spacing={2} sx={{
            padding: "10px"
        }}>
            <Grid item lg={2} xl={2}>
                <Box>
                    <TextField type="number" value={filters.minExperience} onChange={(e) => handleChange("minExperience", e.target.value)} label="Minimum Exp."/>
                </Box>
            </Grid>
            <Grid item lg={2} xl={2}>
                <Box>
                    <TextField type="text" value={filters.companyName} onChange={(e) => handleChange("companyName", e.target.value)} label="Company Name"/>
                </Box>
            </Grid>
            <Grid item lg={2} xl={2}>
                <Box>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Location</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={filters.location}
                            label="Location"
                            onChange={(e) => {handleChange("location", e.target.value)}}
                        >
                            <MenuItem value="">None</MenuItem>
                            <MenuItem value="delhi">Dehli</MenuItem>
                            <MenuItem value="delhi ncr">Dehli NCR</MenuItem>
                            <MenuItem value="mumbai">Mumbai</MenuItem>
                            <MenuItem value="chennai">Chennai</MenuItem>
                            <MenuItem value="bangalore">Bangalore</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </Grid>
            <Grid item lg={2} xl={2}>
                <Box>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Remote/on-site</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value=""
                            label="Remote"
                            onChange={(e) => {handleChange("remote", e.target.value)}}
                        >
                            <MenuItem value="">None</MenuItem>
                            <MenuItem value="remote">Remote</MenuItem>
                            <MenuItem value="on-site">On-site</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </Grid>
            <Grid item lg={2} xl={2}>
                <Box>
                    <TextField type="number" value={filters.minJdSalary} onChange={(e) => handleChange("minJdSalary", e.target.value)} label="Minimum Salary"/>
                </Box>
            </Grid>
            <Grid item lg={2} xl={2}>
                <Box>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Role</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={filters.role}
                            label="Role"
                            onChange={(e) => {handleChange("role", e.target.value)}}
                        >
                            <MenuItem value="">None</MenuItem>
                            <MenuItem value="frontend">Frontend</MenuItem>
                            <MenuItem value="backend">Backend</MenuItem>
                            <MenuItem value="ios">Ios</MenuItem>
                            <MenuItem value="android">Android</MenuItem>
                            <MenuItem value="tech lead">Tech Lead</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </Grid>
        </Grid>
    )
}

export default Filters