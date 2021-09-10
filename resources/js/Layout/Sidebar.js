import React from 'react'
import {InertiaLink} from "@inertiajs/inertia-react";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Sidebar = ({navigation}) => {
    return (
        <div className="hidden md:flex md:flex-shrink-0">
            <div className="flex flex-col w-64">
                {/* Sidebar component, swap this element with another sidebar if you like */}
                <div className="flex-1 flex flex-col min-h-0">
                    <div className="flex items-center h-16 flex-shrink-0 px-4 bg-gray-900">
                        <img
                            className="h-8 w-auto"
                            src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                            alt="Workflow"
                        />
                    </div>
                    <div className="flex-1 flex flex-col overflow-y-auto">
                        <nav className="flex-1 px-2 py-4 bg-gray-800 space-y-1">
                            {navigation.map((item) => (
                                <InertiaLink
                                    key={item.name}
                                    href={route(item.href)}
                                    className={classNames(
                                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                        'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                                    )}
                                >
                                    <item.icon
                                        className={classNames(
                                            item.current ? 'text-gray-300' : 'text-gray-400 group-hover:text-gray-300',
                                            'mr-3 flex-shrink-0 h-6 w-6'
                                        )}
                                        aria-hidden="true"
                                    />
                                    {item.name}
                                </InertiaLink>
                            ))}
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar