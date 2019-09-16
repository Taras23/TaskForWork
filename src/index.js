import store from './store/index'
window.Vue = require('vue')

Vue.component('table-component',require('./components/Table.vue').default)
Vue.component('editable-component',require('./components/Editable.vue').default)

const app = new Vue({
    data () {
return {

}
    },
    store, //store:store es6
    el:'#app',
    beforeCreate() {
		this.$store.commit('initialiseStore');
	}
})
store.subscribe((mutation,state) => {
    localStorage.setItem('store',JSON.stringify(state));
} 

)