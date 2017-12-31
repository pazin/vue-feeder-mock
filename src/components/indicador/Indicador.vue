<template>
    <div class="col-xs-12 col-sm-3 col-md-3 col-lg-2">
        <div class="panel panel-default pull-left">
            <div class="panel-body bloco-colorido">

                <div v-if="!existemDados">
                    <i class="material-icons md-36">{{ dados.icon }}</i>
                </div>

                <div v-if="existemDados" class="centered-text">
                    {{ dados.topLeft }}
                </div>
                <div v-if="existemDados" class="centered-text">
                    {{ dados.bottomLeft }}
                </div>
                
            </div>
        </div>
        <div class="panel panel-default pull-left">
            <div class="panel-body">
                <div class="centered-text">
                    {{ dados.topRight }}
                </div>
                <div class="centered-text">
                    {{ dados.bottomRight }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props : ['dados'],
        computed : {
            existemDados(){
                return this.dados.topLeft != "" && this.dados.bottomLeft != "";
            }
        }

    }
</script>

<style>

    span {
        font-size: 2.6em;
    }

</style>

