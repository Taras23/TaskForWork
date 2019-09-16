<template>
<div id=wrapper>
    <section>
        <div id="json">
           <p><b>JSON:</b><br>
            <input id="inpJSON" type="text" size="40">
           </p>
           <button @click="saveJSON">"Import JSON array</button>
           <form action="/">
                    <button type="submit">Firs Page</button>
                </form>
        </div>
    <div id=inputs>
        <p><b>Name:</b><br>
            <input id='name' type="text" size="40">
           </p>
           <p><b>Surname:</b><br>
            <input id='surname' type="text" size="40">
           </p>
           <p><b>Phone:</b><br>
            <input id='phone' type="text" size="40">
           </p>
           <p><b>Email:</b><br>
            <input id='email' type="text" size="40">
           </p>
           <button id='saveEdit' name="null" @click="editRow(this)">Save edit</button>
           <button @click="addRow">Add</button>
           </div>
           <table-component @ready-for="readyFor"></table-component>
           
        
</section>
</div>
</template>

<script>
import Table from "./Editable.vue"
export default {
    data(){
    return {
    tableData:null,
    }
},
created(){
    this.tableData = this.$store.getters.getTableData;

},
 methods:{
        saveJSON(){
        let inpt = document.getElementById("inpJSON").value;
        let arr = JSON.parse(`${inpt}`);
       this.tableData = this.tableData.concat(arr); 
       console.log(JSON.stringify(this.tableData));
       this.$store.dispatch('UPDATA_TABLEDATA',this.tableData);
       this.$store.commit('initialiseStore');
       window.location.reload();
        },
         addRow(){
        let name =document.getElementById("name").value;
        let surname =document.getElementById("surname").value;
        let phone =document.getElementById("phone").value;
        let email =document.getElementById("email").value;
        
        let row = {name,surname,phone,email};
        this.tableData.push(row);
        this.$store.dispatch('UPDATA_TABLEDATA',this.tableData);
        },
        editRow(){
        let i = document.getElementById("saveEdit").name;

        let name =document.getElementById("name").value;
        let surname =document.getElementById("surname").value;
        let phone =document.getElementById("phone").value;
        let email =document.getElementById("email").value;
        let row = {name,surname,phone,email};

        this.tableData.splice(i,1,row);
        this.$store.dispatch('UPDATA_TABLEDATA',this.tableData);  
        },
         readyFor(i,namePH,surnamePH,phonePH,emailPH){
           document.getElementById("saveEdit").setAttribute("name", i);
           document.getElementById("name").value = namePH;
           document.getElementById("surname").value = surnamePH;
           document.getElementById("phone").value = phonePH;
           document.getElementById("email").value = emailPH;
        return i;
    }
    }
}
</script>

<style lang="scss" scoped>
#inputs{ 
float:left;
width: 50%;
color:indianred;  
}
#json{
float:left;
width: 50%;
  color:indianred;  
}
#inputs button{
    width: 40%;
}
#inputs input, #json input{
    width: 80%;
}
form button,#json button{
    float:left;
    margin-top:2%;
    margin-left:8%;
    width: 60%;
}

</style>>