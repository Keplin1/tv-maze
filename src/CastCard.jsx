import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';

import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import Link from '@mui/joy/Link';
import silly_dog_img from '../src/assets/silly_dog.jpg'

const CastCard = ({ castMember }) => {
    return (
        <Box sx={{ minHeight: 350 }}>
            <Card
                variant="outlined"
                sx={(theme) => ({
                    width: 300,
                    gridColumn: 'span 2',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    gap: 'clamp(0px, (100% - 360px + 32px) * 999, 16px)',
                    transition: 'transform 0.3s, border 0.3s',
                    '&:hover': {
                        borderColor: theme.vars.palette.primary.outlinedHoverBorder,
                        transform: 'translateY(-2px)',
                    },
                    '& > *': { minWidth: 'clamp(0px, (360px - 100%) * 999,100%)' },
                })}
            >

                <Box
                    sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 200 }}
                >
                    <Box sx={{ display: 'flex' }}>
                        <div>
                            <Typography level="title-lg">
                                <Link
                                    href={castMember.person.url}
                                    overlay
                                    underline="none"
                                    sx={{
                                        color: 'text.primary',
                                        '&.Mui-focusVisible:after': { outlineOffset: '-4px' },
                                    }}
                                >
                                    {castMember.character.name}
                                </Link>
                            </Typography>

                        </div>
                        <IconButton
                            size="sm"
                            variant="plain"
                            color="neutral"
                            sx={{ ml: 'auto', alignSelf: 'flex-start' }}
                        >

                        </IconButton>
                    </Box>
                    <AspectRatio
                        variant="soft"
                        sx={{
                            '--AspectRatio-paddingBottom':
                                'clamp(0px, (100% - 200px) * 999, 200px)',
                            pointerEvents: 'none',
                        }}
                    >
                        <img
                            alt=""
                            src={castMember.person.image?.original ?? silly_dog_img}
                        />
                    </AspectRatio>
                    <Box sx={{ display: 'flex', gap: 1.5, mt: 'auto' }}>

                        <div>
                            <Typography level="body-xs">Played by</Typography>
                            <Typography level="body-sm">{castMember.person.name}</Typography>

                        </div>
                    </Box>
                </Box>
            </Card>
        </Box>
    );
}

export default CastCard