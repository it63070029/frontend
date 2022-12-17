<template>
    <div>
        <h1>Our Car</h1>
        <table class="table">
            <thead>
                <tr>
                <th>CarId</th>
                <th>Type</th>
                <th>Brand</th>
                <th>Model</th>
                <th>numOfSeat</th>
                <th>Price</th>
                <th>Quantity</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="car in cars" v-bind:key="car._id">
                    <td>{{car._id}}</td>
                    <td>{{car.type}}</td>
                    <td>{{car.brand}}</td>
                    <td>{{car.model}}</td>
                    <td>{{car.numOfSeat}}</td>
                    <td>{{car.price}}</td>
                    <td>{{car.quantity}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from '../plugins/axios';

export default {
    data(){
        return{
            cars: [],
            test: true
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
    }
}
</script>

<style scoped>

</style>