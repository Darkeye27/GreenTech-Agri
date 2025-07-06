'use client';

export default function Spinner() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-60 z-50">
      <div className="animate-spin rounded-full h-14 w-14 border-t-4 border-b-4 border-[#388E3C]" />
    </div>
  );
}
