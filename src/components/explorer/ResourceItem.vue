<template>
    <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">
        <div class="panel panel-info">
            <div class="panel-heading">
                <h4>{{ recurso }}</h4>
            </div>
            <div class="panel-body">
                <div class="pull-right">
                    <button class="btn btn-default" title="Editar Especificação">
                        <i class="material-icons md-18">edit</i>
                    </button>
                    <button class="btn btn-default" title="Listar Valores">
                        <i class="material-icons md-18">list</i>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props : ['recurso']
    }
</script>

<style scoped>
    
    .cursorEspecial {
        cursor : pointer;
    }
    
    .btn, .btn:focus, .btn:active {
        border-color : transparent; 
        outline: none !important;
        border-width: 0;
    }

</style>
