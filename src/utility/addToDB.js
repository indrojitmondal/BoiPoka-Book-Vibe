import { toast } from "react-toastify";

const getStoredList = ()=>{
   const storedListStr= localStorage.getItem('read-list');
   if(storedListStr){
       const storedList= JSON.parse(storedListStr);
       return storedList;
   }
   else{
    return [];
   }
}
const getWishedList = ()=>{
    const storedWishedListStr= localStorage.getItem('wish-list');
    if(storedWishedListStr){
        const wishList= JSON.parse(storedWishedListStr);
        return wishList;
    }
    else{
     return [];
    }

}

const addToStoredReadList = (id)=>{

    const storedList= getStoredList();
    if(storedList.includes(id)){
        console.log('Already Exits');
    }
    else{
        storedList.push(id);
        const storedListStr= JSON.stringify(storedList);
        localStorage.setItem('read-list',storedListStr);
         //ideally trigger toast from the component 
         toast('This book is added to your read list.');
    }
    
}

const addToStoredWishedList = (id)=>{

    const wishList= getWishedList();
    if(wishList.includes(id)){
        console.log('Already Wished');
    }
    else{
        wishList.push(id);
        const storedListStr= JSON.stringify(wishList);
        localStorage.setItem('wish-list',storedListStr);
       
    }
    
}


export {addToStoredReadList,addToStoredWishedList, getStoredList} ;