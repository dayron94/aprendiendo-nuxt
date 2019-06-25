<template>
<div>

    <div class="container-fluid mt-5">
    
    <div class="row mt-2" >
        <div class="row mx-auto">
            <b-card  header-tag="header" >
            <h6 align="center" slot="header" class="mb-2 ">Iniciar sesión</h6>
                <b-form @submit.prevent="iniciarSesion" class="">
                    <b-form-group label="Email :" label-for="email">
                        <b-form-input v-model="form.email" id="email" type="email"  placeholder="Email" required></b-form-input>
                    </b-form-group >
                    <b-form-group label="Contraseña :" label-for="password" required>
                        <b-form-input v-model="form.password" type="password" id="password" placeholder="Contraseña "></b-form-input>
                    </b-form-group>
                    <div align="right" >
                        <b-button  type="submit" variant="success">Iniciar sesion</b-button>
                    </div>
                </b-form>
                
            </b-card>
        </div>
    </div>
    <div align="center"  class="row mt-3">
        <b-alert :show="mostrar" variant="danger">{{alerta}}</b-alert>
    </div> 

   
</div>
 
</div>
  
   
</template>
<script>
import { auth } from "../services/firebase";
export default {
     data() {
        return {
            form: {
                email: "",
                password: ""
            },
            alerta:"",
            mostrar: false,
             
        }
    },
    methods: {
        iniciarSesion(){

            auth.signInWithEmailAndPassword(this.form.email, this.form.password).then(res => {
                /// SE GREGO ESTO PARA NO INICIASR SESION SIN VERIFICACIÓN

                if(res.user.emailVerified){
                    this.mostrar = false
                    this.$router.push({ path: "/" })
                }else{
                    // SI NO ESTA VBERIFICACDO SALE Y DA UNA ALERTA PARA VERIFICACIÓN 
                auth.signOut()
                this.mostrar = true
                this.alerta=" Su cuenta no ha sido veridicada."
                   
                }
                ////////
            }).catch(err => {
                this.mostrar = true
                this.alerta=""+err.message
               // alert("Ha ocurrido un error"+ err.message)
            })
        }
    }
}
</script>
