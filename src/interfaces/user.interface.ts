export interface User {
    username: string
    firstname: string
    password: string
    image_url?: string
    gender?: ['S' | 'M']
    deleted?: boolean
}
