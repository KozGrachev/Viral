import React from 'react'
import PropTypes from 'prop-types'
import { initDummyState } from '../../logic/dummyState.REDO_CO';
import { Source as SourceComponent } from '../Source/Source'
import {Source} from '../../types/gameStateTypes'
import { render } from '@testing-library/react';

const SourceParent = () => {
  const sources = initDummyState.sources;

  const renderSources = (srcArr: Source[]) => {
    return srcArr.map(source => {
      return <SourceComponent name={source.name} category={source.category} />
    })
  }

  return (
    <div>
      {renderSources(sources)}
    </div>
  )
}



export default SourceParent

