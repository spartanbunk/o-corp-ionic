<template>
    
      <base-layout page-title = "All Employees">    
            <ion-list>
                <ion-item v-for="employee in employees" 
                :router-link ="'/employees/${employee.id}'"
                :key="employee.id"
                >
                {{employee.title[0].value}}
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
    }
}
</script>
