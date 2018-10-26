const json = [{
  'id': 1,
  'menuName': '后台管理',
  'sonMenu': [{
    'id': 18,
    'menuName': '系统管理',
    'sonMenu': [{
      'id': 19,
      'menuName': '部门管理',
      'sonMenu': [{'id': 20, 'menuName': '添加部门', 'sonMenu': []}, {'id': 21, 'menuName': '编辑', 'sonMenu': []}, {
        'id': 22,
        'menuName': '删除',
        'sonMenu': []
      }]
    }, {
      'id': 23,
      'menuName': '角色管理',
      'sonMenu': [{'id': 24, 'menuName': '编辑', 'sonMenu': []}, {'id': 25, 'menuName': '添加', 'sonMenu': []}, {
        'id': 26,
        'menuName': '修改',
        'sonMenu': []
      }]
    }, {
      'id': 27,
      'menuName': '菜单管理',
      'sonMenu': [{'id': 28, 'menuName': '编辑', 'sonMenu': []}, {'id': 29, 'menuName': '添加', 'sonMenu': []}, {
        'id': 30,
        'menuName': '删除',
        'sonMenu': []
      }]
    }]
  }]
}];

function jsonToObj (arr = []) {
  let result = {};
  if (!(arr.length > 0)) return;
  
  (function findId (arr) {
    for (let i = 0; i < arr.length; i++) {
      result[arr[i].id] = arr[i].menuName;
      findId(arr[i].sonMenu);
    }
  })(arr);
  
  return result;
}

console.log(jsonToObj(json));

