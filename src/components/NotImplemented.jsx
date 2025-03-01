export default function NotImplemented({ feature }) {
  return (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center">
      <div className="text-6xl mb-4">🚧</div>
      <h2 className="text-2xl font-bold text-gray-700 mb-2">
        {feature} Coming Soon
      </h2>
      <p className="text-gray-500 max-w-md">
        This feature is currently under development and will be available in a future update.
      </p>
    </div>
  );
}
