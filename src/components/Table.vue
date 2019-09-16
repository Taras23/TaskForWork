<template>
<section id="main">
   
<table>

     <thead>
  <tr>
    <th>name</th>
    <th>surname</th>
    <th>phone</th>
    <th>email</th>
    <th>Command</th>
  </tr>
   </thead>

  <tr v-for="(item,index) in tableData" :key="item">
    <td>{{item.name}}</td>
    <td>{{item.surname}}</td>
    <td>{{item.phone}}</td>
    <td>{{item.email}}</td>
    <td><a  @click="remove([`${index}`])"   >Delete</a>
  <a  @click="readyFor([`${index}`])">For Edit</a></td>
  </tr>

  

</table>
</section>
</template>

<script>

export default {
data(){
    return { 
        tableData:null 
    }
},
created(){
    this.tableData = this.$store.getters.getTableData
},
methods:{
    remove(i){
    let item = this.tableData.splice(i, 1);
    this.$store.dispatch('UPDATA_TABLEDATA', this.tableData);
    
    },
    readyFor(i){
        if(window.location.pathname != "/page2.html"){
         window.location.pathname = "/page2.html";}
         let namePH = this.tableData[i].name;
         let surnamePH = this.tableData[i].surname;
         let phonePH = this.tableData[i].phone;
         let emailPH = this.tableData[i].email;
         this.$emit('ready-for',i,namePH,surnamePH,phonePH,emailPH);
       //передать в инпуты
    }
},

}
</script>

<style lang="scss" scoped>
main{
    float:right;
    width: 30%;
    background:wheat;
}
    h1{
        color:green;
    }
    TABLE {
    
    color: white; /* Цвет текста */
   padding-left: 3%;
   width: 40%;
    background:wheat;
   }
   TD, TH {
    background: forestgreen; /* Цвет фона ячеек */
    
   }
   a {
    display: block;
    margin:1px;
    text-align: center;
    height: 20px;
    width: auto;
    border: 1px solid #000;
    color: rgb(14, 70, 0);
    background:rgb(84, 138, 4)
}
</style>
