import Ember from 'ember';

export function weatherIcon(params){
  var icon = "wi-day-sunny";
  switch(params[0]){
      case "Clouds": icon = 'wi-day-cloudy';
        break;
      case "Rain": icon = 'wi-day-rain';
        break;
  }
  return icon;
}

export default Ember.Helper.helper(weatherIcon);