<template>
    <div class="row mt-3">
        <app-stock v-for="stock in stocks" :stock="stock" :key="stock.name"></app-stock>
    </div>
</template>

<script>
    import Stock from './Stock.vue';

    export default {
        data(){
            return {
                stocks: [
                    {id: 1, name: 'BMW', price: 110},
                    {id: 2, name: 'Gogle', price: 230},
                    {id: 3, name: 'Apple', price: 350},
                    {id: 4, name: 'Twitter', price: 17},
                ]
            }
        },
        components:{
            appStock: Stock
        }
    }

</script>