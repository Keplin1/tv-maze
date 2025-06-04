import { SignInButton } from '@clerk/clerk-react';
import { Container, Box, Typography, Button, Paper } from '@mui/material';

function LandingPage() {
    return (
        <Container maxWidth="sm" sx={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            py: 4
        }}>
            <Paper elevation={8} sx={{
                padding: 6,
                textAlign: 'center',
                borderRadius: 3,
                background: 'linear-gradient(135deg,rgb(226, 228, 231) 0%,rgb(224, 230, 238) 100%)'
            }}>
                <Typography
                    variant="h2"
                    component="h1"
                    sx={{
                        mb: 3,
                        fontWeight: 700,
                        color: '#2c3e50',
                        textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
                        fontSize: { xs: '2rem', md: '3rem' }
                    }}
                >
                    Welcome to TV Maze
                </Typography>

                <Typography
                    variant="h6"
                    sx={{
                        mb: 4,
                        color: '#34495e',
                        fontWeight: 400,
                        lineHeight: 1.6
                    }}
                >
                    Discover your favorite TV shows, explore cast information,
                    and stay updated with the latest episodes.
                </Typography>

                <Box sx={{ mb: 3 }}>
                    <Typography variant="body1" sx={{ color: '#7f8c8d', mb: 2 }}>
                        Sign in to get started
                    </Typography>

                    <SignInButton mode="modal">
                        <Button
                            variant="contained"
                            size="large"
                            sx={{
                                px: 4,
                                py: 1.5,
                                fontSize: '1.1rem',
                                fontWeight: 600,
                                borderRadius: 2,
                                background: 'linear-gradient(45deg,rgb(132, 194, 236) 30%, #2980b9 90%)',
                                '&:hover': {
                                    background: 'linear-gradient(45deg, #2980b9 30%, #3498db 90%)',
                                    transform: 'translateY(-2px)',
                                    boxShadow: '0 6px 20px rgba(52, 152, 219, 0.4)'
                                },
                                transition: 'all 0.3s ease'
                            }}
                        >
                            Sign In
                        </Button>
                    </SignInButton>
                </Box>

                <Typography variant="body2" sx={{ color: '#95a5a6', fontSize: '0.9rem' }}>
                    New here? Don't worry, you can create an account during sign in!
                </Typography>
            </Paper>
        </Container>
    );
}

export default LandingPage;