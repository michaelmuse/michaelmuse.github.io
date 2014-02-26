$(function(){
  $('#nav-contact a').addClass('active');
    $('#subcontent').empty()
                    .append($('#contact-templ').html());


  // Setting up the tab navigation
  $('#nav-contact a').click(function (e) {
    e.preventDefault();
    $('.tab-pane').removeClass('active');
    $('#nav-contact').addClass('active');
    $('#subcontent')//.hide('slide', {direction: 'down'}, 400)
                    .empty()
                    .append($('#contact-templ').html());
                    // .show('slide', {direction: 'down'}, 400);
  });

  $('#nav-career a').click(function (e) {
    e.preventDefault();
    $('.tab-pane').removeClass('active');
    $('#nav-code').addClass('active');
    $('#subcontent').empty()
                    .append($('#career-templ').html());
  });

  $('#nav-code a').click(function (e) {
    e.preventDefault();
    $('.tab-pane').removeClass('active');
    $('#nav-code').addClass('active');
    $('#subcontent').empty()
                    .append($('#code-templ').html());
  });

  $('#nav-photography a').click(function (e) {
    e.preventDefault();
    $('.tab-pane').removeClass('active');
    $('#nav-photography').addClass('active');
    $('#subcontent').empty()
                    .append($('#photography-templ').html());
  });
  //END of tab navigation


});




//THE REST NEEDS TO BE CHANGED!




// // ** Model **
// var Monkey = Backbone.Model.extend({

//   // defaults?
//   defaults: {
//     name: "unknown monkey",
//     catchphrase: "I have no catchphrase"
//   }

// });


// // ** View **
// var MonkeyView = Backbone.View.extend({

//   initialize: function(){
//     this.listenTo(this.model, 'remove', this.remove)
//   },
//   // tagName?
//   tagName: 'li',

//   // template?
//   template: _.template($('#monkeyview-template').html()),

//   // render?
//   render: function(){
//     this.$el.html(this.template(this.model.attributes));
//     return this
//   },

//   destroy: function(e){
//     e.preventDefault();
//     this.model.destroy()
//   },

//   events: {
//     "click [data-action='destroy']" : 'destroy'
//   }

// });


// // ** Collection **
// var MonkeyCollection = Backbone.Collection.extend({

//   // model?
//   model: Monkey,
//   url: '/monkeys',
//   initialize: function(){
//     this.fetch()
//   }

// });


// // ** View **
// var MonkeyListView = Backbone.View.extend({

//   // add a listener to the colletion... to respond to a add event?
//   initialize: function(){
//     this.listenTo(this.collection, 'add', this.renderMonkey)
//   },

//   // how to render 1 monkey to the list?
//   renderMonkey: function(monkey){
//     monkey.view = new MonkeyView({model: monkey});
//     this.$el.prepend(monkey.view.render().el)
//     return this
//   },

//   // extra:  render all?
//   render: function(){
//     this.$el.empty();
//     var self = this;
//     _.each(this.collection.models, function(monkey){
//       self.renderMonkey(monkey);
//     })
//   }
// });






// // ** View **
// var MonkeyFormView = Backbone.View.extend({
//   events: {
//     "submit" : "submitCallback"
//   },
//   submitCallback: function(e){
//     e.preventDefault();
//     var monkey_data = this.getFormData();
//     this.collection.create(monkey_data);
//     this.clearForm();
//   },
//   getFormData: function(){
//     var monkey_data = {
//       name: this.$('#name-field').val(),
//       catchphrase: this.$('#catchphrase-field').val()
//     }
//     return monkey_data
//   },
//   clearForm: function(){
//     this.$('input').val('')
//   }
//   // events?
//     // getFormData?
//     // clearForm?
//     // submitCallback?

// });



// var monkey_collection, monkey_list_view, monkey_form_view;

// $(function(){

//   monkey_collection = new MonkeyCollection();
//   monkey_list_view = new MonkeyListView({collection: monkey_collection, el: $('#monkey-list')});
//   monkey_form_view = new MonkeyFormView({collection: monkey_collection, el: $('#monkey-form')})

// });

