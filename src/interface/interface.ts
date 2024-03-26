export interface ILayoutProps{
    children?:React.ReactNode;
}

export interface IMetatags {
    heading: string;
    subheading: string;
    og_image?: any;
    description?: string;
}

export interface IFacilityProps{
    name:string;
    icon:any;
}

export interface IButtonProps{
    data:IButtonContent;
}
interface IButtonContent{
    name:string
}

export interface IClinicalServiceProps{
    slug:string;
    name:string;
    description:string;
    image_link:string;
    image:string;
}

export interface IComponentHeaderProps{
    data:IComponentHeaderContent;
}
export interface IComponentHeaderContent{
    small_title?:string;
    main_title:string;
    description?:string;
}
 export interface IHealthCareProps{
    name:string;
    image_link:string;
    price:number;
    details:IHealthCareDetail[];
    image:string;
    
 }
interface IHealthCareDetail{
    service:string;
    package_id:string;
}


export interface IMessageFromDirector{
    name:string;
    image_link:string;
    message:string;
    position:string;
}
    
