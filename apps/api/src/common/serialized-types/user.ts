export class SerializedUser {
    id: number;
    name: string;
    username: string;
    email: string;

    constructor(user: any) {
        // TODO: fix any

        this.id = user.id;
        this.name = user.name;
        this.username = user.username;
        this.email = user.email;
    }
}
