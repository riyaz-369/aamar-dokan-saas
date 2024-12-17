export default function Unauthorized() {
  return (
    <div className="flex items-center justify-center h-screen flex-col">
      <h1 className="text-3xl font-bold text-red-600">
        Unauthorized Access - Aamar Dokan
      </h1>
      <p className="mt-2 ">You do not have permission to view this page.</p>
    </div>
  );
}
