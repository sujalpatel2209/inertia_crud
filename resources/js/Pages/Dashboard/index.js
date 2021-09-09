import React from 'react'
import Layout from "../../Layout/Layout";
import {InertiaLink} from "@inertiajs/inertia-react";

// const stats = [
//     { name: 'Total Subscribers', stat: '71,897' },
//     { name: 'Avg. Open Rate', stat: '58.16%' },
//     { name: 'Avg. Click Rate', stat: '24.57%' },
// ]

const Index = (props) => {
    const {stats} = props;
    return (
        <div>
            <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
                {stats.map((item) => (
                    <InertiaLink href={item.path} key={item.name} className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
                        <dt className="text-sm font-medium text-gray-500 truncate">{item.name}</dt>
                        <dd className="mt-1 text-3xl font-semibold text-gray-900">{item.stat}</dd>
                    </InertiaLink>
                ))}
            </dl>
        </div>
    )
}

Index.layout = page => <Layout title='Dashboard' children={page}/>

export default Index