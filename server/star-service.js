"use strict";
const STARS = require('./mocks').STARS;

class StarService {

    getUserStarObject(userId) {
        let stars = STARS.find(starObj => starObj.userId === userId);
        return stars;
    }

    getStarsForUser(userId) {
        return this.getUserStarObject(userId).starIds;
    }

    addStarForUser(starId, userId) {
        const starObj = this.getUserStarObject(userId);
        starObj.starIds.push(starId);
    }

    removeStarForUser(starId, userId) {
        const starObj = this.getUserStarObject(userId);
        const indexToRemove = starObj.starIds.indexOf(starId);

        if(indexToRemove >= 0) {
            starObj.starIds.splice(indexToRemove, 1);
        }
    }

}

module.exports = new StarService();
