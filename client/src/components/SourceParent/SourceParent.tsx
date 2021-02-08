import React from 'react'
import PropTypes from 'prop-types'
import { initDummyState } from '../../logic/dummyState.REDO_CO';
import { Source as SourceComponent } from '../Source/Source'
import {Source} from '../../types/gameStateTypes'
import { render } from '@testing-library/react';
import {useSelector} from 'react-redux'
import { RootState } from '../../redux/gameState/store'
import './SourceParent.scss'

export const SourceParent = () => {
  // const sources = initDummyState.sources;
  const sources = useSelector((state: RootState) => state.gameStateReducer.sources);


  // use the

  const renderSources = (srcArr: Source[]) => {
    return srcArr.map(source => {
      //! GET source.markers_community etc and plug into props of SourceComponent
      return <SourceComponent name={source.name} markersCommunity={3} markersRelations={1}  markersSocial={2} canMoveTo={source.canMove} />
    })
  }

  return (
    <div id="source-parent-grid-container">
      {renderSources(sources)}
    </div>
  )
}



