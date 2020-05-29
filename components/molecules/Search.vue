<template>
    <form>
        <app-input-text label="Search by Name" :callback="searchQuery" :placeholder="placeholder"></app-input-text>
        <app-button type="submit" label="Search" :callback="search" :disabled="searching === ''"></app-button>
       
    </form>
</template>
<script>
import Button from '../atoms/Button.vue'
import InputText from '../atoms/InputText.vue'
export default {
    data(){
        return {
            searching: '',
            placeholder: 'Search'
        }
    },
    components:{
        appInputText: InputText,
        appButton: Button
    },

    methods:{
        search(e){
            e.preventDefault();
            this.$store.dispatch('search', {name: this.searching});
        },
        searchQuery(keyword){
            this.searching = keyword
        }
    }
}
</script>