<template>
    <button type="button" class="list-group-item">
        {{ nomeJob }}
    </button>
</template>

<script>
    export default {
        props : ['nomeJob']
    }
</script>
