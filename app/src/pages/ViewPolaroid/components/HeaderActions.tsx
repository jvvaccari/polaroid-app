import { Stack, Button, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import React from "react";

interface HeaderActionsProps {
  onDelete: () => void;
  onPdf: () => void;
}

const HeaderActions: React.FC<HeaderActionsProps> = ({ onDelete, onPdf }) => (
  <Stack
    direction="row"
    alignItems="center"
    justifyContent="flex-end"
    spacing={1}
    sx={{
      width: "100%",
      height: 64,
    }}
  >
    <Button
      variant="contained"
      onClick={onPdf}
      sx={{
        display: { xs: "none", md: "flex" },
        backgroundColor: "#2196f3",
        color: "#fff",
        minWidth: "48px",
        height: "44px",
        borderRadius: "8px",
        boxShadow: "none",
        "&:hover": {
          backgroundColor: "#1976d2",
        },
      }}
    >
      <PictureAsPdfIcon sx={{ color: "#fff", fontSize: 24 }} />
    </Button>

    <IconButton
      onClick={onPdf}
      sx={{
        display: { xs: "flex", md: "none" },
        minWidth: "40px",
        height: "40px",
        borderRadius: "8px",
      }}
    >
      <PictureAsPdfIcon sx={{ color: "#2196f3", fontSize: 24 }} />
    </IconButton>

    <IconButton
      color="error"
      onClick={onDelete}
      sx={{
        display: { xs: "flex", md: "none" },
        minWidth: "40px",
        fontSize: "1.2rem",
        background: "#1e1e1e10",
      }}
    >
      <DeleteIcon />
    </IconButton>

    <Button
      variant="contained"
      color="error"
      onClick={onDelete}
      sx={{
        display: { xs: "none", md: "flex" },
        minWidth: "80px",
        fontSize: "1rem",
        height: 44,
        marginRight: 1,
      }}
      startIcon={<DeleteIcon />}
    >
      Deletar
    </Button>
  </Stack>
);

export default HeaderActions;
