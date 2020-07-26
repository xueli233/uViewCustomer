'use strict';
const db = uniCloud.database();
const collection = db.collection('plugin_configuration');
exports.main = async (event, context) => {
	var datas = event.datas;
	let isEmpty = (obj) => (Object.keys(obj).length === 0) ? true : false;
	if (datas && !isEmpty(datas)) {
		let res = await collection.doc('plugin_configuration').set({
			name: "uView",
			datas
		})
	}
	var res = await collection.where({
		name: 'uView'
	}).get();
	var list = res.data;
	console.log(list);
	return list;
};
