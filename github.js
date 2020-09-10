class Github {
    constructor() {
        this.client_id='dfc449de3c6e1131b240';
        this.client_secret='1235b9b2be583a071ba5815890d9a124a57fc142';
        this.repos_count=5;
        this.repos_sort='created: asc';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        // const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
        
        // const repos = await reposResponse.json();
        

        return {
            profile,
           // repos

        }
    }

    
        
        

    



}