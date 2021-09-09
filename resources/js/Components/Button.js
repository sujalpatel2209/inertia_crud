import React from 'react'
import {InertiaLink} from "@inertiajs/inertia-react";

const Button = (Props) => {
    const {buttonText, path} = Props
    return (
        <InertiaLink
            href={path}
            type="button"
            className="relative inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
            {buttonText}
        </InertiaLink>
    );
}

export default Button