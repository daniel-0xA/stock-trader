<template>
  <div class="header">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="navbar-header">
        <router-link to="/" class="navbar-brand">Stock Trader</router-link>
      </div>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="nav navbar-nav">
          <router-link to="/portfolio" class="mr-3" activeClass="active" tag="li">
            <a>Portfolio</a>
          </router-link>
          <router-link to="/stocks" activeClass="active" tag="li">
            <a>Stocks</a>
          </router-link>
        </ul>

        <ul class="nav navbar-nav ml-auto">
          <li class="nav-item" @click="endDay()">
            <a class="nav-link" href="#">End Day</a>
          </li>
          <li class="nav-item dropdown" @click="isOpen = !isOpen">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >Save&Load</a>
            <div class="dropdown-menu" :class="{show: isOpen}" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#" @click="saveData">Save Data</a>
              <a class="dropdown-item" href="#" @click="loadData">Load Data</a>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Funds: {{ funds | currency }}</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data(){
    return{
      isOpen: false
    }
  },
  computed: {
    funds() {
      return this.$store.state.funds;
    }
  },
  methods: {
    ...mapActions(["randomizeStocks", "fetchData"]),
    endDay() {
      this.randomizeStocks();
    },
    saveData(){
      const data = {
        funds: this.$store.state.funds,
        portfolioStocks: this.$store.state.portfolioStocks,
        stocks: this.$store.state.stocks
      }
      // send to server
      // this.$axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
      console.log(this.$store.state.portfolio)
      var resp = this.$axios.put('data.json', data)
    },
    loadData(){
      this.fetchData()
    }
  }
};
</script>

<style scoped>
.header a {
  font-size: 1.2rem;
}
</style>