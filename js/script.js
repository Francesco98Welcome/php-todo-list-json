const { createApp } = Vue;

createApp({
    data() {
        return {
            apiUrl: './api.php',
            createUrl: './create.php',
            tasksItems: [],
            newTask: '',
        }
    },
    methods: {
        addTask() {
            console.log('ciao')
            axios.post(this.createUrl, {
                task: this.newTask
            }, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
            ).then((response) => {
                console.log(response);
                this.tasksItems = response.data

            })
        }
    },
    created() {
        axios.get(this.apiUrl)
            .then(response => {
                console.log(response.data)
                this.tasksItems = response.data.data;
            })
    },
}).mount('#app')


