<template>
  <div class="col-sm-6 col-md-4 mb-3">
    <div class="card">
      <div class="card-header">
        <h3>
          {{stock.name}}
          <small>{Price: {{stock.price}}}</small>
        </h3>
      </div>
      <div class="card-body">
        <div class="float-left">
          <input type="number" :class="{danger: insufficientFunds}" class="form-control" placeholder="Quantity" v-model="quantity" />
        </div>
        <div class="float-right">
          <button
            class="btn btn-success"
            @click="buyStock"
            :disabled="insufficientFunds || quantity <= 0 || !Number.isInteger(+quantity)"
          >{{insufficientFunds ? 'InsuffFunds' : 'Buy'}}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
    .danger {
        border: 1px solid red;
    }
</style>

<script>
export default {
  props: ["stock"],
  data() {
    return {
      quantity: 0
    };
  },
  methods: {
    buyStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      };
      this.$store.dispatch("buyStock", order);
      this.quantity = 0;
    }
  },
  computed: {
    insufficientFunds() {
      return this.quantity * this.stock.price > this.$store.state.funds;
    }
  }
};
</script>

