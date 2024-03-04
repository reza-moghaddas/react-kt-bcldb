interface Person{    
    name: string,
    imageId: string        
}
interface ProfileProps {
    size: number,
    person: Person,
    isSepia:boolean,
    thickBorder:boolean
}

export const UserProfiles: ProfileProps[] = [
    {
        "person":{ 
            "name": 'Katsuko Saruhashi', 
            "imageId": 'YfeOqp2'
        },
        "size":100,        
        "isSepia":true,
        "thickBorder":true
    },
    {
        size:80,
        person:{
          name: 'Aklilu Lemma', 
          imageId: 'OKS67lh'
        },
        "isSepia":false,
        "thickBorder":true
    },
    {
        size:50,
        person:{
          name: 'Lin Lanying', 
          imageId: '1bX5QH6'
        },
        "isSepia":false,
        "thickBorder":true
    }
    
]