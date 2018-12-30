const R = require('ramda');

const withLogging = logger => o => Object.assign({}, o, {
  log (text) {
    logger(text);
  }
});

// 在配置Mixin中，没有显示地依赖日志 Mixin: withLogging
const withConfig = config => (o = {
  log: (text = '') => console.log(test)
}) => Object.assign({}, o, {
  get (key) {
    return config[key] === undefined ?
      this.log(`Missing config key: ${ key }`) :
      config[key];
  }
});

// 由于依赖隐藏，另一个模块需要引入 withLogging 及 withConfig
const createConfig = ({initialConfig, logger}) =>
  R.pipe(
    withLogging(logger),
    withConfig(initialConfig),
  )({});

const initialConfig = {
  host: 'localhost'
};

const logger = console.log.bind(console);
const config = createConfig({initialConfig, logger});

console.log(config.get('host'));
config.get('notThere');


/*
* 在这种实现中，withConfig这个Mixin在为对象o提阿尼啊功能时，依赖对象o的log方法，因此需要保证o具备log方法
* */
