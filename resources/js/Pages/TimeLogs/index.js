import React from 'react'
import Layout from "../../Layout/Layout";
import Button from "../../Components/Button";
import Paginate from "../../Components/Paginate";

const index = (props) => {
    const {timelogs} = props;
    return (
        <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="flex-shrink-0 text-right p-3">
                        <Button buttonText='Add Timelog' path='timelogs/create'/>
                    </div>
                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                            <tr>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    Name
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    Time
                                </th>
                                <th scope="col" className="relative px-6 py-3">
                                    <span className="sr-only">Edit</span>
                                </th>
                            </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                            {timelogs.data.map((timelog) => (
                                <tr key={timelog.id}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{timelog.user.name}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{timelog.time}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                            Edit
                                        </a>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                        <Paginate links={timelogs.links} perPage={timelogs.per_page} total={timelogs.total} nextPage={timelogs.next_page_url} prevPage={timelogs.prev_page_url}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

index.layout = page => <Layout title='TimeLogs' children={page}/>

export default index