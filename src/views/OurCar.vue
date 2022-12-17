<template>
    <div class="box">
        <div class="content">
            <center>
                <h3>Our Car
                    <button class="button is-small is-link is-rounded" aria-haspopup="true" aria-controls="dropdown-menu3" style="padding-left: 1em; padding-right: 1em;" @click="modalAddCar = !modalAddCar">
                        <span class="icon is-medium">
                            <font-awesome-icon icon="fa-solid fa-plus" />
                        </span>
                    </button>
                </h3>
            </center>

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
                        <th>Image</th>
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
                        <td>฿ {{car.price}}</td>
                        <td>{{car.quantity}}</td>
                        <td>
                            <figure class="image is-256x256">
                                <img v-bind:src="`data:image/png;base64, ${car.image.data}`">
                            </figure>
                        </td>
                        <td>
                            <button class="button is-small is-warning is-rounded" aria-haspopup="true" aria-controls="dropdown-menu3" style="padding-left: 1em; padding-right: 1em;">
                                <span class="icon is-medium">
                                    <font-awesome-icon icon="fa-solid fa-marker" />
                                </span>
                            </button>
                            <button class="button is-small is-danger is-rounded" aria-haspopup="true" aria-controls="dropdown-menu3" style="padding-left: 1em; padding-right: 1em;" @click="delCarConfirm(car.model)">
                                <span class="icon is-medium">
                                    <font-awesome-icon icon="fa-solid fa-trash" />
                                </span>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <!-- Modal Delete -->
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
        <!-- Modal Add New Car Form -->
        <div class="modal" v-bind:class="{'is-active' : modalAddCar}">
            <div class="modal-background" @click="modalAddCar = !modalAddCar"></div>
            <div class="modal-card">
                <header class="modal-card-head">
                    <p class="modal-card-title">Add New Car</p>
                    <button class="delete" aria-label="close" @click="modalAddCar = !modalAddCar"></button>
                </header>
                <section class="modal-card-body">
                    <div class="column">
                        <div class="field">
                            <label class="label">Type</label>
                            <div class="select">
                                <select v-model="typeCar">
                                    <option value="" disabled="disabled">--- Select Type of Car ---</option>
                                    <option value="sedan">sedan</option>
                                    <option value="suv">suv</option>
                                    <option value="pickup">pickup</option>
                                    <option value="van">van</option>
                                </select>
                            </div>
                        </div>
                        <div class="field">
                            <label class="label">Brand</label>
                            <div class="control">
                                <input class="input" type="text" placeholder="" v-model="brandCar">
                            </div>
                        </div>
                        <div class="field">
                            <label class="label">Model</label>
                            <div class="control">
                                <input class="input" type="text" placeholder="" v-model="modelCar">
                            </div>
                        </div>
                        <div class="field">
                            <label class="label">NumOfSeat</label>
                            <div class="control">
                                <input class="input" type="number" placeholder="" v-model="numOfSeatCar">
                            </div>
                        </div>
                        <div class="field">
                            <label class="label">Price</label>
                            <div class="control has-icons-left">
                                <input class="input" type="number" placeholder="" v-model="priceCar">
                                <span class="icon is-small is-left">
                                    <font-awesome-icon icon="fa-solid fa-baht-sign" />
                                </span>
                            </div>
                        </div>
                        <div class="field">
                            <label class="label">Quantity</label>
                            <div class="control">
                                <input class="input" type="number" placeholder="" v-model="quantityCar">
                            </div>
                        </div>
                        <div class="file">
                            <label class="file-label">
                            <input class="file-input" type="file" accept="image/png, image/jpeg, image/jpg, image/webp" @change="selectImage($event)">
                                <span class="file-cta">
                                    <span class="file-icon">
                                        <font-awesome-icon icon="fa-solid fa-upload" />
                                    </span>
                                    <span class="file-label">
                                        Choose a file…
                                    </span>
                                </span>
                            </label>
                        </div>
                        <!-- Show Image -->
                        <div v-if="imageCar" class="columns">
                            <div class="column">
                                <div class="card">
                                    <div class="card-image">
                                        <figure class="image is-4by3">
                                            <img :src="showImage(imageCar)" alt="Placeholder image">
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <footer class="modal-card-foot">
                    <button class="button is-link" @click="addCar()">Add New Car</button>
                    <button class="button" @click="modalAddCar = !modalAddCar">Cancel</button>
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
            modalAddCar: false,
            typeCar: '',
            brandCar: '',
            modelCar: '',
            numOfSeatCar: '',
            priceCar: '',
            quantityCar: '',
            imageCar: '',
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
        },
        selectImage(event){
            this.imageCar = event.target.files[0]
        },
        showImage(image){
            return URL.createObjectURL(image)
        },
        addCar(){
            if (this.typeCar === 0){
                alert('กรุณาเลือกประเภทรถ')
            }
            else if (this.brandCar === ''){
                alert('กรุณาใส่ยี่ห้อรถ')
            }
            else if (this.modelCar === ''){
                alert('กรุณาใส่รุ่นรถ')
            }
            else if (this.numOfSeatCar === ''){
                alert('กรุณาใส่จำนวนที่นั่ง')
            }
            else if (this.priceCar === ''){
                alert('กรุณาใส่ราคาเช่าต่อวัน')
            }
            else if (this.quantityCar === ''){
                alert('กรุณาใส่จำนวนรถ')
            }
            else if (this.imageCar === ''){
                alert('กรุณาเพิ่มรูปภาพรถ')
            }
            else{
                const formData = new FormData();
                formData.append("type", this.typeCar)
                formData.append("brand", this.brandCar)
                formData.append("model", this.modelCar)
                formData.append("numOfSeat", this.numOfSeatCar)
                formData.append("price", this.priceCar)
                formData.append("quantity", this.quantityCar)
                formData.append("image", this.imageCar)
                axios
                    .post("/cars/addCar", formData,
                    {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        },
                    })
                    .then(() => {
                        this.$router.push({name: 'ourcar'})
                        this.modalAddCar = false
                    })
                    .catch((error) => alert(error.response.data.message));
            }
        }
    }
}
</script>

<style scoped>

</style>