import React, { useState } from 'react'
import {
    Box,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Grid
} from "@mui/material"

const Filters = () => {

    const [role, setRole] = useState("")

    const handleChange = (e) => {
        setRole(e.target.value)
    }

    return (
        <Grid container spacing={2} sx={{
            padding: "10px"
        }}>
            <Grid item lg={2} xl={2}>
                <Box>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Role</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={role}
                            label="Role"
                            onChange={handleChange}
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
            <Grid item lg={2} xl={2}>
                <Box>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Role</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value=""
                            label="Role"
                            onChange={handleChange}
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </Grid>
            <Grid item lg={2} xl={2}>
                <Box>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Role</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value=""
                            label="Role"
                            onChange={handleChange}
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </Grid>
            <Grid item lg={2} xl={2}>
                <Box>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Role</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value=""
                            label="Role"
                            onChange={handleChange}
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </Grid>
            <Grid item lg={2} xl={2}>
                <Box>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Role</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value=""
                            label="Role"
                            onChange={handleChange}
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </Grid>
            <Grid item lg={2} xl={2}>
                <Box>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Role</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value=""
                            label="Role"
                            onChange={handleChange}
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </Grid>
        </Grid>
    )
}

export default Filters