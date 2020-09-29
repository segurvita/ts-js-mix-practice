import addition from './tools/addition';
import multiplication from './tools/multiplication';

// 定数
const hoge = 2;
const fuga = 3;
const piyo = 5;

// 計算
const hogefuga = multiplication(hoge, fuga);
const hogefugapiyo = addition(hogefuga, piyo);

// 結果表示
console.log(hoge + ' * ' + fuga + ' + ' + piyo + ' = ' + hogefugapiyo);
