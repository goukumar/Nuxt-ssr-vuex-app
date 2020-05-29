<template>
    <button :type="type" @click="execute" v-if="icon" :name="label" v-bind="$props">{{label}} x</button>   
    <button :type="type" @click="execute" v-bind="$props" v-else>{{label}}</button>  
</template>
<script>
export default {
    props:{
        properties: Object,
        icon: Boolean,
        type:{
            type: String,
            default: 'submit'
        },
        label: {
            type: String,
            required: true
        },
        callback: Function
    },
    methods:{
        execute(e){
            this.callback(e);
        }
    }
}
</script>