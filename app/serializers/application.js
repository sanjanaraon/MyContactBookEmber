import DS from 'ember-data';

export default DS.JSONSerializer.extend({
	normalizeFindRecordResponse(store,type,payload){
		return{
			data:{
				id:payload.contact.emailId,
				type:type.modelName,
				attributes:{
					name:payload.contact.name,
					mobileNumber:payload.contact.mobileNumber,
					street1:payload.contact.street1,
					street2:payload.contact.street2,
					city:payload.contact.city,
					emailId:payload.contact.emailId,
				}
			}
		};
	}
});

