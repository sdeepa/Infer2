require(["UserModel"], function(UserModel){

//Exercise 2.1
/*
$('.target').html('jQuery is working <br>');

if (_.contains([1, 2, 3], 3)) {
 	$('.target').append('Underscore is working <br>');

	}

var model = new Backbone.Model({isWorking: 'working'});
$('.target').append('Backone is ' + model.get('isWorking'));
*/
	var tom = new UserModel();

	tom.set({
		address: "Coriander Ter",
		business_category: "manufacturing",
	});

	var address = tom.get('address');
	var category = tom.get('business_category');
	console.log("Address" + address + "Category" + category);

	console.log(tom.toJSON());
	console.log(JSON.stringify(tom));
});