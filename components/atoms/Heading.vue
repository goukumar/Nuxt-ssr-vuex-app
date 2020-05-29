<template>
 <div v-html="createHeading()"></div>
</template>

<script>
export default {
    props:{
        heading: {
            type: String,
            default: 'Please Enter Heading'
        },
        headingType: {
            type: String
        }
    },
    methods: {
        createHeading() {
            let heading = '';
            switch (this.headingType) {
                case 'h1':
                    heading = "<h1>"+this.heading+"</h1>";
                    break;
                case 'h2':
                    heading = "<h2>"+this.heading+"</h2>";
                    break;
                case 'h3':
                    heading = "<h3>"+this.heading+"</h3>";
                    break;
                case 'h4':
                    heading = "<h4>"+this.heading+"</h4>";
                    break;
                case 'h5':
                    heading = "<h5>"+this.heading+"</h5>";
                    break;
                default:
                    heading = "<p>"+this.heading+"</p>";
                    break;
            }
            return heading;
        }
    }
}
</script>