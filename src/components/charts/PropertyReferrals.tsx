import React from 'react'
import { Box, Typography, Stack } from '@mui/material'
import ReactApexChart from "react-apexcharts"
import "./charts.css"
import { propertyReferralsInfo } from 'constants/index'


interface ProgressBarProps {
    title: string;
    percentage: number;
    color: string;
}

const ProgressBar = ({ title, percentage, color }: ProgressBarProps) => (
    <Box width="100%">
        <Stack direction="row"
            alignItems="center"
            justifyContent="space-between"
            color="#11142d">
            <Typography>{title}</Typography>
            <Typography>{percentage}%</Typography>
        </Stack>
        <Box mt={2}
            position="relative"
            width="100%"
            height="8px"
            bgcolor="#e4e8ef"
            borderRadius="1px">
            <Box
                width={`${percentage}%`}
                bgcolor={color}
                position="absolute"
                height="100%"
                borderRadius={1}

            />
        </Box>
    </Box>
)
const PropertyReferrals = () => {
    return (
        <Box p={4}
            bgcolor="#fcfcfc"
            id="chart"
            minWidth={490}
            display="flex"
            flexDirection="column"
            borderRadius="15px">
            <Typography fontSize={18} fontWeight="600" color="#11142d">
                Property Referrals
            </Typography>
            <Stack my="20px" gap={4} direction="column" color="red">
                {propertyReferralsInfo.map((bar) =>
                    <ProgressBar key={bar.title} {...bar} />)}
            </Stack>
        </Box>
    )
}

export default PropertyReferrals