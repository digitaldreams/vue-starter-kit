export async function getProfile(username){

    let profile = await fetch('/api/profile.json',{
        headers:{
            "Accept":"application/json"
        }
    }).then(res=>res.json());

    return profile;
}