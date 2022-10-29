import { LockClosedIcon } from '@heroicons/react/20/solid'
import GoogleAuth from './googleAuth'
import FacebookAuth from './facebookAuth'
import { GoogleOAuthProvider } from '@react-oauth/google';


function AuthForm({setGoogleAuth , setFacebookAuth}) {
    return (
        <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8">
                <div>
                    <img
                        className="mx-auto h-12 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                        alt="Your Company"
                    />
                    <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                        Sign in to your account
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        Or{' '}
                        <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                            start your 14-day free trial
                        </a>
                    </p>
                </div>
                <form className="mt-8 space-y-6" action="#" method="POST">
                    <input type="hidden" name="remember" defaultValue="true" />
                    <div className="-space-y-px rounded-md  grid grid-cols-1 gap-1 ">
                    <GoogleOAuthProvider clientId="451609199547-60lg5dkio2talb5oks8f8d4pd9i6n0eu.apps.googleusercontent.com"><GoogleAuth setGoogleAuth={setGoogleAuth}/></GoogleOAuthProvider>
                        <div className='flex justify-center'>
                        <div class="relative py-4 w-64 justify-center">
                            <div class="absolute inset-0 flex items-center">
                                <div class="w-full border-b border-gray-300"></div>
                            </div>
                            <div class="relative flex justify-center">
                                <span class="bg-white px-4 text-sm text-gray-500">Or</span>
                            </div>
                        </div>
                        </div>
                        <FacebookAuth setFacebookAuth={setFacebookAuth} />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AuthForm