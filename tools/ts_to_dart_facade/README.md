# ts_to_dart_facade

TS 代码生成 dart | flutter web 调用层工具

## 前提

Flutter 需增加依赖

``` YAML
dependencies:
  # Your other regular dependencies here
  json_annotation: <latest_version>

dev_dependencies:
  # Your other dev_dependencies here
  build_runner: <latest_version>
  json_serializable: <latest_version>
```

## 使用

`index.js --destination=${OUTPUT}  --base-path=${INPUT} ${INPUT}/*.ts`

## 介绍

### 基本用法

`ts_to_dart_facade <input d.ts file>`

Dart interop facade file is written to stdout.

### 扩展用法

`ts_to_dart_facade --destination=<destination-dir> --base-path=<input d.ts file directory> <input d.ts file> <input d.ts file> ...`

#### 更多参数

`--destination=<destination-dir>`: Output generated code to destination-dir.

`--base-path=<input d.ts file directory>`: Specify the directory that contains the input d.ts files.

`--skip-formatting`: Skips running dart-format on the output. This is useful for large files (like dom.d.ts) since the node package version of dart-format is significantly slower than the version in the SDK.

`--generate-html`: Generate facades for dart:html types rather than importing them.

`--rename-conflicting-types`: Rename types to avoid conflicts in cases where a variable and a type have the exact same name, but it is not clear if they are related or not.

`--explicit-static`: Disables default assumption that properties declared on the anonymous types of top level variable declarations are static.

`--trust-js-types`: Emits @anonymous tags on classes that have neither constructors nor static members. This prevents the Dart Dev Compiler from checking whether or not objects are truly instances of those classes. This flag should be used if the input JS/TS library has structural types, or is otherwise claiming that types match in cases where the correct JS prototype is not there for DDC to check against.
