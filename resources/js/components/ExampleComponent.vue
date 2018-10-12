<template>
    <div>
        {{ proptest }}
    </div>
</template>

<script>
    export default {
        name: 'example-component',

        props: {
            proptest: String
        },
        mounted() {
            console.log('Component mounted!')
        }
    }
</script>
<style>
    body {
        color: green;
    }
</style>
