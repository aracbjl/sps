const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({region: 'us-east-1'});
exports.handler = (event, context, callback) => {

  var params = {
      Item: {
          id: event.id,
          nombre: event.nombre,
          apellido: event.apellido
      },
    TableName : 'mitabla'
  };
  
  docClient.put(params, function(err, data){
      if(err){
          callback(err,null);
      }else{
          callback(null, "Informacion guardada");
      }
      
  });
    
};