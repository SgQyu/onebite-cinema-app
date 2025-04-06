import { ReactNode } from 'react';

export default function SearchBar({ children }: { children: ReactNode }) {
  return (
    <div>
      <div>SearchBar Layout</div>
      {children}
    </div>
  );
}
