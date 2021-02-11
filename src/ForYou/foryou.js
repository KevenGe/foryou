import React from 'react';
import { Button, WhiteSpace, WingBlank } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css'; // or 'antd-mobile/dist/antd-mobile.less'
import styles from './foryou.less';

function ForYou() {
  return (
    <div className={styles.forYou}>
      <div></div>
      <div className={styles.buttons}>
        <WingBlank>
          <Button type="primary">NEXT</Button>
        </WingBlank>
        <WhiteSpace />
        <WingBlank>
          <Button type="primary">NEXT</Button>
        </WingBlank>
        <WhiteSpace />
      </div>
    </div>
  );
}

export default ForYou;
