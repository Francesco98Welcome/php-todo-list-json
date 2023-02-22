
const { createApp } = Vue;

createApp({
    data() {
        return {
            apiUrl: '/php-todo-list-json/api.php',
            tasksItems: []
        }
    },
    created() {
        axios.get(this.apiUrl)
            .then(response => {
                console.log(response.data)
                this.tasksItems = response.data.data;
            })
    }
}).mount('#app')
