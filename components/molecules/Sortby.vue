<template>
    <div>
        <div class="sort-by">
            <app-select :options="[{label: 'Sort by ID', value:'id'}]" :callback="onSortByChange"></app-select>
        </div>
        
        <div class="order">
            <app-select :options="[{label: 'Ascending', value:'ascending'},{label: 'Descending', value:'descending'}]" :callback="onDirectionChange"></app-select>  
        </div>
        
    </div>
    
</template>
<script>
import Select from '../atoms/Select.vue'
export default {
    data(){
        return {
            sortby: 'id',
            direction: 'ascending'
        }
    },
    components: {
        appSelect: Select
    },
    methods: {
        onSortByChange(event) {
            this.sortby = event.target.value;
        },
        onDirectionChange(event){
            this.direction = event.target.value;
            this.$store.dispatch('sortBy', {sortby:this.sortby, direction: this.direction});
        }
    }
}
</script>
<style scoped>
.sort-by, .order {
    border: 1px solid #gray;
    margin: 20px 0;
}
.sort-by select, .order select {
    width: 150px
} 
</style>