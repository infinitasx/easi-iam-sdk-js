# 变更日志

本项目的所有更改都将记录在此文件中。

本文件格式基于 [Keep a Changelog](https://keepachangelog.com/zh-CN/1.0.0/) ，并且遵循 [Semantic Versioning](https://semver.org/spec/v2.0.0.html) 。
## [0.0.49] - 2021-11-26
### Changed
* 检测每日登录检验时排除code换token的页面

## [0.0.48] - 2021-11-26
### Changed
* 最后登录时间改变了，刷新当前页面

## [0.0.47] - 2021-11-25
### Added
* 添加消息传递相关功能

## [0.0.46] - 2021-11-01
### Fixed
* 修复token过期和今日未登录两种情况同时存在时，大刷新后跑去自动登录了的问题
* 去掉日志组件data_id必传的约束
### Added
* 添加原生js的调用demo

## [0.0.45] - 2021-10-12
### Changed
* 将所有的localStorage的keys设为常量
* 完善example的vue2、vue3中clearLocalStorageDataExcludeOidc、getDeviceId、addEveryDayLoginListener等的使用例子

## [0.0.44] - 2021-10-08
### Added
* signOut方法支持添加回调方法
* 完成vue3+antdv版本的测试demo
* 添加vue2+element版本的测试demo
### Changed
* 优化vue3+antdv版本的操作日志查询组件的title传参
* 优化vue2+element版本的操作日志查询组件的title传参
* 优化UI下vue2和vue3版本的操作日志组件的功能
### Fixed
* vue2+element版本下操作日志无法显示数据问题

## [0.0.43] - 2021-09-28
### Added
* 新增vue3+antdv版本的测试demo
* 添加飞书发布消息提醒功能
### Changed
* 修改约束每天登录登录一次的逻辑

## [0.0.42] - 2021-09-17
### Changed
* 去掉Oidc.UserManager实例化时的max_age参数

## [0.0.41] - 2021-09-14
### Changed
* 用户信息接口返回值前端添加当前系统id字段

## [0.0.40] - 2021-09-13
### Fixed
* 修复内存中保存认证信息在多个Tab中的问题

## [0.0.39] - 2021-09-09
### Added
* ajaxErrorCheck方法添加可以传入点击确定后的回调函数

## [0.0.38] - 2021-09-08
### Added
* code换token页面，添加请求失败后返回登录页面的入口

## [0.0.37] - 2021-09-07
### Changed
* 修改clearLocalStorageDataExcludeOidc方法中排除的key的值
* 去掉token过期的事件回调，token过期由ajax响应回调中处理
### Added
* 添加每天必须登录一次的校验

## [0.0.36] - 2021-09-03
### Changed
* 缩短刷新token的时长

## [0.0.35] - 2021-09-01
### Fixed
* 修复部分请求api没有return错误信息
### Changed
* 去掉callback页面跳到初始进入的地址

## [0.0.34] - 2021-08-26
### Changed
* 令牌过期、多设备登录约束的校验方式修改

## [0.0.33] - 2021-08-26
### Added
* 添加令牌过期的校验

## [0.0.32] - 2021-08-25
### Added
* 多设备登录约束校验
* 添加设备被踢提示的vue2_elementUI的Ui组件
* 添加设备被踢提示的vue3_antdv的UI组件

## [0.0.31] - 2021-08-25
### Fixed
* 修复antdv vue3版UI操作日志Modal默认的title无法显示的问题

## [0.0.30] - 2021-08-25
### Changed
* 修改deviceId的存储方式

## [0.0.29] - 2021-08-25
### Changed
* 修改deviceId的获取方式

## [0.0.28] - 2021-08-24
### Changed
* 完善部分单元测试
* 获取用户信息地址改回/v1/admin/userinfo

## [0.0.27] - 2021-08-24
### Changed
* UI日志查询支持自定义title

## [0.0.26] - 2021-08-24
### Changed
* 修改直接引入package.json的版本号报错
* 修改IAM名称不规范

## [0.0.24] - 2021-08-24
### Changed
* 修改设备id的获取、设置流程

## [0.0.23] - 2021-08-23
### Added
* 新增uuid
* ajax请求添加设备id

## [0.0.22] - 2021-08-23
### Changed
* 修改获取用户信息的接口地址


## [0.0.21] - 2021-08-23
### Fixed
* 修改导出版本号错误运行报错

## [0.0.20] - 2021-08-23
### Added
* 添加client设备id

## [0.0.19] - 2021-08-21
### Fixed
* 修复获取用户信息后，无法控制初次登录修改密码的约束

## [0.0.18]- 2021-08-20
### Added
* 添加单元测试
### Changed
* 改造获取用户信息

## [0.0.17] - 2021-08-18
### Changed
* 使用eslint约束代码风格
* 变更部分文件目录
* 改进操作日志查询组件

## [0.0.16] - 2021-08-18
### Changed
* 修改查询操作日志接口参数：log_type为log_type_id

## [0.0.15] - 2021-08-18
### Changed
* 修改UI分页下拉框左对齐

## [0.0.14] - 2021-08-17
### Changed
* 按照最新的约束，修改目录、文件名称
* 在路由拦截中记录进入的地址，登录成功后优先进入改地址

## [0.0.13] - 2021-08-13
### Added
* 操作日志文字国际化处理

## [0.0.12] - 2021-08-13
### Added
* 添加数据的操作日志查询功能
* 添加日志查询的vue2_elementUI的Ui组件
* 添加日志查询的vue3_antdv的UI组件

## [0.0.11] - 2021-08-12
### Fixed
* 修复ajax访问基地址错误

## [0.0.10] - 2021-08-04
### Changed
* 重构，将UI拆分出去
* 添加vue3和antdv的UI代码
* 添加vue2和element的UI代码

## [0.0.9] - 2021-08-03
### Changed
* 修改国际化中文标识

## [0.0.8] - 2021-08-02
### Added
* 新增提供IAM首页地址的方法
### Changed
* 更新生产环境、测试环境、开发环境的域名
* clearLocalStorageDataExcludeOidc 可以排除传入的key值
* 添加初次登录密码需要重置的限制


## [0.0.7] - 2021-07-29
### Fixed
* 国际化文案错误


## [0.0.6] - 2021-07-28
### Changed
* 添加本地开发不拦截校验功能
* 引入国际化
* 包内引入oidc-client依赖


## [0.0.5] - 2021-07-27
### Changed
* vite打包
* 去掉独立css


## [0.0.4] - 2021-07-26
### Changed
* 修改部分导出的变量名


## [0.0.3] - 2021-07-23
### Fixed
* 修复被第三方本地依赖导入时运行错误问题


## [0.0.2] - 2021-07-23
### Fixed
* 修改导入包名称错误问题


## [0.0.1] - 2021-07-22
### Added
* IAM接入常用功能封装sdk
