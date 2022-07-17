import { validateNameLength, validatePasswordLength } from "./length";

describe('Field length validation', () => {
    describe('Name field', () => {
        let name = '';
        test('a name should fail length validation if it is not set', () => {
            expect(validateNameLength(name)).toEqual(false);
        });

        test('a name should fail length validation if it is less than 2', () => {
            name = 'J'
            expect(validateNameLength(name)).toEqual(false);
        });

        test('a name should pass length validation if it is 2 characters', () => {
            name = 'Jo'
            expect(validateNameLength(name)).toEqual(true);
        });
    })
    

})