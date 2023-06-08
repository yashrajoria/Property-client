import React from "react";
import { Button } from "@pankod/refine-mui";
import { CustomButtonProps } from "interfaces/common";
const customButton = ({
    type,
    title,
    backgroundColor,
    color,
    fullWidth,
    icon,
    handleClick,
    disabled
}: CustomButtonProps) => {
    return (
        <Button
            disabled={disabled}
            type={type === 'submit' ? 'submit' : 'button'}
            sx={{
                flex: fullWidth ? 1 : "unset",
                padding: "10px 15px",
                width: fullWidth ? "100%" : "fit-content",
                backgroundColor: backgroundColor,
                color: color,
                fontSize: "16px",
                fontWeight: "600",
                textTransform: "capitalize",
                gap: "10px",
                minWidth: 130,
                "&:hover": {
                    opacity: 0.9,
                    backgroundColor: backgroundColor,
                },
            }}
            onClick={handleClick}
        >
            title={title}
            icon={icon}
        </Button>
    );
};

export default customButton;
