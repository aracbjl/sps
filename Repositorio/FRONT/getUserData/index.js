'use strict'
const AWS = require('aws-sdk');
Aws.config.update({region: "us-east2"})

exports.handler = function (event, context, callback) {
    const documentClient = new AWS.DynamoDB.documentClient();
    let responseBody = "";
    let statusCode = 0;
    const {id, nombre, entrevista, habilidad} = JSON.parse(event.body);
    
    const params = {
        TableName: "Usuario",
        Item: {
            id:id,
                nombre:nombre,
                entrevista:entrevista,
                habilidad:habilidad
            }
        };
    
    ddb.getItem(params, (err, data) => {
        if(err) {
            console.log(err);
        }
        console.log(data);
    })





 