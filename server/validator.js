class Validator {
    static validateRestaurantQuery(query) {
        const { location, cuisine, limit } = query;
        const errors = [];

        if (!location || location.trim() === '') {
            errors.push('Location is required.');
        }

        if (!cuisine || cuisine.trim() === '') {
            errors.push('Cuisine is required.');
        }

        if (limit) {
            const limitNumber = Number(limit);
            if (isNaN(limitNumber) || !Number.isInteger(limitNumber) || limitNumber <= 0) {
                errors.push('Limit must be a positive integer.');
            }
        }

        return errors;
    }
}

module.exports = Validator;