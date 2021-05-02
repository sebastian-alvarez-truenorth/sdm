import { useState } from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'

import { Container } from 'components/ui'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'

const ValidationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(3, 'Must be 3 characters or more')
    .max(15, 'Must be 15 characters or less')
    .required('This field is required'),
  lastName: Yup.string()
    .min(3, 'Must be 3 characters or more')
    .max(15, 'Must be 15 characters or less')
    .required('This field is required'),
  email: Yup.string().email('Invalid email address').required('This field is required'),
  password: Yup.string()
    .min(8, 'Must be 8 characters or more')
    .max(15, 'Must be 12 characters or less')
    .required('This field is required'),
})


export default () => {
  const [data, setData] = useState({});

  return (
    <Container className="lg:py-12">
      <div className="mb-8">
        <div>
          <nav className="sm:hidden" aria-label="Back">
            <a href="#" className="flex items-center text-sm font-medium text-gray-500 hover:text-gray-700">
              <ChevronLeftIcon className="flex-shrink-0 -ml-1 mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
              Back
            </a>
          </nav>
          <nav className="hidden sm:flex" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-4">
              <li>
                <div>
                  <a href="#" className="text-sm font-medium text-gray-500 hover:text-gray-700">
                    Jobs
                  </a>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <ChevronRightIcon className="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true" />
                  <a href="#" className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700">
                    Engineering
                  </a>
                </div>
              </li>
            </ol>
          </nav>
        </div>
        <div className="mt-2 md:flex md:items-center md:justify-between">
          <div className="flex-1 min-w-0">
            <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">Front End Developer</h2>
          </div>
          <div className="mt-4 flex-shrink-0 flex md:mt-0 md:ml-4">
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            >
              Edit
            </button>
            <button
              type="button"
              className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            >
              Publish
            </button>
          </div>
        </div>
      </div>

      <section aria-labelledby="form_page_heading">
        <div className="bg-white pt-6 shadow sm:rounded-md sm:overflow-hidden">
          <div className="px-4 sm:px-6">
            <h2 id="form_page_heading" className="text-lg leading-6 font-medium text-gray-900">
              Complete your profile
            </h2>
          </div>
          <div className="mt-6 flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden border-t border-gray-200 p-6">
                  <form className="space-y-8 divide-y divide-gray-200">
                    <div className="space-y-8 divide-y divide-gray-200">
                      <div>
                        <div>
                          <h3 className="text-lg leading-6 font-medium text-gray-900">Profile</h3>
                          <p className="mt-1 text-sm text-gray-500">
                            This information will be displayed publicly so be careful what you share.
                          </p>
                        </div>

                        <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                          <div className="sm:col-span-4">
                            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                              Username
                            </label>
                            <div className="mt-1 flex rounded-md shadow-sm">
                              <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                                workcation.com/
                              </span>
                              <input
                                type="text"
                                name="username"
                                id="username"
                                autoComplete="username"
                                className="flex-1 focus:ring-primary-500 focus:border-primary-500 block w-full min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300"
                              />
                            </div>
                          </div>

                          <div className="sm:col-span-6">
                            <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                              About
                            </label>
                            <div className="mt-1">
                              <textarea
                                id="about"
                                name="about"
                                rows={3}
                                className="shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                defaultValue={''}
                              />
                            </div>
                            <p className="mt-2 text-sm text-gray-500">Write a few sentences about yourself.</p>
                          </div>

                          <div className="sm:col-span-6">
                            <label htmlFor="photo" className="block text-sm font-medium text-gray-700">
                              Photo
                            </label>
                            <div className="mt-1 flex items-center">
                              <span className="h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                                <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                              </span>
                              <button
                                type="button"
                                className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                              >
                                Change
                              </button>
                            </div>
                          </div>

                          <div className="sm:col-span-6">
                            <label htmlFor="cover_photo" className="block text-sm font-medium text-gray-700">
                              Cover photo
                            </label>
                            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                              <div className="space-y-1 text-center">
                                <svg
                                  className="mx-auto h-12 w-12 text-gray-400"
                                  stroke="currentColor"
                                  fill="none"
                                  viewBox="0 0 48 48"
                                  aria-hidden="true"
                                >
                                  <path
                                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                                <div className="flex text-sm text-gray-600">
                                  <label
                                    htmlFor="file-upload"
                                    className="relative cursor-pointer bg-white rounded-md font-medium text-primary-600 hover:text-primary-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary-500"
                                  >
                                    <span>Upload a file</span>
                                    <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                  </label>
                                  <p className="pl-1">or drag and drop</p>
                                </div>
                                <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="pt-8">
                        <div>
                          <h3 className="text-lg leading-6 font-medium text-gray-900">Personal Information</h3>
                          <p className="mt-1 text-sm text-gray-500">
                            Use a permanent address where you can receive mail.
                          </p>
                        </div>
                        <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                          <div className="sm:col-span-3">
                            <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">
                              First name
                            </label>
                            <div className="mt-1">
                              <input
                                type="text"
                                name="first_name"
                                id="first_name"
                                autoComplete="given-name"
                                className="shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border-gray-300 rounded-md"
                              />
                            </div>
                          </div>

                          <div className="sm:col-span-3">
                            <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">
                              Last name
                            </label>
                            <div className="mt-1">
                              <input
                                type="text"
                                name="last_name"
                                id="last_name"
                                autoComplete="family-name"
                                className="shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border-gray-300 rounded-md"
                              />
                            </div>
                          </div>

                          <div className="sm:col-span-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                              Email address
                            </label>
                            <div className="mt-1">
                              <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                className="shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border-gray-300 rounded-md"
                              />
                            </div>
                          </div>

                          <div className="sm:col-span-3">
                            <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                              Country / Region
                            </label>
                            <div className="mt-1">
                              <select
                                id="country"
                                name="country"
                                autoComplete="country"
                                className="shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border-gray-300 rounded-md"
                              >
                                <option>United States</option>
                                <option>Canada</option>
                                <option>Mexico</option>
                              </select>
                            </div>
                          </div>

                          <div className="sm:col-span-6">
                            <label htmlFor="street_address" className="block text-sm font-medium text-gray-700">
                              Street address
                            </label>
                            <div className="mt-1">
                              <input
                                type="text"
                                name="street_address"
                                id="street_address"
                                autoComplete="street-address"
                                className="shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border-gray-300 rounded-md"
                              />
                            </div>
                          </div>

                          <div className="sm:col-span-2">
                            <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                              City
                            </label>
                            <div className="mt-1">
                              <input
                                type="text"
                                name="city"
                                id="city"
                                className="shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border-gray-300 rounded-md"
                              />
                            </div>
                          </div>

                          <div className="sm:col-span-2">
                            <label htmlFor="state" className="block text-sm font-medium text-gray-700">
                              State / Province
                            </label>
                            <div className="mt-1">
                              <input
                                type="text"
                                name="state"
                                id="state"
                                className="shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border-gray-300 rounded-md"
                              />
                            </div>
                          </div>

                          <div className="sm:col-span-2">
                            <label htmlFor="zip" className="block text-sm font-medium text-gray-700">
                              ZIP / Postal
                            </label>
                            <div className="mt-1">
                              <input
                                type="text"
                                name="zip"
                                id="zip"
                                autoComplete="postal-code"
                                className="shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border-gray-300 rounded-md"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="pt-8">
                        <div>
                          <h3 className="text-lg leading-6 font-medium text-gray-900">Notifications</h3>
                          <p className="mt-1 text-sm text-gray-500">
                            We'll always let you know about important changes, but you pick what else you want to hear
                            about.
                          </p>
                        </div>
                        <div className="mt-6">
                          <fieldset>
                            <legend className="text-base font-medium text-gray-900">By Email</legend>
                            <div className="mt-4 space-y-4">
                              <div className="relative flex items-start">
                                <div className="flex items-center h-5">
                                  <input
                                    id="comments"
                                    name="comments"
                                    type="checkbox"
                                    className="focus:ring-primary-500 h-4 w-4 text-primary-600 border-gray-300 rounded"
                                  />
                                </div>
                                <div className="ml-3 text-sm">
                                  <label htmlFor="comments" className="font-medium text-gray-700">
                                    Comments
                                  </label>
                                  <p className="text-gray-500">
                                    Get notified when someones posts a comment on a posting.
                                  </p>
                                </div>
                              </div>
                              <div className="relative flex items-start">
                                <div className="flex items-center h-5">
                                  <input
                                    id="candidates"
                                    name="candidates"
                                    type="checkbox"
                                    className="focus:ring-primary-500 h-4 w-4 text-primary-600 border-gray-300 rounded"
                                  />
                                </div>
                                <div className="ml-3 text-sm">
                                  <label htmlFor="candidates" className="font-medium text-gray-700">
                                    Candidates
                                  </label>
                                  <p className="text-gray-500">Get notified when a candidate applies for a job.</p>
                                </div>
                              </div>
                              <div className="relative flex items-start">
                                <div className="flex items-center h-5">
                                  <input
                                    id="offers"
                                    name="offers"
                                    type="checkbox"
                                    className="focus:ring-primary-500 h-4 w-4 text-primary-600 border-gray-300 rounded"
                                  />
                                </div>
                                <div className="ml-3 text-sm">
                                  <label htmlFor="offers" className="font-medium text-gray-700">
                                    Offers
                                  </label>
                                  <p className="text-gray-500">
                                    Get notified when a candidate accepts or rejects an offer.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </fieldset>
                          <fieldset className="mt-6">
                            <div>
                              <legend className="text-base font-medium text-gray-900">Push Notifications</legend>
                              <p className="text-sm text-gray-500">These are delivered via SMS to your mobile phone.</p>
                            </div>
                            <div className="mt-4 space-y-4">
                              <div className="flex items-center">
                                <input
                                  id="push_everything"
                                  name="push_notifications"
                                  type="radio"
                                  className="focus:ring-primary-500 h-4 w-4 text-primary-600 border-gray-300"
                                />
                                <label
                                  htmlFor="push_everything"
                                  className="ml-3 block text-sm font-medium text-gray-700"
                                >
                                  Everything
                                </label>
                              </div>
                              <div className="flex items-center">
                                <input
                                  id="push_email"
                                  name="push_notifications"
                                  type="radio"
                                  className="focus:ring-primary-500 h-4 w-4 text-primary-600 border-gray-300"
                                />
                                <label htmlFor="push_email" className="ml-3 block text-sm font-medium text-gray-700">
                                  Same as email
                                </label>
                              </div>
                              <div className="flex items-center">
                                <input
                                  id="push_nothing"
                                  name="push_notifications"
                                  type="radio"
                                  className="focus:ring-primary-500 h-4 w-4 text-primary-600 border-gray-300"
                                />
                                <label htmlFor="push_nothing" className="ml-3 block text-sm font-medium text-gray-700">
                                  No push notifications
                                </label>
                              </div>
                            </div>
                          </fieldset>
                        </div>
                      </div>
                    </div>

                    <div className="pt-5">
                      <div className="flex justify-end">
                        <button
                          type="button"
                          className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  </form>
                  <Formik
                    autoComplete="off"
                    initialValues={{
                      firstName: '',
                      lastName: '',
                      email: '',
                      password: '',
                    }}
                    validationSchema={ValidationSchema}
                    onSubmit={(values, { setSubmitting, resetForm }) => {
                      setData(values)
                      setSubmitting(false)
                      resetForm()
                    }}
                  >
                    {({ isValid }) => (
                      <Form autoComplete="off">
                        <TextInput label="First name" name="firstName" id="firstName" type="text" placeholder="John" />
                        <TextInput label="Last name" name="lastName" id="lastName" type="text" placeholder="Doe" />
                        <TextInput label="Email" name="email" id="email" type="email" placeholder="test@gmail.com" />
                        <TextInput label="Password" name="password" id="password" type="password" />

                        <button type="submit" disabled={!isValid}>
                          Submit
                        </button>
                      </Form>
                    )}
                  </Formik>
                  <div p="8" ml="8">
                    {JSON.stringify(data, null, 2)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  )
};
