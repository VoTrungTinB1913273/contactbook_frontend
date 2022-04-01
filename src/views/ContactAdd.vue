<template>
    <div v-if="contact" class="page">
        <h4>Thêm Liên hệ</h4>
        <ContactForm
            :contact="contact"
            @submit:contact="updateContact"
            @delete:contact="deleteContact"
        />
        <p>{{ message }}</p>
    </div>
</template>

<script>
import ContactForm from "@/components/ContactForm.vue";
import ContactService from "@/services/contact.service";

export default {
    name:"ContactAdd",
    components: {
        ContactForm,
    },
    data(){
        return{
            contact:{},
            message:"",
        };
    },
    methods:{
        async createContact(data){
            const [error,respone] = await this.handle(ContactService.create(data));
            if(error){
                console.log(error);
            }else{
                console.log(respone.data);
                this.message="Liên hệ được đệ trình thành công.";
            }
        },
    },
};
</script>