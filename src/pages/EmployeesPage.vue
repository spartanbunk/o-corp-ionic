<template>
    
      <base-layout page-title = "All Employees">    
            <ion-list>
                
                <ion-item v-for="employee in employees" :key="employee.nid[0].value">
                    <router-link :to="{ name: 'Employee Details', params:{ nid: employee.nid[0].value}}">{{employee.title[0].value}}</router-link>
                </ion-item>
                
            </ion-list>
            
      </base-layout> 

</template>

<script>
import { IonList, IonItem } from '@ionic/vue';
export default {

    data() {
        return {
            employees: [],
        };
    },
    mounted(){
        fetch('http://34.123.67.241/employees/admin-list')
        .then(res => res.json())
        .then(data => this.employees = data )
    },
    components: {
        IonItem,
        IonList
    },

    // computed: {
    //     employees(){
    //         return this.$store.getters.employees;
    //     },
    //     // mounted(){
    //     // fetch('http://34.123.67.241/employees/admin-list')
    //     // .then(res => res.json())
    //     // .then(data => this.employees = data )
    //     // },
    // }
}
</script>
