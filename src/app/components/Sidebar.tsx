import Image from "next/image"
import { IoBrowsersOutline, IoCalculator, IoFootball, IoLogoReact } from "react-icons/io5"
import { MenuItemProps, SidebarMenuItem } from "./SidebarMenuItem"

const menuItems: MenuItemProps[] = [
  {
    path: '/dashboard/main',
    icon: <IoBrowsersOutline size={40} />,
    title: 'Dashboard',
    subtitle: 'Visualization'
  },
  {
    path: '/dashboard/counter',
    icon: <IoCalculator size={40} />,
    title: 'Counter',
    subtitle: 'Counter Client Side'
  },
  {
    path: '/dashboard/pokemons',
    icon: <IoFootball size={40} />,
    title: 'Pokemons',
    subtitle: 'Static Generation'
  },
];

export const Sidebar = () => {
  return (
    <div 
      id="menu" 
      className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 left-0 h-screen overflow-y-scroll"
      style={{ width: '400px' }}
    >
      <div id="logo" className="my-4 px-6">
        <h1 className="flex items-center text-lg md:text-2xl font-bold text-white">
          <IoLogoReact className="mr-2" />
          <span>Dash</span>
          <span className="text-blue-500">8</span>.
        </h1>
        <p className="text-slate-500 text-sm">Manage your actions and activities</p>
      </div>
      <div id="profile" className="px-6 py-10">
        <p className="text-slate-500">Welcome back,</p>
        <a href="#" className="inline-flex space-x-2 items-center">
          <span>
            <Image 
              className="rounded-full w-8 h-8" 
              src="https://lh3.googleusercontent.com/a/ACg8ocKYJwRe23bzDwo3HYxzBUkCAcwf_TYDrl32FVmnc7TZ7pYGVNM=s83-c-mo"
              width={50}
              height={50}
              alt="User avatar" 
            />
          </span>
          <span className="text-sm md:text-base font-bold">
            Tato Pantoja
          </span>
        </a>
      </div>



      <div id="nav" className="w-full px-6">
        {
          menuItems.map( item => (
            <SidebarMenuItem  
              key={item.path}
              {...item}
            />
          ))
        }

      </div>
    </div>
  )
}

