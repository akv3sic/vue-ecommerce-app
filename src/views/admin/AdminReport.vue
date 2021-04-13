<template>
    <v-container>
        <!-- ****** AKO se učitava ***** -->
        <v-row class="my-2" v-if="isLoading">
           <v-col cols="10" lg="4"
            v-for="(item, index) in reportItems"
            :key="index"
           >
            <v-skeleton-loader  class="pl-3 pt-6 mx-2" v-if="isLoading" type="text, chip"></v-skeleton-loader>
           </v-col>
       </v-row>
        <!-- *************************** -->
       <v-row class="my-2" v-else>
           <v-col cols="10" lg="4"
            v-for="(item, index) in reportItems"
            :key="index"
           >
               <ReportCard
               :value=item.value
               :title=item.title
               :color=item.color
               />
           </v-col>
       </v-row>
       
    </v-container>
</template>

<script>
import ReportCard from "@/components/admin/VReportCard"
import { mapGetters } from "vuex"

export default {
    name: 'adminReport',
    components: { ReportCard },
    data: () => ({
      
    }),
    mounted() {
        this.fetchReport();
    },
    methods: {
        fetchReport() {
            this.$store
                .dispatch('adminReport/fetchReport', null, {root: true})
        }
    },
    computed: {
        ...mapGetters('adminReport', ['reportItems', 'isLoading'])
    },
}
</script>