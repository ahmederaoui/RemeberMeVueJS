<template>
    <base-dialog v-if="inputIsInvalid" @close="confirmError" title="Invalide Input" >
        <template #default>
            <p>Unfortuntely, at least one input value is invalid.</p>
            <p>please check all inputs and make sure you enter
             at least a few characters into each input field.</p>
        </template>
        <template #actions>
            <base-button @click="confirmError">Okey</base-button>
        </template>
    </base-dialog>
    <base-card>
        <form @submit.prevent="submitData">
            <div class="form-control">
                <label for="title">Title</label>
                <input id="title" class="title" type="text" ref="titleInput">
            </div>
            <div class="form-control">
                <label for="decription">Description</label>
                <textarea id="decription" class="decription" rows="3" ref="descInput"></textarea>
            </div>
            <div class="form-control">
                <label for="link">Link</label>
                <input id="link" class="link" type="url" ref="linkInput">
            </div>
            <div>
                <base-button type="submit" >Add Resource</base-button>
            </div>
        </form>
    </base-card>
</template>
<script>
export default {
    data(){
        return {
            inputIsInvalid : false,
        }
    },
    inject: ['addResource'],
    methods : {
        submitData(){
            const enteredTitle = this.$refs.titleInput.value;
            const enteredDesc = this.$refs.descInput.value;
            const enteredLink = this.$refs.linkInput.value;
            if(enteredTitle.trim() === '' ||
            enteredDesc.trim() === '' ||
            enteredLink.trim()=== ''){
                this.inputIsInvalid = true;
                return ; 
            }
            this.addResource(enteredTitle,enteredDesc,enteredLink);

        },
        confirmError(){
            this.inputIsInvalid =  false;
        }
        
    }
}
</script>

<style scoped>
label{
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
}
input,
textarea{
    display: block;
    width: 100%;
    font : inherit;
    padding: 0.15rem;
    border: 1px solid #ccc;
}
input:focus,
textarea:focus {
    outline: none;
    border-color: #3a0061;
    background-color: #f7ebff;
}
.form-control {
    margin : 1rem 0 ;
}
</style>