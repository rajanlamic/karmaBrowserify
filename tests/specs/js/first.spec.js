'use strict';

var first = require('../../../src/js/first');

describe('first', function() {
    it('should return first', function(){
        expect(first()).toBe('first');
    })
})