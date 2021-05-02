export default function AccessDenied() {
  return (
    <div className="flex flex-col w-full h-full flex-grow items-center justify-center">
      <h2 className="mt-6 text-3xl font-extrabold">Access Denied</h2>
      <p className="my-4">You must be signed in to view this page.</p>
    </div>
  )
}
