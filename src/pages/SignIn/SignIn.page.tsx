
import Cocktail from '../../assets/buildImage.jpeg'
import { useState } from 'react'
import Logo from '../../components/Logo/Logo'

const SignIn = () => {

  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  return (

      <section className="bg-white dark:bg-gray-900">
        <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
          <aside
            className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6"
          >
            <img
              alt="Pattern"
              className="absolute inset-0 h-full w-full object-cover"
              src={Cocktail}
            />
          </aside>

          <main
            className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
          >
            <div className="max-w-xl lg:max-w-3xl">
              <a className="block text-blue-600" href="/">
                <Logo width={"5rem"} fill={"white"}/>
              </a>

              <h1
                className="mt-6 text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl md:text-4xl"
              >
                Welcome to Drinkify 🥃 
              </h1>

              <p className="mt-4 leading-relaxed text-gray-500 dark:text-gray-400">
                A site made for bartenders, created by bartenders.
              </p>

              <form action="#" className="mt-8 grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <label
                    className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                  >
                    First Name
                  </label>

                  <input
                    type="text"
                    id="FirstName"
                    name="first_name"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
                    onChange={(e) => { setFirstname(e.target.value);}}
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                  >
                    Last Name
                  </label>

                  <input
                    type="text"
                    id="LastName"
                    name="last_name"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
                  />
                </div>

                <div className="col-span-6">
                  <label
                    className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                  >
                    Email
                  </label>

                  <input
                    type="email"
                    id="Email"
                    name="email"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                  >
                    Password
                  </label>

                  <input
                    type="password"
                    id="Password"
                    name="password"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                  >
                    Password Confirmation
                  </label>

                  <input
                    type="password"
                    id="PasswordConfirmation"
                    name="password_confirmation"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
                  />
                </div>
                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                  <button
                    className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500 dark:hover:bg-blue-700 dark:hover:text-white"
                  >
                    Create an account
                  </button>

                  <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
                    Already have an account?  
                    <a href="#" className="text-gray-700 underline dark:text-gray-200"
                      >Log in</a>.
                  </p>
                </div>
              </form>
            </div>
          </main>
        </div>
      </section>
  
    )
}

export default SignIn
