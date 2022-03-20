<template>
    <div class="float-right pr-3 mx-auto">
        <div class="content">
            <b-img class="img_paciente p-2 mx-auto py-auto" src="@/assets/paciente.png" />
        </div>
    </div>
</template>

<script>
export default {
    name: "foto"
}
</script>

<style scoped>
    .content {
        border-radius: 50%;
        border: 1px solid #4c87a0 !important;
        width: 100%; 
        margin: 0 auto 0 auto; 
        padding: auto;
    }
    
    .img_paciente {
        max-height: 70px;;
    }
</style>