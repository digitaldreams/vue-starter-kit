import {defineStore} from 'pinia';
import { ref, reactive, computed} from 'vue';

 const useFormStore =defineStore('form',()=>{
    const data = reactive({

    });



    const errors = reactive({});

    const hasError= (name)=>{
            return errors?.[name]?.length > 0
    };

    
    const setFormValue =(key,value)=>{
        data[key]=value;
    }

    const setFormError = (key,error)=>{
        errors[key]=error;
    }

    const handleValidation =(rules,name)=>{
        console.log(rules);
        return rules;

    }

    return {data, errors, hasError,setFormError,handleValidation ,setFormValue};
});

export default useFormStore; 