import 'package:go_router/go_router.dart';

import '../modules/home/home.dart';
import 'define.dart';

final routes = [
  // 首页
  GoRoute(
    name: RouterURL.home,
    path: "/",
    builder: (context, state) => const GDHomePage(),
  ),
];
