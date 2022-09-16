import 'package:flutter/material.dart';
import 'package:flutter_easyloading/flutter_easyloading.dart';

import '../../api/api.dart';

class GDHomePage extends StatelessWidget {
  const GDHomePage({Key? key}) : super(key: key);

  @override
  Widget build(
    BuildContext context,
  ) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('API 测试'),
      ),
      body: Container(
        child: _operationView,
      ),
    );
  }

  Widget get _operationView {
    return Column(
      children: [
        const SizedBox(height: 10),
        const Text('Demo 简单点，都是直接输出，注意查看 ～'),
        const SizedBox(height: 10),
        ElevatedButton(
          child: const Text('GDGlobal - 获取项目名称'),
          onPressed: () {
            debugPrint(GDGlobal.projectName);
            EasyLoading.showToast(GDGlobal.projectName);
          },
        ),
        const SizedBox(height: 10),
        ElevatedButton(
          child: const Text('GDModuleAPI - home 获取值'),
          onPressed: () {
            GDModuleAPI.home.fetchSearchKeys().then((result) {
              debugPrint(result.list.toString());
              EasyLoading.showToast(result.list.toString());
            });
          },
        ),
        const SizedBox(height: 10),
        ElevatedButton(
          child: const Text('GDPlugin - location 打开新页面'),
          onPressed: () {
            GDPlugin.location.open('https://www.gaoding.com');
          },
        ),
        const SizedBox(height: 10),
        ElevatedButton(
          child: const Text('GDPlugin - 写入 localstorage'),
          onPressed: () {
            GDPlugin.cache.saveLocalStorage('test', '1');
            EasyLoading.showToast('已写入，查看浏览器的 localStorage');
          },
        ),
        const SizedBox(height: 10),
        ElevatedButton(
          child: const Text('GDPlugin - 请求接口'),
          onPressed: () {
            EasyLoading.showToast('会跨域，记得挂个代理再测，这里省略..');
            var request = GDRequest();
            request.method = 'GET';
            request.path = 'XXXX';
            request.query = {};
            request.body = {};
            request.headers = {};
            request.host = '';
            GDPlugin.network.request(request).then((value) {
              debugPrint(value.toString());
              GDPlugin.cache.getLocalStorage(value.toString());
            });
          },
        ),
      ],
    );
  }
}
