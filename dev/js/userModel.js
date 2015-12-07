define([], function(){

var UserModel = Backbone.Model.extend({
	defaults: {
		account_type: "Test",
		sign_up_date: new Date().toJSON().slice(0,10)
	},
	initialize: function(){
		console.log("Attributes: " + JSON.stringify(this.attributes));
	}
	});

	return UserModel;

});