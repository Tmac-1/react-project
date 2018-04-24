const fs = require("fs");
const path = require("path");
const entry = require('./entry');
const nodeCommon = require('../common/nodeCommon');

const entryBuildPath = path.resolve(__dirname, '../../entryBuild');
nodeCommon.deleteFile(entryBuildPath);
fs.mkdirSync(entryBuildPath);

const entryContent = (data) => {
    // let cont = `<Index />`;
    // console.log(data)
    return (
        `import React from 'react';
        import ReactDOM from 'react-dom';
        import Index from '../app/pages/${data.path}';
        import '../app/utils/setRem';
        import '../app/style/base.css';
        ReactDOM.render([<Index key="Index"/>],document.getElementById('app'));`
    )// 生成单入口页面后，要手动修改 import 的内容
    
};
/*生成webpack entry 入口文件*/
entry.map((data) => {
    fs.writeFile(entryBuildPath + '/' + data.name + '.js', entryContent(data), 'utf8', function (err) {
        if (err) {
            return console.log(err);
        }
    });
});