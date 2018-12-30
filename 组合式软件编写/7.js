import withLogging from './with-logging';

/**
 * 将config和o对象的属性混合，并返回一个新的对象
 */
const addConfig = config => o => Object.assign({}, o, {
  get (key) {
    return config[key] == undefined ?
      this.log(`Missing config key: ${ key }`) :
      config[key]
      ;
  }
});

const withConfig = ({initialConfig, logger}) => o =>
  pipe(
    // vvv 在此组合显式依赖 vvv
    withLogging(logger),
    // ^^^ 在此组合显式依赖 ^^^
    
    addConfig(initialConfig)
  )(o)
;

// 配置工厂现在只需要知道 withConfig
const createConfig = ({initialConfig, logger}) =>
  withConfig({initialConfig, logger})({})
;

const initialConfig = {
  host: 'localhost'
};

const logger = console.log.bind(console);

const config = createConfig({initialConfig, logger});

console.log(config.get('host')); // 'localhost'
config.get('notThere'); // 'Missing config key: notThere'
