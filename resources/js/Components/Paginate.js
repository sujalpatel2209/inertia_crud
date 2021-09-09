import React from 'react'
import {InertiaLink} from "@inertiajs/inertia-react";

const Paginate = (Props) => {
    const {links, perPage, total, nextPage, prevPage} = Props;
    const PageActive = ({label, url}) => {
        return (
            <InertiaLink
                href={url}
                className="z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                <span dangerouslySetInnerHTML={{__html: label}}/>
            </InertiaLink>
        )
    }
    const PageInActive = ({label, url}) => {
        return (
            <InertiaLink
                href={url}
                className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                <span dangerouslySetInnerHTML={{__html: label}}/>
            </InertiaLink>
        )
    }
    return (
        <div
            className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
            <div className="flex-1 flex justify-between sm:hidden">
                {prevPage !== null ? <InertiaLink
                href={prevPage}
                className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
            >Previous
            </InertiaLink> : <div/>}
                {nextPage !== null ?
                <InertiaLink
                    href={nextPage}
                    className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                >Next
                </InertiaLink> : <div/>}
            </div>
            <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                <div>
                    <p className="text-sm text-gray-700">
                        Showing <span className="font-medium">1</span> to <span
                        className="font-medium">{perPage}</span> of{' '}
                        <span className="font-medium">{total}</span> results
                    </p>
                </div>
                <div>
                    <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
                         aria-label="Pagination">
                        {
                            links.map((link, index) => (
                                (link.active) ? <PageActive key={link.label} label={link.label} url={link.url}/> : <PageInActive key={link.label} label={link.label} url={link.url}/>
                            ))
                        }
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default Paginate