<script>
import products from "../../products.json";
let selectedGroup;
export default {
  data() {
    return {
      products,
      group: [],
    };
  },
  computed: {
    addProduct(){},
    removeProduct(){},
    filterByGroup(){

    }
  },
  methods: {
    activeGroup(selectedGroup) {
      return (this.group = selectedGroup);
    },
  },
};
</script>
<template>
  <section class="products">
    <div class="products__container">
      <div class="products__header">
        <nav class="products__header-navigation">
          <ul class="header-navigation__list">
            <li class="header-navigation__item active-item">
              <a href="#" @click="activeGroup" class="header-navigation__link">Хліб</a>
            </li>
            <li class="header-navigation__item active-item">
              <a href="#" @click="activeGroup" class="header-navigation__link">Крупи</a>
            </li>
            <li class="header-navigation__item active-item">
              <a href="#" @click="activeGroup" class="header-navigation__link">Мясо</a>
            </li>
            <li class="header-navigation__item active-item">
              <a href="#" @click="activeGroup" class="header-navigation__link">Солодке</a>
            </li>
            <li class="header-navigation__item active-item">
              <a href="#" @click="activeGroup" class="header-navigation__link">Карманка</a>
            </li>
            <li class="header-navigation__item active-item">
              <a href="#" @click="activeGroup" class="header-navigation__link">Інше</a>
            </li>
          </ul>
        </nav>
        <div class="header__search">
          <span class="material-icons">search</span>
          <input class="search" type="text" placeholder="Find product" />
        </div>
      </div>
      <div class="products__list product-list">
        <table class="product-list__table">
          <thead>
            <tr class="table__header">
              <th>Продукт</th>
              <th>Калорійність на 100гр, ккал</th>
              <th>Білки на 100гр, гр</th>
              <th>Жири на 100гр, гр</th>
              <th>Вуглеводи на 100гр, гр</th>
              <th>Видалити продукт з розкладки</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="product in products" :key="product.id" class="table__row">
              <td>{{ product.name }}</td>
              <td>{{ product.calories }}</td>
              <td>{{ product.proteins }}</td>
              <td>{{ product.fats }}</td>
              <td>{{ product.carbohydrates }}</td>
              <td><span class="material-icons">remove</span></td>
            </tr>
            <tr>
              <td>Додати продукт<span class="material-icons">add_circle</span></td>
            </tr>
          </tbody>
          <tfoot>
            
          </tfoot>
        </table>
      </div>
    </div>
  </section>
</template>
<style lang="scss">
// .active-item {
//     background-color: white;
//     border-radius: 0.5rem;
// }
.products {
  &__container {
  }
  &__header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
  }
  &__header-navigation {
  }
  &__list {
    border: #e6e6e6 1px solid;
    border-radius: 0.5rem;
  }
}

.header-navigation {
  &__list {
    display: flex;
    flex-direction: row;
    width: max-content;
    background-color: #e6e6e6;
    border-radius: 0.5rem;
  }
  &__item {
    padding: 0.5rem;
  }
  &__link {
    padding: 1rem 0.5rem;
  }
}

.header__search {
  border: grey 1px solid;
  padding: 0.5rem 1rem;
  // box-shadow: 0px 10px 25px -5px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  display: flex;
  flex-direction: row;
}

.search {
}

.product-list {
  padding: 1.5rem;
  &__title {
  }
  &__table {
  }
}
.product-list {
  &__title {
  }
  &__table {
  }
}

.table__header {
  th, td {
    border-bottom: #e6e6e6 1px solid;
    padding: 0.5rem;
  }
}
.table__row {
  td {
    border-bottom: #e6e6e6 1px solid;
    text-align: center;
  }
  
} 

</style>
