<template>
    <v-card>
            <div class="col pa-3 py-4 fill-height border-left" :class="color+'--text'">
                <h5 class="text-truncate text-uppercase">{{ title }}</h5>
                <h1>{{ value }}</h1>
            </div>
    </v-card>
</template>

<script>
export default {
    name: 'ReportCard',
    props: {
        value: {type: Number, required: true},
        title: {type: String, required: true},
        color: {type: String, required: true}
}
}
</script>

<style scoped>
.border-left{
    border-left: 6px solid;
}
</style>