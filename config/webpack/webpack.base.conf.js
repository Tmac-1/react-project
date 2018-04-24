const entry = require('./webpack.entry.conf');
const json = require('../../package.json');
const newEntry ={
//    'index':'./entryBuild/index.js',
//    'shop':'./entryBuild/shop.js'
};

// 生成主入口文件
for(let name in entry){
   newEntry[name] = entry[name][0]
}

newEntry.vendor = Object.keys(json.dependencies)
// 把package.json dependencies字段的值放进vender中

// console.log( newEntry)

let config  = {
   entry : newEntry,
   resolve:{
       extensions:['.js','.json','.jsx','css','pcss']
   }
};

module.exports = config;








