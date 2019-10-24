import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import { useDropzone } from 'react-dropzone';

import BagDataProvider from './DataProvider/BagDataProvider';

const FileLoader = props => {
  const bagDataProvider = new BagDataProvider();
  const onDrop = useCallback(
    acceptedFiles => {
      console.log(acceptedFiles);
      bagDataProvider.initialize(acceptedFiles[0]).then(bagData => {
        console.log(bagData);
      });
    },
    [bagDataProvider]
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div style={{ height: '100%', width: '100%' }}>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <div {...getRootProps()}>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <input {...getInputProps()} />
        {isDragActive ? 'loading' : ''}
        {props.children}
      </div>
    </div>
  );
};

FileLoader.propTypes = {
  children: PropTypes.element.isRequired
};

export default FileLoader;
