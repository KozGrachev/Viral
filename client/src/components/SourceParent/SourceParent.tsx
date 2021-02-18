import React from 'react'


import { SourceComponent  } from '../Source/Source'
import {Source} from '../../types/gameStateTypes'

import {useSelector} from 'react-redux'
import { RootState } from '../../redux/gameState/store'
import './SourceParent.scss'


export const SourceParent = () => {

  const sources = useSelector((state: RootState) => state.gameStateReducer.sources);



  const renderSources = (srcArr: Source[]) => {

    return srcArr.map(source => {
   

      return <SourceComponent source={source} key={source.name}/>
    })
  }

  return (
    <div id="source-parent-grid-container">
      {renderSources(sources)}

    </div>
  )
}



