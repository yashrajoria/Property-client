import React from "react";
import { Add } from "@mui/icons-material";
import { useTable, useList } from "@pankod/refine-core/";
import {
    Box,
    Stack,
    Typography,
    TextField,
    Select,
    MenuItem,
} from "@pankod/refine-mui";
import { useNavigate } from "@pankod/refine-react-router-v6";

import { PropertyCard, CustomButton } from "components";

const AllProperties = () => {
    const navigate = useNavigate();

    const {
        tableQueryResult: { data, isLoading, isError },
        current,
        setCurrent,
        setPageSize,
        pageCount,
        sorter,
        setSorter,
        filters,
        setFilters,
    } = useTable();
    const allProperties = data?.data ?? [];

    if (isLoading) return <Typography>Loading...</Typography>
    if (isError) return <Typography>Error...</Typography>
    console.log(data)
    return (
        <Box>
            <Box
                mt="20px"
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 3,
                }}
            >
                <Stack direction="column" width="100%">
                    <Typography fontSize={25} fontWeight={700} color="#11142d">
                        {!allProperties.length
                            ? "There are no properties"
                            : "All Properties"}
                    </Typography>
                    <Box
                        mb={2}
                        mt={3}
                        display="flex"
                        justifyContent="space-between"
                        width="84%"
                    >
                        <Box
                            display="flex"
                            gap={2}
                            flexWrap="wrap"
                            mb={{ xs: "20px", sm: 0 }}
                        ></Box>
                        <CustomButton
                            title={`Sort Price`}
                            // title={`Sort Price}`}
                            // handleClick={() => toggleSort("price")}
                            backgroundColor="#475be8"
                            color="#fcfcfc"
                        />
                        <TextField
                            sx={{
                                backgroundColor: "green",
                            }}
                            variant="outlined"
                            color="info"
                            placeholder="Search By Title"
                            value=" "
                            onChange={() => { }}
                        />
                        <Select
                            sx={{
                                backgroundColor: "green",
                            }}
                            variant="outlined"
                            color="info"
                            displayEmpty
                            required
                            inputProps={{ "aria-label": "Without Label" }}
                            defaultValue=""
                            value=""
                            onChange={() => { }}
                        >
                            <MenuItem value="">All</MenuItem>
                        </Select>
                    </Box>
                </Stack>
            </Box>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
                <CustomButton
                    title="Add Property"
                    handleClick={() => navigate("/properties/create")}
                    backgroundColor="#475be8"
                    color="#fcfcfc"
                    icon={<Add />}
                />
            </Stack>

            <Box
                mt="20px"
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 3,
                }}
            >
                {allProperties.map((property) => (
                    <PropertyCard
                        key={property._id}
                        id={property._id}
                        title={property.title}
                        price={property.price}
                        location={property.location}
                        photo={property.photo}
                    />
                ))}
            </Box>

            {allProperties.length > 0 && (
                <Box display="flex" gap={2} mt={3} flexWrap="wrap">
                    <CustomButton
                        title="Previous"
                        handleClick={() => setCurrent((prev) => prev - 1)}
                        backgroundColor="#475be8"
                        color="#fcfcfc"
                        disabled={!(current > 1)}
                    />
                    <Box
                        sx={{ color: "#222222" }}
                        display={{ xs: "hidden", sm: "flex" }}
                        alignItems="center"
                        gap="5px"
                    >
                        Page{" "}
                        <strong>
                            {current} of {pageCount}
                        </strong>
                    </Box>
                    <CustomButton
                        title="Next"
                        handleClick={() => setCurrent((prev) => prev + 1)}
                        backgroundColor="#475be8"
                        color="#fcfcfc"
                        disabled={current === pageCount}
                    />
                    <Select
                        sx={{
                            backgroundColor: "green",
                        }}
                        variant="outlined"
                        color="info"
                        displayEmpty
                        required
                        inputProps={{ "aria-label": "Without Label" }}
                        defaultValue={10}
                        onChange={() => { }}
                    >
                        {[10, 20, 30, 40, 50].map((size) => {
                            return (
                                <MenuItem key={size} value={size}>
                                    Show {size}
                                </MenuItem>
                            );
                        })}
                    </Select>
                </Box>
            )}
        </Box>
    );
};

export default AllProperties;
