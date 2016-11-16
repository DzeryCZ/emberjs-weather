import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        showMeWather: function(){
            var city = this.get('city');
            this.getData(city);
        }
    },
    getData: function(city){
        var _that = this;
        var raw_data = Ember.$.getJSON("http://api.openweathermap.org/data/2.5/forecast/daily?q=" + city + "&mode=json&units=metric&cnt=16&appid=08386da1df4f62f3426794b77cce7146", function(data){
            if(data.cod == 200){
                console.log(data.list);
                _that.setProperties({
                    weather: data.list
                });
                jQuery(document).trigger('reload-slider');
            }
        });
    },
    getWeather: function(){
        return this.store.findAll("weather");
    }
});
