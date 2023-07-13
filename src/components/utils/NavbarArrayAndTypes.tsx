

export interface NavbarItemType{
label:string,
href:string,
isDropDown:boolean,
dropDownData?:Array<NavbarItemType>
}

 export const NavbarArray : Array<NavbarItemType> =[
    {
        label:"Female",
        href:"/female",
        isDropDown:true,
        dropDownData:
        [
            {
                label:"Dresses",
            href:"/female/dress",
            isDropDown:false

            },
            {
                label:"Sweater",
            href:"/female/sweater",
            isDropDown:false

            },
            {
                label:"T-Shirts",
            href:"/female/t-shirts",
            isDropDown:false

            },

            {
                label:"Pants",
            href:"/female/pants",
            isDropDown:false

            },
            {
                label:"Jackets",
            href:"/female/jackets",
            isDropDown:false

            }
        ]  
    },
    {
        label:"Male",
        href:"/male",
        isDropDown:true,
        dropDownData:[
            {
                label:"Sweater",
            href:"/male/sweater",
            isDropDown:false

            },
            {
                label:"Jackets",
            href:"/male/jackets",
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
