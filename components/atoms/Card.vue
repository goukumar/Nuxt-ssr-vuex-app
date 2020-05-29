<template>
    <div class="palette-card text-white col-6 col-md-3">
        <div class="card-holder bg-main-details">
               <div class="card-body">
                <img class="card-img-top" :src="item.image" :alt="item.name">
                <div class="card-text bg-secondary">
                    <app-heading :heading="item.name" headingType="h5"></app-heading>
                    <p><small>id: {{item.id}} - {{item.created | moment("from", "now")}}</small></p>
                </div>

            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item bg-main-details"><span class="label float-left">Status</span><span class="value float-right">{{item.status}}</span></li>
                <li class="list-group-item bg-main-details"><span class="label float-left">Species</span><span class="value float-right">{{item.species}}</span></li>
                <li class="list-group-item bg-main-details"><span class="label float-left">Gender</span><span class="value float-right">{{item.gender}}</span></li>
                <li class="list-group-item bg-main-details"><span class="label float-left">Origin</span><span class="value float-right">{{item.origin.name}}</span></li>
                <li class="list-group-item bg-main-details"><span class="label float-left">Last Location</span><span class="value float-right">{{item.location.name}}</span></li>
            </ul>
        </div>


    </div>
</template>
<script>
import Heading from '../atoms/Heading.vue'
export default {
    props: ['item'],
    components: {
        appHeading: Heading
    }
}
</script>
<style scoped>
.palette-card {
    padding: 5px;
    border: none;
    display: flex;
    border-radius: 0;
}
.card-body {
    margin: 0;
    padding: 0;
    flex: none;
    position: relative;
    width: 100%;
}
.list-group {
    border: none;
}
.list-group-item {
    border-bottom: 1px solid #3a3a3a;
}
.bg-main-details{
    background-color: #333333;
}
.card-holder {
    margin: 5px;
}
.card-text {
    position: absolute;
    opacity: 0.8;
    bottom: 0;
    padding: 5px 10px;
    width: 100%;
}
.label{
    color: #767676;
    width: 50%;
    text-align: left;
}
.value{
    color: #bb792d;
    width: 50%;
    text-align: right;
}
</style>
