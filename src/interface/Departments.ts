interface SubCategory {
  id: number;
  name: string;
  slug: string;
  image: string;
  description: string | null;
  show_in_home: string;
  status: string;
  created_at: string;
  updated_at: string;
  image_link: string;
}

interface DropdownCategory {
  id: number;
  name: string;
  slug: string;
  image: string;
  description: string | null;
  show_in_home: string;
  status: string;
  created_at: string;
  updated_at: string;
  image_link: string;
  departments: SubCategory[];
}
