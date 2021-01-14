const deal_status_list = [
  {
    id: 0, //状态ID
    text: "未创建", //状态说明
  },
  {
    id: 1,
    text: "已创建",
  },
  {
    id: 2,
    text: "待发货",
  },
  {
    id: 3,
    text: "待收货",
  },
  {
    id: 4,
    text: "确认收货",
    status: "Success",
  },
];

/**
 * 对象数组映射
 * @param {*} source 源数组
 * @param {*} key
 * @param {*} text
 * @param {*} status 是否处理status
 */
const fn = (source, key, text, status) => {
  if (!Array.isArray(source)) return;
  
  return source.reduce((prev, cur) => {
    prev[cur[key]] = { text: cur[text] };
    status && cur.status && (prev[cur[key]].status = cur.status);
    return prev;
  }, {});
};

const res = fn(deal_status_list, "id", "text", true);
console.log(res)
