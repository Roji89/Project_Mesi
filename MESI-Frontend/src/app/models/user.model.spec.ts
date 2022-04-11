import { User } from './user.model';

describe('User model', () => {

    it('should create user instance', () => {

        const user = new User('john', 'doe', 'john@gmail.com', 'azerty');

        expect(user).toBeTruthy();
    });

    it('test getters and setters', () => {

        const user = new User('john', 'doe', 'john@gmail.com', 'azerty');

        expect(user.name).toEqual('john');
        expect(user.lastname).toEqual('doe');
        expect(user.email).toEqual('john@gmail.com');
        expect(user.password).toEqual('azerty');

        user.name = "jake"
        user.lastname = "peralta"
        user.email = "jake@gmail.com"
        user.password = "ninenine"

        expect(user.name).toEqual('jake');
        expect(user.lastname).toEqual('peralta');
        expect(user.email).toEqual('jake@gmail.com');
        expect(user.password).toEqual('ninenine');
    });
});
