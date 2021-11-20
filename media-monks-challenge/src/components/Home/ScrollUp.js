import React,{ useState, useEffect } from 'react';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { Box } from '@mui/system';
import { IconButton } from '@mui/material';

export const ScrollUp = () => {
    const [showScroll, setshowScroll] = useState(false)

    const checkScrollTop = React.useCallback(() => {
        if(!showScroll && window.pageYOffset > 700){
            setshowScroll(true)
        } else if(showScroll && window.pageYOffset <=700){
            setshowScroll(false)
        }
    },[showScroll])

    const scrollTop = () => {
        window.scrollTo({top: 0, behavior:'smooth'})
    }

    useEffect(() => {
        window.addEventListener('scroll', checkScrollTop)
        return () => {
            window.removeEventListener('scroll', checkScrollTop)
        }
    }, [checkScrollTop])

    console.log(checkScrollTop);

    return (
        <Box sx={{display: showScroll ? 'flex':'none', position:'fixed', right:"50%", bottom:"10%"}} >
            <IconButton onClick={scrollTop} color="default" size="large" sx={{transform:"scale(1.5)", backgroundColor:"rgba(0,0,0,0.70)"}} >
                <ArrowUpwardIcon/>
            </IconButton>
        </Box>
    )
}