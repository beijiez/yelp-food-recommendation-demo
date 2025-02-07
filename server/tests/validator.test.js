const Validator = require('../validator');

describe('Validator', () => {
    describe('validateRestaurantQuery', () => {
        it('should return an error if location is missing', () => {
            const query = { cuisine: 'Italian', limit: '10' };
            const errors = Validator.validateRestaurantQuery(query);
            expect(errors).toContain('Location is required.');
        });

        it('should return an error if cuisine is missing', () => {
            const query = { location: 'New York', limit: '10' };
            const errors = Validator.validateRestaurantQuery(query);
            expect(errors).toContain('Cuisine is required.');
        });

        it('should return an error if limit is not a positive integer', () => {
            const query = { location: 'New York', cuisine: 'Italian', limit: 'ten' };
            const errors = Validator.validateRestaurantQuery(query);
            expect(errors).toContain('Limit must be a positive integer.');
        });

        it('should return an error if limit is zero or negative', () => {
            const query = { location: 'New York', cuisine: 'Italian', limit: '-1' };
            const errors = Validator.validateRestaurantQuery(query);
            expect(errors).toContain('Limit must be a positive integer.');
        });

        it('should return no errors if all fields are valid', () => {
            const query = { location: 'New York', cuisine: 'Italian', limit: '10' };
            const errors = Validator.validateRestaurantQuery(query);
            expect(errors).toHaveLength(0);
        });

        it('should return no errors if limit is not provided', () => {
            const query = { location: 'New York', cuisine: 'Italian' };
            const errors = Validator.validateRestaurantQuery(query);
            expect(errors).toHaveLength(0);
        });
    });
});