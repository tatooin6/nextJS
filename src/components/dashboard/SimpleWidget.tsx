import Link from "next/link";
import { IoCafeOutline } from "react-icons/io5"

interface SimpleWidgetProps {
  title?: string;
  subTitle?: string;
  label: string;
  icon?: React.ReactNode;
  href?: string;
}

export const SimpleWidget = ({
  title,
  subTitle,
  label,
  icon,
  href,
}: SimpleWidgetProps) => {

  return (
    <div className="bg-white shadow-xl p-3 sm:min-w-[25%] min-w-full  rounded-2xl border-1 border-gray-50 mx-2 my-2">
      <div className="flex flex-col">
        { title && (
          <h2 className="font-bold text-gray-600 text-center">{ title }</h2>
        )}
        <div className="my-3">
          <div className="flex flex-row items-center justify-center space-x-1 ">
            { icon && (
              <div id="icon">
                <IoCafeOutline size={50} className="text-blue-500"/>
              </div>
            ) }
            <div id="temp" className="text-center">
              { label && (
                <h4 className="text-4xl">{ label }</h4>
              )}
              { subTitle && (
                <p className="text-xs text-gray-500">{ subTitle }</p>
              )}
            </div>
          </div>
        </div>

        { href && (
          <div className="w-full place-items-end text-right border-t-2 border-gray-100 mt-2">
            <Link className="text-blue-500" href={ href } >{ href }</Link>
          </div>
        )}

      </div>
    </div>
  )
}
