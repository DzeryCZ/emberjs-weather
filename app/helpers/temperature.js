import Ember from 'ember';

export function temperature(params){
  return Math.floor(params) + "°";
}

export default Ember.Helper.helper(temperature);