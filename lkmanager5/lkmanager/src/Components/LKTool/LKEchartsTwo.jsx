import React, {Component} from 'react';
import {connect} from "react-redux";
import echarts from 'echarts';

class LKEchartsTwo extends Component {
  render() {
    return (
      <div id="main2" style={{height: 400}}/>
    );
  }

  componentWillUpdate(nextProps, nextState, nextContext) {
    // console.log(nextProps.order_counter);
    let order_counter = nextProps.order_counter;
    if (order_counter !== undefined) {
      let left_data = Object.keys(order_counter);
      let total_data = [];

      for (let i = 0; i < left_data.length; i++) {
        let obj = {};
        obj.name = left_data[i];
        obj.value = order_counter[left_data[i]];
        total_data.push(obj);
      }
      // console.log(left_data, total_data);

      let main2 = echarts.init(document.getElementById('main2'));
      let option = {
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          orient: 'vertical',
          x: 'right',
          data: left_data
        },
        series: [
          {
            name: '学科订单来源',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: 'center'
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: '30',
                  fontWeight: 'bold'
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: total_data
          }
        ]
      };
      main2.setOption(option);
    }
  }
}

const mapStateToProps = (state) => {
  return {
    order_counter: state.homeData.order_counter
  }
};

export default connect(mapStateToProps, null)(LKEchartsTwo);