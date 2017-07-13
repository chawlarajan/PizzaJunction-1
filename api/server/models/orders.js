'use strict';

module.exports = function (Order) {
    //Hides all unnecessary endpoints
    Order.disableRemoteMethodByName('create');				// Removes (POST) 
    Order.disableRemoteMethodByName('patchOrCreate');				// Removes (PATCH) 
    Order.disableRemoteMethodByName('prototype.patchAttributes');    // Removes (PATCH)
    Order.disableRemoteMethodByName('find');				// Removes (GET) 
    Order.disableRemoteMethodByName('findById');				// Removes (GET) 
    Order.disableRemoteMethodByName('deleteById');			// Removes (DELETE)
    Order.disableRemoteMethodByName("updateAll");				// Removes (POST)
    Order.disableRemoteMethodByName("updateAttributes");		// Removes (PUT) 
    Order.disableRemoteMethodByName('createChangeStream');	// removes (GET|POST)    
    Order.disableRemoteMethodByName('replaceById');
    Order.disableRemoteMethodByName('upsertWithWhere');
    Order.disableRemoteMethodByName('replaceOrCreate');
    Order.disableRemoteMethodByName('findOne');
    Order.disableRemoteMethodByName('count');
    Order.disableRemoteMethodByName('exists');

    Order.getOrders = function (date, cb) {
        var ds = Order.dataSource;        
        var sql = "EXEC [dbo].[GetOrders] @date = '" + date + "'";  //Executes sproc

        ds.connector.query(sql, [], function (err, orders) {
            if (err) {
                console.error(err);     //handle error
            }
            cb(err, orders);
        });
    };

    Order.remoteMethod('getOrders', {
        accepts: {arg: 'date', type: 'string'},
        http: { path: '/getOrders', verb: 'get' },
        returns: { arg: 'GetOrders', type: 'array', root: true }
    });

    Order.getOrderById = function (id, cb) {
        var ds = Order.dataSource;
        var sql = "EXEC [dbo].[GetOrders] @orderId = " + id;  //Executes sproc

        ds.connector.query(sql, [], function (err, order) {
            if (err) {
                console.error(err);     //handle error
            }

            //order = order.length ? order[0]: {};
            cb(err, order);
        });
    };

    Order.remoteMethod('getOrderById', {
        accepts: {arg: 'id', type: 'number'},
        http: { path: '/getOrderById', verb: 'get' },
        returns: { arg: 'GetOrder', type: 'string', root: true }
    });

};
