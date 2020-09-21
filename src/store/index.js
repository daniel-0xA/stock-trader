import Vue from 'vue'
import Vuex from 'vuex'
import stocks from '../data/stocks'

Vue.use(Vuex)

const state = {
  stocks: [],
  funds: 10000,
  portfolioStocks: []
}

const mutations = {
  'SET_STOCKS'(state, stocks) {
    state.stocks = stocks;
  },
  'RND_STOCKS'(state) {
    state.stocks.forEach(stock => {
      stock.price = Math.round(stock.price * (1 + Math.random() - 0.47))
    })
  },
  'BUY_STOCK'(state, { stockId, quantity, stockPrice }) {
    const record = state.portfolioStocks.find(el => el.id === stockId)
    if (record) {
      record.quantity += quantity
    } else {
      state.portfolioStocks.push({
        id: stockId,
        quantity: quantity
      })
    }
    state.funds -= quantity * stockPrice
  },
  'SELL_STOCK'(state, { stockId, quantity, stockPrice }) {
    const record = state.portfolioStocks.find(el => el.id == stockId)
    if (record.quantity > quantity) {
      record.quantity -= quantity
      state.funds += stockPrice * quantity;
    } else {
      state.portfolioStocks.splice(state.portfolioStocks.indexOf(record), 1)
      state.funds += stockPrice * record.quantity;
    }
  },
  'SET_PORTFOLIO'(state, portfolioStocks){
    state.portfolioStocks = portfolioStocks ? portfolioStocks : []
  },
  'SET_FUNDS'(state, funds){
    state.funds = funds
  }
}

const actions = {
  buyStock({ commit }, order) {
    commit('BUY_STOCK', order);
  },
  initStocks({ commit }) {
    commit('SET_STOCKS', stocks)
  },
  randomizeStocks({ commit }) {
    commit('RND_STOCKS')
  },
  sellStock({ commit }, order) {
    commit('SELL_STOCK', order)
  },
  async fetchData({commit}) {
    const res = await Vue.axios.get('data.json')
    try {
      const data = res.data
      if(data){
        const stocks = data.stocks;
        const funds = data.funds
        const portfolioStocks = data.portfolioStocks

        commit('SET_STOCKS', stocks)
        commit('SET_FUNDS', funds)
        commit('SET_PORTFOLIO', portfolioStocks)
      }
    } catch (err) {
      console.log(err)
    }

    // Vue.axios.get('data.json')
    // .then(response => {
    //   const data = response.data
    //   if(data){
    //     const stocks = data.stocks;
    //     const funds = data.funds
    //     const portfolioStocks = data.portfolioStocks

    //     commit('SET_STOCKS', stocks)
    //     commit('SET_FUNDS', funds)
    //     commit('SET_PORTFOLIO', portfolioStocks)
    //   }
    // })
    // .catch(err => {
    //   console.log(err)
    // })
  }

}

const getters = {
  stocks() {
    return state.stocks
  },
  stockPortfolio(state, getters) {
    return state.portfolioStocks.map(stock => {
      const record = getters.stocks.find(el => el.id == stock.id)
      return {
        id: stock.id,
        quantity: stock.quantity,
        name: record.name,
        price: record.price
      }
    })
  }
}

const modules = {
}


export default new Vuex.Store({
  state: state,
  getters,
  mutations: mutations,
  actions: actions,
  modules: modules
})
