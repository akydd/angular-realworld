export interface User {
        email: string,
        token: string,
        usernmae: string,
        bio: string,
        image: string
}

export interface UserResponse {
        user: User
}

export interface RegisterUserData {
        username: string,
        email: string,
        password: string,
}

export interface RegisterUserRequest {
        user: RegisterUserData
}

export interface LoginData {
        username: string,
        password: string,
}

export interface LoginRequest {
        user: LoginData,
}
