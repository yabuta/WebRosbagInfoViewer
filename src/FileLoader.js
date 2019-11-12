import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import { useDropzone } from 'react-dropzone';

import BagDataProvider from './DataProvider/BagDataProvider';

import PreText from './component/PreText';
import BagInfoTable from './component/BagInfoTable';

const FileLoader = () => {
  const [bagInfo, setBagInfo] = React.useState(null);
  const bagDataProvider = new BagDataProvider();
  const onDrop = useCallback(
    acceptedFiles => {
      bagDataProvider.initialize(acceptedFiles[0]).then(bagData => {
        console.log(bagData, bagData.getRosbagInfo());
        setBagInfo(bagData.getRosbagInfo());
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
        {bagInfo ? (
          <BagInfoTable bagInfo={bagInfo} />
        ) : (
          <PreText isDragActive={isDragActive} />
        )}
      </div>
    </div>
  );
};

FileLoader.propTypes = {
  children: PropTypes.element.isRequired
};

export default FileLoader;
