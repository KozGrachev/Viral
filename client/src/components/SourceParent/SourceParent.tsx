import React from 'react'
import PropTypes from 'prop-types'
// import { initDummyState } from '../../logic/dummyState.REDO_CO';
import { SourceComponent  } from '../Source/Source'
import {Source} from '../../types/gameStateTypes'
import { render } from '@testing-library/react';
import {useSelector} from 'react-redux'
import { RootState } from '../../redux/gameState/store'
import './SourceParent.scss'
import { getIcon } from '../../helpers/iconExporter';

export const SourceParent = () => {
  // const sources = initDummyState.sources;
  const sources = useSelector((state: RootState) => state.gameStateReducer.sources);


  const EmptyAppIcon = getIcon('emptyAppIcon');


  const renderSources = (srcArr: Source[]) => {

    return srcArr.map(source => {
      //! GET source.markers_community etc and plug into props of SourceComponent


      return <SourceComponent source={source} key={source.name}/>
    })
  }

  return (
    <div id="source-parent-grid-container">
      {renderSources(sources)}
      {/* <EmptyAppIcon className="empty-app-icon-1" />
      <EmptyAppIcon className="empty-app-icon-2" /> */}
    </div>
  )
}



