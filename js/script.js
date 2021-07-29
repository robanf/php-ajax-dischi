const app= new Vue({
    el:'#app',

    data:{
        url:'api-couses.php',
        mysong:[]
    },
    mounted(){
            axios
                .get(this.url)
                .then(response =>{
                  
                    this.mysong=response.data;
                    console.log(this.mysong)
                })
    }
});