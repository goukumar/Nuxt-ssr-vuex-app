<template>
    <div>
        <app-heading heading="Filters" headingType="h2"></app-heading>
        <app-filters></app-filters>
    </div>
    
</template>
<script>
import Filters from '../molecules/Filters.vue'
import Heading from '../atoms/Heading.vue'
export default {
    components:{
        appHeading: Heading,
        appFilters: Filters,

    }
}

</script>