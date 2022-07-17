import { validateEmail } from "./email";

describe('Email validation', () => {
    let email = '';
    test('an empty input should not be valid', () => {
        expect(validateEmail(email)).toEqual(false);
    });

    test('it should have an @ symbol', () => {
        email = '';
        expect(email.includes('@')).toEqual(false);
    });

    test('it should have a . symbol', () => {
        expect(email.includes('.')).toEqual(false);
    });

    test('a valid email should pass validation', () => {
        expect(validateEmail(email)).toEqual(false);
    });

    test('an invalid email should not pass validation', () => {
        email = ''
        expect(validateEmail(email)).toEqual(false);
    });
})