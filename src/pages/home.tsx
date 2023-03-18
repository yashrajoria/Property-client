import React from 'react';
import {
    PieChart, PropertyReferrals, TotalRevenue, PropertyCard, TopAgent
} from 'components'
import { Box, Typography, Stack } from '@pankod/refine-mui'

// import {useList}
const Home = () => {
    return (
        <Box>
            <Typography fontSize={25} fontWeight={700} color="#11142D">
                Dashboard
            </Typography>
            <Box mt="20px" display="flex" flexWrap="wrap" gap={4}>
                <PieChart
                    title="Properties for Sale"
                    value={684}
                    series={[75, 25]}
                    colors={['#475be8', '#ff99cc']} />


                <PieChart
                    title="Properties for Rent"
                    value={550}
                    series={[60, 40]}
                    colors={['#475ae8', '#ff99cc']} />


                <PieChart
                    title="Total Customers"
                    value={5684}
                    series={[75, 25]}
                    colors={['#275be8', '#ff99cc']} />


                <PieChart
                    title="Total Cities"
                    value={555}
                    series={[75, 25]}
                    colors={['#475be8', '#ff99cc']} />

            </Box>

            <Stack gap={4} mt="25px" width="100%"
                direction={{ xs: 'column', lg: 'row' }}>
                <TotalRevenue />
                <PropertyReferrals />
            </Stack>
        </Box>
    )
}

export default Home