export const fetchApi=async(api)=>{
    const data=await fetch(api);
    const result=await data.json();
    return result;
}