import { Typography, Box } from "@mui/material";
import { blue, red } from "@mui/material/colors";

function Header() {
    return (
        <Box component="header" sx={{ textAlign: "center", mb: 2, boxShadow: '#2196f3 0px 8px 24px', borderRadius: '16px', border: '2px solid' }}>
            <Typography variant="h1" component="h1">
                TV Maze
            </Typography>
        </Box>
    )
}

export default Header;