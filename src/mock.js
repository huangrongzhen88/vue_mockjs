
//引入mock模块
import Mock from 'mockjs';

// mock.vue的模拟数据
let data =
  {
    'users|5': [ {
              'name': '@cname', //中文名称
              'age|1-100': 100, //100以内随机整数
              'birthday': '@date("yyyy-MM-dd")', //日期
              'city': '@city(true)' //中国城市
    }]
  }


Mock.mock('/mock', 'get', data)

// mock2.vue的模拟数据
Mock.mock('/login', { //输出数据
  'name': '@name', //随机生成姓名
                  //还可以自定义其他数据
});
Mock.mock('/list', { //输出数据
  'name': '@name', //随机生成姓名
  'age|10-20': 10
                  //还可以自定义其他数据
});

