import { Typography, Box } from "@mui/material";

function Header() {
    return (
        <Box component="header" sx={{ textAlign: "center", mb: 2 }}>
            <Typography variant="h1" component="h1">
                TV Maze
            </Typography>
        </Box>
    )
}

export default Header;