<template>
 <label> {{label}}
    <input type="text" v-model="text" :placeholder="placeholder">
    </label>
</template>
<script>
export default {
    data(){
        return {
            text: ""
        }
    },
    props:{
        label:{
            type: String
        },
        value:{
            type: String
        },
        placeholder: {
            type: String
        },
        callback: Function
    },
    watch:{
        text(){
            this.callback(this.text);
        }
    }
}
</script>
<style scoped>
input{
    margin: 5px 0;
    width: 250px;
    display: block;
}

</style>