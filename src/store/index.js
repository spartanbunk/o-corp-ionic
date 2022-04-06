import { createStore } from 'vuex';
//console.log('mike');
const store = createStore({
    state() {
        return {
            employees: [],
            
        };
    },

    getters: {
        employees(state) {
            return state.employees;
        }
    }
    
});


export default store;
//console.log(store);