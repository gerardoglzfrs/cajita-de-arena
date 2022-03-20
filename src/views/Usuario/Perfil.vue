<template>
    <div>
        <Navbar/>
         <b-container class="mt-5">
            <b-row>
                <b-col cols="12" sm="12" md="7" lg="7">
                    <h3 class="txt_blue text-uppercase mb-3">Mi perfil</h3>
                    <b-table-simple class="table-sm">
                        <b-tbody>  
                            <b-tr>
                                <b-th class="th_style">Nombre</b-th>
                                <b-td class="border_table">
                                    <b-form-input class="border-0" size="sm" value="Gerardo Gonzalez Flores"/>
                                </b-td>
                            </b-tr>
                            <b-tr>
                                <b-th class="th_style">Email</b-th>
                                <b-td class="border_table">
                                    <b-form-input class="border-0" size="sm" value="gerardo1997gof@gmail.com"/>
                                </b-td>
                            </b-tr>
                            <b-tr>
                                <b-th class="th_style">Perfil de usuario</b-th>
                                <b-td class="border_table">
                                    <b-form-input class="border-0" size="sm" value="Doctor en ciencias de datos"/>
                                </b-td>
                            </b-tr>
                            <b-tr>
                                <b-th class="th_style">Cédula profesional</b-th>
                                <b-td class="border_table">
                                    <b-form-input class="border-0" size="sm" value="#327823747274874898498489849"/>
                                </b-td>
                            </b-tr>
                        </b-tbody>
                    </b-table-simple>
                </b-col>
            </b-row>
         </b-container>  
    </div>  
</template>

<script>
import Navbar from "@/components/Navbar.vue"

export default {
    name: 'Perfil',
    components: { Navbar }
}
</script>

<style scoped>

</style>