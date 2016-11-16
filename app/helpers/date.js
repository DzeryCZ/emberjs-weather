import Ember from 'ember';

export function date(params){
  var date = new Date( params * 1000 );
  var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return weekday[date.getDay()] + ' ' +  date.getDate();
}

export default Ember.Helper.helper(date);