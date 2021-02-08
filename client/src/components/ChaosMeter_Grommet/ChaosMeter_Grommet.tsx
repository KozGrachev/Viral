import React, { useEffect, useRef, useState } from 'react';
import { Grommet, Box, Meter, Stack, Text } from 'grommet';
import { grommet } from 'grommet/themes';

export const ChaosMeterGrommet = () => {
  const meterValue = 25;
  // const [value, setValue] = useState(20);

  // const timer = useRef();

  // clearTimeout(timer.current);
  // timer.current = setTimeout(() => {
  //   setValue(value < 100 ? value + 8 : 20);
  // }, 2000);



  // useEffect(
  //   () => () => {
  //     clearTimeout(timer.current);
  //   },
  //   [],
  // );

  return (
    <Grommet >
      <Box
        align="end"
        pad="large" >
        <Stack
          anchor="center"


        >
          <Meter
            type="circle"
            background="light-2"
            values={[{ value: meterValue }]}
            size="150px"
            thickness="small"
          />
          <Box direction="row" align="center" pad={{ bottom: 'xsmall' }}>
            <div className="meter-label">
              <Text size="small">Chaos</Text>
              <Text size="xlarge" weight="bold">
                {meterValue < 25 ? '0/4'
                  : meterValue < 50 ? '1/4'
                    : meterValue < 75 ? '2/4'
                      : meterValue < 100 ? '3/4'
                        : 'DEATH'
                }
              </Text>
            </div>
          </Box>
        </Stack>
      </Box>
    </Grommet>

    // <Grommet>
    //   <Box align='center'>
    //     <Meter type='circle'
    //       value={40}
    //       onActive={...} />
    //     <Value value={40}
    //       units='GB' />
    //   </Box>
    // </Grommet>
  );
};