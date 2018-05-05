Ext.define('CH.view.user.Edit', {  //注意定义名称 的形式
    extend: 'Ext.window.Window',
    alias : 'widget.useredit',
    title : 'Edit User',
    layout: 'fit',
    autoShow: true,
    initComponent: function() {
        this.items = [
                {
                    xtype: 'form',
                    url: '/dm/add',
                    items: [
                        {
                            xtype: 'textfield',
                            name : 'id',
                            fieldLabel: 'id'
                        },
                   {
                       xtype: 'textfield',
                       name : 'name',
                       fieldLabel: '姓名'
                        },
                   {
                          xtype: 'textfield',
                          name : 'sex',
                          fieldLabel: '性别'
                    }, {
                            xtype: 'textfield',
                            name : 'birthday',
                            fieldLabel: '生日'
                        }
                    ]
                 }
            ];

        this.buttons = [
            {
                          text: '保存',
                        action: 'save'
            },
            {
                text: '新增',
                action: 'add'
            },
            {
                        text: '取消',
                        scope: this,
                        handler: this.close//点击事件
            }
            ];

             this.callParent(arguments);
         }
 });