import { LucideIcon } from 'lucide-react';

export interface ICommandProps {
  categories: { 
    id: number;
    value: string; 
    label: string;
    icon:  LucideIcon}[];
  }