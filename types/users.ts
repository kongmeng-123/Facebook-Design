export type user = {
    gender: string,
    name: {
        first: string,
        last: string
    },
    country: string,
    email: string,
    phone: string,
    picture: {
        large: string,
        medium: string,
        thumbnail: string
    }
}

export type userRes = {
    results : user[]
}