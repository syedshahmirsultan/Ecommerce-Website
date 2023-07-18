

export interface NavbarItemType{
label:string,
href:string,
isDropDown:boolean,
dropDownData?:Array<NavbarItemType>
}

 export const NavbarArray : Array<NavbarItemType> =[
    {
        label:"Female",
        href:"/female/Female",
        isDropDown:true,
        dropDownData:
        [
            {
                label:"Dress",
            href:"/female/Dress",
            isDropDown:false

            },
            {
                label:"Sweater",
            href:"/female/Sweater",
            isDropDown:false

            },
            {
                label:"T-Shirt",
            href:"/female/T-shirt",
            isDropDown:false

            },

            {
                label:"Pant",
            href:"/female/Pant",
            isDropDown:false

            },
            {
                label:"Jacket",
            href:"/female/Jacket",
            isDropDown:false

            }
        ]  
    },
    {
        label:"Male",
        href:"/male/Male",
        isDropDown:true,
        dropDownData:[
            {
                label:"Sweater",
            href:"/male/Sweater",
            isDropDown:false

            },
            {
                label:"Jacket",
            href:"/male/Jacket",
            isDropDown:false

            }
        ]
        
    },
    {
        label:"Kid",
        href:"/kid",
        isDropDown:false
        
    },
    {
        label:"All products",
        href:"/products",
        isDropDown:false
        
    }

]
