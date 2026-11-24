export interface Project {
  id: string;
  title: string;
  description: string;
  year: number;
  image: string;
  technologies: readonly string[];
  githubUrl: string;
  demoUrl: string;
}
