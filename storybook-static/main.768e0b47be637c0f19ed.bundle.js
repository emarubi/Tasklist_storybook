(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1023:function(module,exports){},134:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default})),__webpack_require__.d(__webpack_exports__,"Pinned",(function(){return Pinned})),__webpack_require__.d(__webpack_exports__,"Archived",(function(){return Archived})),__webpack_require__.d(__webpack_exports__,"LongTitle",(function(){return LongTitle}));var D_marmotte_Documents_GitHub_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(10),_Task__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__(0),__webpack_require__(227)),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(8);__webpack_exports__.default={component:_Task__WEBPACK_IMPORTED_MODULE_2__.a,title:"Task",parameters:{assets:["designs/items.png"]}};var Template=function Template(args){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Task__WEBPACK_IMPORTED_MODULE_2__.a,Object(D_marmotte_Documents_GitHub_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},args))},Default=Template.bind({});Default.args={task:{id:"1",title:"Test Task",state:"TASK_INBOX",updatedAt:new Date(2020,0,1,9,0)}};var Pinned=Template.bind({});Pinned.args={task:Object(D_marmotte_Documents_GitHub_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)(Object(D_marmotte_Documents_GitHub_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},Default.args.task),{},{state:"TASK_PINNED"})};var Archived=Template.bind({});Archived.args={task:Object(D_marmotte_Documents_GitHub_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)(Object(D_marmotte_Documents_GitHub_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},Default.args.task),{},{state:"TASK_ARCHIVED"})};var LongTitle=Template.bind({});LongTitle.args={task:Object(D_marmotte_Documents_GitHub_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)(Object(D_marmotte_Documents_GitHub_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},Default.args.task),{},{title:"This task's name is absurdly large. In fact, I think if I keep going I might end up with content overflow. What will happen? The star that represents a pinned task could have text overlapping. The text could cut-off abruptly when it reaches the star. I hope not!"})},Default.parameters=Object(D_marmotte_Documents_GitHub_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:"args => <Task {...args} />"}},Default.parameters),Pinned.parameters=Object(D_marmotte_Documents_GitHub_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:"args => <Task {...args} />"}},Pinned.parameters),Archived.parameters=Object(D_marmotte_Documents_GitHub_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:"args => <Task {...args} />"}},Archived.parameters),LongTitle.parameters=Object(D_marmotte_Documents_GitHub_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:"args => <Task {...args} />"}},LongTitle.parameters)},1436:function(module,exports,__webpack_require__){"use strict";var _clientApi=__webpack_require__(62),_clientLogger=__webpack_require__(39),_configFilename=__webpack_require__(1437);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}(_configFilename.args||_configFilename.argTypes)&&_clientLogger.logger.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify({args:_configFilename.args,argTypes:_configFilename.argTypes})),_configFilename.decorators&&_configFilename.decorators.forEach((function(decorator){return(0,_clientApi.addDecorator)(decorator,!1)})),_configFilename.loaders&&_configFilename.loaders.forEach((function(loader){return(0,_clientApi.addLoader)(loader,!1)})),(_configFilename.parameters||_configFilename.globals||_configFilename.globalTypes)&&(0,_clientApi.addParameters)(_objectSpread(_objectSpread({},_configFilename.parameters),{},{globals:_configFilename.globals,globalTypes:_configFilename.globalTypes}),!1),_configFilename.argTypesEnhancers&&_configFilename.argTypesEnhancers.forEach((function(enhancer){return(0,_clientApi.addArgTypesEnhancer)(enhancer)}))},1437:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"parameters",(function(){return parameters}));__webpack_require__(676);var parameters={actions:{argTypesRegex:"^on[A-Z].*"}}},1438:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(501).configure)([__webpack_require__(1439)],module,!1)}).call(this,__webpack_require__(164)(module))},1439:function(module,exports,__webpack_require__){var map={"./InboxScreen.stories.js":1447,"./Task.stories.js":134,"./TaskList.stories.js":455};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1439},1447:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default})),__webpack_require__.d(__webpack_exports__,"Error",(function(){return Error}));var objectSpread2=__webpack_require__(10),dist=(__webpack_require__(0),__webpack_require__(297)),es=__webpack_require__(183),TaskList=__webpack_require__(229),jsx_runtime=__webpack_require__(8);function PureInboxScreen(_ref){return _ref.error?Object(jsx_runtime.jsx)("div",{className:"page lists-show",children:Object(jsx_runtime.jsxs)("div",{className:"wrapper-message",children:[Object(jsx_runtime.jsx)("span",{className:"icon-face-sad"}),Object(jsx_runtime.jsx)("div",{className:"title-message",children:"Oh no!"}),Object(jsx_runtime.jsx)("div",{className:"subtitle-message",children:"Something went wrong"})]})}):Object(jsx_runtime.jsxs)("div",{className:"page lists-show",children:[Object(jsx_runtime.jsx)("nav",{children:Object(jsx_runtime.jsx)("h1",{className:"title-page",children:Object(jsx_runtime.jsx)("span",{className:"title-wrapper",children:"Taskbox"})})}),Object(jsx_runtime.jsx)(TaskList.b,{})]})}PureInboxScreen.defaultProps={error:null},PureInboxScreen.__docgenInfo={description:"",methods:[],displayName:"PureInboxScreen",props:{error:{defaultValue:{value:"null",computed:!1},type:{name:"string"},required:!1,description:""}}};Object(es.b)((function(_ref2){return{error:_ref2.error}}))(PureInboxScreen);"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\components\\InboxScreen.js"]={name:"PureInboxScreen",docgenInfo:PureInboxScreen.__docgenInfo,path:"src\\components\\InboxScreen.js"});var TaskList_stories=__webpack_require__(455),store=(__webpack_exports__.default={component:PureInboxScreen,title:"InboxScreen",parameters:{assets:["designs/app.png"]},decorators:[function(story){return Object(jsx_runtime.jsx)(es.a,{store:store,children:story()})}]},{getState:function getState(){return{tasks:TaskList_stories.Default.args.tasks}},subscribe:function subscribe(){return 0},dispatch:Object(dist.action)("dispatch")}),InboxScreen_stories_Template=function Template(args){return Object(jsx_runtime.jsx)(PureInboxScreen,Object(objectSpread2.a)({},args))},Default=InboxScreen_stories_Template.bind({}),Error=InboxScreen_stories_Template.bind({});Error.args={error:"Something"},Default.parameters=Object(objectSpread2.a)({storySource:{source:"(args) => <PureInboxScreen {...args} />"}},Default.parameters),Error.parameters=Object(objectSpread2.a)({storySource:{source:"(args) => <PureInboxScreen {...args} />"}},Error.parameters)},227:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Task}));__webpack_require__(0),__webpack_require__(676);var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(8);function Task(_ref){var _ref$task=_ref.task,id=_ref$task.id,title=_ref$task.title,state=_ref$task.state,onArchiveTask=_ref.onArchiveTask,onPinTask=_ref.onPinTask;return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:"list-item ".concat(state),children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("label",{className:"checkbox",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input",{type:"checkbox",defaultChecked:"TASK_ARCHIVED"===state,disabled:!0,name:"checked"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{className:"checkbox-custom",onlick:function onlick(){return onArchiveTask(id)}})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"title",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input",{type:"text",value:title,readOnly:!0,placeholder:"Insert title"})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"actions",onlick:function onlick(event){return event.stopPropagation()},children:"TASK_ARCHIVED"!==state&&Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a",{onClick:function onClick(){return onPinTask(id)},children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{className:"icon-star"})})})]})}Task.__docgenInfo={description:"",methods:[],displayName:"Task",props:{task:{type:{name:"shape",value:{id:{name:"string",description:"Id of the task",required:!0},title:{name:"string",description:"Title of the task",required:!0},state:{name:"string",description:"urrent state of the task",required:!0}}},required:!1,description:"omposition of the task"},onArchiveTask:{type:{name:"func"},required:!1,description:"Event function to change te task to archived"},onPinTask:{type:{name:"func"},required:!1,description:"Event function to change te task to pinned"}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\components\\Task.js"]={name:"Task",docgenInfo:Task.__docgenInfo,path:"src\\components\\Task.js"})},229:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return PureTaskList}));var objectSpread2=__webpack_require__(10),toConsumableArray=__webpack_require__(228),Task=(__webpack_require__(0),__webpack_require__(227)),es=__webpack_require__(183),redux=__webpack_require__(302),actions_ARCHIVE_TASK="ARCHIVE_TASK",actions_PIN_TASK="PIN_TASK";function taskStateReducer(taskState){return function(state,action){return Object(objectSpread2.a)(Object(objectSpread2.a)({},state),{},{tasks:state.tasks.map((function(task){return task.id===action.id?Object(objectSpread2.a)(Object(objectSpread2.a)({},task),{},{state:taskState}):task}))})}}Object(redux.b)((function reducer(state,action){switch(action.type){case actions_ARCHIVE_TASK:return taskStateReducer("TASK_ARHIVED")(state,action);case actions_PIN_TASK:return taskStateReducer("TASK_PINNED")(state,action);default:return state}}),{tasks:[{id:"1",title:"Something",state:"TASK_INBOX"},{id:"2",title:"Something else",state:"TASK_INBOX"},{id:"3",title:"Something more",state:"TASK_INBOX"},{id:"4",title:"Something new",state:"TASK_INBOX"}]});var jsx_runtime=__webpack_require__(8);function PureTaskList(_ref){var loading=_ref.loading,tasks=_ref.tasks,events={onPinTask:_ref.onPinTask,onArchiveTask:_ref.onArchiveTask},LoadingRow=Object(jsx_runtime.jsxs)("div",{className:"loading-item",children:[Object(jsx_runtime.jsx)("span",{className:"glow-checkbox"}),Object(jsx_runtime.jsxs)("span",{className:"glow-text",children:[Object(jsx_runtime.jsx)("span",{children:"Loading"})," ",Object(jsx_runtime.jsx)("span",{children:"cool"})," ",Object(jsx_runtime.jsx)("span",{children:"state"})]})]});if(loading)return Object(jsx_runtime.jsxs)("div",{className:"list-items",children:[LoadingRow,LoadingRow,LoadingRow,LoadingRow,LoadingRow,LoadingRow]});if(0===tasks.length)return Object(jsx_runtime.jsx)("div",{className:"list-items",children:Object(jsx_runtime.jsxs)("div",{className:"wrapper-message",children:[Object(jsx_runtime.jsx)("span",{className:"icon-check"}),Object(jsx_runtime.jsx)("div",{className:"title-message",children:"You have no tasks"}),Object(jsx_runtime.jsx)("div",{className:"subtitle-message",children:"Sit back and relax!"})]})});var tasksInOrder=[].concat(Object(toConsumableArray.a)(tasks.filter((function(t){return"TASK_PINNED"===t.state}))),Object(toConsumableArray.a)(tasks.filter((function(t){return"TASK_PINNED"!==t.state}))));return Object(jsx_runtime.jsx)("div",{className:"list-items",children:tasksInOrder.map((function(task){return Object(jsx_runtime.jsx)(Task.a,Object(objectSpread2.a)({task:task},events),task.id)}))})}PureTaskList.defaultProps={loading:!1},PureTaskList.__docgenInfo={description:"",methods:[],displayName:"PureTaskList",props:{loading:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:"Checks if it's in loading state"},tasks:{type:{name:"arrayOf",value:{name:"custom",raw:"Task.propTypes.task"}},required:!0,description:"The list of tasks"},onPinTask:{type:{name:"func"},required:!1,description:"Event to change the task to pinned"},onArchiveTask:{type:{name:"func"},required:!1,description:"Event to change the task to archived"}}};__webpack_exports__.b=Object(es.b)((function(_ref2){return{tasks:_ref2.tasks.filter((function(t){return"TASK_INBOX"===t.state||"TASK_PINNED"===t.state}))}}),(function(dispatch){return{onArchiveTask:function onArchiveTask(id){return dispatch(function archiveTask(id){return{type:actions_ARCHIVE_TASK,id:id}}(id))},onPinTask:function onPinTask(id){return dispatch(function pinTask(id){return{type:actions_PIN_TASK,id:id}}(id))}}}))(PureTaskList);"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\components\\TaskList.js"]={name:"PureTaskList",docgenInfo:PureTaskList.__docgenInfo,path:"src\\components\\TaskList.js"})},455:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default})),__webpack_require__.d(__webpack_exports__,"WithPinnedTasks",(function(){return WithPinnedTasks})),__webpack_require__.d(__webpack_exports__,"Loading",(function(){return Loading})),__webpack_require__.d(__webpack_exports__,"Empty",(function(){return Empty}));var D_marmotte_Documents_GitHub_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(228),D_marmotte_Documents_GitHub_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(10),_TaskList__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__(0),__webpack_require__(229)),_Task_stories__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(134),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(8);__webpack_exports__.default={component:_TaskList__WEBPACK_IMPORTED_MODULE_3__.a,title:"TaskList",decorators:[function(story){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{style:{padding:"3rem"},children:story()})}],parameters:{assets:["designs/list-1.png","designs/list-2.png"]}};var Template=function Template(args){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_TaskList__WEBPACK_IMPORTED_MODULE_3__.a,Object(D_marmotte_Documents_GitHub_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)({},args))},Default=Template.bind({});Default.args={tasks:[Object(D_marmotte_Documents_GitHub_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)(Object(D_marmotte_Documents_GitHub_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)({},_Task_stories__WEBPACK_IMPORTED_MODULE_4__.Default.args.task),{},{id:"1",title:"Task 1"}),Object(D_marmotte_Documents_GitHub_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)(Object(D_marmotte_Documents_GitHub_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)({},_Task_stories__WEBPACK_IMPORTED_MODULE_4__.Default.args.task),{},{id:"2",title:"Task 2"}),Object(D_marmotte_Documents_GitHub_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)(Object(D_marmotte_Documents_GitHub_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)({},_Task_stories__WEBPACK_IMPORTED_MODULE_4__.Default.args.task),{},{id:"3",title:"Task 3"}),Object(D_marmotte_Documents_GitHub_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)(Object(D_marmotte_Documents_GitHub_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)({},_Task_stories__WEBPACK_IMPORTED_MODULE_4__.Default.args.task),{},{id:"4",title:"Task 4"}),Object(D_marmotte_Documents_GitHub_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)(Object(D_marmotte_Documents_GitHub_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)({},_Task_stories__WEBPACK_IMPORTED_MODULE_4__.Default.args.task),{},{id:"5",title:"Task 5"}),Object(D_marmotte_Documents_GitHub_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)(Object(D_marmotte_Documents_GitHub_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)({},_Task_stories__WEBPACK_IMPORTED_MODULE_4__.Default.args.task),{},{id:"6",title:"Task 6"})]};var WithPinnedTasks=Template.bind({});WithPinnedTasks.args={tasks:[].concat(Object(D_marmotte_Documents_GitHub_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a)(Default.args.tasks.slice(0,5)),[{id:"6",title:"Task 6 (pinned)",state:"TASK_PINNED"}])};var Loading=Template.bind({});Loading.args={tasks:[],loading:!0};var Empty=Template.bind({});Empty.args=Object(D_marmotte_Documents_GitHub_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)(Object(D_marmotte_Documents_GitHub_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)({},Loading.args),{},{loading:!1}),Default.parameters=Object(D_marmotte_Documents_GitHub_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)({storySource:{source:"(args) => <PureTaskList {...args} />"}},Default.parameters),WithPinnedTasks.parameters=Object(D_marmotte_Documents_GitHub_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)({storySource:{source:"(args) => <PureTaskList {...args} />"}},WithPinnedTasks.parameters),Loading.parameters=Object(D_marmotte_Documents_GitHub_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)({storySource:{source:"(args) => <PureTaskList {...args} />"}},Loading.parameters),Empty.parameters=Object(D_marmotte_Documents_GitHub_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)({storySource:{source:"(args) => <PureTaskList {...args} />"}},Empty.parameters)},676:function(module,exports,__webpack_require__){},688:function(module,exports,__webpack_require__){__webpack_require__(689),__webpack_require__(845),__webpack_require__(846),__webpack_require__(1056),__webpack_require__(1371),__webpack_require__(1408),__webpack_require__(1413),__webpack_require__(1426),__webpack_require__(1429),__webpack_require__(1434),__webpack_require__(1436),module.exports=__webpack_require__(1438)},756:function(module,exports){},846:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(501)}},[[688,1,2]]]);
//# sourceMappingURL=main.768e0b47be637c0f19ed.bundle.js.map