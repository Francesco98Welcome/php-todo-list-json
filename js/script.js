const { createApp } = Vue;

createApp({
    data() {
        return {
            apiUrl: '/php-todo-list-json/api.php',
            createUrl: './create.php',
            tasksItems: [],
            newTask: {
                'new_task': '',
                'done': false
            }
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
            ).then(() => {
                this.tasksItems.push({
                    task: this.newTask.new_task
                })
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
