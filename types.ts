
export type ProjectCategory = 'All Projects' | 'Frontend' | 'Backend' | 'Full-stack';

export interface Project {
  id: string;
  title: string;
  description: string;
  category: ProjectCategory;
  image: string;
  tags: string[];
  links: {
    demo?: string;
    source?: string;
    docs?: string;
    app?: string;
  };
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string[];
  technologies: string[];
  type: 'professional' | 'academic' | 'volunteer';
}

export interface Education {
  degree: string;
  school: string;
  gpa: string;
  coursework: string[];
}
