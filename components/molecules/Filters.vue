<template>
<div>
    <div v-for="(category, value) in renderFilters" :key="value" class="filters">
        <app-heading :heading="value" headingType="h3"></app-heading>
        <app-input v-for="filter in category"
        :key="filter.type"
        type='checkbox'
        :name="value"
        :id='filter.type'
        :label='filter.type'
        :value='filter.type'
        :callback="updateFilters"></app-input>
    </div>
</div>
</template>

<script>
import Input from '../atoms/Input.vue'
import Heading from '../atoms/Heading.vue'
export default {
    data() {
        return {
            filter:[]
        }
    },
    async fetch() {
        return {renderFilters: this.$store.getters.getFilters}
    },
    props:{
        heading: {
            type: String,
            default: 'Please Enter Heading'
        },
        headingType: {
            type: String
        },
        callback: Function
     },
    components: {
        appInput: Input,
        appHeading: Heading
    },
    computed:{
        renderFilters(){
            return this.$store.getters.getFilters;
        }
    },
    methods: {
        updateFilters($event){
            this.$store.dispatch('applyFilter', {
                category: $event.target.name,
                value: $event.target.value,
                status: $event.target.checked
            });
        }
    }
}
</script>
<style scoped>
.filters {
    border: 1px solid #333;
    padding: 10px;
    margin: 20px 0;
    box-shadow: 5px 5px #555555;
}
</style>
