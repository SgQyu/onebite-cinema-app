import { ReactNode } from 'react';
import Searchbar from '@/app/(with-searchbar)/searchbar';

export default function SearchBar({ children }: { children: ReactNode }) {
  return (
    <div>
      <div>SearchBar Layout</div>
      <Searchbar />
      {children}
    </div>
  );
}
