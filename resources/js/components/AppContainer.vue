<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card card-default">
                    <div class="card-header">App Container</div>

                    <div class="card-body">
                        <button
                            v-on:click="testMethod()"
                        >
                            click
                        </button>

                        {{ this.teststring }}

                        <hr />
                        <example-component
                            :proptest="teststring"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {

        // props: {
        //     teststring: {
        //         type:       String,
        //         default:    'teststringInitial'
        //     }
        // },

        data: () => {
            return {
                teststring: 'teststringInitial'
            }
        },

        methods: {
            testMethod: function() {
                console.log('testMethod called!')
                this.teststring = 'teststringNEU'
            }
        },

        mounted() {
            console.log('Component mounted!')
        }
    }
</script>

<style src="../../sass/app.scss" lang="scss"></style>
<style>
    body {
        color: blue;
    }
</style>
