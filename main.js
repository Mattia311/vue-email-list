const app = new Vue ({
    el: '#app',
    data: {
        emailRandom: []
    },
    mounted () {
        for (let index = 0; index < 10; index++) {
            const element = [index];
            console.log(element);
            axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then( response => {
                console.log(response);
                console.log(response.data.response);
                this.emailRandom.push(response.data.response)
            })
        }
    }
})
console.log(this.emailRandom)


