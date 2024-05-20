import { A } from "@solidjs/router";

function Login() {
  return (
    <>
      <div class="h-2 bg-primary"></div>

      <div class="container mx-auto p-8">
        <div class="mx-auto max-w-sm">
          <div class="py-10 text-center">
            {/* @include('logo', ['style' => 'max-width: 12rem;']) */}
          </div>

          {/* <!-- ... --> */}

          <div class="bg-white rounded shadow">
            <div class="border-b py-8 font-bold text-black text-center text-xl tracking-widest uppercase">
              Welcome back!
            </div>
            <div class="text-center mb-3 mt-3">
              Please enter your details to sign in.
            </div>
            <div class="inline-flex">
              <button
                type="button"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-12 py-3 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                <svg
                  class="w-4 h-4 me-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 17"
                >
                  <path
                    fill-rule="evenodd"
                    d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
              <button
                type="button"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-12 py-3 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                <svg
                  class="w-4 h-4 me-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 17"
                >
                  <path
                    fill-rule="evenodd"
                    d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
              <button
                type="button"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-12 py-3 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                <svg
                  class="w-4 h-4 me-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 17"
                >
                  <path
                    fill-rule="evenodd"
                    d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <div class="text-center mt-4 flex items-center">
              <div class="border-t border-4 border-gray-400 flex-grow mr-3"></div>
              <p>OR</p>
              <div class="ml-3 border-t border-4 border-gray-400 flex-grow"></div>
            </div>

            <form class="bg-grey-lightest px-10 py-10">
              {/* {{ csrf_field() }} */}

              <div class="mb-3">
                <label>E-Mail Address</label>
                <input
                  class="border w-full p-3"
                  name="email"
                  type="text"
                  placeholder="E-Mail"
                />
              </div>
              <div class="mb-6">
                <label>Password</label>
                <input
                  class="border w-full p-3"
                  name="password"
                  type="password"
                  placeholder="* * * * * * * * * *"
                />
              </div>
              <div class="flex">
                <button class="bg-black rounded hover:bg-primary-dark w-full p-4 text-sm text-white uppercase font-bold tracking-wider">
                  Login
                </button>
              </div>
            </form>

            <div class="border-t px-10 py-6">
              <div class="flex justify-between">
                <a
                  href="#"
                  class="font-bold text-primary hover:text-primary-dark no-underline"
                >
                  Don't have an account?
                </a>
                <A
                  href="#"
                  class="text-grey-darkest hover:text-black no-underline"
                >
                  Forgot Password?
                </A>
              </div>
            </div>
          </div>
        </div>
            
      </div>
    </>
  );
}

export default Login;
