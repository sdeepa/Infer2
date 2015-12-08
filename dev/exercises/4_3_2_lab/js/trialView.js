define([], function(){
  var TrialView = Backbone.View.extend({
    
    // Define the element we want to target 
    el: '.target',
    template: _.template($('#trial-tpl').html()),

    // Render out a text string to the page
    render: function(){
    	var item_tpl =  this.template(this.model.toJSON());
      	this.$el.append(item_tpl);
      	return this;
    }
  });
  return TrialView;
});