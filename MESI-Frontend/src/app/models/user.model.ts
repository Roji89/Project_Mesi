export interface User {
    _id: string;
    first_name?: string;
    last_name?: string;
    email?: string;
    old_password?: string;
    password?: string;
    token: string;
    role?: Role;
}

export interface Role {
    role: ['user', 'superadmin']
}