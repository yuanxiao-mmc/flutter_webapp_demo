# flutter_pages

稿定 Web App 项目 - Flutter UI 页面

## Getting Started

`flutter run -d chrome --web-renderer canvaskit` canvaskit 渲染 run

`flutter run -d chrome --web-renderer html` html 渲染 run

`flutter build web --release --web-renderer canvaskit` canvaskit 渲染 build 命令

`flutter build web --release --web-renderer html` html 渲染 build 命令

渲染模式选择上先使用 html 形式，包体积占用较小

## Developer Node

### chrome 浏览器开发

1. 终端1 使用代理 `dart ./lib/proxy.dart`

2. 终端2 开启调试 `flutter run -d chrome --web-renderer html --no-sound-null-safety`

* 调试及打包需要增加 `--no-sound-null-safety` 禁用空安全，原因是引用了旧的模块

### 手机查看

1. 修改 proxy.dart 文件，host = {你的IP}， port 不变

2. 终端1 使用代理 `dart ./lib/proxy.dart`

3. 终端2 开启调试 `flutter run -d chrome --web-renderer html --web-hostname={你的IP} --web-port={自定义端口}`

4. 手机访问 `http://{你的IP}:{自定义端口}`

### 打包语句

`flutter build web --release --web-renderer html --no-sound-null-safety`
