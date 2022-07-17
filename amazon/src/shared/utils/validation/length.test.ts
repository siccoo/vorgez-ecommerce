import { validateNameLength, validatePasswordLength } from "./length";

describe('Field length validation', () => {
    describe('Name field', () => {
        let name = '';
        test('a name should fail length validation if it is not set', () => {
            expect(validateNameLength(name)).toEqual(false);
        });
    })
    

})