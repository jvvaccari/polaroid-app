import { Box, Typography } from "@mui/material";

const CurrentDate = () => {
  const date = new Date();
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  };
  const formattedDate = date.toLocaleDateString(undefined, options);

  return (
    <Box alignSelf={"flex-end"}>
      <Typography variant="h6" color="primary.dark" fontWeight={600}>
        {formattedDate || "No date available"}
      </Typography>
    </Box>
  );
};

export default CurrentDate;
