import { Typography, Box } from "@mui/material";


function Header() {
    return (
        <Box component="header" sx={{
            textAlign: "center", mb: 4,
            padding: '1rem 2rem',
            boxShadow: '#707070 0px 8px 24px',
            borderRadius: '8px',
            border: '2px solid',
            bgcolor: 'grey.200',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            transition: 'transform 0.3s ease', // Smooth transition for hover effect
            '&:hover': {
                transform: 'translateY(-5px)' // Slight lift on hover
            }
        }}>

            <Typography variant="h1" component="h1" sx={{
                fontSize: { xs: '2.5rem', md: '3.5rem' }, // Responsive font size
                fontWeight: 700, // Bold font
                letterSpacing: '0.05em', // Letter spacing
                color: ' #383838', // grey text
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)', // Text shadow
                fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif', // Custom font
            }}>
                TV Maze
            </Typography>
        </Box>
    )
}

export default Header;