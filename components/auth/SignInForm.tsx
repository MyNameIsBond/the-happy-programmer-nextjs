import BtnSpinner from '../spinners/BtnSpinner'
import AuthBtn from './AuthBtn'
import AuthInput from './AuthInput'
import FormSceleton from './FormSceleton'

export default function SignInForm({
  setForgotPassword,
  setSigninWithEmailPassword,
  setSigninWithLink,
  email,
  setEmail,
  password,
  setPassword,
  remember,
  setRemember,
  error,
  loading,
  signin,
}: {
  setForgotPassword: (password: boolean) => void
  setSigninWithEmailPassword: (password: boolean) => void
  setSigninWithLink: (link: boolean) => void
  email: string
  password: string
  setPassword: (password: string) => void
  setEmail: (email: string) => void
  error: string
  remember: boolean
  setRemember: (remember: boolean) => void
  loading: boolean
  signin: () => void
}): JSX.Element {
  return (
    <>
      <FormSceleton title="Sign in with your email">
        <AuthInput
          icon="email"
          value={email}
          setValue={setEmail}
          name="email"
          iconclass="fill-current text-gray-900 dark:text-gray-50 text-opacity-50"
        />
        <AuthInput
          icon="key"
          value={password}
          setValue={setPassword}
          name="password"
          iconclass="stroke-current text-gray-900 dark:text-gray-50 text-opacity-50"
        />
        <div className="-mt-2 flex flex-row justify-between pb-6">
          <label className="flex items-center space-x-3 text-opacity-50 ">
            <input
              type="checkbox"
              name="remember"
              className="focus:outline-none h-4 w-4"
              checked={remember}
              onChange={(e) => setRemember(!remember)}
            />
            <span className="text-sm font-medium text-gray-900 text-opacity-50 dark:text-gray-50">
              Remember me
            </span>
          </label>
          <a
            onClick={(e) => {
              setForgotPassword(true)
              setSigninWithEmailPassword(false)
            }}
            className="cursor-pointer text-sm font-medium text-accent hover:underline dark:text-darkaccent"
          >
            forgot password?
          </a>
        </div>
        <BtnSpinner
          onClick={signin}
          title="Sign in"
          loading={loading}
          full={true}
          disabled={!email?.length || !password?.length}
        />
        <div className="my-8 flex items-center">
          <div className="mr-3 flex-grow border-t border-gray-900 border-opacity-5 dark:border-gray-50"></div>
          <div className="text-gray-900 text-opacity-25 dark:text-gray-50">
            Or
          </div>
          <div className="ml-3 flex-grow border-t border-gray-900 border-opacity-5 dark:border-gray-50"></div>
        </div>
        <div className="flex flex-col justify-around space-y-4">
          <AuthBtn title="github" icon="github" />
          <a
            onClick={(e) => {
              setForgotPassword(false)
              setSigninWithEmailPassword(false)
              setSigninWithLink(true)
            }}
            className="cursor-pointer text-center text-sm font-medium capitalize text-accent hover:underline dark:text-darkaccent"
          >
            Sign in with Magic Link
          </a>
        </div>
      </FormSceleton>
    </>
  )
}