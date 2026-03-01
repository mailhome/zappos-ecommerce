export interface NavItems {
    label?: string;
    href: string;
}

export interface SubSubMenuMobile {
    label: string;
    href: string;
}

export interface SubMenuMobile {
    label: string;
    links: SubSubMenuMobile[];
}

export interface MenuMobileItem {
    label:string;
    section: SubMenuMobile[];
}


export const itemsDesktop: NavItems[] = [
    {
        label: "Women",
        href: "/women"
    },
    {
        label: "Men",
        href: "/men"
    },
    {
        label: "Kids",
        href: "/kids"
    },
    {
        label: "Brands",
        href: "/brands"
    },
    {
        label: "Sneakers",
        href: "/sneakers"
    },
    {
        label: "Sports",
        href: "/sports"
    },
    {
        label: "Sale",
        href: "/sale"
    },
    {
        label: "Help & Support",
        href: "/c/customer-service"
    },

]
export const itemsMobile: MenuMobileItem[] = [
    {
        label: "Women",
        section: [
            {
                label: "Shoes",
                links: [
                    {
                        label: "All Women Shoes",
                        href: "/women-shoes"
                    },
                    {
                        label: "Running Shoes",
                        href: "/women-running-shoes"
                    },
                    {
                        label: "Everyday Sneakers",
                        href: "/women-sneakers"
                    },
                    {
                        label: "Boots",
                        href: "/women-boots"
                    },
                    {
                        label: "Flats",
                        href: "/women-flats"
                    },
                    {
                        label: "Clogs",
                        href: "/women-clogs"
                    },
                    {
                        label: "Mules",
                        href: "/mules"
                    },
                    {
                        label: "Loafers",
                        href: "/women-loofers"
                    },
                    {
                        label: "Heels",
                        href: "/women-heels"
                    },
                    {
                        label: "Sandals",
                        href: "/women-sandals"
                    },
                    {
                        label: "Slippers",
                        href: "/women-slippeers"
                    },
                ]
            }, 
            {
                label: "Clothings",
                links: [
                     {
                        label: "All Women Clothing",
                        href: "/women-clothing"
                    },
                    {
                        label: "Active wears",
                        href: "/women-clothing"
                    },
                    {
                        label: "Coats & Outwear",
                        href: "/women-coats-outwear"
                    },
                    {
                        label: "Dresses",
                        href: "/women-dresses"
                    },
                    {
                        label: "Jeans",
                        href: "/women-jeans"
                    },
                    {
                        label: "Jumpsuites & Rompers",
                        href: "/jumpsuites-rompers"
                    },
                    {
                        label: "Pants",
                        href: "/pants"
                    },
                    {
                        label: "Shirts & Tops",
                        href: "/women-shirts-tops"
                    },
                    {
                        label: "Shorts",
                        href: "/Shorts"
                    },
                    {
                        label: "Skirts",
                        href: "/women-sandals"
                    },
                    {
                        label: "Slippers",
                        href: "/women-slippeers"
                    },
                ]
            }
        ]
    },
   
    {
        label: "Men",
        section: [
            {
                label: "Shoes",
                links: [
                    {
                        label: "All Women Shoes",
                        href: "/women-shoes"
                    },
                    {
                        label: "Running Shoes",
                        href: "/women-running-shoes"
                    },
                    {
                        label: "Everyday Sneakers",
                        href: "/women-sneakers"
                    },
                    {
                        label: "Boots",
                        href: "/women-boots"
                    },
                    {
                        label: "Flats",
                        href: "/women-flats"
                    },
                    {
                        label: "Clogs",
                        href: "/women-clogs"
                    },
                    {
                        label: "Mules",
                        href: "/mules"
                    },
                    {
                        label: "Loafers",
                        href: "/women-loofers"
                    },
                    {
                        label: "Heels",
                        href: "/women-heels"
                    },
                    {
                        label: "Sandals",
                        href: "/women-sandals"
                    },
                    {
                        label: "Slippers",
                        href: "/women-slippeers"
                    },
                ]
            }, 
            {
                label: "Clothings",
                links: [
                     {
                        label: "All Women Clothing",
                        href: "/women-clothing"
                    },
                    {
                        label: "Active wears",
                        href: "/women-clothing"
                    },
                    {
                        label: "Coats & Outwear",
                        href: "/women-coats-outwear"
                    },
                    {
                        label: "Dresses",
                        href: "/women-dresses"
                    },
                    {
                        label: "Jeans",
                        href: "/women-jeans"
                    },
                    {
                        label: "Jumpsuites & Rompers",
                        href: "/jumpsuites-rompers"
                    },
                    {
                        label: "Pants",
                        href: "/pants"
                    },
                    {
                        label: "Shirts & Tops",
                        href: "/women-shirts-tops"
                    },
                    {
                        label: "Shorts",
                        href: "/Shorts"
                    },
                    {
                        label: "Skirts",
                        href: "/women-sandals"
                    },
                    {
                        label: "Slippers",
                        href: "/women-slippeers"
                    },
                ]
            }
        ]
    },
   
    {
        label: "Brands",
        section: [
            {
                label: "Shoes",
                links: [
                    {
                        label: "All Women Shoes",
                        href: "/women-shoes"
                    },
                    {
                        label: "Running Shoes",
                        href: "/women-running-shoes"
                    },
                    {
                        label: "Everyday Sneakers",
                        href: "/women-sneakers"
                    },
                    {
                        label: "Boots",
                        href: "/women-boots"
                    },
                    {
                        label: "Flats",
                        href: "/women-flats"
                    },
                    {
                        label: "Clogs",
                        href: "/women-clogs"
                    },
                    {
                        label: "Mules",
                        href: "/mules"
                    },
                    {
                        label: "Loafers",
                        href: "/women-loofers"
                    },
                    {
                        label: "Heels",
                        href: "/women-heels"
                    },
                    {
                        label: "Sandals",
                        href: "/women-sandals"
                    },
                    {
                        label: "Slippers",
                        href: "/women-slippeers"
                    },
                ]
            }, 
            {
                label: "Clothings",
                links: [
                     {
                        label: "All Women Clothing",
                        href: "/women-clothing"
                    },
                    {
                        label: "Active wears",
                        href: "/women-clothing"
                    },
                    {
                        label: "Coats & Outwear",
                        href: "/women-coats-outwear"
                    },
                    {
                        label: "Dresses",
                        href: "/women-dresses"
                    },
                    {
                        label: "Jeans",
                        href: "/women-jeans"
                    },
                    {
                        label: "Jumpsuites & Rompers",
                        href: "/jumpsuites-rompers"
                    },
                    {
                        label: "Pants",
                        href: "/pants"
                    },
                    {
                        label: "Shirts & Tops",
                        href: "/women-shirts-tops"
                    },
                    {
                        label: "Shorts",
                        href: "/Shorts"
                    },
                    {
                        label: "Skirts",
                        href: "/women-sandals"
                    },
                    {
                        label: "Slippers",
                        href: "/women-slippeers"
                    },
                ]
            }
        ]
    },
   
    {
        label: "Sneakers",
        section: [
            {
                label: "Shoes",
                links: [
                    {
                        label: "All Women Shoes",
                        href: "/women-shoes"
                    },
                    {
                        label: "Running Shoes",
                        href: "/women-running-shoes"
                    },
                    {
                        label: "Everyday Sneakers",
                        href: "/women-sneakers"
                    },
                    {
                        label: "Boots",
                        href: "/women-boots"
                    },
                    {
                        label: "Flats",
                        href: "/women-flats"
                    },
                    {
                        label: "Clogs",
                        href: "/women-clogs"
                    },
                    {
                        label: "Mules",
                        href: "/mules"
                    },
                    {
                        label: "Loafers",
                        href: "/women-loofers"
                    },
                    {
                        label: "Heels",
                        href: "/women-heels"
                    },
                    {
                        label: "Sandals",
                        href: "/women-sandals"
                    },
                    {
                        label: "Slippers",
                        href: "/women-slippeers"
                    },
                ]
            }, 
            {
                label: "Clothings",
                links: [
                     {
                        label: "All Women Clothing",
                        href: "/women-clothing"
                    },
                    {
                        label: "Active wears",
                        href: "/women-clothing"
                    },
                    {
                        label: "Coats & Outwear",
                        href: "/women-coats-outwear"
                    },
                    {
                        label: "Dresses",
                        href: "/women-dresses"
                    },
                    {
                        label: "Jeans",
                        href: "/women-jeans"
                    },
                    {
                        label: "Jumpsuites & Rompers",
                        href: "/jumpsuites-rompers"
                    },
                    {
                        label: "Pants",
                        href: "/pants"
                    },
                    {
                        label: "Shirts & Tops",
                        href: "/women-shirts-tops"
                    },
                    {
                        label: "Shorts",
                        href: "/Shorts"
                    },
                    {
                        label: "Skirts",
                        href: "/women-sandals"
                    },
                    {
                        label: "Slippers",
                        href: "/women-slippeers"
                    },
                ]
            }
        ]
    },
   
    {
        label: "Sports",
        section: [
            {
                label: "Shoes",
                links: [
                    {
                        label: "All Women Shoes",
                        href: "/women-shoes"
                    },
                    {
                        label: "Running Shoes",
                        href: "/women-running-shoes"
                    },
                    {
                        label: "Everyday Sneakers",
                        href: "/women-sneakers"
                    },
                    {
                        label: "Boots",
                        href: "/women-boots"
                    },
                    {
                        label: "Flats",
                        href: "/women-flats"
                    },
                    {
                        label: "Clogs",
                        href: "/women-clogs"
                    },
                    {
                        label: "Mules",
                        href: "/mules"
                    },
                    {
                        label: "Loafers",
                        href: "/women-loofers"
                    },
                    {
                        label: "Heels",
                        href: "/women-heels"
                    },
                    {
                        label: "Sandals",
                        href: "/women-sandals"
                    },
                    {
                        label: "Slippers",
                        href: "/women-slippeers"
                    },
                ]
            }, 
            {
                label: "Clothings",
                links: [
                     {
                        label: "All Women Clothing",
                        href: "/women-clothing"
                    },
                    {
                        label: "Active wears",
                        href: "/women-clothing"
                    },
                    {
                        label: "Coats & Outwear",
                        href: "/women-coats-outwear"
                    },
                    {
                        label: "Dresses",
                        href: "/women-dresses"
                    },
                    {
                        label: "Jeans",
                        href: "/women-jeans"
                    },
                    {
                        label: "Jumpsuites & Rompers",
                        href: "/jumpsuites-rompers"
                    },
                    {
                        label: "Pants",
                        href: "/pants"
                    },
                    {
                        label: "Shirts & Tops",
                        href: "/women-shirts-tops"
                    },
                    {
                        label: "Shorts",
                        href: "/Shorts"
                    },
                    {
                        label: "Skirts",
                        href: "/women-sandals"
                    },
                    {
                        label: "Slippers",
                        href: "/women-slippeers"
                    },
                ]
            }
        ]
    },
   
    {
        label: "Sale",
        section: [
            {
                label: "Shoes",
                links: [
                    {
                        label: "All Women Shoes",
                        href: "/women-shoes"
                    },
                    {
                        label: "Running Shoes",
                        href: "/women-running-shoes"
                    },
                    {
                        label: "Everyday Sneakers",
                        href: "/women-sneakers"
                    },
                    {
                        label: "Boots",
                        href: "/women-boots"
                    },
                    {
                        label: "Flats",
                        href: "/women-flats"
                    },
                    {
                        label: "Clogs",
                        href: "/women-clogs"
                    },
                    {
                        label: "Mules",
                        href: "/mules"
                    },
                    {
                        label: "Loafers",
                        href: "/women-loofers"
                    },
                    {
                        label: "Heels",
                        href: "/women-heels"
                    },
                    {
                        label: "Sandals",
                        href: "/women-sandals"
                    },
                    {
                        label: "Slippers",
                        href: "/women-slippeers"
                    },
                ]
            }, 
            {
                label: "Clothings",
                links: [
                     {
                        label: "All Women Clothing",
                        href: "/women-clothing"
                    },
                    {
                        label: "Active wears",
                        href: "/women-clothing"
                    },
                    {
                        label: "Coats & Outwear",
                        href: "/women-coats-outwear"
                    },
                    {
                        label: "Dresses",
                        href: "/women-dresses"
                    },
                    {
                        label: "Jeans",
                        href: "/women-jeans"
                    },
                    {
                        label: "Jumpsuites & Rompers",
                        href: "/jumpsuites-rompers"
                    },
                    {
                        label: "Pants",
                        href: "/pants"
                    },
                    {
                        label: "Shirts & Tops",
                        href: "/women-shirts-tops"
                    },
                    {
                        label: "Shorts",
                        href: "/Shorts"
                    },
                    {
                        label: "Skirts",
                        href: "/women-sandals"
                    },
                    {
                        label: "Slippers",
                        href: "/women-slippeers"
                    },
                ]
            }
        ]
    },
   
    {
        label: "Help & Support",
        section: [
            {
                label: "Shoes",
                links: [
                    {
                        label: "All Women Shoes",
                        href: "/women-shoes"
                    },
                    {
                        label: "Running Shoes",
                        href: "/women-running-shoes"
                    },
                    {
                        label: "Everyday Sneakers",
                        href: "/women-sneakers"
                    },
                    {
                        label: "Boots",
                        href: "/women-boots"
                    },
                    {
                        label: "Flats",
                        href: "/women-flats"
                    },
                    {
                        label: "Clogs",
                        href: "/women-clogs"
                    },
                    {
                        label: "Mules",
                        href: "/mules"
                    },
                    {
                        label: "Loafers",
                        href: "/women-loofers"
                    },
                    {
                        label: "Heels",
                        href: "/women-heels"
                    },
                    {
                        label: "Sandals",
                        href: "/women-sandals"
                    },
                    {
                        label: "Slippers",
                        href: "/women-slippeers"
                    },
                ]
            }, 
            {
                label: "Clothings",
                links: [
                     {
                        label: "All Women Clothing",
                        href: "/women-clothing"
                    },
                    {
                        label: "Active wears",
                        href: "/women-clothing"
                    },
                    {
                        label: "Coats & Outwear",
                        href: "/women-coats-outwear"
                    },
                    {
                        label: "Dresses",
                        href: "/women-dresses"
                    },
                    {
                        label: "Jeans",
                        href: "/women-jeans"
                    },
                    {
                        label: "Jumpsuites & Rompers",
                        href: "/jumpsuites-rompers"
                    },
                    {
                        label: "Pants",
                        href: "/pants"
                    },
                    {
                        label: "Shirts & Tops",
                        href: "/women-shirts-tops"
                    },
                    {
                        label: "Shorts",
                        href: "/Shorts"
                    },
                    {
                        label: "Skirts",
                        href: "/women-sandals"
                    },
                    {
                        label: "Slippers",
                        href: "/women-slippeers"
                    },
                ]
            }
        ]
    },
   

]