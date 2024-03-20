import React from 'react'
import Layout from './../components/Layout/Layout';
import { Box, Typography } from '@mui/material';
const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: 'center',
          p: 2,
          "& h4": {
            fontWeight: 'bold',
            my: 2,
            fontSize: '2rem',
          },
          "& p": {
            textAlign: 'justify',
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ":{
              fontSize:'1.5rem'
            }
          }
        }}>
        <Typography variant='h4'>Welcome To Delicious Eats</Typography>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae consectetur iste nobis reprehenderit rem tempore itaque architecto officia nemo nisi iusto ipsum soluta maxime ullam consequuntur, beatae natus eveniet at laudantium consequatur repellendus quidem impedit corrupti nihil. Corrupti iste sit sint adipisci perferendis quo cupiditate neque ratione. Nemo ut commodi numquam nisi autem a dicta possimus esse quae tempora ab error ratione quia sed voluptatibus laborum, officia laudantium nostrum veritatis accusantium deleniti provident? Ex, eos perspiciatis cupiditate ea provident at assumenda eius, repellendus culpa suscipit consectetur id laborum modi voluptas, qui quis fuga aspernatur neque! Vero consequatur obcaecati eius delectus.
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae consectetur iste nobis reprehenderit rem tempore itaque architecto officia nemo nisi iusto ipsum soluta maxime ullam consequuntur, beatae natus eveniet at laudantium consequatur repellendus quidem impedit corrupti nihil. Corrupti iste sit sint adipisci perferendis quo cupiditate neque ratione. Nemo ut commodi numquam nisi autem a dicta possimus esse quae tempora ab error ratione quia sed voluptatibus laborum, officia laudantium nostrum veritatis accusantium deleniti provident? Ex, eos perspiciatis cupiditate ea provident at assumenda eius, repellendus culpa suscipit consectetur id laborum modi voluptas, qui quis fuga aspernatur neque! Vero consequatur obcaecati eius delectus.

        </p>
      </Box>
    </Layout>
  )
}

export default About