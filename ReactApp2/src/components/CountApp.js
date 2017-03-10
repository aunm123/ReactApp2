import React from 'react';
import styles from './CountApp.css';

function CountApp() {
  return (
    <div className={styles.normal}>
      <div className={styles.record}>Highest Record:{this.props.count.record}</div>
      <div>{this.props.count.current}</div>
      <div>
        <button onClick={this.state.onClick}>+</button>
      </div>
    </div>
  );
}

export default CountApp;
