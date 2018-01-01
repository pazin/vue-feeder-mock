<template>
    <div class="col-sm-12">
        <div class="panel panel-default z-depth-1">
            <div class="panel-body">
                <div class="row">
                    <div class="col-sm-12">
                        {{ recurso }}
                    </div>
                </div>
                <div class="row top5">
                    <div class="col-xs-12 col-sm-12 col-md-6 pull-right">
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
    </div>
</template>

<script>

    export default {
        props : ['recurso']
    }

</script>

<style scoped>

    .top5 { margin-top:5px; }

    .btn, .btn:focus, .btn:active {
        border-color : transparent; 
        outline: none !important;
        border-width: 0;
    }

</style>
