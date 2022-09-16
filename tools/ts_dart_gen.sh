#!/bin/sh

CURPATH=$(
  cd "$(dirname "$0")"
  pwd
)

cd $CURPATH

# 切换至项目根目录

DIR=$(dirname "$(pwd)")

FLUTTERDIR="$DIR/flutter_pages"

JSDIR="$DIR/js_plugins"

TOOLDIR="$DIR/tools/ts_to_dart_facade"

# 下载运行环境

cd $DIR/tools/ts_to_dart_facade

if [ ! -d "$TOOLDIR/node_modules" ]; then
  npm install
fi

# 重新生成工具

npm run prepare

# 执行 ts_to_dart_facade

rm -r -- "$FLUTTERDIR/lib/api"*

./index.js --destination=$FLUTTERDIR/lib/api --base-path=$JSDIR/src/api $JSDIR/src/api/api.ts $JSDIR/src/api/plugins/*.ts $JSDIR/src/api/plugins/**/*.ts $JSDIR/src/api/api.ts $JSDIR/src/api/modules/*.ts $JSDIR/src/api/modules/**/*.ts

# 执行 json_annotation

cd $FLUTTERDIR

flutter pub get

flutter packages pub run build_runner build

# 执行 npm run build

cd $JSDIR

if [ ! -d "$JSDIR/node_modules" ]; then
  npm install
fi

npm run build:debug
