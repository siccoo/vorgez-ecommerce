import { validateEmail } from "./email";

describe('Email validation', () => {
    let email = '';
    test('an empty input should not be valid', () => {
        expect(validateEmail(email)).toEqual(false);
    });

    test('it should have an @ symbol', () => {
        email = 'chilaka@gmail.com';
        expect(email.includes('@')).toEqual(true);
    });

    test('it should have a . symbol', () => {
        expect(email.includes('.')).toEqual(true);
    });

    test('a valid email should pass validation', () => {
        expect(validateEmail(email)).toEqual(true);
    });

    test('an invalid email should not pass validation', () => {
        email = 'chilaka@gmail'
        expect(validateEmail(email)).toEqual(false);
    });
})