import React from 'react';

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import BagDataProvider from './DataProvider/BagDataProvider';

import BagInfoTable from './component/BagInfoTable';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: 'none'
  }
}));

const FileLoader = () => {
  const classes = useStyles();
  const [bagInfo, setBagInfo] = React.useState(null);
  const bagDataProvider = new BagDataProvider();
  const handleReadButton = event => {
    console.log(event.target.files[0]);
    bagDataProvider.initialize(event.target.files[0]).then(bagData => {
      setBagInfo(bagData.getRosbagInfo());
    });
  };
  /* eslint-disable jsx-a11y/label-has-associated-control */
  return (
    <div style={{ height: '100%', width: '100%' }}>
      <input
        accept="*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
        onChange={handleReadButton}
      />
      <label htmlFor="contained-button-file">
        <Button variant="contained" component="span" className={classes.button}>
          Upload
        </Button>
      </label>
      {bagInfo !== null ? <BagInfoTable bagInfo={bagInfo} /> : null}
    </div>
  );
  /* eslint-disable jsx-a11y/label-has-associated-control */
};

export default FileLoader;
