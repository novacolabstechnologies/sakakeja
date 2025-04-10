import { type LucideIcon } from 'lucide-react';

interface CategoryCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function CategoryCard({ icon: Icon, title, description }: CategoryCardProps) {
  return (
    <div className="flex flex-col items-center p-6 text-center bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
      <Icon className="w-12 h-12 text-purple-600 mb-4" />
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}