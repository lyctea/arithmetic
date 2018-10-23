## 常见的数据绑定
- 数据劫持（vue），通过Object.defineProperty() 去劫持数据的getter和setter
- 脏值检测(angular),通过特定事件比如 input、change、xhr请求进行脏值检测
- 发布-订阅模式（backbone），通过发布消息，订阅消息进行数据和视图的绑定监听


## 发布-订阅模式
例如生活中的报纸订，读者在邮局订阅自己需要的报纸，当邮局有报纸来时，分发给每个读者



## MVVM库原理

![image-20181022102259345](https://ws3.sinaimg.cn/large/006tNbRwgy1fwgsei86fij30h309j76h.jpg)



- 实现一个 Observer， 对数据进行劫持，通知数据的变化
- 实现一个 Compile，对指令进行解析，初始化视图，并且订阅数据的变更，绑定更新函数
- 实现一个 Watcher，将其作为以上两者的一个中介点，在接受数据的同时，让 Dep 添加当前 Watcher，并及时通知视图进行 update

> Dep:数据依赖 
>
> Observer：用来处理成员对象的增删 
>
> Watcher：负责在数据发生变动的时候执行回调函数





## 实现Observer

实现对数据的劫持，并将数据变更传递下去。将变更传递给Dep实例，然后Dep去通知更新。



## 实现Compile

- 解析指令，将指模板中的变量换成数据，对视图进行初始化操作
- 订阅数据变化，绑定更新函数
- 接受数据变化，通知视图进行view update

## 实现Watcher

- 通过Dep接收数据变动的通知，实例化的时候讲自己添加到dep中
- 属性变更时，接收dep的notify，调用自身的update方法，触发compile中绑定的更新方法，进而更新视图

## 实现MVVM

- Observer实现对MVVM自身model数据劫持，监听数据的属性变更，并在变动时进行notify
- Compile实现指令解析，初始化视图，并订阅数据变化，绑定好更新函数
- Watcher一方面接受Observer通过dep传递过来的数据变化，一方面通知Compile进行view update

