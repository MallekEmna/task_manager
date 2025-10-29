
export interface Task {
  title: string;
  priority: string;
  status: 'En attente' | 'En cours' | 'Terminé';
}

export interface Project {
  name: string;
  description: string;
  status: 'En attente' | 'En cours' | 'Terminé';
  tasks: Task[];
}