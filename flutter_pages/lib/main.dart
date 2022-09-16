import 'package:go_router/go_router.dart';
import 'package:flutter_web_plugins/flutter_web_plugins.dart';
import 'package:flutter/material.dart';
import 'package:flutter_easyloading/flutter_easyloading.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'routes/routes.dart';

import 'styles/styles.dart';

void main() {
  setUrlStrategy(const HashUrlStrategy());

  runApp(ProviderScope(
    child: GDWebApp(),
  ));
}

class GDWebApp extends StatelessWidget {
  GDWebApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp.router(
      title: 'Flutter Webapp 示例',
      routeInformationProvider: _router.routeInformationProvider,
      routeInformationParser: _router.routeInformationParser,
      routerDelegate: _router.routerDelegate,
      theme: ThemeData(
        primaryColor: mainThemeColor,
      ),
      builder: EasyLoading.init(),
    );
  }

  final GoRouter _router = GoRouter(
    routes: routes,
  );
}
