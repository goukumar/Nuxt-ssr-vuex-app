<template>
  <div class="row">
    <div class="col-12 col-md-3">
      <app-side-bar></app-side-bar>
    </div>
    <div class="col-12 col-md-9">
      <app-tags></app-tags>
      <div class="row">
        <div class="col-12 col-md-6">
          <app-search></app-search>
        </div>
        <div class="col-12 col-md-6 text-right">
          <app-sort-by></app-sort-by>
        </div>
      </div>

      <app-card-group></app-card-group>
    </div>
  </div>
</template>

<script>
import sideBar from "~/components/organisms/SideBar.vue";
import Search from "~/components/molecules/Search.vue";
import CardGroup from "~/components/molecules/CardGroup.vue";
import Tags from "~/components/molecules/Tags.vue";
import SortBy from "~/components/molecules/Sortby.vue";
export default {
  components: {
    appSideBar: sideBar,
    appSearch: Search,
    appCardGroup: CardGroup,
    appTags: Tags,
    appSortBy: SortBy
  }
};
</script>
<style>
body {
  background-image: url("~@/assets/gravel.png");
  padding: 40px 0;
}
@media (min-width: 1200px) {
  .container {
    max-width: 90% !important;
  }
}
</style>
