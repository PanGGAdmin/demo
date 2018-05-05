Ext.define('CH.view.user.List' ,{
    extend: 'Ext.grid.Panel',
    alias : 'widget.userlist',  //设置别名为userlist、、注意是用widget点别名的格式，
   title : 'All Users',
    buttonAlign:'start',//按钮位置
    buttons:[{text:"新增",action:'add'},{text:"修改",action:'update'}],
  initComponent: function() {   //初始化组件函数
          this.store = 'User',
            this.columns = [
                   {header: 'Id',  dataIndex: 'id',  flex: 1},
                   {header: 'Name', dataIndex: 'name', flex: 1},
                   {header: 'Sex', dataIndex: 'sex', flex: 1},
                   {header: 'Birthday', dataIndex: 'birthday', flex: 1}
               ];
          this.callParent(arguments);//覆盖父类的同名方法--initComponent--激活父级组件渲染到页面
       }
 });
