

/**
 * Demonstrates a simple HTTP endpoint using API Gateway. You have full
 * access to the request and response payload, including headers and
 * status code.
 *
 * To scan a DynamoDB table, make a GET request with the TableName as a
 * query string parameter. To put, update, or delete an item, make a POST,
 * PUT, or DELETE request respectively, passing in the payload to the
 * DynamoDB API as a JSON body.
 */

exports.handler = (event, context, callback) => {
    //dummy('Received event:', JSON.stringify(event, null, 2));

    const done = (err, res) => callback(null, {
        statusCode: err ? '400' : '200',
        body: err ? err.message : JSON.stringify(res),
        headers: {
            'Access-Control-Allow-Origin':'*',
            'Content-Type': 'application/json'
        },
    });


  var AWS = require('aws-sdk');
  var documentClient = new AWS.DynamoDB.DocumentClient();
    var params = {
        "TableName": "tabletest2"
    };
    /*
    documentClient.scan(params, function(err, data) {
        console.log("dynamo_data:", data);
        console.log("dynamo_err:", err);
        context.done(null, data);
    });

	//--181018 -- data put test OK ���_300ms���x�ŏI����Ă����̂�1200ms���x������
    documentClient.put(
		{
        "TableName": "tabletest2",
        "Item": {
            "primaryKey": "1",
            "key1": "testset",
            "key2": "suzuki"
        }
		}
    , function(err, data) {
        console.log("dynamo_data:", data);
        console.log("dynamo_err:", err);
        context.done(null, data);
    });  
*/

    documentClient.get(
		{
        "TableName": "tabletest2",
        "Key": {
            "primaryKey": "1"
        }
		}
    , function(err, data) {
        console.log("dynamo_data:", data);
        console.log("dynamo_err:", err);
        context.done(null, data);
    });  


	//done(null,"test ok");

	/*
		switch (event.httpMethod) { 
			case 'DELETE':
				dynamo.deleteItem(JSON.parse(event.body), done);
				break;
			case 'GET':
				dynamo.scan({ TableName: event.queryStringParameters.TableName }, done);
				break;
			case 'POST':
				dynamo.putItem(JSON.parse(event.body), done);
				break;
			case 'PUT':
				dynamo.updateItem(JSON.parse(event.body), done);
				break;
			default:
				done(new Error(`Unsupported method "${event.httpMethod}"`));
		}
	 */  

	//done( null,event["body-json"] );

	if ( event["body-json"] ){
		var cmd = event["body-json"];
	}else{
		var cmd = { "get" : {"all" :1},"set":{} };
	}


	//var cmd = event.data;
	var uchieco = require('./d6.js');
	var D6 = uchieco.func();

	function maxmeasure(n){
		if ( ret.measure.length <= n ) return;
		ret.measureorg = ret.measure;
		ret.measure = [];
		for( var i=ret.measureorg.length-1 ; i>=0 ; i-- ){
			if ( i<n ){
				ret.measure[i] =  ret.measureorg[i];
			}
		}
		delete ret.measureorg;
	}

	//��{�\���\�z
	D6.constructor();


	var key, key2;
	if( cmd.set && cmd.set.add ) {
		for( key in cmd.set.add ){
			for( key2 in cmd.set.add[key]){
				D6.addConsSetting(key);
			}
		}
	}

	//�ϐ��̐ݒ�
	if( cmd.set && cmd.set.inp ) {
		for( key in cmd.set.inp ){
			D6.inSet(key,cmd.set.inp[key]);
		}
	}

	//�v�Z
	D6.calculateAll();

	//�΍�̒ǉ�
	if( cmd.set && cmd.set.measureadd ) {
		for( key in cmd.set.measureadd ){
			D6.measureAdd( cmd.set.measureadd[key] );
		}
		D6.calcMeasures(-1);
	}

	//�擾�f�[�^
	var ret = {};
	if ( cmd.get.all ){
		ret = D6.getAllResult();
		maxmeasure(15);
	} else {
		//�ʂ̎擾
		if ( !cmd.get.target || (cmd.get.target && cmd.get.target.substr(0,4) != "cons") ) cmd.get.target = "consTotal";
		if( cmd.get.common){
			ret.common = D6.getCommonParameters();
		}
		if( cmd.get.monthly){
			ret.monthly = D6.getMonthly();
		}
		if( cmd.get.average ){
			ret.average = D6.getAverage(cmd.get.target);
		}
		if( cmd.get.average_graph ){
			ret.average_graph = D6.getAverage_graph();
		}
		if( cmd.get.itemize ){
			ret.itemize = D6.getItemize(cmd.get.target);
		}
		if( cmd.get.itemize_graph ){
			ret.itemize_graph = D6.getItemizeGraph(cmd.get.target);
		}
		if( cmd.get.measure ){
			ret.measure = D6.getMeasure(cmd.get.target);
			maxmeasure(15);
		}
		if( cmd.get.measure_all ){
			ret.measure = D6.getMeasure(cmd.get.target);
		}
		if( cmd.get.measure_detail ){
			ret.measure_detail = D6.getMeasureDetail( cmd.get.detail );	
		}
		if( cmd.get.input_page ){
			if ( cmd.get.input_page == 1 ) cmd.get.input_page = cmd.get.target;
			ret.input_page = D6.getInputPage( cmd.get.target, cmd.get.input_page );	
		}
		//�f�[�^�\��
		if( cmd.get.scenario ){
			ret.scenario = {};
			ret.scenario.defInput = D6.scenario.defInput;	
			ret.scenario.defSelectValue = D6.scenario.defSelectValue;
			ret.scenario.defSelectData = D6.scenario.defSelectData;
			//�����
			var cshow = {};
			for ( var key in D6.consShow ){
				cshow[key] = { "key": key, "consName" : D6.consShow[key].consName , "title" : D6.consShow[key].title };
			}
			ret.scenario.defConsShow = cshow;
			var cons = {};
			for ( var key in D6.consListByName ){
				cons[key] = { 
					  "key": key
					, "consName" : D6.consListByName[key][0].consName 
					, "title" : D6.consListByName[key][0].title 
					, "sumConsName" : D6.consListByName[key][0].sumConsName
					, "orgCopyNum" : D6.consListByName[key][0].orgCopyNum
				};
			}
			ret.scenario.defCons = cons;
		}

	}

	done(null ,ret);

        
};
