export interface ILayoutProps {
  children?: React.ReactNode;
  title?: any;
}

export interface IMetatags {
  heading: string;
  subheading: string;
  og_image?: any;
  description?: string;
  og_type?: string;
}

export interface Slider {
  id: number;
  title: string;
  image: string;
  status: string;
  image_link: string;
}

export interface IFacility {
  id: number;
  title: string;
  slug: string;
  description: string;
  image: string;
  status: string;
  image_link: string;
  meta_title: string;
  meta_keywords: string;
  meta_description: string;
}

export interface IFacilityDetail {
  detail: IFacility;
  related: IFacility[];
}

export interface Activity {
  id: number;
  title: string;
  slug: string;
  description: string;
  image: string;
  status: string;
  image_link: string;
  meta_title: string;
  meta_keywords: string;
  meta_description: string;
}

export interface IActivityDetail {
  detail: {
    id: number;
    title: string;
    slug: string;
    description: string;
    image: string;
    status: string;
    image_link: string;
    meta_title: string;
    meta_keywords: string;
    meta_description: string;
  };
  related: {
    id: number;
    title: string;
    slug: string;
    description: string;
    image: string;
    status: string;
    image_link: string;
  }[];
}

export interface IFacilityProps {
  name: string;
  icon: any;
}

export interface IButtonProps {
  data: IButtonContent;
}
interface IButtonContent {
  name: string;
}

export interface IClinicalServiceProps {
  slug: string;
  name: string;
  description: string;
  image_link: string;
  image: string;
  icon_link: string;
  icon: string;
}

export interface IComponentHeaderProps {
  data: IComponentHeaderContent;
}
export interface IComponentHeaderContent {
  small_title?: string;
  main_title: string;
  description?: string;
}
export interface IHealthCareProps {
  name: string;
  image_link: string;
  price: number;
  details: IHealthCareDetail[];
  image: string;
}
interface IHealthCareDetail {
  service: string;
  package_id: string;
}

export interface IMessageFromDirector {
  name: string;
  image_link: string;
  message: string;
  position: string;
}

export interface INews {
  title: string;
  slug: string;
  created_at: string;
  image_link: string;
  views: string;
}

export interface IRelatedDepartment {
  name: string;
  slug: string;
}

export interface IRelatedService {
  name: string;
  slug: string;
}

export interface IDepartmentBranchProps {
  branchData: IDepartmentBranch[];
}
export interface IDepartmentBranch extends IRelatedDepartment {
  image_link: any;
  image: any;
  department_category: IDepartmentCategory;
}
interface IDepartmentCategory {
  name: string;
  slug: string;
}

export interface IDoctor {
  doctorInfo?: IDoctorInfo;
}
interface IDoctorInfo {
  name?: string;
  info?: string;
  image_link?: string;
  degree?: string;
  designation?: string;
  nmc_no?: string;
  email?: string;
  address?: string;
  phone?: string;
  slug?: string;
  department?: {
    slug?: string;
  };
}

export interface ProgramDetail {
  id: number;
  name: string;
  slug: string;
  academic_category_id: string;
  description: string;
  type: string;
  career: string;
  course_outline: string;
  admission: string;
  meta_title: string;
  meta_keywords: string;
  meta_description: string;
  status: string;
  image_link: string;
  doctors: IDoctor[];
}

export interface IDoctor {
  id: number;
  name: string;
  slug: string;
  designation: string | null;
  nmc_no: string | null;
  phone: string;
  email: string;
  address: string;
  degree: string;
  info: string;
  status: string;
  image_link: string;
}

export interface Research {
  id: number;
  title: string;
  slug: string;
  description: string;
  image: string;
  meta_title: string | null;
  meta_keywords: string | null;
  meta_description: string | null;
  status: string;
  image_link: string;
}

export interface ResearchDetail {
  detail: {
    id: number;
    title: string;
    slug: string;
    description: string;
    image: string;
    meta_title: string;
    meta_keywords: string;
    meta_description: string;
    status: string;
    created_at: string;
    updated_at: string;
    image_link: string;
  };
  related: RelatedResearch[];
}

export interface RelatedResearch {
  id: number;
  title: string;
  slug: string;
  description: string;
  image: string;
  meta_title: string;
  meta_keywords: string;
  meta_description: string;
  status: string;
  image_link: string;
}

export interface IDepartment {
  id: number;
  name: string;
  slug: string;
  description: string;
  image_link: string;
  icon_link: string;
}

export interface ITeamMember {
  id: number;
  name: string;
  email: string | null;
  phone: string | null;
  designation: string;
  image: string;
  team_category_id: string;
  status: string;
  image_link: string;
}

export interface ITeamCategory {
  id: number;
  name: string;
  status: string;
  teams: ITeamMember[];
}

export interface ITextTestimonial {
  id: number;
  name: string;
  message: string;
  status: string;
  image: string | null;
  type: "Text";
  link: null;
  image_link: string;
}

export interface IVideoTestimonial {
  id: number;
  name: string;
  message: string | null;
  status: string;
  image: string | null;
  type: "Video";
  link: string;
  image_link: string;
}

export interface TestimonialsData {
  text: ITextTestimonial[];
  video: IVideoTestimonial[];
}

export interface IVacancy {
  id: number;
  title: string;
  slug: string;
  no_of_opening: string;
  type: string;
  image: string;
  short_description: string | null;
  description: string;
  expire_at: string;
  meta_title: string | null;
  meta_keywords: string | null;
  meta_description: string | null;
  status: string;
  image_link: string;
}

export interface INoticeCategory {
  id: number;
  name: string;
  slug: string;
  status: string;
}

export interface INotice {
  id: number;
  title: string;
  slug: string;
  notice_category_id: string;
  description: string | null;
  image: string;
  status: string;
  image_link: string;
  created_at: string;
}
