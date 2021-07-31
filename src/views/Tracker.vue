<template>
    <div class="container">
        <Header @toggle-add-task="toggleAddTask" title="Task Tracker" :showAddTask="showAddTask" />
        <AddTask v-show="showAddTask" @add-task="addTask" />
        <Tasks @toggle-reminder="toggleReminder"  @delete-task="deleteTask" v-bind:tasks="tasks" />
    </div>
</template>

<script>
import Header from '../components/Header.vue'
import AddTask from '../components/AddTask.vue'
import Tasks from '../components/Tasks.vue'

export default {
    name: 'Tracker',
    components : {
        Header,
        Tasks,
        AddTask
    },
    data(){
        return{
            tasks: [],
            showAddTask: false
        }
    },
    methods:{
        toggleAddTask(){
            this.showAddTask = !this.showAddTask
        },
        async addTask(task) {
            const res = await fetch('api/task', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(task)
            })
            const data = await res.json()
            this.tasks = [...this.tasks, data]
        },

        async deleteTask(id){
            if(confirm('Are you sure?')){
                const res = await fetch(`api/task/${id}`,{
                method: 'DELETE'
                })
            res.status === 200 ?  (this.tasks = this.tasks.filter((task)=> task.id !== id)) : alert('Error deleting task')
        }
        },

        async toggleReminder(id){
            const taskToToggle = await this.fetchTask(id)
            const updTask = {...taskToToggle, reminder: !taskToToggle.reminder}

            const res = await fetch(`api/task/${id}`,{
                method : "PUT",
                headers :{
                'Content-type': 'application/json'
                },
                body: JSON.stringify(updTask)
            })

            const data = await res.json()

            this.tasks = this.tasks.map((task)=> task.id === id ? {...task, reminder: data.reminder} : task)
            console.log(res.body)
        },

        async fetchTasks(){
            const res = await fetch('api/task')
            const data = await res.json()
            return data
        },
        async fetchTask(id){
            const res = await fetch(`api/task/${id}`)
            const data = await res.json()
            return data
        },
    },
    async created(){
        this.tasks = await this.fetchTasks()
    },
    
}
</script>

<style scoped>

</style>