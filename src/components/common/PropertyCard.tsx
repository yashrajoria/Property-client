import { PropertyCardProps } from 'interfaces/property'
import React from 'react'
import { Place } from '@mui/icons-material'
import { Link } from "@pankod/refine-react-router-v6"
import { Typography, Box, Card, CardContent, Stack, CardMedia } from '@pankod/refine-mui'
const PropertyCard = ({
    id, title, location, price, photo
}: PropertyCardProps) => {
    return (
        <Card
            component={Link}
            to={`/properties/${id}`}
            sx={{
                maxWidth: '330px',
                textDecoration: 'none',
                padding: '10px',
                '&:hover ': {
                    boxShadow: '0 22px 45px 2px rgba (176,176,176,0.1)'
                },
                cursor: 'pointer'
            }
            }
            elevation={0}
        >

            <CardMedia
                component="img"
                width="100%"
                height="210"
                image={photo}
                alt="card image"
                sx={{ borderRadius: '10px' }}
            />

            <CardContent sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                gap: '10px',
                paddingX: '5px',
            }}>
                <Stack direction="column"
                    gap={1}
                >
                    <Typography fontSize={16} fontWeight={500}>{title}</Typography>
                    <Stack direction="row" gap={0.5} alignItems="flex-start">
                        <Place
                            sx={{
                                fontSize: '18px',
                                color: '#11142d',
                                marginTop: '0.5'
                            }} />
                        <Typography fontSize={14} fontWeight={500}>{location}</Typography>
                    </Stack>

                </Stack>
                <Box px={1.5} py={0.5} bgcolor="#dadefa">
                    <Typography sx={{
                        color: "#475be8",
                        fontWeight: "bold",
                        fontSize: "12px"
                    }}>₹ {price}</Typography>
                </Box>
            </CardContent>

        </Card>
    )
}

export default PropertyCard