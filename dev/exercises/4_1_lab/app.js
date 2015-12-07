require(["TrialView"], function(TrialView){

//Exercise 2.1
/*
$('.target').html('jQuery is working <br>');

if (_.contains([1, 2, 3], 3)) {
 	$('.target').append('Underscore is working <br>');

	}

var model = new Backbone.Model({isWorking: 'working'});
$('.target').append('Backone is ' + model.get('isWorking'));
*/

//Exercise 3.2
/*
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

	*/

//Exercise 4.1
var trialView = new TrialView();
 trialView.render();

});