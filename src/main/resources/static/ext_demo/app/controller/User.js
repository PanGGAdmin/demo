Ext.define('CH.controller.User', {
    //defile--即创建组件，自定义的组件，
    // CH.controller.User代表组件位置，因为组件得让ext知道
    extend: 'Ext.app.Controller',//继承这个controller组件
    stores: ['User'],//加入组件，即会生成对应的getUserStore供控制器使用
    models: ['User'],//
    init: function() {//控制器初始化方法
        this.control({//this.controle用来给要渲染的视图设置监听也就是所谓的绑定事件
            'userlist':{
                     itemdblclick: this.editUser,//表格添加双击的监听事件
                     itemcontextmenu:this.youjimenu//绑定右击菜单事件
                     },
            'userlist button[action=add]':{
                click: this.openAddUser//表格添加单击的监听事件--新增
            },
            'useredit button[action=add]': {
                click: this.addUser//保存修改
            },
           'useredit button[action=save]': {
            click: this.updateUser//保存修改
             }
        });
        },
    editUser: function(grid, record) {
        var view = Ext.widget('useredit');   //创建该view

        view.down('form').loadRecord(record);  //数据载入
        //down是EXT中的方法，能够往下查询到括号中对应的内容
    },
    updateUser: function(button) {
        var win    = button.up('window');//button向上辈找--对应还有down向小辈找
                  form   = win.down('form');//对于form模块的方法自己去api找到form.panel模块
                   record = form.getRecord(),//获取到绑定在form上的data.model数据-<api--Ext.form的getRecord>
                    values = form.getValues();
                    record.set(values);
                    win.close();
        this.getUserStore().sync();//让其更新数据- - - - 即会调用store中ajax的 update

    },
    openAddUser:function(button){
        var view = Ext.widget('useredit');//创建表单,因为该组件创建即打开设置为特true即自动打开，所以下面没写了.show（）
    },
    addUser:function (button) {
        var win    = button.up('window');
        var form   = win.down('form').getForm();//得到Basic类对象
        // 委托给Ext.form.action.Action的实例控制表单加载和提交
        if (form.isValid()) {
            // 验证是否通过
            form.submit({
                success: function(form, action) {
                    //console.info("action:"+JSON.stringify(action));
                    this.getUserStore().load();//重新加载即刷新数据
                    win.close();
                },
                failure: function(form, action) {//出错等同于error
                    Ext.Msg.alert('Failed', action.result ? action.result.msg : 'No response');
                },
                scope:this//改变this指针>>在js中在函数中的this是谁调用他就指向谁，所以在所有回调函数中，要加scope
            });
        }
    },
    youjimenu:function (his, record, item, index, e) {
        // 分类代码表的右键菜单
        e.preventDefault();
        e.stopEvent();// 取消浏览器默认事件
        var array = [ {
            text : '删除此行',
            scope:this,
            handler : function() {
                var id=record.raw.id
                Ext.Ajax.request({
                    url: '/dm/del',
                    params: {
                        id: id
                    },
                    scope:this,
                    success: function(response){
                        var text = response.responseText;
                        alert('删除成功');
                        this.getUserStore().load();//重新加载即刷新数据
                    }
                });
            }},{
            text : '其它扩展',
            handler : function() {
                alert('');
            }
        }];
        var nodemenu = new Ext.menu.Menu({
            items : array
        });
        nodemenu.showAt(e.getXY());// 菜单打开的位置
    }
 });