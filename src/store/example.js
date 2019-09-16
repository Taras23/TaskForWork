import { isContext } from "vm";

export default {
    state:{
    tableData: [{"name":"taras","surname":"petrukhno","phone":"0939743593","email":"mrcloud"},
    {"name":"oleg","surname":"tumko","phone":"34567","email":"vfds"} //for test
],
    },
    mutations:{
        initialiseStore(state) {
			if(localStorage.getItem('store')) {
				this.replaceState(
					Object.assign(state, JSON.parse(localStorage.getItem('store')))
				);
			}
		},
        SET_TABLEDATA(state,payload){
            state.tableData = payload;
        }
    },
    actions:{
        UPDATA_TABLEDATA: async(context,payload)=>{
            context.commit('SET_TABLEDATA', payload);
        }
    },
    getters:{
getTableData (state){
    return state.tableData
}
    }
}