import React from 'react'
import {InertiaLink} from "@inertiajs/inertia-react";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Nav = ({navigation}) => {
    return (
        <nav className="px-2 space-y-1">
            {navigation.map((item) => (
                <InertiaLink
                    key={item.name}
                    href={item.href}
                    className={classNames(
                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'group flex items-center px-2 py-2 text-base font-medium rounded-md'
                    )}
                >
                    <item.icon
                        className={classNames(
                            item.current ? 'text-gray-300' : 'text-gray-400 group-hover:text-gray-300',
                            'mr-4 flex-shrink-0 h-6 w-6'
                        )}
                        aria-hidden="true"
                    />
                    {item.name}
                </InertiaLink>
            ))}
        </nav>
    );
}

export default Nav