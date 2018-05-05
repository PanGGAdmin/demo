Ext.define('CH.store.User', {
       extend: 'Ext.data.Store',
       // fields: ['name', 'email'],替换成model
        model: 'CH.model.User',
       /* data: [
            {name: 'Ed',    email: 'ed@sencha.com'},
            {name: 'Tommy', email: 'tommy@sencha.com'}
        ]*/
       autoLoad: true,
        proxy: {
            type: 'ajax',
            api: {
                read: '/dm/sel',
                update: '/dm/update'
            },
            reader: {
                type: 'json',
                root: 'users',
                successProperty: 'success'
           }
   }
});