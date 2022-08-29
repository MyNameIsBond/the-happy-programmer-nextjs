import Table from '../components/profile/Table'
import Happybutton from '../components/Happybutton'
import { signOut } from 'next-auth/react'
import { authOptions } from './api/auth/[...nextauth]'
import { unstable_getServerSession } from 'next-auth/next'

export default function Profile({ user }) {
  return (
    <div className="container">
      <div className="mx-auto max-w-sm py-20 text-gray-900 dark:text-gray-50">
        <h1 className="text-3xl font-bold ">Profile</h1>
        <div className="flex flex-col gap-y-8 py-5">
          <Table title="Account Details">
            <div className="flex flex-row items-center justify-between py-3">
              <p className="font-medium">{user?.email || user?.name}</p>
              <Happybutton onClick={(e) => signOut({ callbackUrl: '/' })}>
                Sign Out
              </Happybutton>
            </div>
          </Table>
          <button className="rounded border border-gray-200 py-2.5 px-4 font-medium text-danger hover:border-opacity-80 hover:bg-blue-700 hover:text-opacity-80 dark:border-gray-700">
            Delete Account
          </button>
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  const session = await unstable_getServerSession(
    context.req,
    context.res,
    authOptions
  )

  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: {
      user: {
        name: session.user.name || session.user.email || '',
        image: session.user.image,
      },
    },
  }
}
