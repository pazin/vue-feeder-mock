<template>
    <div class="col-xs-6 col-sm-4 col-md-3 col-lg-3">
        <div class="panel panel-default z-depth-1">
            <div class="panel-body altura-fixa">
                <div class="row">
                    <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 pull-left">
                        <div class="panel-body">
                            <div v-if="!existemDados" class="centered-text">
                                <i class="material-icons md-48">{{ dados.icon }}</i>
                            </div>

                            <div v-if="existemDados" class="centered-text">
                                {{ dados.topLeft }}
                            </div>
                            <div v-if="existemDados" class="centered-text">
                                {{ dados.bottomLeft }}
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 pull-right">
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

    /* hack */
    .altura-fixa {
        height : 114px;
    }

</style>

