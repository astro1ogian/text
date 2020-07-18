<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <div id="app">
        <div>{{msg}}</div>
    </div>
    <script type="text/javascript" src="vue.js"></script>
    <script type="text/javascript">
        // vue的基本使用步骤
        // 1.需要提供标签用于填充数据
        // 2.引入vue.js库文件
        // 3.可以使用vue的语法做功能了
        // 4.把vue提供的数据填充到标签里面
        var vm = new Vue({
            el: '#app',
            data: {
                msg: 'Hello Vue'
            }

        })
    </script>

</body>

</html>
