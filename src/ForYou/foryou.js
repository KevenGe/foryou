import React, { useReducer } from 'react';
import {
  Button,
  Card,
  WhiteSpace,
  WingBlank,
  Progress,
  Flex,
  Toast,
  Modal,
} from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css'; // or 'antd-mobile/dist/antd-mobile.less'
import './foryou.less';

/**
 * @description 展示的主要内容
 */
const showData = {
  1: {
    text: '你好呀，亲爱的',
  },
  2: {
    text: '今天是2020年的最后一天了',
  },
  3: {
    text: '人生苦短，幸好有你',
  },
  4: {
    text: '和你在一起的时候，一直都很开心',
  },
  5: {
    text: '有一种幸福，只有咱们两个感受到',
  },
  6: {
    text: '我们会越走越远，直到白头',
  },
  7: {
    text: '嘿嘿，小姐姐，选择一个按钮',
    component: function () {
      return (
        <div>
          <p className="text">
            请问，<span style={{ fontWeight: 'stronger' }}>小丰子</span>
            最爱的人是谁呀？
          </p>
          <WingBlank style={{ textAlign: 'center', padding: 'auto' }}>
            <Flex direction="column" style={{ margin: 'auto' }}>
              <WhiteSpace />
              <WingBlank>
                <Button
                  style={{ width: '70vw' }}
                  onClick={() => {
                    Toast.success('恭喜你对了，就是小阳子', 1);
                  }}
                >
                  小阳子
                </Button>
              </WingBlank>
              <WhiteSpace />
              <WingBlank>
                <Button
                  style={{ width: '70vw' }}
                  onClick={() => {
                    Toast.success('恭喜你对了，当然就是最可爱的小阳子', 1);
                  }}
                >
                  当然是小阳子
                </Button>
              </WingBlank>
              <WhiteSpace />
              <WingBlank>
                <Button
                  style={{ width: '70vw' }}
                  onClick={() => {
                    Toast.success('恭喜你对了，只会是小阳子', 1);
                  }}
                >
                  肯定是小阳子
                </Button>
              </WingBlank>
              <WhiteSpace />
            </Flex>
          </WingBlank>
        </div>
      );
    },
  },
  8: {
    text: '小阳子，喜欢你',
  },
  9: {
    text: '嘿嘿，说不定下一年或者下下年，我们就能一块儿过年了',
  },
  10: {
    text: '除夕快乐，新年快乐！',
    component: function () {
      return (
        <div
          className="text fadeIn"
          style={{
            textAlign: 'center',
            fontSize: 'xx-large',
            margin: 'auto',
            marginTop: '5vh',
            marginBottom: '5vh',
          }}
        >
          直到白头
        </div>
      );
    },
  },
};

const initialState = {
  page: 1,
  show: showData[1],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'nextPage':
      if (state.page >= Object.keys(showData).length) {
        return {
          ...state,
          page: 1,
          show: showData[1],
        };
      }
      return {
        ...state,
        page: state.page + 1,
        show: showData[state.page + 1],
      };
    default:
      return initialState;
  }
};

/**
 * @description 主组件
 */
function ForYou() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="forYou">
      <div className="bg"></div>
      <Progress
        percent={(state.page / Object.keys(showData).length) * 100}
        position="fixed"
      />
      <div className="show">
        <WhiteSpace />
        <WhiteSpace />
        <WhiteSpace />
        <img
          alt="ok"
          src="../images/header.jpeg"
          style={{ padding: '0 4vw', width: '92vw', borderRadius: '5px' }}
        />
        <WhiteSpace />
        <WingBlank>
          <Card>
            <Card.Body>
              <p className="text">{state.show.text}</p>
            </Card.Body>
          </Card>
          <WhiteSpace />
          {state.show.component !== undefined ? (
            <Card>
              <Card.Body>{state.show.component()}</Card.Body>
            </Card>
          ) : null}
        </WingBlank>
      </div>
      <div className="buttons">
        <WingBlank>
          {(() => {
            if (state.page === Object.keys(showData).length) {
              return (
                <Button
                  type="primary"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    Modal.alert('再看一遍', '这是最后了，确定再看一遍吗？', [
                      { text: 'Cancel', onPress: () => console.log('cancel') },
                      {
                        text: 'Ok',
                        onPress: () => {
                          console.log('ok');
                          dispatch({
                            type: 'nextPage',
                          });
                        },
                      },
                    ]);
                  }}
                >
                  再看一遍
                </Button>
              );
            } else {
              return (
                <Button
                  type="primary"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    dispatch({
                      type: 'nextPage',
                    });
                  }}
                >
                  下一个
                </Button>
              );
            }
          })()}
        </WingBlank>
        <WhiteSpace />
      </div>
    </div>
  );
}

export default ForYou;
