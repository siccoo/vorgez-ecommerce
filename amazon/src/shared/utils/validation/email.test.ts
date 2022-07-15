import { validateEmail } from "./email";

describe('Email validation', () => {
    let email = '';

    test('an empty input should not be valid', () => {
        expect(validateEmail(email)).toEqual(false);
    })
})