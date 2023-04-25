import React from "react";
import {
    Box,
    Typography,
    FormControl,
    FormHelperText,
    TextField,
    TextareaAutosize,
    Stack,
    Select,
    MenuItem,
    Button,
} from "@pankod/refine-mui";

import { FormProps } from "interfaces/common";
import customButton from "./customButton";

const Form = ({
    type,
    register,
    handleSubmit,
    handleImageChange,
    formLoading,
    onFinishHandler,
    propertyImage,
}: FormProps) => {
    return (
        <Box>
            <Typography fontSize={25} fontWeight={700} color="#11142d">
                {type} a property
            </Typography>

            <Box mt={2.5} borderRadius="15px" padding="20px" bgcolor="#fcfcfc">
                <form
                    style={{
                        marginTop: "20px",
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        gap: "20px",
                    }}
                    onSubmit={handleSubmit(onFinishHandler)}
                >
                    <FormControl>
                        <FormHelperText>Enter Property Name</FormHelperText>
                        <TextField />
                    </FormControl>
                </form>
            </Box>
        </Box>
    );
};

export default Form;
