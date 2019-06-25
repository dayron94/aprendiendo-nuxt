<template>
<div class="container-fluid mt-5" >
    <div >
        <b-card  header-tag="header" >
        <h6 align="center" slot="header" class="mb-2 ">Regitro de Usuario</h6>
            <b-form @submit.prevent="registro">
                 <b-form-group label="Nombre :" label-for="Nombre">
                    <b-form-input v-model="form.nombre" id="input-live" placeholder="Nombre " required></b-form-input>
                </b-form-group>
                <b-form-group label="Email :" label-for="email">
                    <b-form-input v-model="form.email" id="email" type="email"  placeholder="Email" required></b-form-input>
                </b-form-group >
                <b-form-group label="Contraseña :" label-for="password" required>
                    <b-form-input v-model="form.password" type="password" id="password" placeholder="contraseña"></b-form-input>
                </b-form-group>
                <div align="right" >
                    <b-button  type="submit" variant="success">Guardar</b-button>
                </div>
            </b-form>
             
        <b-alert :show="mostrar" variant="primary">{{alerta}}</b-alert>
         <b-alert :show="mostrar2" variant="danger">{{alerta}}</b-alert>
        </b-card>
    </div>
   
</div>
 
</template>
<script>
import { auth,fire} from "../services/firebase";
export default {
    data() {
        return {
            form: {
                nombre: "",
                email: "",
                password: ""
            },
            alerta:"",
            mostrar2: false,
            mostrar: false,
            user: false
        }
    },
    methods: {
        registro(){
            
           
            console.log("Guardar")
            auth.createUserWithEmailAndPassword(this.form.email, this.form.password).
            then(res =>{
                auth.signOut()
                this.mostrar2= false
                this.mostrar= false
                res.user.updateProfile({
                displayName: this.form.nombre,
                // photoURL almacenar url de imagen
                }).then(resUpdate => {
                    
                }) 
                //// ENVIÓ DE VERIFICACIÓN 
                res.user.sendEmailVerification().then(res =>{
                    
                    this.mostrar2= false
                    this.mostrar= false
                    this.mostrar= true
                    this.alerta="La verificación se ha enviado al correo electronico"
                    
                }).catch(error =>{

                })  
                ///
                
            }).catch(error =>{
                this.mostrar2= false
                this.mostrar= false
                this.alerta=""+error.message,
                this.mostrar2= true
                
            })
        }
    }
}
</script>