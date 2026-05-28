class User{
    constructor(id, name) { 
        this.name = name;
        this.id = id;
    }

    static create(name) {
        return{
            id: Date.now(),
            name
        }
    }

}
export default User;