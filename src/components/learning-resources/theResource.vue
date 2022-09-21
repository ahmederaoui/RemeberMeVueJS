<template>
    <base-card>
        <base-button @click="setSelectedTab('stored-resource')" :mode="storedButtonMode">Stored Resource</base-button>
        <base-button @click="setSelectedTab('add-resource')" :mode="addButtonMode">Add Resource</base-button>
    </base-card>
    <keep-alive>
        <component :is="selectedTab" ></component>
    </keep-alive>
</template>
<script>
import storedResource from "./storedResource.vue"
import addResource from "./addResource.vue"

export default {
    components:{ storedResource, addResource },
    props:["storedResources"],
    data(){
        return {
            selectedTab:'stored_resource',
            storedResources : [
        {
          id : "vue-site",
          title : "Vue Resource",
          description : "you can learn vue from this resource",
          link : "https://vuejs.org"
        },
        {
          id : "google-site",
          title : "google Resource",
          description : "you can search in google from this resource",
          link : "google.com"
        }
            ]
        }
    },
    computed:{
        storedButtonMode(){
            return this.selectedTab==='stored-resource'? null : 'flat';
        },
        addButtonMode(){
            return this.selectedTab==='add-resource'? null : 'flat';
        }
    },
    methods : {
        setSelectedTab(tab){
            this.selectedTab=tab;
        },
        addResource(enteredTitle,enteredDesc,enteredLink){
            const newResource={
                id: new Date().toISOString(),
                title: enteredTitle,
                description:enteredDesc,
                link:enteredLink
            };
            this.storedResources.unshift(newResource);
            this.selectedTab = 'stored-resource'
        },
        removeResource(resId){
            const resIndex = this.storedResources.findIndex(res=>res.id==resId);
            this.storedResources.splice(resIndex,1);
        }
    },
    provide(){
        return {
            resources : this.storedResources,
            addResource : this.addResource,
            removeResource : this.removeResource
        }
    }
}
</script>