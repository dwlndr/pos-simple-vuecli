<template>
  <div :class="['container']">
    <h2>Sayur-Sayuran Segar</h2>
    <p class="text-center">Pesan sekarang sayur mayur segar!</p>
    <div class="cards">
      <div class="card" v-for="vegetable in vegetables" :key="vegetable.id">
        <img
          :src="vegetable.image"
          :alt="vegetable.name"
          height="200px"
          width="200"
        />
        <h5>
          <b>{{ vegetable.name }}</b>
        </h5>
        <p>Harga: Rp {{ vegetable.price }}</p>
        <button @click="addToCart(vegetable)" class="btn btn-success">
          Tambah
        </button>
      </div>
    </div>
    <div v-if="cart.length > 0" class="container-sm cart">
      <h2>Keranjang Pesanan</h2>
      <p>Anda dapat melihat daftar pesanan anda disini!</p>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Nama Pesanan</th>
            <th scope="col">Harga</th>
            <th scope="col">Jumlah</th>
            <th scope="col">Total</th>
            <th scope="col">Aksi</th>
          </tr>
        </thead>
        <tbody>
          <transition-group name="fade" mode="out-in" appear>
            <tr v-for="(item, index) in cart" :key="index">
              <td>{{ item.name }}</td>
              <td>Rp {{ item.price }}</td>
              <td>{{ item.quantity }}</td>
              <td>Rp {{ item.price * item.quantity }}</td>
              <td>
                <button @click="removeFromCart(index)" class="btn btn-danger">
                  Hapus
                </button>
              </td>
            </tr>
          </transition-group>
        </tbody>
      </table>
      <p>Total Belanja: Rp {{ totalBelanja }}</p>
      <button @click="showModal" class="btn btn-success">Pesan Sekarang</button>
    </div>
    <transition>
      <div v-if="isModalVisible" class="modal">
        <div class="modal-content">
          <h2>Detail Pesanan</h2>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Nama Pesanan</th>
                <th scope="col">Harga</th>
                <th scope="col">Jumlah</th>
                <th scope="col">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in cart" :key="index">
                <td>{{ item.name }}</td>
                <td>Rp {{ item.price }}</td>
                <td>{{ item.quantity }}</td>
                <td>Rp {{ item.price * item.quantity }}</td>
              </tr>
            </tbody>
          </table>
          <p>Total Belanja: Rp {{ totalBelanja }}</p>
          <button @click="checkout" class="btn btn-success">Checkout</button>
          <button @click="closeModal" class="btn btn-danger">Tutup</button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      vegetables: [
        {
          id: 1,
          name: "Bayam",
          price: 5000,
          image:
            "https://i.pinimg.com/originals/24/d1/12/24d112d2e191235f72dd47e5c233bd2e.jpg",
          quantity: 0,
        },
        {
          id: 2,
          name: "Wortel",
          price: 3000,
          image:
            "https://i.pinimg.com/564x/fe/20/47/fe20475296f8dd3b7e4db3fbb03833db.jpg",
          quantity: 0,
        },
        {
          id: 3,
          name: "Brokoli",
          price: 7000,
          image:
            "https://i.pinimg.com/564x/fd/14/0c/fd140c34ea5e1385a2d764c7d6d850c7.jpg",
          quantity: 0,
        },
        {
          id: 4,
          name: "Tomat",
          price: 4000,
          image:
            "https://i.pinimg.com/564x/05/4f/19/054f190455f5f7981b9b00a5652d09bc.jpg",
          quantity: 0,
        },
        {
          id: 5,
          name: "Lobak",
          price: 4000,
          image:
            "https://i.pinimg.com/564x/b0/31/9c/b0319cee854f862b6c87ba5804d2b54b.jpg",
          quantity: 0,
        },
        {
          id: 6,
          name: "Timun",
          price: 4000,
          image:
            "https://i.pinimg.com/originals/42/2d/cc/422dcc2744c313ff8f5a0c1ed9ebeecb.jpg",
          quantity: 0,
        },
        {
          id: 7,
          name: "Kacang panjang",
          price: 4000,
          image:
            "https://i.pinimg.com/564x/09/9e/e4/099ee45931a5b2f8ffe17cf99b168aff.jpg",
          quantity: 0,
        },
        {
          id: 8,
          name: "Labu Siam",
          price: 4000,
          image:
            "https://i.pinimg.com/originals/c1/45/f1/c145f16c41d77e57d113b62d54f168c2.jpg",
          quantity: 0,
        },
      ],
      cart: [],
      isModalVisible: false,
    };
  },
  computed: {
    totalBelanja() {
      return this.cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },
  },
  methods: {
    addToCart(vegetable) {
      const index = this.cart.findIndex((item) => item.id === vegetable.id);
      if (index !== -1) {
        this.cart[index].quantity++;
      } else {
        this.cart.push({
          id: vegetable.id,
          name: vegetable.name,
          price: vegetable.price,
          quantity: 1,
        });
      }
      vegetable.quantity++;
    },
    removeFromCart(index) {
      this.cart.splice(index, 1);
    },
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    checkout() {
      // Simulasi proses checkout
      alert("Pesanan telah diterima! Terima kasih atas pesanannya.");
      this.cart = [];
      this.vegetables.forEach((vegetable) => {
        vegetable.quantity = 0;
      });
      this.closeModal();
    },
  },
};
</script>

<style scoped>
.container {
  margin-top: 30px;
}
.cards {
  display: flex;
  flex-wrap: wrap;
}

.card {
  width: 250px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
}
.cart {
  margin-top: 30px;
  margin-bottom: 50px;
}
.fade-leave-active {
  transition: opacity 1s;
}
.fade-leave-to {
  opacity: 0;
}
.v-leave-from {
  opacity: 1;
}
.v-leave-to {
  opacity: 0;
}
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
}
.modal-slide-enter-active,
.modal-slide-leave-active {
  transition: transform 0.5s ease-out;
}

.modal-slide-enter,
.modal-slide-leave-to {
  transform: translateY(-100%);
}
</style>
