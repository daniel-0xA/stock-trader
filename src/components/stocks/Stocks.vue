<template>
    <div class="row mt-3 mb-3">
        <app-stock v-for="stock in stocks" :stock="stock" :key="stock.name"></app-stock>
    </div>
</template>

<script>
    import Stock from './Stock.vue';

    export default {
        components:{
            appStock: Stock
        },
        computed: {
            stocks(){
                // return this.$store.state.stocks
                return this.$store.getters.stocks
            }

        }
    }

</script>