<template>
    <base-layout page-title="Employee Details" page-default-back-btn="/employees">
        <h2>Employee Details</h2>
        <!-- <div v-for="employee in employees" :key="employee.id" class="employee">
            <router-link :to="{ name: 'EmployeeDetails', params:{ id: employee.id}}">
                <h3>{{ employee.title }}</h3>
            </router-link>
        </div> -->
        
    </base-layout>
    


</template>

<script>
export default {
    data(){
       return{
           employees: []
       } 
    },
    methods: {
        getEmployees: function(){
            this.$http.get('http://34.123.67.241/employees/admin-list', function(employees){
                this.$set('employees', employees);
                console.log(employees);

            })
        }

    }
    // mounted() {
    //     fetch('http://34.123.67.241/employees/admin-list')
    //     .then(res => res.json())
    //     .then(data => this.employees = data)
    //     console.log(data)
    //     .catch(err => console.log(err.message))
        
    // }
    
}
</script>
