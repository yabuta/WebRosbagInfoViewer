import PropTypes from 'prop-types';

const PreText = props => {
  const { isDragActive } = props;
  return isDragActive ? 'よし、いいぞ' : 'ファイルを落とせ';
};

PreText.propTypes = {
  isDragActive: PropTypes.object.isRequired
};

export default PreText;
