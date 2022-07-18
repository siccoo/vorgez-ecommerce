import { reducer, screen } from "../../../shared/utils/test-utils";
import SigninFormComponent from "./SigninForm.component";

describe('Email validation', () => {
    let signInButton = null;

    beforeEach(() => {
        reducer(<SigninFormComponent />)
        signInButton = screen.getByRole('button', { name: /sign-in/i });
    });
    // test('an empty input should not be valid', () => {
    //     expect(validateEmail(email)).toEqual(false);
    // });
});