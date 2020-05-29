<template>
    <ul>
        <li v-for="category in Object.keys(activeFilters)" :key="category">
            <app-button type="button"  v-for="tag in activeFilters[category]" :key="tag" :label="tag" :callback="disableFilter" :icon=true :category="category"></app-button>
        </li>

    </ul>
</template>
<script>
import Button from '../atoms/Button.vue'
import {mapState} from 'vuex'
export default {
    computed: {
        ...mapState([
            'activeFilters'
        ])
    },
    methods:{
        disableFilter($event) {
            this.$store.dispatch('removeFilter', {category:$event.target.getAttribute('category'), value:$event.target.name});
        }
    },
    components:{
        appButton: Button
    }

}
</script>
<style scoped>
ul {
    padding: 0;
    margin: 0;
     display: flex;
     flex-wrap: wrap;
    flex-direction: row;
    margin: 20px 0;
}
li {
    margin-right:10px;
    list-style: none;

}
</style>
