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
          <li class="nav-item">
            <a class="nav-link" href="#">End Day</a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >Save&Load</a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Save Data</a>
              <a class="dropdown-item" href="#">Load Data</a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
</script>

<style>
.header a {
  font-size: 1.2rem;
}
</style>