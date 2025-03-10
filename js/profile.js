class Profile{
    constructor(){
        this.clintId='',
        this.clintSecret=''

    }

    async getProfile(username){
        const profileResponse = await fetch (`https://jsonplaceholder.typicode.com/users?username=${username}`);
        const profile = await profileResponse.json();
        const todoResponse = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${profile[0].id}`)
        const todo= await todoResponse.json();
        return{
            profile,
            todo
        }
    }
}