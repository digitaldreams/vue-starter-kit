import {ref, reactive, computed} from 'vue';

export default function useForm(){
    const data = reactive({

    });

    

    const errors = reactive({});

    const hasError= computed(()=>{
            return errors.length > 0
    });


    return {data, hasError ,errors};

}