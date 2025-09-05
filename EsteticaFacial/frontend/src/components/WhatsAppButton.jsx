export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/573023313705"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 bg-green-500 text-white px-5 py-3 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300 flex items-center space-x-2 animate-bounce-slow hover:animate-none"
    >
      <span className="text-2xl animate-pulse">💬</span>
      <span className="font-semibold text-lg">WhatsApp</span>
    </a>
  );
}
