<template>
  <div id="main">
    <RoadTransportDocumentsCard
      :data="Documents.documents"
      title="Dokumenty od kierowcy"
    />
    <RoadTransportDocumentsCard
      :data="Documents.adr"
      title="Dokumenty ADR"
    />
    <RoadTransportDocumentsCard
      :data="Documents.atp"
      title="Dokumenty ATP"
    />
    <RoadTransportDocumentsCard
      :data="Documents.animals"
      title="Dokumenty przewóz zwierząt"
    />
    <RoadTransportDocumentsCard
      :data="Documents.waste_list"
      title="Dokumenty odpady lista bursztynowa"
    />
    <RoadTransportDocumentsCard
      :data="Documents.waste"
      title="Dokumenty odpady lista zielona"
    />
    <RoadTransportDocumentsCard
      :data="Documents.documents_waybill"
      title="Dokumenty przewozowe"
    />
    <RoadTransportDocumentsCard
      :data="Documents.documents_others"
      title="Dokumenty inne"
    />
  </div>
</template>

<script>
import Documents from '@/views/Data/transport_documents.json'
import RoadTransportDocumentsCard from '@/components/RoadTransportDocumentsCard'
export default {
  name: 'RequiredDocuments.vue',
  components: {
    RoadTransportDocumentsCard
  },
  data () {
    return {
      Documents: Documents
    }
  }
}
</script>

<style scoped lang="scss">
@import "src/views/main_layout";
#main {
  margin-top: 120px;
}
</style>
