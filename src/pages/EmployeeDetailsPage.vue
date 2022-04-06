<template>
    <base-layout page-title="Employee Details" page-default-back-btn="/employees">
        <h2>Employee Details</h2>
         
        <!-- <div>{{nid}}</div>
        <div>{{employee.title}}</div> -->

        <!-- <ion-list>
            <ion-item v-for="employee in employees" :key="employee.nid[0].value">
                {{ employee.title[0].value }}
            </ion-item>
        </ion-list>  -->
    </base-layout>
    


</template>

<script>
//import { IonList, IonItem } from '@ionic/vue';
export default {
    props:['nid'],
    data(){
       return{
           employees: [],
           ///nid: this.$route.params.nid /// use above props instead
       } 
    },
    mounted(){
        fetch('http://34.123.67.241/employees/admin-list')
        .then(res => res.json())
        .then(data => this.employees = data )
    },
    // components: {
    //     IonItem,
    //     IonList
    // },
   
    
}
</script>
