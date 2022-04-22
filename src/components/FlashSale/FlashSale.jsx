import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';

const FlashSale = () => {
    const countDownTime = new Date("apr 30, 2022 11:59:59").getTime();
    const setStartTime = new Date("mar 30, 2022 12:00:00").getTime();

    const currentTime = new Date().getTime();

    let showTime = setStartTime - currentTime;

    const calculateTimeLeft = () => {

        // let year = new Date().getFullYear();


        // console.log(showTime);
        let difference = countDownTime - currentTime;
        // let difference = +new Date(`10/01/${year}`) - +new Date();

        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                d: Math.floor(difference / (1000 * 60 * 60 * 24)),
                h: Math.floor((difference / (1000 * 60 * 60)) % 24),
                m: Math.floor((difference / 1000 / 60) % 60),
                s: Math.floor((difference / 1000) % 60)
            };
        }
        return timeLeft;
    }

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    const timerComponents = [];

    Object.keys(timeLeft).forEach((interval) => {
        if (!timeLeft[interval]) {
            return;
        }
        // {interval}
        timerComponents.push(
            <span style={{ marginRight: '5px' }} key={Math.random()}>
                {timeLeft[interval]} {interval} {""}
            </span>
        );
    });
    return (
        <div>
            <Container>

                {showTime < 0 && timerComponents.length ?
                    <Container id="flashsell">
                        <Typography style={{ textAlign: 'start' }} sx={{ mt: 2 }} variant="h4" gutterBottom component="div">
                            Flash Sell
                        </Typography>

                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end' }}>

                            <Box sx={{ display: { xs: 'flex', sm: 'flex' }, flexFlow: { xs: 'column-reverse', sm: 'row' }, textAlign: 'start' }}>



                                {showTime < 0 ?

                                    <Typography sx={{ display: 'flex', alignItems: 'center', color: '#fff', bgcolor: 'success.main', px: { xs: 1, sm: 2 }, py: 1, boxShadow: 2, borderRadius: 1, mb: 3 }} variant="h4" component="div">


                                        {timerComponents.length ? timerComponents : <span>Time's up!</span>}

                                    </Typography> :

                                    <div></div>

                                }

                            </Box>




                        </Box>







                    </Container> :
                    <Box></Box>

                }
            </Container>
        </div >
    );
};

export default FlashSale;