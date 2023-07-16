

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
                label:"Dresses",
            href:"/female/Dress",
            isDropDown:false

            },
            {
                label:"Sweater",
            href:"/female/Sweater",
            isDropDown:false

            },
            {
                label:"T-Shirts",
            href:"/female/T-shirt",
            isDropDown:false

            },

            {
                label:"Pants",
            href:"/female/Pant",
            isDropDown:false

            },
            {
                label:"Jackets",
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
                label:"Jackets",
            href:"/male/Jackets",
            isDropDown:false

            }
        ]
        
    },
    {
        label:"Kids",
        href:"/kids",
        isDropDown:false
        
    },
    {
        label:"All products",
        href:"/allproducts",
        isDropDown:false
        
    }

]
