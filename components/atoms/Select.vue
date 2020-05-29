<template>
    <select :multiple="type" @change="execute">
        <option v-for="option in options" :value="option.value" :key="option.value">{{option.label}}</option>
    </select>
</template>
<script>
export default {
    props:{
        type: String,
        options: Array,
        callback: Function
    },
    methods:{
        execute(event){
            this.callback(event)
        }
    }
}
</script>