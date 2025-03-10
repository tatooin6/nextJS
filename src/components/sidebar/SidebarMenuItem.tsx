'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import style from './SidebarMenuItem.module.css';

export interface MenuItemProps {
  path: string;
  icon: JSX.Element;
  title: string;
  subtitle: string;
}

export const SidebarMenuItem = ({path, icon, title, subtitle}: MenuItemProps) => {
  const pathName = usePathname();
  return (
    <Link 
      href={path} 
      className={ `${ style.link } ${ (pathName === path) && style['active-link']}` }
    >
      <div>
        {icon}
      </div>
      <div className="flex flex-col">
        <span className="text-lg font-bold leading-5 text-white">{title}</span>
        <span className="text-sm text-white/50 hidden md:block">{subtitle}</span>
      </div>
    </Link>
  )
}

