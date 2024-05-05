import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import right from "../assets/right.png";

export default function OutlinedCard({ job }) {

    const viewJob = () => {
        // Navigate to full job description
    }

    return (
        <Box sx={{ minWidth: 275 }}>
            <Card variant="outlined" sx={{ maxWidth: 345, borderRadius: "20px", boxShadow: "0px 0px 2px lightgray" }}>
                <CardContent>
                    <Box sx={{
                        border: "1px solid lightgray",
                        borderRadius: "20px",
                        padding: "3px",
                        paddingLeft: "5px",
                        minWidth: "120px",
                        maxWidth: "140px",
                        display: "flex",
                        boxShadow: "0px 0px 5px lightgray"
                    }}>
                        <HourglassTopIcon fontSize='12px' />
                        <Typography sx={{ fontSize: 12, fontWeight: "200", color: "black" }}>
                            Posted 10 days ago
                        </Typography>
                    </Box>

                    <Box sx={{
                        display: "flex",
                        alignItems: "center",
                        paddingTop: "15px"
                    }}>
                        <Box sx={{
                            marginRight: "10px"
                        }}>
                            <img src={job.logoUrl} height="50px" width="50px" style={{ borderRadius: "10px" }} />
                        </Box>
                        <Box>
                            <Typography sx={{ fontSize: "14px", color: "gray", fontWeight: "600", letterSpacing: "1px" }}>{job.companyName}</Typography>
                            <Typography sx={{ fontSize: "16px", color: "black", textTransform: "capitalize" }}>{job.jobRole}</Typography>
                            <Typography sx={{ fontSize: "12px", color: "black", textTransform: "capitalize" }}>{job.location}</Typography>
                        </Box>
                    </Box>

                    <Typography sx={{ mt: 1, mb: 1.5, fontSize: "14px", fontWeight: "bold" }} color="text.secondary">
                        Estimated Salary: {job.minJdSalary ? job.minJdSalary + "k" : "NA"} - {job.maxJdSalary ? job.maxJdSalary + "k" : "NA"} {job.salaryCurrencyCode} <span><img src={right} height="14px" /></span>
                    </Typography>
                    <Typography sx={{ fontSize: "16px", fontWeight: "bold", color: "  gray" }}>About Company:</Typography>
                    <Typography sx={{ fontSize: "14px", fontWeight: "bold" }}>About us:</Typography>
                    <Typography variant="body2" sx={{
                        fontSize: "14px",
                        background: "linear-gradient(to bottom, #333, #f0f0f0)", /* Dark to light gradient */
                        backgroundClip: "text", /* Clip text to background */
                        color: "transparent", /* Hide original text */
                        height: "150px",
                    }}>
                        {job.jobDetailsFromCompany}
                    </Typography>
                    <Box sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                        <Button onClick={viewJob} sx={{
                            textTransform: "capitalize"
                        }}>View Job</Button>
                    </Box>
                    <Typography sx={{ color: "gray", fontSize: "14px", letterSpacing: "1px", fontWeight: "bold" }}>Experience</Typography>
                    <Typography sx={{ fontSize: "14px" }}>{job.minExp ?? "0"} - {job.maxExp ?? "0"} years</Typography>
                </CardContent>
                <Box sx={{
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                    margin: "10px"
                }}>
                    <Button fullWidth sx={{
                        backgroundColor: "#66deb6", color: "black", textTransform: "capitalize", fontWeight: "bold", marginBottom: "10px", height: "45px", '&:hover': {
                            backgroundColor: '#9bf2d5',
                        }
                    }}> <a href={job.jobLink}>⚡Easy Apply</a></Button>
                    <Button fullWidth sx={{
                        backgroundColor: "#494fc4", color: "white", textTransform: "capitalize", height: "45px", '&:hover': {
                            backgroundColor: '#7e82e0',
                        }
                    }}>Unlock Referral ask</Button>
                </Box>
            </Card>
        </Box>
    );
}
