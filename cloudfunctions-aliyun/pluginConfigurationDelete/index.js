'use strict';
const db = uniCloud.database();
const collection = db.collection('plugin_configuration');
exports.main = async (event, context) => {
  //event为客户端上传的参数
  let res = await collection.doc('plugin_configuration').remove();
  return res
};
