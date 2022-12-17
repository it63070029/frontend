<template>
    <div class="box">
        <div class="content">
            <center><h3>Our Car</h3></center>
            <table class="table is-hoverable">
                <thead class="has-background-primary">
                    <tr>
                        <th>CarId</th>
                        <th>ประเภท (Type)</th>
                        <th>ยี่ห้อ (Brand)</th>
                        <th>รุ่น (Model)</th>
                        <th>จำนวนที่นั่ง (NumOfSeat)</th>
                        <th>ราคาเช่าต่อวัน (Price)</th>
                        <th>จำนวนรถ (Quantity)</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody class="has-background-primary-light">
                    <tr v-for="car in cars" v-bind:key="car._id">
                        <td>{{car._id}}</td>
                        <td>{{car.type}}</td>
                        <td>{{car.brand}}</td>
                        <td>{{car.model}}</td>
                        <td>{{car.numOfSeat}}</td>
                        <td>{{car.price}}</td>
                        <td>{{car.quantity}}</td>
                        <td>
                            <button class="button is-small is-warning is-light is-rounded" aria-haspopup="true" aria-controls="dropdown-menu3" style="padding-left: 1em; padding-right: 1em;">
                                <span class="icon is-medium">
                                    <font-awesome-icon icon="fa-solid fa-marker" />
                                </span>
                            </button>
                            <button class="button is-small is-danger is-light is-rounded" aria-haspopup="true" aria-controls="dropdown-menu3" style="padding-left: 1em; padding-right: 1em;" @click="delCarConfirm(car.model)">
                                <span class="icon is-medium">
                                    <font-awesome-icon icon="fa-solid fa-trash" />
                                </span>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div class="buttons">
                <button class="button is-link">Add New Car</button>
            </div>
        </div>
        <div class="modal" v-bind:class="{'is-active' : modalDeleteCar}">
            <div class="modal-background" @click="modalDeleteCar = !modalDeleteCar"></div>
            <div class="modal-card">
                <header class="modal-card-head">
                    <p class="modal-card-title">Delete Car</p>
                    <button class="delete" aria-label="close" @click="modalDeleteCar = !modalDeleteCar"></button>
                </header>
                <section class="modal-card-body">
                    <div class="column">
                        <p>Are you sure you want to delete car model : {{modelDel}}</p>
                    </div>
                </section>
                <footer class="modal-card-foot">
                    <button class="button is-danger" @click="delCar(modelDel)">Delete</button>
                    <button class="button" @click="modalDeleteCar = !modalDeleteCar">Cancel</button>
                </footer>
            </div>
        </div>
    </div>

    


</template>

<script>
import axios from '../plugins/axios';

export default {
    data(){
        return{
            cars: [],
            modalDeleteCar: false,
            modelDel: '',
        }
    },
    mounted(){
        this.getAllCars()
    },
    methods: {
        getAllCars(){
            axios.get("/cars/getAllCars")
            .then((res) => {
                this.cars = res.data
            })
            .catch((err) => {
                console.log(err)
            })
        },
        delCarConfirm(carModel){
            this.modalDeleteCar = true
            console.log(carModel)
            this.modelDel = carModel
        },
        delCar(carModel){
            console.log(carModel)
            axios.delete("/cars/delCar/"+carModel)
            .then((res) => {
                console.log(res)
                this.modalDeleteCar = false
            })
            .catch((err) => {
                console.log(err)
                this.modalDeleteCar = false
            })
        }
    }
}
</script>

<style scoped>

</style>