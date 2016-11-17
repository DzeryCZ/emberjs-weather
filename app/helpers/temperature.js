import Ember from 'ember';

// Get integer of temperature - decimally numbers doesn't matter
export function temperature(params) {
    return Math.floor(params) + "°";
}

export default Ember.Helper.helper(temperature);