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
import { mapGetters } from "vuex";
import Card from "../atoms/Card.vue";
export default {
  computed: {
    ...mapGetters({
      items: "getResults"
    })
  },
  components: {
    appCard: Card
  }
};
</script>
<style scoped>
.bg-dark-main {
  background-color: #202329;
}
</style>
