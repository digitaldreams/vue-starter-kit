export async function  getServices(){
    let serviceList= await fetch('api/services.json',{
        headers:{
            "Accept":"application/json"
        }
    });
    
    return serviceList.json();
}