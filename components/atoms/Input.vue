<template>
    <div class="control"> 
        <input :type="type" :id="id" :value="value" :name="name" :ref="name" @change="changed($event)" v-model="text">
        <label :for="id">{{label}}</label>
    </div>
</template>
<script>
export default {
    data(){
        return {
            text:[]
        }
    },
    props: {
        id:{
            type: [String, Number],
            required: true
        },
        type: {
            type: String,
            required: true
        },
        value: {
            type: String,
            required: true
        },
        label: {
            type: String,
            required: true
        },
        name: {
            type: String,
        },
        callback: {
            type: Function
        }
    },
    methods: {
        changed($event){
             this.callback($event)
        } 
    }
}
</script>
<style scoped>
.control{
    display: flex;
    align-items: center;
}
input {
    margin-right: 10px;
}
label{
    margin: 0;
    padding: 0;
}
</style>