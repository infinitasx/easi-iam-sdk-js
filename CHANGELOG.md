# 变更日志

本项目的所有更改都将记录在此文件中。

本文件格式基于 [Keep a Changelog](https://keepachangelog.com/zh-CN/1.0.0/) ，并且遵循 [Semantic Versioning](https://semver.org/spec/v2.0.0.html) 。
## [0.0.12] - 20201-08-13
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
* 新增提供iam首页地址的方法
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
* iam接入常用功能封装sdk
