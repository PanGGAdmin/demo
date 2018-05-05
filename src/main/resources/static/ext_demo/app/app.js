//app.js为

Ext.application({
    name: 'CH',
    //定义包名，其实就是告诉ext 我的app.js
    // 所在的位置、即他就知道了,m-v-c对应的目录，注意controller,model,是死的是规范
    appFolder: 'app',
    controllers: ['User'],//引入控制器
    views: [//引入视图层
               'user.List',
               'user.Edit'
    ],
    stores: [//
        'User'//引入数据层--service
    ],
    launch: function() {//执行在控制器的init之前，视图的涣染之前
        Ext.create('Ext.container.Viewport', {
            //即创建Ext下面的这个组件，这个组件会自动添加
            // 到页面的boder上，所有一般里面是用来首页布局
            layout: 'fit',//布局>>
            items: [
                //代表元素集合，如果要放什么元素，则创建放入即可，
                // 当然还可以以后动态加入，有对应方法
                {
                    id:'gridData',//
                    xtype: 'userlist'//使用自定义别名中的视图
                }
            ]
        });
    }
});