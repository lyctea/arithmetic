/*
* 工厂函数
* */

const createUser = ({userName, avatar}) => ({
  userName,
  avatar,
  setUserName (userName) {
    this.userName = userName;
    return this;
  }
});


console.log(createUser({userName: 'lyctea', avatar: 'lyctea.png'}));

