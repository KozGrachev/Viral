import React from 'react';
import {useSelector} from 'react-redux'
import { Grommet, Box, Meter, Stack, Text } from 'grommet';
import { RootState} from '../../redux/gameState/store';

export const ChaosMeterGrommet = () => {

  const chaos=useSelector((state:RootState)=>state.gameStateReducer.chaosMeter)
  return (
    <>
    <div>{chaos}</div>
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
            values={[{ value: chaos*25 }]}
            size="150px"
            thickness="small"
          />
          <Box direction="row" align="center" pad={{ bottom: 'xsmall' }}>
            <div className="meter-label">
              <Text size="small">Chaos</Text>
              <Text size="xlarge" weight="bold">
                {chaos === 0 ? '0/4'
                  : chaos ===1 ? '1/4'
                    : chaos ===2 ? '2/4'
                      : chaos ===3 ? '3/4'
                        : 'DEATH'
                }
              </Text>
            </div>
          </Box>
        </Stack>
      </Box>
    </Grommet>
    </>
  );
};