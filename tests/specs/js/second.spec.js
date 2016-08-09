'use strict';

var first = require('../../../src/js/second');

describe('second', function() {
    it('should return second', function(){
        expect(first()).toBe('second');
    })
})