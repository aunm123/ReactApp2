import React , { PropTypes } from 'react';
import { connect } from 'dva';
import styles from './HomePage.css';
import CountApp from '../components/CountApp'

function HomePage() {
  return (
    <div className={styles.normal}>
      <CountApp {...this.props} />
    </div>
    
  );
}

function mapStateToProps(state) {
  return { count: state.count };
}

HomePage.propTypes = {
	count: PropTypes.objectOf(PropTypes.shape({
		record: PropTypes.number.isRequired,
		current: PropTypes.number.isRequired,
  }).isRequired).isRequired
};

export default connect(mapStateToProps)(HomePage);
