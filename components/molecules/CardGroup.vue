<template>
<div class="row bg-dark-main" v-if="items.length > 0">
    <app-card v-for="item in items" :item="item" :key="item.id"></app-card>
</div>
<div class="row" v-else>
    <div class="col-12">
        <strong>No Record Found!</strong>
    </div>

    </div>
</template>
<script>
 import {mapGetters} from 'vuex';
import axios from 'axios'
 import Card from '../atoms/Card.vue'
export default {
    async fetch() {
        const { data } = await axios.get('https://rickandmortyapi.com/api/character');
         return {items: data.results}
    },
    computed: {
        ...mapGetters({
            items: 'getResults'
        }),
    },
    components: {
         appCard: Card
    }
}
</script>
<style scoped>
.bg-dark-main{
    background-color:#202329 ;
}
</style>
