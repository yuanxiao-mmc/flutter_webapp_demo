class RouterURL {
  /// 首页(模版页)
  static String home = 'home';

  /// 我的设计
  static String myDesign = 'my_design';

  /// 个人中心
  static String personCenter = 'person_center';

  /// 分类页
  static String category = 'category';

  /// 搜索页
  static String search = 'search';

  /// 搜索结果页
  static String searchResult = 'search_result';
}

/// 重定向至 Flutter 页面
final redirectFlutterRoute = {
  "gaoding://template/search/home": RouterURL.search,
};

/// 重定向到 Web 页面
final redirectWebRoute = {};
