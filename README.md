# React-cnode 



> 使用react开发的简单cnode demo ( react + react-router + redux + axios

### 项目运行

```shell
cd react-cnode
npm i
npm start
```

### 接口地址

[cnode API](https://cnodejs.org/api)

### 关于Redux

Redux是一个状态管理工具，它将组件之间共享的状态(state)抽取出来(store)进行统一、集中管理，以简化在复杂的业务逻辑中的组件状态改变、数据储存和组件通信等操作。

react-redux 将 react 和 redux 结合在一起，它给我们提供了`connect()`和`<Provider>`。

- connect方法：连接组件和store，组件通过此方法可从this.props中获取store数据

- Provider组件：它将整个应用包装起来，将store传入

  ```html
  <Provider store={store}>
  	<App />    
  </Provider>
  ```

  

#### 流程

1. 组件通过dispatch发出action

   ```javascript
   dispatch({ type: 'LIST_UPDATE', data: [1,2,3] })
   ```

2. store根据action的type属性调用对应的reducer并传入state和action

3. reducer对state进行处理并返回一个新的state放入store

   ```javascript
   const list = (state = { data: [] }, action) => {
       //action => { type: 'LIST_UPDATE', data: [1,2,3] }
   	switch (action.type) {
       	case 'LIST_UPDATE': 
         	return {
   			data: action.data //返回新的state
         	}
       	default: return state
   	}
   }
   ```

4. connect监听到store发生变化，调用setState更新组件