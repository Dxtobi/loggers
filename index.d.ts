import "next-auth";



declare global {
    interface User {
        _id:string
    }

    module "next-auth" {
        interface Session {
            user:User
        }
    }
}
