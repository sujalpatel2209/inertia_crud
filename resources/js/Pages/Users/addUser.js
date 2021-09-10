import React from 'react'
import Layout from "../../Layout/Layout";
import {useForm} from "@inertiajs/inertia-react";
// import {classNames} from "@headlessui/react/dist/utils/class-names";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const addUser = () => {

    const { data, setData, errors, post, processing } = useForm({
        first_name: '',
        last_name: '',
        email_address: '',
        password: ''
    });

    const onSubmitHandle = (e) => {
        e.preventDefault();
        post(route('users.store'));
    }

    return (
        <>
            <div className="mt-10 sm:mt-0">
                <div className="md:grid md:grid-cols-4 md:gap-6">
                    <div className="mt-5 md:mt-0 md:col-span-2">
                        <form onSubmit={onSubmitHandle}>
                            <div className="shadow overflow-hidden sm:rounded-md">
                                <div className="px-4 py-5 bg-white sm:p-6">
                                    <div className="grid grid-cols-6 gap-6">
                                        <div className="col-span-12">
                                            <label htmlFor="first-name"
                                                   className="block text-sm font-medium text-gray-700">
                                                First name
                                            </label>
                                            <input
                                                type="text"
                                                name="first_name"
                                                id="first_name"
                                                value={data.first_name}
                                                onChange={e => setData('first_name', e.target.value)}
                                                // errors={errors.first_name}
                                                autoComplete="given-name"
                                                className={classNames(errors.first_name ? 'border-red-600' : '', 'mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md')}
                                            />
                                        </div>

                                        <div className="col-span-12">
                                            <label htmlFor="last-name"
                                                   className="block text-sm font-medium text-gray-700">
                                                Last name
                                            </label>
                                            <input
                                                type="text"
                                                name="last_name"
                                                id="last_name"
                                                value={data.last_name}
                                                onChange={e => setData('last_name', e.target.value)}
                                                autoComplete="family-name"
                                                className={classNames(errors.last_name ? 'border-red-600' : '', 'mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md')}
                                            />
                                        </div>

                                        <div className="col-span-12">
                                            <label htmlFor="email-address"
                                                   className="block text-sm font-medium text-gray-700">
                                                Email address
                                            </label>
                                            <input
                                                type="text"
                                                name="email_address"
                                                id="email_address"
                                                value={data.email_address}
                                                onChange={e => setData('email_address', e.target.value)}
                                                autoComplete="email"
                                                className={classNames(errors.email_address ? 'border-red-600' : '', 'mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md')}
                                            />
                                        </div>
                                        <div className="col-span-12">
                                            <label htmlFor="email-address"
                                                   className="block text-sm font-medium text-gray-700">
                                                Password
                                            </label>
                                            <input
                                                type="password"
                                                name="password"
                                                id="password"
                                                value={data.password}
                                                onChange={e => setData('password', e.target.value)}
                                                className={classNames(errors.password ? 'border-red-600' : '', 'mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md')}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                    <button
                                        type="submit"
                                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                        Save
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className="hidden sm:block" aria-hidden="true">
                <div className="py-5">
                    <div className="border-t border-gray-200"/>
                </div>
            </div>

        </>
    )
}

addUser.layout = page => <Layout title='Add User' children={page}/>

export default addUser